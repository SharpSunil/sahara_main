"use client";
import React, { useEffect, useState } from "react";
import "./About.scss";
import Link from "next/link";
import { getAboutPage } from "@/app/(api)/apis";

const About = () => {


  const [aboutData, setAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAboutPage().then((data) => {
      setAboutData(data.data);
      setIsLoading(false);
    });
  }, []);




  return (
    <>
      {aboutData ? <div className="about parent">
        <div className="about-container container">
          <div className="left imghover">
            <div
              className="imgbox "
              data-aos="fade-right"
              data-aos-delay="100"
              style={{ backgroundImage: `url(${aboutData.image})` }}
            ></div>
          </div>

          <div className="right">
            <h2 data-aos="fade-up" id="aboutHeading">
              {aboutData.title}
            </h2>

            <p data-aos="fade-up" data-aos-delay="150">
              {aboutData.description}
            </p>

            <Link
              href={aboutData.buttonLink}
              className="btn"
              data-aos="fade-up"
              data-aos-anchor="#aboutHeading"
              data-aos-delay="200"
            >
              {aboutData.buttonText}
            </Link>
          </div>
        </div>
      </div>
    :
    <p>
      no about data
    </p>  
    }
    </>
  );
};

export default About;
