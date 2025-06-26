"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SeoSettings() {
  const [seoData, setSeoData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    pageLink: "",
    keywords: "",
    description: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeoData([...seoData, formData]);
    setFormData({ title: "", pageLink: "", keywords: "", description: "" });
    setShowForm(false);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2 className="fw-bold">SEO Settings</h2>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add New SEO Entry"}
        </button>
      </div>

      {showForm && (
        <form
          className="mb-4 border p-3 rounded bg-white shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Page Link</label>
            <input
              type="text"
              name="pageLink"
              className="form-control"
              value={formData.pageLink}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Keywords</label>
            <input
              type="text"
              name="keywords"
              className="form-control"
              value={formData.keywords}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </form>
      )}

      <div className="table-responsive bg-white shadow-sm rounded p-3">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Page Link</th>
              <th>Keywords</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {seoData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No SEO data available.
                </td>
              </tr>
            ) : (
              seoData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.pageLink}</td>
                  <td>{item.keywords}</td>
                  <td>{item.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
