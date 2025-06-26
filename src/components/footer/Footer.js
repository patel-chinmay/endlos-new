"use client";
import React from "react";
// import "./footer.css";
import { Divider } from "@mui/material";
import Link from "next/link";
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="footer-wrapper pb-1 text-white"
      style={{ background: "black" }}
    >
      <Divider />
      <div className="footer-middle container pt-4">
        <div className="row  ">
          <div className="col-md-6 col-lg-6 footer-div  ">
            <ul className="list-unstyled">
              <li className="text-white py-1 ">
                <p className="text-white fw-bold fs-4">
                  Endlos Innovations Pvt. Ltd.{" "}
                </p>
              </li>
              <li className="text-justify py-1 text-white">
                The ENDLOS conglomerate was founded in 2016, located in
                Ahmedabad, India. ENDLOS encompasses a collection of enterprises
                operating across various industry sectors. Our main flagship
                companies are Endlos Innovations Private Limited, Endlos
                Technologies Private Limited, and Endlos Hospitality . At
                ENDLOS, we design, develop and manufacture Innovative Products
                and services in various segments. We believe in “The ENDLESS
                POSSIBILITIES '' of solution.
              </li>
            </ul>
          </div>

          <div className="col-5 col-md-6 col-lg-3 d-flex justify-content-center justify-content-lg-end">
            <ul className="list-unstyled text-center">
              <li className="text-white py-1  text-center ">
                <p className="text-white fw-bold fs-4 custom-line10 position-relative ">
                  Company
                </p>
              </li>

              <li className="text-white py-1">
                <Link href="/products/reverse-vendin  g-machines" target="">
                  RVM-Reverse Vending Machines
                </Link>
              </li>
              {/* <li className="text-white py-1">
                <Link href="/products/reverse-vending-machines/" target="">
                  DRS
                </Link>
              </li> */}
              <li className="text-white py-1">
                <Link href="/company/our-projects/" target="">
                  Projects
                </Link>
              </li>
              <li className="text-white py-1">
                <Link href="/company/blog" target="">
                  Blog
                </Link>
              </li>
              <li className="text-white py-1">
                <Link href="/company/contact-us" target="">
                  Contact
                </Link>
              </li>
              <li className="text-white py-1">
                <Link href="/company/our-team/" target="">
                  OurTeam
                </Link>
              </li>
              <li className="text-white py-1">
                <Link href="/company/about-endlos" target="">
                  About Endlos
                </Link>
              </li>
              <li className="text-white py-1">
                <Link href="/company/privacy-policy/" target="">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 footer-div">
            <ul className="list-unstyled">
              <li className="text-white py-1  text-center ">
                <p className="text-white fw-bold fs-4 custom-line10 position-relative ">
                  Contact us
                </p>
              </li>
              <li className="text-white py-1 text-center">
                <span className="text-center">
                  Address: Plot No 286, Near Valinath Dhamatwan Talav, Road,
                  near Somnath Estate, near Avi Steel Processors, Bakrol,
                  Dhamatwan, Gujarat 382435
                </span>
              </li>
              <li className="text-white py-1  text-center">
                <Link href="tel:+919327777854">
                  <span className="text-center">Phone: +91 9327777854</span>
                </Link>
              </li>
              <li className="text-white py-1  text-center">
                <Link href="mailto:info@endlos.in">
                  <span className="text-center">Email: info@endlos.in</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <hr classes="" style={{ color: "#FF8438" }} />
          <div className=" my-1 d-flex flex-column gap-2 flex-md-row justify-content-center justify-content-sm-between justify-content-xl-end align-items-center ">
            <div className="w-100 text-center text-md-start">
              <span>
                Copyright © 2025 Endlos. Designed By{" "}
                <Link target="_blank" href={"https://www.endlos.tech/"}>
                  <span className="text-color">ENDLOS</span>
                </Link>
              </span>
            </div>
            <div className="d-flex flex-row justify-content-center justify-content-sm-evenly justify-content-xl-end flex-wrap align-items-center w-100 gap-lg-3 gap-4">
              <Link
                target="_blank"
                href={"https://www.linkedin.com/company/endlosinnovations/"}
                style={{
                  //   background: "#0077B5",
                  background: "#ff7722",
                  padding: "6px",
                  paddingInline: "10px",
                  borderRadius: "8px",
                }}
              >
                <ImLinkedin2 size={17} className="text-white my-1" />
              </Link>
              {/* <Link
                target="_blank"
                href={"https://twitter.com/Endlostech"}
                style={{
                  //   background: "#1DA1F2",
                  background: "#ff7722",
                  padding: "6px",
                  paddingInline: "10px",
                  borderRadius: "8px",
                }}
              >
                <BsTwitter size={17} className="text-white my-1" />
              </Link> */}

              <Link
                target="_blank"
                href={"https://www.youtube.com/@endlosreversevendingmachin9123"}
                style={{
                  background: "#ff7722",
                  padding: "6px",
                  paddingInline: "10px",
                  borderRadius: "8px",
                }}
              >
                <AiFillYoutube size={17} className="text-white my-1" />
              </Link>
              <Link
                target="_blank"
                href={"https://api.whatsapp.com/send?phone=919327777854"}
                style={{
                  background: "#ff7722",
                  padding: "6px",
                  paddingInline: "10px",
                  borderRadius: "8px",
                }}
              >
                <IoLogoWhatsapp size={17} className="text-white my-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
