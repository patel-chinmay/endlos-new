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
import Head from "next/head"
const page = () => {
  const data = [
    {
      // title: "Privacy Policy for Endlos Innovations Private Limited:",
      description: [
        "This Privacy Policy describes our policies and procedures on the collection,use and disclosure of your information when you use the service and tells you about your privacy rights and how the law protects you.",
        "We use Your Personal data to provide and improve the service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.",
      ],
      additonal: [
        {
          title: "Who we are",
          description: [
            "This website is operated by Endlos Innovations Private Limited. We are company registered in INDIA – Plot no. 286, Beside Somnath Industrial Estate, Bakrol -  Dhamatwan Road, Bakrol, Ahmedabad, Gujarat 382435, India. For more information see www.endlos.in.",
          ],
        },
        {
          title: "Interpretation",
          description: [
            "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
          ],
          points: [
            {
              title: "Definitions ",
              details: " For the purposes of this Privacy Policy:",
            },
            {
              title: "Affiliate  ",
              details: `means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.`,
            },
            {
              title: "Company ",
              details: ` (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Endlos Innovations Pvt Ltd. Plot no. 286, Beside Somnath Industrial Estate, Bakrol - Dhamatwan Road, Bakrol, Ahmedabad, Gujarat 382435, India`,
            },
            {
              title: "Cookies ",
              details: `are small files that are placed on your computer, mobile device or any other device by a website, containing the details of your browsing history on that website among its many uses.`,
            },
            {
              title: "Country ",
              details: `Country refers to: Gujarat, India`,
            },
            {
              title: "Device ",
              details: `Device means any device that can access the service such as a computer, a cellphone or a digital tablet.`,
            },
            {
              title: "Personal ",
              details: `Data is any information that relates to an identified or identifiable individual.`,
            },
            {
              title: "Service ",
              details: `Service refers to the Website.`,
            },
            {
              title: "Service Provider ",
              details: `means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.`,
            },
            {
              title: "Website ",
              details: ` refers to Endlos Innovation Private Limited, accessible from `,
              href: "https://www.endlos.in/",
            },
            {
              title: "You ",
              details: `means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`,
            },
          ],
        },
      ],
    },
    {
      title: "Changes to this Privacy Policy",
      description: [
        "We may update Our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
        "We will let you know via email and/or a prominent notice on our service, prior to the change becoming effective. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page",
      ],
    },
    {
      title: "Contact Us",
      description: [
        "If you have any questions about this Privacy Policy, You can contact us:",
      ],
      bullets: ["By email:  info@endlos.in"],
      description: [
        "Write to Endlos Innovattions Pvt. Ltd. at, Plot no. 286, Beside Somnath Industrial Estate, Bakrol - Dhamatwan Road, Bakrol, Ahmedabad, Gujarat 382435, India.",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Endlos Privacy Policy: What Users Should Be Aware Of</title>
        <meta
          name="description"
          content="Understand the privacy practices of Endlos Innovations Pvt Ltd. Our Privacy Policy outlines how we safeguard your personal information while providing our services."
        />
      </Head>
      <div
        className="bg-image d-flex align-items-center"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/other/privacy.jpg')`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-color font-weight-bold fs-1">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 mt-4">
        <div className="d-flex align-items-center gap-2">
          <p>
            <span>Home</span> <AiOutlineRight />
          </p>
          <p>
            <span>Company</span> <AiOutlineRight />
          </p>
          <p>
            <span>Privacy Policy</span> <AiOutlineRight />
          </p>
        </div>
      </div>
      <div className="container ">
        <hr />
        <h2 className="text-center fw-bolder"> Privacy Policy for Endlos</h2>
        <hr />
      </div>
      <div className="container">
        {data.map((element, index) => (
          <div key={index} className="mb-5">
            <h2 className="fw-bolder mb-4">{element?.title}</h2>

            {element?.description &&
              element?.description.map((element, index) => (
                <p key={index} className="text-muted mb-3">
                  {element}
                </p>
              ))}

            {element?.bullets &&
              element?.bullets.map((element, index) => (
                <li key={index} className="fw-bold li-icon">
                  {element}
                </li>
              ))}

            {element?.additonal &&
              element?.additonal.map((element, index) => (
                <div key={index} className="mt-4">
                  <h2 className="fw-bolder text-2xl mb-3">{element?.title}</h2>

                  {element?.description &&
                    element?.description.map((element, index) => (
                      <p key={index} className="text-muted mb-3">
                        {element}
                      </p>
                    ))}

                  {element?.points &&
                    element?.points.map((element, index) => (
                      <li key={index} className="text-justify  li-icon">
                        <span className="fw-bolder text-dark">
                          {element.title}
                        </span>
                        <span className="text-muted">{element.details}</span>
                        {element.href && (
                          <Link
                            href={element.href}
                            target="_blank"
                            className="text-primary font-weight-bold"
                          >
                            {element.href}
                          </Link>
                        )}
                      </li>
                    ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
