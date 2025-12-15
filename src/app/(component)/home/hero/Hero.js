"use client";
import React, { useEffect, useState } from "react";
import "./Hero.scss";
import Link from "next/link";
import { getHomepage } from "@/app/(api)/apis";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getHomepage().then((data) => {
      setHeroData(data.data);
      setIsLoading(false);

      console.log(data)
    });
  }, []);



  return (
   <>
   
   {heroData ? <div className="hero parent">
      <div className="video-bg">
        <video className="desktop" src={heroData.viedo.desktop} autoPlay loop muted playsInline ></video>
        <video className="tab" src={heroData.viedo.tab} autoPlay loop muted playsInline ></video>
        <video className="mob" src={heroData.viedo.mob} autoPlay loop muted playsInline ></video>
      </div>

      <div className="hero-container container">
        <h1 data-aos="fade-up">{heroData.title.slice(0, 50)}</h1>

        <p data-aos="fade-up" data-aos-delay="100">
          {heroData.description}
        </p>

        <Link
          data-aos="fade-up"
          data-aos-delay="200"
          className="btn"
          href="/"
        >
          {heroData.buttonText}
        </Link> </div>
    </div>
  :
  <p>
    no hero data
  </p>  
  }
   </>
  );
};

export default Hero;
