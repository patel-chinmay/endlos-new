import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ImageCardContainer = ({ data }) => {
  return (
    <>
      <div className="container pt-5">
        <div className="row ">
          {data?.length > 0 &&
            data?.map((item, index) => (
              <div className="col-lg-12 col-xl-6  pt-3 " key={index}>
                {/* <Link href={item.link}> */}
                  <h4>{item.title}</h4>

                  <div className="position-relative pt-3 mb-5">
                    <div className="inner">
                      <img
                        src={item.img_src}
                        alt={item.title}
                        className="image-container "
                      />
                    </div>
                    <div className="arrow-on-image pointer">
                      {/* <Link href={item.link}>
                      {" "}
                      <FaArrowCircleRight size={60} />
                    </Link> */}
                    </div>
                  </div>
                    <div className="row">
                      <div className="col-sm-10">
                        <p className="text-height">{item.subtitle}</p>
                      </div>
                    </div>
                {/* </Link> */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ImageCardContainer;
