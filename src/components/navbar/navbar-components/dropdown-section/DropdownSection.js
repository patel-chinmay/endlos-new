import React, { useEffect } from "react";
// import "./dropdown-section.css";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
// import SwipeSection from "../swipe-section/SwipeSection";
import SwipeSection from "../swipe-section/SwipeSection"
import SwipeChildSection from "../swipe-child-section/SwipeChildSection";
const DropdownSection = ({ title, src, paragraph, childrens, handleClose }) => {


  // // let childrenss={}
  return (
    <div className="dropdown-section d-lg-block d-xl-block d-md-none d-none">
      <div className="dropdown-container container px-5">
        <div className="icon-close" onClick={() => handleClose()}>
          <AiOutlineClose />
        </div>
        <div className="w-75">
          <div className="d-flex flex-row gap-4">
            <div>
              <div className="pt-5 pb-2">
                <Image
                  src={src}
                  width={250}
                  height={150}
                  alt="img1"
                  className="image"
                />
              </div>
              <p>{title}</p>
              <div className="dropdown-content-width">{paragraph}</div>
            </div>
            <span className="vertical-rule" />
            <SwipeSection handleClose={handleClose} childrens={childrens} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownSection;
