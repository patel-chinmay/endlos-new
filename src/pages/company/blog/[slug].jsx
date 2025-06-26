import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import Head from "next/head";

// Configure marked to support lists and links
marked.setOptions({
  gfm: true, // Enable GitHub Flavored Markdown
});
export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
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

        <link rel="canonical" href="https://www.endlos.in/company/blog/" />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="Endlos Innovations Pvt. Ltd." />
        <meta name="publisher" content="Endlos Innovations Pvt. Ltd." />

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

      <div
        className="bg-image d-flex align-items-center"
        style={{
          backgroundImage: `url(${cover_image})`,
        }}
      >
        <div className="container">
          <div className="row"></div>
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
                    <div className="align-items-center gap-sm-2 flex-wrap  d-none d-lg-flex">
                      <div className="d-flex justify-between align-items-center">
                        <div>Home</div>{" "}
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="d-flex justify-between align-items-center">
                        <div>Blog</div>{" "}
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                      <div className="d-flex justify-between align-items-center ">
                        <div>{title}</div>{" "}
                        <div>
                          <AiOutlineRight />
                        </div>
                      </div>
                    </div>
                    <div className="container py-2">
                      <h1 className="text-center fs-2 text-dark text-color my-lg-2 ">
                        {title}
                      </h1>
                      <div className="post-body">
                        <div
                          dangerouslySetInnerHTML={{ __html: marked(content) }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-1"></div>
    </>
  );
}

export async function getStaticPaths() {
  // Assuming index.jsx is in pages/company/blog
  const blogDirectoryPath = path.join(
    process.cwd(),
    "src",
    "data",
    "blog",
    "md"
  );

  const files = fs.readdirSync(blogDirectoryPath);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "src", "data", "blog", "md", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
