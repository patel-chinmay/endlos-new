"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import parse from "html-react-parser";
import Head from "next/head";
import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/db4tqesyh/image/upload/v1751013682/blogs/eylcqjmvoqf5zhsadqsr.png";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    start: 0,
    recordSize: 100,
    orderType: 1,
    orderParam: "name",
    totalRecords: 0,
  });

  const router = useRouter();

  const fetchBlogs = async () => {
    setIsLoading(true); // start loading
    try {
      const res = await fetch(
        `http://localhost:3002/api/blogs/public/search?start=${pagination.start}&recordSize=${pagination.recordSize}&orderType=${pagination.orderType}&orderParam=${pagination.orderParam}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
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
    finally {
      setIsLoading(false); // stop loading
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Head>
        <title>
          Discover Engaging Insights on Endlos Blog | Latest Updates
        </title>
        <meta
          name="description"
          content="Explore our Reverse Vending Machine blog for expert insights, tips, and trends to enhance recycling efforts and sustainability initiatives."
        />
        <meta
          name="keywords"
          content="Discover how reverse vending machines are transforming waste management for a sustainable future. Find out how they enhance recycling efforts and promote environmental responsibility."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Endlos Innovations Pvt. Ltd." />
        <meta name="publisher" content="Endlos Innovations Pvt. Ltd." />
        <link rel="canonical" href="https://www.endlos.in/company/blog/" />
        <meta
          property="og:title"
          content="Discover Engaging Insights on Endlos Blog | Latest Updates"
        />
        <meta
          property="og:description"
          content="Explore our Reverse Vending Machine blog for expert insights, tips, and trends to enhance recycling efforts and sustainability initiatives."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.endlos.in/company/blog/" />
        <meta property="og:site_name" content="Endlos Innovations" />
        <meta
          property="og:image"
          content="https://www.endlos.in/assets/images/blog-og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Discover Engaging Insights on Endlos Blog | Latest Updates"
        />
        <meta
          name="twitter:description"
          content="Explore our Reverse Vending Machine blog for expert insights, tips, and trends to enhance recycling efforts and sustainability initiatives."
        />
        <meta
          name="twitter:image"
          content="https://www.endlos.in/assets/images/blog-og-image.jpg"
        />
        <meta
          name="twitter:url"
          content="https://www.endlos.in/company/blog/"
        />
      </Head>


      <div
        className="w-100 d-flex align-items-center"
        style={{
          backgroundImage: `url('/assets/images/why-choose-us/bg_final.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-12">
              <h1 className="text-white fw-bold display-4 pt-5 mt-5 text-start">
                Our Blogs
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <h2 className="mb-4 mt-5">📝 Blog Posts</h2>
        {isLoading ? (
          <div className="text-center my-5">
            <div
              className="d-flex justify-content-center align-items-center my-5"
              style={{ height: "100px" }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  border: "5px solid rgba(0, 0, 0, 0.1)",
                  borderTopColor: "#ff7700",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              <style>
                {`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}
              </style>
            </div>

          </div>
        ) : (
          <div className="row">
            {blogs.map((blog) => (
              <div key={blog._id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={blog.image?.trim() || DEFAULT_IMAGE}
                    alt="Blog Thumbnail"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{blog.title}</h5>
                    {/* <p className="text-muted mb-1">
                    <strong>Category:</strong> {blog.categoryId?.name || "N/A"}
                  </p>
                  <p className="text-muted mb-2">
                    <strong>By:</strong> {blog.postedBy} <br />
                    <strong>On:</strong>{" "}
                    {new Date(blog.postedOn).toLocaleDateString()}
                  </p> */}
                    <div
                      className="card-text mb-3"
                      style={{ maxHeight: "100px", overflow: "hidden" }}
                    >
                      {parse(blog.blogContent || "<p>No content available</p>")}
                    </div>
                    <button
                      className="btn btn-outline-primary mt-auto"
                      onClick={() =>
                        router.push(`/company/blog-list/blog-details/${blog._id}`)
                      }
                    >
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
        )}
      </div>

      <ContactUsEmail />
    </>
  );

}
