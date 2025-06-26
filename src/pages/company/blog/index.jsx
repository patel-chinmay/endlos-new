import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

import data from "../../../data/blog";
import Blog from "../../../components/blog-component/Blog";
import Blogs from "../../../components/blog-component/Blogs";
import { AiOutlineRight } from "react-icons/ai";
import ContactUsEmail from "../../../components/contact-us-email/ContactUsEmail";
// import Post from '../components/Post'
// import { sortByDate } from '../utils'

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>
          Discover Engaging Insights on Endlos Blog | Latest Updates
        </title>

        <meta
          name="description"
          content="Explore our Reverse Vending Machine blog for expert insights, tips, and trends to enhance recycling efforts and sustainability initiatives."
        />

        <meta
          name="keywords"
          content="Discover how reverse vending machines are transforming waste management for a sustainable future. Find out how they enhance recycling efforts and promote environmental responsibility."
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="Endlos Innovations Pvt. Ltd." />
        <meta name="publisher" content="Endlos Innovations Pvt. Ltd." />

        <link rel="canonical" href="https://www.endlos.in/company/blog/" />

        <meta
          property="og:title"
          content="Discover Engaging Insights on Endlos Blog | Latest Updates"
        />
        <meta
          property="og:description"
          content="Explore our Reverse Vending Machine blog for expert insights, tips, and trends to enhance recycling efforts and sustainability initiatives."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.endlos.in/company/blog/" />
        <meta property="og:site_name" content="Endlos Innovations" />
        <meta
          property="og:image"
          content="https://www.endlos.in/assets/images/blog-og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Discover Engaging Insights on Endlos Blog | Latest Updates"
        />
        <meta
          name="twitter:description"
          content="Explore our Reverse Vending Machine blog for expert insights, tips, and trends to enhance recycling efforts and sustainability initiatives."
        />
        <meta
          name="twitter:image"
          content="https://www.endlos.in/assets/images/blog-og-image.jpg"
        />
        <meta
          name="twitter:url"
          content="https://www.endlos.in/company/blog/"
        />
      </Head>

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
                Our Blogs
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container  py-4 ">
        <div className="d-flex align-items-center gap-2">
          <p>
            <span>Home</span> <AiOutlineRight />
          </p>
          <p>
            <span>Company</span> <AiOutlineRight />
          </p>
          <p>
            <span>Blog</span> <AiOutlineRight />
          </p>
        </div>
      </div> */}

      <Blogs blogs={blogs} />

      <ContactUsEmail />
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
