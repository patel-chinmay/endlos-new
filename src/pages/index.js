"use client";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SwiperCarousel from "@/components/feature/swiper-carousel/SwiperCarousel";
import UpperContainer from "@/components/page-components/upper-container/UpperContainer";

import {
  IndustriesCarouselSection,
  IndustriesImageCardContainer,
  IndustriesUpperContainer,
  ProjectOfCompnay,
} from "@/data/industries/index";

import { WhyChooseUs } from "@/data/home";

import Head from "next/head";
import EvenOddImages from "../components/even-odd-images-component/EvenOddImages";
import ContactForm from "../components/contact-us-form/ContactForm";
import Blogs from "../components/blog-component/Blogs";
import RvmSwitcherSection from "@/components/RvmSwitcherSection";
import StatisticsSection from "@/components/StatisticCounter";
import WhatsAppButton from "@/components/WhatsAppButton"

export default function Home({ blogs }) {
  WhyChooseUs;
  return (
    <>
      <Head>
        <title>Top Reverse Vending Machine Manufacturers in India</title>

        <link rel="canonical" href="https://www.endlos.in/" />

        <meta
          name="description"
          content="Explore how reverse vending machines are revolutionizing waste management and promoting sustainability. Be part of the recycling movement today!"
        />
        <meta
          name="keywords"
          content="reverse vending machine companies, reverse vending machine, RVM Machine Manufacturer in India, RVM Machine in India, Reverse Vending Machine in India, Recycling Machines"
        />
        <meta
          name="p:domain_verify"
          content="c515420d97824695296fd1219b70e145"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Endlos Innovations Pvt. Ltd." />
        <meta name="publisher" content="Endlos Innovations Pvt. Ltd." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0b3d91" />

        <meta
          property="og:title"
          content="Top Reverse Vending Machine Manufacturers in India"
        />
        <meta
          property="og:description"
          content="Explore how reverse vending machines are revolutionizing waste management and promoting sustainability. Be part of the recycling movement today!"
        />
        <meta property="og:site_name" content="Endlos Innovations" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.endlos.in/" />
        <meta
          property="og:image"
          content="https://www.endlos.in/industries/recycling-machines/"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.endlos.in/" />
        <meta
          name="twitter:title"
          content="Reverse Vending Machine In India | Endlos Innovations"
        />
        <meta
          name="twitter:description"
          content="Endlos Innovation is considered the Best RVM machine manufacturer in India. Being a solid waste management company,"
        />
        <meta
          name="twitter:image"
          content="https://www.endlos.in/industries/recycling-machines/"
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
      <div>
        <SwiperCarousel data={IndustriesCarouselSection} />
        <div
          className="position-relative text-black d-flex align-items-center"
          style={{
            backgroundColor: "#ffffff",
            minHeight: "100vh",
            padding: "3rem 0",
          }}
        >
          <div className="container-fluid px-0">
            <div className="row g-0 align-items-stretch">
              {/* Left Side Content */}
              <div className="col-lg-6 d-flex align-items-center">
                <div
                  className="p-5 w-100 shadow"
                  style={{
                    borderTopLeftRadius: "5rem",
                    borderBottomRightRadius: "5rem",
                    borderTopRightRadius: "5rem",
                    borderBottomLeftRadius: "5rem",
                    backgroundColor: "#f8f9fa",
                    margin: "45px",
                  }}
                >
                  <h2
                    className="fw-bold mb-4 text-start"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 48px)",
                      lineHeight: "1.2",
                      marginLeft: "10px",
                    }}
                  >
                    Empowering a Greener Future with Smart Reverse Vending
                    Machines
                  </h2>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
                      lineHeight: "1.8",
                      maxWidth: "95%",
                    }}
                  >
                    At Endlos Innovations, we design advanced Reverse Vending
                    Machines and support Deposit Return Systems that promote
                    recycling and circular economy practices. Our smart,
                    scalable solutions make waste collection efficient,
                    traceable, and rewarding — across industries and regions.
                  </p>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="col-lg-6">
                <img
                  src="https://storage.googleapis.com/rvmoperationadditionalbucket/endlos-innovation/images/blog/blog1.1.jpg"
                  alt="Our Solution"
                  className="img-fluid h-100 w-100 shadow"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: "5rem",
                    borderBottomRightRadius: "5rem",
                    borderTopRightRadius: "5rem",
                    borderBottomLeftRadius: "5rem",
                  
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-case-studies py-5">
          <div
            className="position-relative text-white d-flex align-items-center"
            style={{
              backgroundImage:
                "url('/assets/images/why-choose-us/Our_solutions.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              minHeight: "100vh",
              padding: "3rem 1rem",
              borderTopLeftRadius: "5rem",
              borderBottomRightRadius: "2rem",
              borderTopRightRadius: "2rem",
              borderBottomLeftRadius: "5rem",
              marginBottom: "50px",
            }}
          >
            <div className="container">
              <div className="p-5 rounded w-100" style={{ maxWidth: "900px" }}>
                <h2
                  className="fw-bold mb-4 text-start text-white text-center text-lg-start"
                  style={{ fontSize: "72px", lineHeight: "1.2" }}
                >
                  Our Solutions
                </h2>
              </div>
            </div>
          </div>
          {/* <UpperContainer data={IndustriesUpperContainer} /> */}
          <RvmSwitcherSection data={RvmSwitcherSection} />

          {/* <hr className="mt-5" />
          <h3 className="text-center font-bold">Our Offerings</h3>
          <hr className="" /> */}
          <StatisticsSection StatisticsSection={StatisticsSection} />
          {/* 
          <hr className="mb-3" />

          <h3 className="text-center">Why Choose Endlos Innovations?</h3>
          <hr className="mb-5" />
          <div className="py-1 container  d-flex flex-wrap gap-4 ">
            {WhyChooseUs?.map((element, index) => {
              return (
                <>
                  <div
                    class=" inline-block    mx-auto  "
                    style={{ width: "15rem", overflow: "clip" }}
                  >
                    <div className="  d-flex justify-center position-relative  ">
                      <img
                        src={element.icon}
                        alt="img1"
                        height="70px"
                        className="mx-auto mt-5"
                      />
                      <img
                        src="/assets/images/why-choose-us/arrow-up.svg"
                        alt="img1"
                        height="120px"
                        className="mx-auto  position-absolute top-0  left-4"
                        style={{
                          left: "0px",
                          right: "0px",
                          height: "200px",
                        }}
                      />
                    </div>
                    <div class="">
                      <h4
                        className="text-center h-auto my-4 fw-bold"
                        style={{ color: "#FD8236" }}
                      >
                        {element.title}
                      </h4>
                      <p className="justify fw-normal ">
                        {element.description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div> */}
        </div>
        {/* <hr className="" /> */}
        <h2
          className="fw-bold mb-4 text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 48px)",
            lineHeight: "1.2",
          }}
        >
          Blogs
        </h2>{" "}
        {/* <hr className="mb-5" /> */}
        <div className="wrapper-case-studies">
          {/* <BlogComponent /> */}

          <Blogs blogs={blogs} />
        </div>
      </div>
      {/* <WhatsAppButton /> */}
      {/* Render the WhatsApp button here */}
      {/* <ContactForm /> */}
    </>
  );
}

export async function getStaticProps() {
  // Assuming index.jsx is in pages/company/blog
  const blogDirectoryPath = path.join(
    process.cwd(),
    "src",
    "data",
    "blog",
    "md"
  );

  const files = fs.readdirSync(blogDirectoryPath);

  // Get slug and frontmatter from posts
  const blogs = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "src", "data", "blog", "md", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      // blogs: blogs.sort(sortByDate),
      blogs,
    },
  };
}
