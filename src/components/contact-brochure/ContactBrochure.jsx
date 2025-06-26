import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const ContactBrochure = () => {
  return (
    <div className="col-lg-3 mt-4 mt-lg-0">
      <div className="p-5">
        <p className="fs-4"> Contact Us</p>
        <div className="d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center">
          <hr style={{ width: "500px" }} />
        </div>
        <p>
          {" "}
          Phone{" "}
          <a
            href="https://api.whatsapp.com/send?phone=919327777854"
            target="_blank"
          >
            +91 9327777854
          </a>
        </p>
        <span className="text-success pointer">
          Email <BsArrowRight />{" "}
          <a href="mailto:info@endlos.in">info@endlos.in</a>
        </span>
      </div>
    </div>
  );
};

export default ContactBrochure;
