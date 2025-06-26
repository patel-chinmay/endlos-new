"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsArrowRightCircle } from "react-icons/bs";
// import "./swiper-carousel.module.css";
const SwiperCarousel = ({ data }) => {
  // const swiper = useSwiper();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const slideTexts = [
        "Recycling Machines",
        "Solid Waste Management",
        "Vending Machines",
      ];
      return '<span class="' + className + '">' + slideTexts[index] + "</span>";
    },
  };
  return (
    <>
      <Swiper
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={pagination}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{ nextEl: "#swiper-forward" }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <video
              src={item.src}
              className="video-container"
              autoPlay
              loop
              muted
            />
            <div className="swiper-content ">
              <h5 className="fs-2 text-color">{item.title}</h5>
              <BsArrowRightCircle
                id="swiper-forward"
                className="text-color "
                size={45}
                style={{ cursor: "pointer" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
