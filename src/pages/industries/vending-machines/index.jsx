"use client";
import React, { useEffect, useState } from "react";
// import "./vending-machines.css";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";

import Head from "next/head";
import Link from "next/link";
import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";

const VendingMachines = () => {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const cls = visible ? "visible-page" : "hidden-page";
  return (
    <>
      <Head>
        <title>Vending Machines in India: A Convenient Modern Solution</title>
        <meta
          name="description"
          content="Get detailed information on industrial vending machines in India where Endlos Innovation offers the best cutting-edge solution for every RVM machine "
        />
        <meta name="keywords" content="vending machines in India" />
      </Head>
      <div
        className="bg-image d-flex align-items-center"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/cvm/cvm-background.jpg')`,
        }}
      >
        {/* <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-white font-weight-bold fs-1">Recycling Machines</h1>
            </div>
          </div>
        </div> */}
      </div>
      <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <div className="row">
            <div className="col-sm-12">
              <div className="container px-5 py-5 responsive-container">
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <div className="d-flex justify-between align-items-center">
                    <div>Home</div>{" "}
                    <div>
                      <AiOutlineRight />
                    </div>
                  </div>
                  <div className="d-flex justify-between align-items-center">
                    <div>Industries</div>{" "}
                    <div>
                      <AiOutlineRight />
                    </div>
                  </div>
                  <div className="d-flex justify-between align-items-center">
                    <div>Vending Machines</div>{" "}
                    <div>
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>
                <div className="container py-2">
                  <h1 className="text-center fs-2 text-dark">
                    Vending Machines In India
                  </h1>

                  <p className="lead justify py-4">
                    At Endlos Innovation! It is one of the{" "}
                    <a
                      href="https://www.endlos.in/"
                      className="backlinks"
                      target="_blank"
                    >
                      Best RVM machine manufacturers in India
                    </a>{" "}
                    . We are passionate about revolutionizing the vending
                    machine industry. Here's some information about RVM machines
                    In India, their history, and our innovative solutions.
                  </p>
                </div>
                <div>
                  <h2 className="py-2 text-secondary">
                    History of Reverse Vending Machines
                  </h2>
                  <p className="lead justify">
                    At Endlos Innovation, we are at the forefront of
                    transforming the vending machine industry. Our innovative
                    solutions aim to enhance user experience, increase
                    efficiency, and offer greater convenience. Here are some of
                    our key offerings:
                  </p>
                </div>
                <h3 className="py-2 text-secondary">
                  Innovative Solutions by Endlos Innovation
                </h3>
                <p className="lead justify">
                  In order to deliver cutting-edge solutions that genuinely
                  change the world, Endlos Innovation ensures to offer the best
                  Reverse Vending Machine in India with our dedication to
                  pushing the limits of creativity and technology.
                </p>
                <div className="px-4">
                  <p className="lead justify">
                    <h3 className="fw-bold text-secondary fs-5">
                      Smart Vending Machines :{" "}
                    </h3>
                    Our vending machines have cutting-edge technology like IoT
                    connectivity and advanced sensors. This enables real-time
                    inventory tracking, remote management, and data analytics,
                    ensuring optimal performance and minimizing downtime.
                  </p>
                  <p className="lead justify">
                    <h3 className="fw-bold text-secondary fs-5">
                      Cashless Payment Systems :{" "}
                    </h3>{" "}
                    We have integrated secure and convenient cashless payment
                    options into our vending machines. Users can now pay using
                    various methods, including credit cards, mobile wallets, and
                    contactless payments, making transactions faster and more
                    seamless.
                  </p>
                  <p className="lead justify">
                    <h3 className="fw-bold text-secondary fs-5">
                      Interactive Touchscreen Displays :{" "}
                    </h3>{" "}
                    Our vending machines feature interactive touchscreen
                    displays, providing a user-friendly interface for browsing
                    and selecting products. This engaging experience improves
                    customer satisfaction and encourages impulse purchases.
                  </p>
                  <p className="lead justify">
                    <h3 className="fw-bold text-secondary fs-5">
                      Product Diversification :{" "}
                    </h3>{" "}
                    Endlos Innovation offers vending machines tailored to
                    specific product categories, such as snacks, beverages, and
                    health foods. We work closely with our clients to customize
                    product offerings based on consumer preferences and market
                    trends.
                  </p>
                  <p className="lead justify">
                    <h3 className="fw-bold text-secondary fs-5">
                      Sustainability Initiatives :{" "}
                    </h3>{" "}
                    We are committed to promoting eco-friendly practices. Our
                    vending machines are designed to be energy-efficient,
                    utilizing LED lighting and low-power modes. We also
                    encourage using recyclable materials and collaborating with
                    suppliers prioritising sustainable sourcing.
                  </p>
                  <p className="lead justify">
                    <h3 className="fw-bold text-secondary fs-5">
                      {" "}
                      Real-Time Data Analytics :{" "}
                    </h3>{" "}
                    Leveraging the power of data, our vending machines provide
                    real-time insights into consumer behavior, inventory
                    management, and sales trends. This valuable information
                    helps businesses make informed decisions and optimize their
                    vending operations.
                  </p>
                </div>
                <h3 className="py-2 text-secondary">
                  Partner with Endlos Innovation
                </h3>
                <p className="lead justify text-secondary">
                  By partnering with Endlos Innovation, you can use our
                  expertise and cutting-edge solutions to revolutionize your
                  vending machine business. We are dedicated to providing
                  high-quality products, exceptional customer service, and
                  continuous innovation.
                </p>
                <p className="lead justify text-secondary">
                  Discover the endless possibilities with Endlos Innovation. Get
                  in touch to explore how our RVM solutions can elevate your
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUsEmail />
    </>
  );
};

export default VendingMachines;
