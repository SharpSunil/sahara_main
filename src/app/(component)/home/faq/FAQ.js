"use client";
import React, { useEffect, useState } from "react";
import "./FAQ.scss";
import { IoIosArrowDown } from "react-icons/io";
import { getFaqByPage } from "@/app/(api)/apis";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonialData, setTestimonialData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getFaqByPage("home").then((data) => {
      setTestimonialData(data?.data);

      setIsLoading(false);
    });
  }, []);




  return (
    <>
      {testimonialData && <div className="faq parent">
        <div className="container faq-container">
          <h2>
            Plan Your <span>Visit</span>
          </h2>
          <div className="faq-box-container">
            <div className="faq-box-container">
              {testimonialData && testimonialData.map((item, index) => (
                <div
                  className={`faq-box ${activeIndex === index ? "active" : ""}`}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="faq-ques">
                    <h3> {item?.question} </h3>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </div>
                  <div className="faq-ans">

                    {item?.answer}
                
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default FAQ;
