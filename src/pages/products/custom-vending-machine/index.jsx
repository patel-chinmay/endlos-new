"use client";
import React from "react";
// import "./product-vending-machine.css";
import { AiOutlineRight } from "react-icons/ai";
import ProductsContainer from "@/components/products-container/ProductsContainer";
import { productVendingMachine } from "@/data/productVendingMachine";
import Head from "next/head";
import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";
import ContactForm from "../../../components/contact-us-form/ContactForm";

const page = () => {
  return (
    <>
      <Head>
        <title>Top Custom Vending Machine Manufacturers Near You</title>
        <meta
          name="description"
          content="Find reliable custom vending machine manufacturers specializing in innovative and tailored vending solutions. Perfect for businesses of all industries."
        />
        <meta
          name="keywords"
          content="Check out Endlos Innovative for the best vending machines with innovative solutions that provide a seamless and enjoyable experience. "
        />
      </Head>

      <div
        className="bg-image d-flex align-items-center"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/rvm/RVM_family_photo/RVM_family_1646x926.jpg')`,
        }}
      ></div>
      <div className="row product-page-container">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <div className="row">
                <div className="col-sm-12">
                  <div className="container px-5 py-5 responsive-container">
                    <div></div>
                    <div className="d-flex align-items-center gap-2">
                      <p>
                        <span>Home</span> <AiOutlineRight />
                      </p>
                      <p>
                        <span>Products</span> <AiOutlineRight />
                      </p>
                      <p>
                        <span>Custom Vending Machine</span> <AiOutlineRight />
                      </p>
                    </div>
                    <div className="container py-2">
                      <h1 className="text-center fs-2 text-color">
                        Best Custom Vending Machines
                      </h1>
                      <p className="px-4 fs-5">
                        Our best vending machines provide convenient and
                        efficient solutions for a variety of vending needs. With
                        advanced features and a user-friendly interface, our
                        Reverse Vending Machines are designed to offer a
                        seamless and enjoyable experience for both customers and
                        businesses.
                      </p>
                    </div>
                    <ProductsContainer products={productVendingMachine} />
                    <p className="lead justify text-secondary">
                      Contact us today to discuss your mask vending needs and
                      explore how our RVM machines can promote safety and
                      contribute to a healthier environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactUsEmail showMessage={false} />
      </div>
      <ContactForm />
    </>
  );
};

export default page;
