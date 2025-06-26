import React from "react";
import { blogContent } from "@/data/blog/index";

const BlogComponent = () => {
  return (
    <div className="d-flex  flex-column  flex-md-row  justify-content-center container gap-5 mb-5 pb-4">
      {blogContent.map((item, index) => (
        <div
          className="card inline-block"
          key={index}
        >
          <img
            className="card-img-top"
            src={item.img_src}
            alt="img1"
            height="220px"
            width="500px"
          />
          <div className="card-body">
            <h4 className="text-center h-auto mb-3">{item.title}</h4>
            <p className="justify">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogComponent;
