"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./ActivitySlider.scss";

import { getAllActivities } from "@/app/(api)/apis";
import Link from "next/link";

// Card component
function ActivityCard(props) {
  return (
    <div className="card">
      <div
        className="imgbox"
        style={{
          backgroundImage: `url(${props?.image || "/placeholder.jpg"})`,
        }}
      ></div>
      <h2>
        {props?.title || "Untitled"}{" "}
        <span>{props?.title_highlight || ""}</span>
      </h2>
      <p>{props?.desc || "No description available."}</p>
      <div className="btns">
        <Link href={props?.pagelink || "#"} className="sndbtn">
          Learn More
        </Link>
        <Link href={props?.booklink || "#"} className="fstbtn">
          Book Now
        </Link>
      </div>
    </div>
  );
}

// Slider component
function ActivitySlider() {
  const [activityData, setActivityData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllActivities()
      .then((data) => {
        console.log("Fetched Activities:", data);
        setActivityData(data);
      })
      .catch((err) => {
        console.error("Error fetching activities:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <div className="loader">Loading activities...</div>}

      {!isLoading && activityData?.length === 0 && (
        <div className="no-data">No activities available at the moment.</div>
      )}

      {!isLoading && activityData?.length > 0 && (
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={false}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
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
            delay: 250000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="adventureSwiper"
        >
          {activityData.map((card, index) =>
            card?.data ? (
              <SwiperSlide key={index}>
                <ActivityCard
                  title={card.data.title || "Untitled"}
                  desc={
                    card.data.description?.slice(0, 50) ||
                    "No description available."
                  }
                  image={card.data.image || "/placeholder.jpg"}
                  pagelink={`/activity?activityid=${encodeURIComponent(
                    card.data.title || "unknown"
                  )}`}
                  booklink={`/contact?activityid=${encodeURIComponent(
                    card.data.title || "unknown"
                  )}`}
                />
              </SwiperSlide>
            ) : null
          )}
        </Swiper>

        
      )}
    </>
  );
}

export default ActivitySlider;
