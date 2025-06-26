"use client";
import React, { useState } from "react";
import Head from "next/head";
import EvenOddImages from "@/components/even-odd-images-component/EvenOddImages";
import { ProjectOfCompnay } from "@/data/industries";
import WhatsAppButton from "@/components/WhatsAppButton";
const page = () => {
  return (
    <>
      <>
        <Head>
          <title>Our Projects</title>
          <meta
            name="description"
            content="Discover innovative reverse vending machines (RVM) in India. Explore recycling solutions, pricing, and benefits for eco-friendly waste management."
          />
          <meta
            name="keywords"
            content="RVM Machine Manufacturer in India, Reverse Vending Machine in India, reverse vending machine companies, crushing machines, Plastic Bottle Crushing Machine, vending machines"
          />
          <link
            rel="canonical"
            href="https://www.endlos.in/products/reverse-vending-machines/" // Make sure this canonical URL is correct for the 'Projects' page
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Endlos Innovations Pvt. Ltd." />
          <meta name="publisher" content="Endlos Innovations Pvt. Ltd." />
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
                  Our Projects
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row product-page-container">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-sm-10 offset-sm-1">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="container px-2 pt-3 px-md-5 pt-md-5 responsive-container">
                      <div></div>
                      <div className="container py-2">
                        {/* <h1 className="text-center fs-2 text-dark text-color">
                          Our Projects
                        </h1> */}
                        <EvenOddImages EvenOddImagesData={ProjectOfCompnay} />
                      </div>
                      {/* The component you want to render */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default page;
