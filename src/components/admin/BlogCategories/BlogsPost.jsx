"use client";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { showErrorToast, showSuccessToast } from "@/components/ToastMessage";

// Load ReactQuill dynamically to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["blockquote", "code-block"],
    ["link", "image", "video"],
    ["clean"],
  ],
};

export default function BlogPost() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("admin-token") : "";
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    _id: null,
    title: "",
    categoryId: "",
    postedBy: "",
    postedOn: new Date().toISOString().split("T")[0],
    blogContent: "",
    keywords: "",
    description: "",
    image: null, // File object
    imagePreview: "", // For UI
  });

  const [pagination, setPagination] = useState({
    start: 0,
    recordSize: 10,
    orderType: -1,
    orderParam: "postedOn",
    totalRecords: 0,
  });

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:3002/api/categories/list", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();
      setCategories(result.data);
    } catch (err) {
      showErrorToast("Error fetching categories:", err);
      console.error("Error fetching categories:", err);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `http://localhost:3002/api/blogs/search?start=${pagination.start}&recordSize=${pagination.recordSize}&orderType=${pagination.orderType}&orderParam=${pagination.orderParam}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await res.json();
      setBlogs(result.data);
      setPagination((prev) => ({
        ...prev,
        totalRecords: result.pagination.totalRecords,
      }));
    } catch (err) {
      showErrorToast("Error fetching blogs:", err);
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBlogs();
  }, [pagination.start]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // start loading
    const isEdit = !!formData._id;
    const url = isEdit
      ? `http://localhost:3002/api/blogs/${formData._id}`
      : "http://localhost:3002/api/blogs";
    const method = isEdit ? "PUT" : "POST";

    const body = new FormData();
    body.append("title", formData.title);
    body.append("categoryId", formData.categoryId);
    body.append("postedBy", formData.postedBy);
    body.append("postedOn", formData.postedOn);
    body.append("blogContent", formData.blogContent);
    body.append("keywords", formData.keywords);
    body.append("description", formData.description);
    if (formData.image) body.append("image", formData.image);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      });

      const result = await response.json();
      if (response.ok) {
        setFormData({
          _id: null,
          title: "",
          categoryId: "",
          postedBy: "",
          postedOn: new Date().toISOString().split("T")[0],
          blogContent: "",
          keywords: "",
          description: "",
          image: null,
          imagePreview: "",
          message: "",
        });
        showSuccessToast(result.message);
        setShowForm(false);
        fetchBlogs();
      } else {
        showErrorToast("Failed to save blog");
        console.error("Failed to save blog");
      }
    } catch (error) {
      showErrorToast("Failed to save blog:", error);
      console.error("Error submitting form:", error);
    }
    finally {
      setIsSubmitting(false); // stop loading
    }
  };

  const handleEdit = (blog) => {
    setFormData({
      _id: blog._id,
      title: blog.title,
      categoryId: blog.categoryId?._id || "",
      postedBy: blog.postedBy,
      postedOn: blog.postedOn.split("T")[0],
      blogContent: blog.blogContent,
      keywords: blog.keywords,
      description: blog.description,
      image: null,
      imagePreview: blog.image || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure to delete this blog post?")) return;

    try {
      const response = await fetch(`http://localhost:3002/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        fetchBlogs();
      }
      showSuccessToast("Deleted Successfully");
    } catch (error) {
      showErrorToast("Error deleting blog:", error);
      console.error("Error deleting blog:", error);
    }
  };

  const handlePrev = () => {
    if (pagination.start > 0) {
      setPagination((prev) => ({
        ...prev,
        start: prev.start - prev.recordSize,
      }));
    }
  };

  const handleNext = () => {
    if (pagination.start + pagination.recordSize < pagination.totalRecords) {
      setPagination((prev) => ({
        ...prev,
        start: prev.start + prev.recordSize,
      }));
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return `${String(date.getDate()).padStart(2, "0")}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${date.getFullYear()}`;
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Blog Posts</h2>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add New"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="border p-4 shadow-sm bg-white rounded mb-4"
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <label className="form-label">Blog Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Posted By</label>
            <input
              type="text"
              name="postedBy"
              value={formData.postedBy}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Posted On</label>
            <input
              type="date"
              name="postedOn"
              value={formData.postedOn}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Blog Content</label>
            <ReactQuill
              theme="snow"
              modules={modules}
              value={formData.blogContent}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, blogContent: value }))
              }
              className="bg-white"
              style={{ height: "250px" }}
            />
          </div>

          <div className="mb-3 mt-5">
            <label className="form-label">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="form-control"
            />
            {formData.imagePreview && (
              <img
                src={formData.imagePreview}
                alt="Preview"
                className="img-thumbnail mt-2"
                style={{ maxHeight: "200px" }}
              />
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Keywords</label>
            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              rows="2"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success" disabled={isSubmitting}>
  {isSubmitting ? (
    <span
      style={{
        width: "1rem",
        height: "1rem",
        border: "2px solid #fff",
        borderTop: "2px solid transparent",
        borderRadius: "50%",
        display: "inline-block",
        animation: "spin 0.6s linear infinite",
      }}
    ></span>
  ) : (
    formData._id ? "Update Blog" : "Create Blog"
  )}
  <style>
    {`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}
  </style>
</button>
        </form>
      )}

      {/* Blog Listing Table (unchanged) */}
      {/* You can keep your existing table code from your version here */}

      <div className="table-responsive bg-white p-3 shadow-sm rounded">
        <table className="table table-hover border shadow-sm">
          <thead className="table-light">
            <tr style={{ fontWeight: "bold", fontSize: "15px", color: "#333" }}>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Posted By</th>
              <th>Posted On</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted py-4">
                  No blog posts found.
                </td>
              </tr>
            ) : (
              blogs.map((blog, index) => (
                <tr
                  key={blog._id}
                  style={{
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  <td>{pagination.start + index + 1}</td>
                  <td>{blog.title}</td>
                  <td>{blog.categoryId?.name || "-"}</td>
                  <td>{blog.postedBy}</td>
                  <td>{formatDate(blog.postedOn)}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-outline-warning me-2"
                      style={{ fontSize: "13px", padding: "4px 8px" }}
                      onClick={() => handleEdit(blog)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      style={{ fontSize: "13px", padding: "4px 8px" }}
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            className="btn btn-outline-secondary"
            onClick={handlePrev}
            disabled={pagination.start === 0}
          >
            Previous
          </button>
          <span className="text-muted">
            Showing {pagination.start + 1} to{" "}
            {Math.min(
              pagination.start + pagination.recordSize,
              pagination.totalRecords
            )}{" "}
            of {pagination.totalRecords}
          </span>
          <button
            className="btn btn-outline-secondary"
            onClick={handleNext}
            disabled={
              pagination.start + pagination.recordSize >=
              pagination.totalRecords
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
