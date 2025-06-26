"use client";
import React, { useState } from "react";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import LocationWrapper from "@/components/location-wrapper/LocationWrapper";
import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";
const page = () => {
  return (
    <>
      <div
        className="bg-image d-flex align-items-center"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/other/location.jpg')`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-secondary font-weight-bold fs-1">Location</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py">
        <div className="d-flex align-items-center gap-2">
          <p>
            <span>Home</span> <AiOutlineRight />
          </p>
          <p>
            <span>Company</span> <AiOutlineRight />
          </p>
          <p>
            <span>Location</span> <AiOutlineRight />
          </p>
        </div>
      </div>
      <LocationWrapper />
      <ContactUsEmail />
    </>
  );
};

export default page;
