import React from "react";
// import "./upper-container.module.css";
import Link from "next/link";

const UpperContainer = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className="container text-center" key={index}>
          <h1 className="heading-container w-69 ">{item.title}</h1>
          <h2 className="heading-container w-69 ">{item.title2}</h2>
          <p className="paragraph-container endlos-text-justify mt-4 w-lg-75">
            {item.subtitle}
          </p>
        </div>
      ))}
    </>
  );
};

export default UpperContainer;
