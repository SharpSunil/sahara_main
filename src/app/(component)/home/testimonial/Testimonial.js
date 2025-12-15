"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Testimonial.scss";
import { IoMdStar } from "react-icons/io";
import { getTestimonials } from "@/app/(api)/apis";

function Testimonial() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTestimonials().then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="t-parent parent">
      <div className="t-container container">
        <h2>
          What <span>Our Visitors</span> Say
        </h2>
        <div className="t-swiper-box">
          <Swiper
            spaceBetween={10}
            loop={true}
            slidesPerView={3}
            centeredSlides={false}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="t-Swiper"
          >
            {isLoading ? (
              <>Loading...</>
            ) : (
              data?.map((tdata, index) => (
                <SwiperSlide key={index}>
                  <div className="t-card">
                    <div className="t-stars">
                     {[...Array(tdata.data.stars)].map(( star, index) => (
                       <IoMdStar key={index} />
                     ))}
                    </div>
                    <p className="t-para">{tdata.data.feedBack}</p>
                    <h4>{tdata.data.name}</h4>
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
