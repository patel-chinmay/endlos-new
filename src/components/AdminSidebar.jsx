import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminSidebar({ onMenuSelect }) {
  const [showBlogsSubMenu, setShowBlogsSubMenu] = useState(false);

  return (
    <div
      className="bg-dark text-white p-3 mt-5"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h4 className="text-center mb-4">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => onMenuSelect("dashboard")}
          >
            Dashboard
          </button>
        </li>
        <li className="nav-item mb-2">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => onMenuSelect("seo")}
          >
            SEO
          </button>
        </li>
        <li className="nav-item mb-2">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => setShowBlogsSubMenu(!showBlogsSubMenu)}
          >
            Blogs {showBlogsSubMenu ? "▲" : "▼"}
          </button>
          {showBlogsSubMenu && (
            <ul className="nav flex-column ms-3 mt-2">
              <li className="nav-item mb-2">
                <button
                  className="btn btn-secondary w-100 text-start"
                  onClick={() => onMenuSelect("blog-categories")}
                >
                  Categories
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-secondary w-100 text-start"
                  onClick={() => onMenuSelect("blog-posts")}
                >
                  Blogs
                </button>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item mb-2">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => onMenuSelect("inquiries")}
          >
            Inquiries
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => onMenuSelect("subscription")}
          >
            Subscription
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-dark w-100 text-start"
            onClick={() => onMenuSelect("logout")}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
