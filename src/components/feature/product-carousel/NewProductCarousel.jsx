import React from "react";
import Slider from "react-slick";

const NewProductCarousel = ({ textAlign, productVideo }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots my-custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="px-4 ">
      <Slider {...settings}>
        {productVideo &&
          productVideo?.map((item, index) => (
            <div key={index}>
              <video
                src={item.video_src}
                autoPlay
                loop
                muted
                style={{
                  height: "72vh",
                  width: "100%",
                }}
              />
              {/* <p className={`${textAlign}`}>{item.video_desc}</p> */}
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default NewProductCarousel;
