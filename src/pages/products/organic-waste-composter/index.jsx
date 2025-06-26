"use client";
import React from "react";
// import "./organic-waste-composter.css";
import { AiOutlineRight } from "react-icons/ai";

import ProductsContainer from "@/components/products-container/ProductsContainer";
import { owcProducts } from "../../../data/products";
import Head from "next/head";
import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";
import ContactForm from "../../../components/contact-us-form/ContactForm";

const page = () => {
  return (
    <>
      <Head>
        <title>
          India's Best Organic Waste Composters - Endlos innovations{" "}
        </title>
        <meta
          name="description"
          content="Discover top-quality organic waste composters from industry-leading brand Endlos. Shop now and take a sustainable step towards the future."
        />
        <meta
          name="keywords"
          content="Organic waste composting machine in India, organic waste composting machine, organic waste composter, automatic organic waste converter, food waste composter."
        />
      </Head>

      <div
        className="bg-image d-flex align-items-center"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/owc/OWC_family_photo/OWC_family_1600x900.jpg')`,
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
                        <span>Organic Waste Composter</span> <AiOutlineRight />
                      </p>
                    </div>
                    <div className="container py-2">
                      <h1 className="text-center fs-2 text-color">
                        Organic Waste Composter
                      </h1>
                      <p className="px-4 fs-5">
                        Introducing our range of Organic Waste Composters
                        (OWCs), designed to efficiently manage and convert
                        organic waste into nutrient-rich compost. Choose from
                        our selection, including the END OWC 50, END OWC 100,
                        END OWC 300, END OWC 500, and END OWC 1000 to find the
                        perfect composting solution for your needs.
                      </p>
                    </div>
                    <ProductsContainer products={owcProducts} />
                    <p className="lead justify text-secondary">
                      Contact us today to discuss your organic waste management
                      needs and explore the options available, including the END
                      OWC 50, END OWC 100, END OWC 300, END OWC 500, and END OWC
                      1000. Together, let's embrace responsible waste management
                      and harness the power of composting.
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
