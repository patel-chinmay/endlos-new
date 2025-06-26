"use client";

import React from "react";

const WhoWeAre_Endlos = () => {
  return (
    <section
      className="w-80 py-5"
      style={{
        background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
      }}
    >
      <div className="container-fluid px-4 px-md-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <div className="text-center mb-4">
              {/* <h2 className="fw-bold display-5 text-dark">Who We Are</h2> */}
              <div
                style={{
                  height: "4px",
                  width: "80px",
                  // backgroundColor: "#0d6efd",
                  margin: "10px auto",
                  borderRadius: "2px",
                }}
              />
            </div>
            <p
              className="fs-5  mb-4"
              style={{ lineHeight: "1.8", textAlign: "justify" }}
            >
              Endlos Innovations is a technology-driven company focused on
              delivering sustainable, future-ready solutions for today’s
              environmental challenges. With a core specialization in Reverse
              Vending Machines (RVMs) and deposit return systems, we’re
              redefining how plastic waste is collected, tracked, and processed.
            </p>
            <p
              className="fs-5"
              style={{ lineHeight: "1.8", textAlign: "justify" }}
            >
              Our solutions go beyond collection — we enable circular economy
              models that encourage user participation and drive measurable
              environmental impact across public and private sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre_Endlos;
