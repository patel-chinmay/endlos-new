"use client";

import React from "react";
import Image from "next/image"; // Optimized image rendering

const ProjectDetailsSection = ({
  bgimg,
  title,
  logoUrl,
  logoImgURL,
  imageUrl,
  description,
}) => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="project-hero d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold">{title}</h1>
          <p className="lead">
            Empowering Sustainable Cities with Smart Waste Solutions
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Top Image Above Title */}
            <img
              src={imageUrl}
              alt={`${title} visual`}
              className="img-fluid rounded mb-4 shadow-sm"
              style={{ maxHeight: "350px", objectFit: "cover", width: "100%" }}
            />

            {/* Text Content Box */}
            <div className="bg-white shadow p-4 p-md-5 rounded">
              {/* Title with logo image beside */}
              <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3 text-center text-md-start">
                <h2
                  className="fw-bold text-uppercase m-0"
                  style={{
                    fontSize: "2rem",
                    color: "#000",
                    letterSpacing: "1px",
                    borderBottom: "3px solid #f1c40f",
                    display: "inline-block",
                    paddingBottom: "8px",
                  }}
                >
                  {title}
                </h2>

                {logoUrl && (
                  <a
                    href={logoImgURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={logoUrl}
                      alt="Project logo"
                      width={80}
                      height={80}
                      className="img-fluid"
                      style={{
                        maxHeight: "80px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </a>
                )}
              </div>

              {/* Description */}
              {(description || "").split("\n").map((para, idx) => (
                <p key={idx} className="text-secondary fs-5 lh-lg mb-4">
                  {para.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsSection;
