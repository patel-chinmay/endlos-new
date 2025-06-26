"use client";
import React from "react";
import { Divider } from "@mui/material";
import ContactForm from "@/components/contact-us-form/ContactForm";

const page = () => {
  let [over, setOver] = React.useState(false);
  return (
    <>
      <div
        className="bg-image d-flex align-items-center"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/other/career.png')`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-white font-weight-bold fs-1">Careers</h1>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-secondary my-5">
        Join Us And Change Your Life
      </h2>
      <div className="contact-us-section">
        <div className="d-flex flex-column align-items-center justify-content-center pb-4">
          <ContactForm />
        </div>
        <Divider sx={{ bgcolor: "#FFFFFF", height: "3px" }} />
      </div>
    </>
  );
};

export default page;
