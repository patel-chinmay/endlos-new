"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm_Custom = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setErrorMsg("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setErrorMsg(""); // Clear any previous error
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      // Optional: log raw response
      const contentType = res.headers.get("content-type");
      const rawText = await res.text();

      console.log("Raw Response Text:", rawText);

      // Try to parse JSON only if content-type is application/json
      let result;
      if (contentType && contentType.includes("application/json")) {
        result = JSON.parse(rawText);
      } else {
        throw new Error("Server did not return JSON");
      }

      if (res.ok && result.success) {
        toast.success("Thanks for contacting us!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrorMsg("");
      } else {
        const errorMsg = result?.error || "Failed to send message.";
        setErrorMsg(errorMsg);
        toast.error(errorMsg);
      }
    } catch (error) {
      console.error("Form Submit Error:", error.message);
      setErrorMsg(error.message || "Something went wrong.");
      toast.error(error.message || "Something went wrong.");
    }
  };

  return (
    <div className="container py-5">
      {/* <h3 className="text-center text-black fw-bold mb-4">Contact Us</h3> */}
      <p
        className="text-center mb-5 text-secondary fw-medium"
        style={{
          fontSize: "1.25rem",
          lineHeight: "1.8",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        Whether you have a question, a suggestion, or just want to say hello,this is the place to do it. Please fill out the form below with your details and message, and we’ll get back to you as soon as possible.
      </p>

      <div className="container-fluid py-5">
        {" "}
        {/* Changed from container to container-fluid */}
        <div className="row">
          {" "}
          {/* Removed justify-content-center */}
          <div className="col-12">
            {" "}
            {/* Full width */}
            <div className="card p-4 p-md-5 shadow border-0 rounded-4 w-100">
              <form className="w-100">
                <div className="row g-4">
                  {/* Left side inputs */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-3"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label fw-semibold">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control rounded-3"
                        id="phone"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Right side: Message */}
                  <div className="col-md-6">
                    <div className="mb-3 h-100 d-flex flex-column">
                      <label
                        htmlFor="message"
                        className="form-label fw-semibold"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control rounded-3 flex-grow-1"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows="9"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-lg rounded-3 text-white"
                    style={{
                      backgroundColor: "#ff7722",
                      borderColor: "#ff7722",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm_Custom;
