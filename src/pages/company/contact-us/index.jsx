"use client";
import React from "react";
// import "./contact-us.css";
import { AiOutlineRight } from "react-icons/ai";

import { useForm } from "react-hook-form";
import LocationWrapper from "../../../components/location-wrapper/LocationWrapper";
import Head from "next/head";
import ContactForm_Custom from "@/components/contact-us-form/ContactForm_Custom";

const Page = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Contact Us for Expert Support | Endlos Innovations</title>

        <meta
          name="description"
          content="ENDLOS INNOVATIONS PVT. LTD. offers cutting-edge solutions in Gujarat, India. Reach out to us for inquiries, partnerships, or collaboration opportunities."
        />

        <link
          rel="canonical"
          href="https://www.endlos.in/company/contact-us/"
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="Endlos Innovations Pvt. Ltd." />
        <meta name="publisher" content="Endlos Innovations Pvt. Ltd." />
        <meta
          property="og:title"
          content="Contact Us for Expert Support | Endlos Innovations"
        />
        <meta
          property="og:description"
          content="At ENDLOS INNOVATIONS PVT. LTD., we provide innovative solutions in Gujarat, India. Contact us for more inquiries and collaborations."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.endlos.in/company/contact-us/"
        />
        <meta property="og:site_name" content="Endlos Innovations" />
        <meta
          property="og:image"
          content="https://www.endlos.in/assets/images/contact-us-og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Us for Expert Support | Endlos Innovations"
        />
        <meta
          name="twitter:description"
          content="At ENDLOS INNOVATIONS PVT. LTD., we provide innovative solutions in Gujarat, India. Contact us for more inquiries and collaborations."
        />
        <meta
          name="twitter:image"
          content="https://www.endlos.in/assets/images/contact-us-og-image.jpg"
        />
        <meta
          name="twitter:url"
          content="https://www.endlos.in/company/contact-us/"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Endlos Innovations Pvt. Ltd.",
              image: "",
              "@id": "",
              url: "https://www.endlos.in/",
              telephone: "+91 9327777854",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Plot No 286, Near Valinath Dhamatwan Talav, Road, near Somnath Estate, near Avi Steel Processors, Bakrol, Dhamatwan",
                addressLocality: "Ahmedabad",
                postalCode: "382435",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </Head>

      <div
        className="w-100 d-flex align-items-center"
        style={{
          backgroundImage: `url('/assets/images/why-choose-us/bg_final.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          margin: 0,
          padding: 0,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-12">
              <h1 className="text-white fw-bold display-4 pt-5 mt-5 text-start">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center gap-2 flex-wrap px-5 py-4  py-md-5">
        {/* <div className="d-flex justify-between align-items-center ">
          <div>Home</div>{" "}
          <div>
            <AiOutlineRight />
          </div>
        </div>
        <div className="d-flex justify-between align-items-center">
          <div>Company</div>{" "}
          <div>
            <AiOutlineRight />
          </div>
        </div>
        <div className="d-flex justify-between align-items-center">
          <div>Contact Endlos </div>{" "}
          <div>
            <AiOutlineRight />
          </div>
        </div> */}
      </div>
      <LocationWrapper />
      <ContactForm_Custom />
    </>
  );
};

export default Page;
