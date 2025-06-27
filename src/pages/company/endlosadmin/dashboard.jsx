"use client";
import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import SeoSettings from "@/components/admin/SEOComponent/SeoSettings";
import BlogCategories from "@/components/admin/BlogCategories/BlogCategories";
import BlogPost from "@/components/admin/BlogCategories/BlogsPost"

const Dashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPageContent = () => {
    switch (activePage) {
      case "dashboard":
        return <h2 className="fw-bold">Welcome to Dashboard</h2>;
      case "seo":
        return (
          <h2 className="fw-bold">
            <SeoSettings />
          </h2>
        );
      case "blog-categories":
        return (
          <h2 className="fw-bold">
            <BlogCategories />
          </h2>
        );

      case "blog-posts":
        return <h2 className="fw-bold"><BlogPost/></h2>;
      case "inquiries":
        return <h2 className="fw-bold">Inquiries</h2>;
      case "subscription":
        return <h2 className="fw-bold">Subscriptions</h2>;
      case "logout":
        handleLogout();
        return <h2 className="fw-bold">Logging out...</h2>;
      default:
        return <h2>Select an option from the sidebar</h2>;
    }
  };

  return (
    <ProtectedRoute>
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <AdminSidebar onMenuSelect={setActivePage} />
        <div className="flex-grow-1 d-flex flex-column mt-5">
          {/* <AdminNavbar /> */}
          <main className="p-4 flex-grow-1 bg-light">
            {renderPageContent()}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
const handleLogout = () => {
  localStorage.removeItem("admin-token");
  localStorage.removeItem("admin-user");
  localStorage.removeItem("admin-auth");
  window.location.href = "/company/endlosadmin/"; // redirect to login
};

// Nested component for Blogs Page
const BlogsPage = () => {
  const [blogTab, setBlogTab] = useState("categories");

  return (
    <div>
      <h2 className="fw-bold mb-3">Blogs</h2>
      <div className="btn-group mb-3">
        <button
          className={`btn btn-outline-primary ${
            blogTab === "categories" ? "active" : ""
          }`}
          onClick={() => setBlogTab("categories")}
        >
          Categories
        </button>
        <button
          className={`btn btn-outline-primary ${
            blogTab === "posts" ? "active" : ""
          }`}
          onClick={() => setBlogTab("posts")}
        >
          Blog Posts
        </button>
      </div>
      {blogTab === "categories" ? (
        <div>Blog Categories Content</div>
      ) : (
        <div>Blog Posts Content</div>
      )}
    </div>
  );
};
