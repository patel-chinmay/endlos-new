import React from "react";
// import "./equipment.css";

const Equipment = () => {
  return (
    <div className="container my-5">
      <div className="row gap-md-2 gap-xl-0">
        <div className="col-xl-6 col-lg-12">
          <img
            className="w-100 shadow"
            src="https://www.trumpf.com/filestorage/TRUMPF_Processed/_processed_/f/b/csm_TRUMPF-lasers-fiber-lasers-TruFiber-new-generation-product-picture_da76ff46f5_c7a1592c0d.jpg"
          />
        </div>
        <div className="col-xl-6 col-lg-12">
          <div>
            <p className="fs-2">RVM Eco</p>
            <p>
              The fiber-based solid-state laser, TruFiber, is the precision
              laser for delicate work. It stands out with its single-mode beam
              quality and the variety of power classes available. While the
              lower power classes of the fiber laser (up to 1 kW) are optimally
              suited for laser precision cutting and welding, the higher power
              classes (over 1 kW) shine when it comes to wobble welding.
            </p>
          </div>
          <div className="btn btn-dark">To The Product</div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
