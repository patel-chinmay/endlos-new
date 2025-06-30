"use client";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";

<ToastContainer autoClose={5000} position="top-right" />;

export default function BlogCategories() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    _id: null, // to check if it's update
    name: "",
    title: "",
    keywords: "",
    description: "",
  });
  const [pagination, setPagination] = useState({
    start: 0,
    recordSize: 10,
    orderType: -1,
    orderParam: "name",
    totalRecords: 10,
  });

  const token = localStorage.getItem("admin-token");
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/categories/search?start=${pagination.start}&recordSize=${pagination.recordSize}&orderType=${pagination.orderType}&orderParam=${pagination.orderParam}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setData(result.data);
      setPagination((prev) => ({
        ...prev,
        totalRecords: result.pagination.totalRecords,
      }));
    } catch (error) {
      toast.error("Error fetching categories");
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [pagination.start]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = formData._id
      ? `http://localhost:3002/api/categories/${formData._id}`
      : "http://localhost:3002/api/categories";

    const method = formData._id ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Category saved successfully!");
        setFormData({
          _id: null,
          name: "",
          title: "",
          keywords: "",
          description: "",
        });
        setShowForm(false);
        fetchCategories();
      } else {
        toast.error(result.message || "Failed to save category");
      }
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (entry) => {
    setFormData(entry);
    setShowForm(true);
  };
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;
    try {
      const response = await fetch(
        `http://localhost:3002/api/categories/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Category deleted successfully!");
        fetchCategories();
      } else {
        toast.error(result.message || "Failed to delete category");
      }
    } catch (error) {
      toast.error("Error deleting category");
      console.error("Error deleting category:", error);
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

  return (
    <div className="container my-1">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Categories</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            setFormData({
              _id: null,
              name: "",
              title: "",
              keywords: "",
              description: "",
            });
            setShowForm(!showForm);
          }}
        >
          {showForm ? "Close Form" : "Add New"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="border rounded bg-white p-4 shadow-sm mb-4"
        >
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Keywords</label>
            <input
              type="text"
              className="form-control"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            {formData._id ? "Update" : "Save"}
          </button>
        </form>
      )}

      <div className="table-responsive bg-white p-3 shadow-sm rounded">
        <table className="table table-hover border shadow-sm">
          <thead className="table-light">
            <tr style={{ fontWeight: "bold", fontSize: "15px", color: "#333" }}>
              <th>#</th>
              <th>Name</th>
              <th>Title</th>
              <th>Keywords</th>
              <th>Description</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted py-4">
                  No entries found.
                </td>
              </tr>
            ) : (
              data.map((entry, index) => (
                <tr
                  key={entry._id}
                  style={{
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  <td>{pagination.start + index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.title}</td>
                  <td>{entry.keywords}</td>
                  <td>{entry.description}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-outline-warning me-2"
                      style={{ fontSize: "13px", padding: "4px 8px" }}
                      onClick={() => handleEdit(entry)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      style={{ fontSize: "13px", padding: "4px 8px" }}
                      onClick={() => handleDelete(entry._id)}
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
