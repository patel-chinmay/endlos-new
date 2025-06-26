import React from "react";
// import "./map-wrapper.css";
import Image from "next/image";
import { IconContext } from "react-icons";
import { HiOutlineArrowRight } from "react-icons/hi";
const MapWrapper = () => {
  
  return (
    <div className="container p-5">
      <div className="card rounded">
        <div className="row no-gutters d-flex align-items-center">
          <div className="col-lg-8 ">
            <img src="/map.svg" alt="img1" className="image" />
          </div>
          <div className="col-lg-4">
            <div className="card-body d-flex align-items-center flex-column gap-5">
              <div className="text-center">
                <p className="card-title fs-2 text-secondary">
                  ENDLOS WORLDWIDE
                </p>
                <p className="card-text fs-4 text-secondary">
                  Find Here All Addresses and Contacts.
                </p>
              </div>
              <div className="arrowicon-in-circle">
                <IconContext.Provider value={{ color: "gray", size: 30 }}>
                  <HiOutlineArrowRight
                    className="pointer"
                    width={120}
                    height={24}
                  />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapWrapper;
