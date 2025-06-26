"use client";
import React, { useState } from "react";
// import "./company.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { Divider } from "@mui/material";
import ImageCardContainer from "@/components/page-components/image-card-container/ImageCardContainer";
import Link from "next/link";
import ContactUsEmail from "../../components/contact-us-email/ContactUsEmail";
const page = () => {
  return (
    <>
    
      <div className="company-image-section">
        <Image src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/cvm/cvm-background.jpg" alt="cvm-background" fill />
        <p className="company-img-text">Company</p>
      </div>
      <div className="container px-5 py-4">
        <div className="d-flex align-items-center gap-2">
          <p>
            <span>Home</span> <AiOutlineRight />
          </p>
          <p>
            <span>Company</span> <AiOutlineRight />
          </p>
          <p>
            <span>About Endlos</span> <AiOutlineRight />
          </p>
        </div>
        <div className="container py-2">
          <p className="para-text">
            endlos is a global automation corporation with sales of around 3.3
            billion euro and roughly 14,000 employees. The company is
            headquartered in Augsburg, Germany. As one of the world’s leading
            suppliers of intelligent automation solutions, endlos offers
            customers everything they need from a single source: from robots and
            cells to fully automated systems and their networking in markets
            such as automotive, electronics, metal & plastic, consumer goods,
            e-commerce/retail and healthcare.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <hr style={{ width: "400px" }} />
      </div>
      <ImageCardContainer />
      <ContactUsEmail/>
    </>
  );
};

export default page;
