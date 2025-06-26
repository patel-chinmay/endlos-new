"use client";
import React from "react";
// import "./products.css";
import ImageCardContainer from "@/components/page-components/image-card-container/ImageCardContainer";

import { ProductsImageCardContainer } from "@/data/products/index";
import ContactForm from "@/components/contact-us-form/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton"
import ContactForm_Custom from "@/components/contact-us-form/ContactForm_Custom"

const Industries = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/other/products.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "600px",
    position: "relative",
  };

  const contentStyle = {
    padding: "20px",
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
  };

  return (
    <div className="endlos-container">
      <div style={backgroundImageStyle}>
        <div style={contentStyle}>
          <h1 className="text-white">Products</h1>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center pt-5 pb-4">
        <p className="container text-justify fs-5 text-secondary">
          Welcome to Endlos Innovation, where we present our cutting-edge
          solutions for waste management and recycling. Explore our range of
          Reverse Vending Machines, Organic Waste Composters, and Waste
          Compactors to revolutionize your waste management practices.
        </p>
      </div>
      <ImageCardContainer data={ProductsImageCardContainer} />
      <div className="container py-5">
        <p className="lead justify text-secondary">
          Contact us today to discuss your waste management requirements and
          explore how our Reverse Vending Machines, Organic Waste Composters,
          and Waste Compactors can transform your waste management practices.
        </p>
      </div>
      <ContactForm_Custom />
      {/* <WhatsAppButton /> */}
      {/* Render the WhatsApp button here */}
    </div>
  );
};
export default Industries;
