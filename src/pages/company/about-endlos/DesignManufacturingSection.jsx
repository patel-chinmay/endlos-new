"use client";

import React from "react";
import Image from "next/image";

const DesignManufacturingSection = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="shadow rounded overflow-hidden">
            <Image
              src="/assets/images/rvm/15.png"
              alt="Design and Manufacturing"
              className="img-fluid rounded"
              width={800}
              height={600}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="col-lg-6">
          <h2
            className="fw-bold mb-4"
            style={{
              fontSize: "2rem",
              color: "#000",
              borderBottom: "3px solid #f1c40f",
              display: "inline-block",
              paddingBottom: "8px",
            }}
          >
            Design and Manufacturing Expertise
          </h2>
          <p className="text-secondary fs-5 mb-4">
            Every Reverse Vending Machine is designed and manufactured in-house
            at our facility in Ahmedabad, India. With capabilities spanning
            industrial design, precision fabrication, electronics, and IoT
            integration, we ensure complete control over quality and
            customization.
          </p>
          <p className="text-secondary fs-5 mb-4">
            We build both standard and tailor-made RVMs for DRS and Non-DRS
            markets — from compact units for retail spaces to high-speed models
            for public infrastructure. All machines are engineered for
            durability, accuracy, and ease of use.
          </p>
          <p className="text-secondary fs-5">
            Alongside hardware, we also develop integrated software solutions
            that support DRS compliance, data tracking, and reward management —
            enabling a seamless and scalable recycling ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignManufacturingSection;
