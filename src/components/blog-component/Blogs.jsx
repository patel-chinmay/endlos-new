import Head from "next/head";
import Blog from "./Blog";

export default function Blogs({ blogs }) {
  return (
    <>
      <Head>
        <title>
          Waste Management's Future: Rise of Reverse Vending Machines
        </title>
        <meta
          name="description"
          content="Explore how reverse vending machines are revolutionizing waste management and promoting sustainability. Be part of the recycling movement today!"
        />
      </Head>
      <div className="container m-5 pb-5 mx-auto">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogs.map((blog, index) => (
            <div className="">
              <div className=" d-flex flex-column">
                <Blog key={index} blog={blog} className="flex-grow-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
