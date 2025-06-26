"use client";
import React from "react";
// import "./reverse-vending-machine.css";
import { AiOutlineRight } from "react-icons/ai";
import ProductsContainer from "@/components/products-container/ProductsContainer";
import { rvmProducts } from "@/data/products/index";
import Head from "next/head";
import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";
import ContactForm from "@/components/contact-us-form/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm_Custom from "@/components/contact-us-form/ContactForm_Custom";

const page = () => {
  return (
    <>
      <Head>
        <title>
          Reverse Recycling Vending Machines - Affordable RVMs in India
        </title>
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
          href="https://www.endlos.in/products/reverse-vending-machines/"
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
                RVM - Reverse Vending Machine
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
                    {/* <div className="d-flex align-items-center gap-sm-2 flex-wrap">
                      <div className="d-flex justify-between align-items-center">
                        <div>Home</div>{" "}
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="d-flex justify-between align-items-center">
                        <div>Products</div>{" "}
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="d-flex justify-between align-items-center ">
                        <div>Reverse Vending Machines</div>{" "}
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                    </div> */}
                    <div className="container py-2">
                      {/* <h1 className="text-center fs-2 text-dark text-color">
                        Reverse Vending Machine (RVM) in India
                      </h1> */}
                      <p className="px-sm-4 fs-5 text-justify">
                        Introducing our Range of Reverse Vending Machines, built
                        to take empty glass, aluminum, and plastic bottles and
                        offer choices for on-site storage including compacting
                        and shredding. They are appropriate for nations without
                        deposit return schemes also known as Container Deposit
                        Scheme as well as those with deposit return schemes. Our
                        Reverse Vending Machines provide excellent accuracy with
                        separated materials thanks to advanced functions like
                        barcode identification, size and weight distinction, and
                        material segregation. Explore our range of RVM machines
                        and get in touch with us to select the type that
                        perfectly suits your requirements.
                      </p>
                    </div>
                    <ProductsContainer products={rvmProducts} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactUsEmail showMessage={false} />
      </div>

      {/* <ContactForm_Custom /> */}
      {/* <WhatsAppButton /> */}
      {/* Render the WhatsApp button here */}
    </>
  );
};

export default page;
