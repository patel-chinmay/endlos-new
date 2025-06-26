"use client"; // Needed for animation on client side in Next.js 13+

import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = ({ end, label, suffix = "" }) => {
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const incrementTime = 20;
    const totalSteps = duration / incrementTime;
    const increment = end / totalSteps;

    // const updateCounter = () => {
    //   start += increment;
    //   if (start < end) {
    //     ref.current.innerText = Math.floor(start).toLocaleString() + suffix;
    //     requestAnimationFrame(updateCounter);
    //   } else {
    //     ref.current.innerText = end.toLocaleString() + suffix;
    //   }
    // };

    const updateCounter = () => {
      start += increment;
      if (ref.current) {
        if (start < end) {
          ref.current.innerText = Math.floor(start).toLocaleString() + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          ref.current.innerText = end.toLocaleString() + suffix;
        }
      }
    };

    requestAnimationFrame(updateCounter);
  }, [end, suffix]);

  return (
    <div className="text-white text-center">
      <h2 ref={ref} className="display-4 fw-bold">
        {" "}
        {/* Increased font size and made bold */}0
      </h2>
      <p className="lead fw-bold fs-4">{label}</p>{" "}
      {/* Added fw-bold and fs-4 for bigger and bolder label */}
    </div>
  );
};

export default function StatisticsSection() {
  return (
    <div
      className="statistics-section d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url("/assets/images/why-choose-us/Statistics img.png")',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        minHeight: "40vh", // Increased minHeight for better visual
        borderRadius: "50px",
      }}
    >
      <div className="container text-center text-white py-5">
        <div className="row g-5">
          <div className="col-md-3 col-6">
            <Counter end={1000} label="Machines Deployed" suffix="+" />
          </div>
          <div className="col-md-3 col-6">
            <Counter end={30} label="Plastic Containers Recycled" suffix="M+" />
          </div>
          <div className="col-md-3 col-6">
            <Counter end={25} label="Glass Containers Recycled" suffix="M+" />
          </div>
          <div className="col-md-3 col-6">
            <Counter
              end={20}
              label="Aluminium Containers Recycled"
              suffix="M+"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
