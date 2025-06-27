"use client";

import { useEffect, useState } from "react";
import parse from "html-react-parser";

const DEFAULT_IMAGE = ""
export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    recordSize: 100,
    orderType: 1,
    orderParam: "name",
    totalRecords: 0,
  });

  const token =
    typeof window !== "undefined" ? localStorage.getItem("admin-token") : "";

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
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-4">📝 Blog Posts</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog._id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={DEFAULT_IMAGE}
                alt="Blog Thumbnail"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{blog.title}</h5>
                <p className="text-muted mb-1">
                  <strong>Category:</strong> {blog.categoryId?.name || "N/A"}
                </p>
                <p className="text-muted mb-2">
                  <strong>By:</strong> {blog.postedBy} <br />
                  <strong>On:</strong>{" "}
                  {new Date(blog.postedOn).toLocaleDateString()}
                </p>
                <div
                  className="card-text mb-3"
                  style={{ maxHeight: "100px", overflow: "hidden" }}
                >
                  {parse(blog.blogContent || "<p>No content available</p>")}
                </div>
                <button className="btn btn-outline-primary mt-auto">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
        {blogs.length === 0 && (
          <div className="col-12 text-center">
            <p>No blogs found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
