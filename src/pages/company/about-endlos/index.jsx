"use client";
import React, { useState } from "react";
// import "./about-endlos.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";

import ImageCardContainer from "@/components/page-components/image-card-container/ImageCardContainer";
import { Divider } from "@mui/material";
import { AboutImageCardContainer, aboutUsListContent } from "@/data/about";
import Link from "next/link";
import Corevalues from "@/components/core-values/Corevalues";
import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";
import ContactForm from "../../../components/contact-us-form/ContactForm";
import Head from "next/head";
import WhatsAppButton from "@/components/WhatsAppButton";
import DesignManufacturingSection from "./DesignManufacturingSection";
import WhoWeAre_Endlos from "./WhoWeAre_Endlos";
import OurTeam from "@/components/our-team-container/OurTeam";
import { OurTeamMembers } from "@/data/our-team";
import ContactForm_Custom from "@/components/contact-us-form/ContactForm_Custom";
const page = () => {
  return (
    <>
      <Head>
        <title>Learn About Endlos: Our Mission and Vision</title>

        <link
          rel="canonical"
          href="https://www.endlos.in/company/about-endlos/"
        />

        <meta
          name="description"
          content="Discover Endlos and our innovative solutions for your projects. Driven by quality and reliability, we deliver excellence every step of the way. Explore now!"
        />

        <meta
          name="keywords"
          content="Endlos Innovations, About Endlos, RVM company mission, Indian recycling company, sustainability goals, company profile, Endlos team"
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="Endlos Innovations Pvt. Ltd." />
        <meta name="publisher" content="Endlos Innovations Pvt. Ltd." />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0b3d91" />

        <meta
          property="og:title"
          content="Learn About Endlos: Our Mission and Vision"
        />
        <meta
          property="og:description"
          content="Discover who we are at Endlos Innovations. Learn about our mission, our story, and how we’re transforming recycling through innovative technology."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.endlos.in/company/about-endlos/"
        />
        <meta property="og:site_name" content="Endlos Innovations" />
        <meta
          property="og:image"
          content="https://www.endlos.in/assets/images/about-endlos.jpg"
        />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Learn About Endlos: Our Mission and Vision"
        />
        <meta
          name="twitter:description"
          content="Discover who we are at Endlos Innovations. Learn about our mission, our story, and how we’re transforming recycling through innovative technology."
        />
        <meta
          name="twitter:image"
          content="https://www.endlos.in/assets/images/about-endlos.jpg"
        />
        <meta
          name="twitter:url"
          content="https://www.endlos.in/company/about-endlos/"
        />
      </Head>
      {/* Hero Section */}
      {/* Hero Section */}
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
                About Endlos
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div style={{ paddingBottom: "60px" }}>
        <WhoWeAre_Endlos />
      </div>

      {/* Image Cards */}
      <div style={{ paddingTop: "60px" }}>
        <ImageCardContainer data={AboutImageCardContainer} />
      </div>

      {/* Design & Manufacturing */}
      <DesignManufacturingSection />
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6 text-black">
            Managing Board of Endlos
          </h2>
          <p className="lead text-muted">
            Meet the innovative minds leading Endlos Innovations toward a
            smarter, greener future.
          </p>
        </div>

        <div className="row g-4">
          <OurTeam team={OurTeamMembers} />
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm_Custom />
    </>
  );
};

export default page;
{
  /* <ul className="mylist">
            {aboutUsListContent.map((data) => {
              return (
                <>
                  <li>
                    <span>{data?.heading}</span>

                    <ol>
                      {data?.subheading?.map((subhead) => {
                        return (
                          <>
                            <li>{subhead}</li>
                          </>
                        );
                      })}
                    </ol>
                  </li>
                </>
              );
            })}
          </ul> */
}
{
  /* <hr className="mt-md-5" /> */
}
{
  /* <h3 className="text-center">Core Values</h3>
      <hr className="mb-md-5" />
      <Corevalues /> */
}
{
  /* <hr style={{ width: "400px" }} /> */
}
{
  /* <ContactUsEmail showMessage={false} /> */
}
