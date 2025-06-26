// import "./overview-component.css";
import { FaSquare } from "react-icons/fa";

import EvenOddImages from "../../even-odd-images-component/EvenOddImages";

import NewProductCarousel from "../../feature/product-carousel/NewProductCarousel";

const Overview = ({ EvenOddImagesData, Details, productVideos }) => {
  return (
    <>
      {Details && (
        <>
          <div className="text-center w-md-75 m-auto px-2 my-5 container">
            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: Details?.description }}
            />
          </div>
          {/* <div className=" my-5 container">
            <div className="row p-0 m-0">
              {Details?.additional.map((element) => {
                return (
                  <div className="col-xl-6 ">
                    <div className="py-1 fw-bold d-flex justify-center align-items-center gap-2 lead">
                      {" "}
                      <FaSquare color="#FF7722" />
                      <h2
                        className="fw-bold mb-[0px] lead"
                        style={{ marginBottom: "0px" }}
                      >
                        {element?.title}
                      </h2>
                    </div>
                    <div className="lead pb-5 text-justify">
                      {element?.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </>
      )}

      {productVideos && (
        <div className="mb-5 pb-4">
          <NewProductCarousel productVideo={productVideos} />
        </div>
      )}

      {EvenOddImagesData && (
        <div className="bg-white">
          {Details && productVideos && (
            <div className="">
              <hr className="mb-3" />
              <h3 className="text-center fw-bolder">Key Features</h3>
              <hr className="" />
            </div>
          )}

          <EvenOddImages EvenOddImagesData={EvenOddImagesData} />
        </div>
      )}
    </>
  );
};

export default Overview;
