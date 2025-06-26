import React, { useState } from "react";
// import './contact-us-form.css'

const ContactUsEmail = ({ showMessage = true }) => {
  return (
    <div className="contact-us-section ">
      <div className="mail-middle">
        <a href="/company/contact-us/" className="">
          <img src="/assets/mail.png" alt="mail icon" className="mail-icon" />
        </a>
      </div>
      {showMessage && (
        <div className="d-flex flex-column align-items-center justify-content-center pb-4">
          <div className="text-center">
            <h4 className="text-dark">Contact us</h4>
            <p className="fs-4 text-secondary">
              Get in touch with our team and we'll customize a best solution
              that actually solves your problem.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsEmail;
