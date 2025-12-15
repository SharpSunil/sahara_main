"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./activity.scss";
import BlackBorder from "../(component)/border/BlackBorder";
import GreyBorder from "../(component)/border/GreyBorder";
import { IoIosArrowDown } from "react-icons/io";
import "../(component)/home/faq/FAQ.scss";
import { getActivityByTitle, getFaqByPage } from "../(api)/apis";
import Link from "next/link";
import ThemeStore from "../(component)/store/Theme";

const ActivityPage = () => {
  const { isDarkMode } = ThemeStore();

  const searchParams = useSearchParams();
  const [activityId, setActivityId] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [testimonialData, setTestimonialData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const id = searchParams.get("activityid");

  useEffect(() => {
    setActivityId(id);
    if (!id) return;

    setIsLoading(true);
    getActivityByTitle(id).then((data) => {
   
      setActivityData(data?.data);
    })
    
    ;

    getFaqByPage(id).then((data) => {
      setTestimonialData(data?.data);
      setIsLoading(false);
    }).catch((err)=>{
      console.log(err)
    })
    ;
  }, [searchParams]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>

        <>
          <div
            className="page-top parent"
            style={{ backgroundImage: `url(${activityData?.coverImage})` }}
          >
            <h1>{activityData?.title}</h1>
          </div>
          <div id="animatedsection" className={isDarkMode ? "" : "light"}>
            <div
              className={
                id === "paintball"
                  ? "parent activitymain paintBallBg"
                  : "parent activitymain"
              }
            >
              <div className="container activitymain-container">
                <div className="left">
                  <div
                    className="img-box imghover"
                    style={{ backgroundImage: `url(${activityData?.image})` }}
                  ></div>
                </div>
                <div className="right">
                  <h2 style={{ textTransform: "capitalize" }}>
                    {activityData?.title}
                  </h2>
                  {activityData?.additionalInfo &&
                    Object.entries(activityData?.additionalInfo).map(
                      ([key, value]) => (
                        <div className="key-value" key={key}>
                          <div className="key">{key}</div>
                          <div className="value">{value}</div>
                        </div>
                      )
                    )}
                  <div className="button_class">
                    <Link
                      href={`/contact?activityid=${activityData?.title}`}
                      className="btn"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GreyBorder margin={"-100px"} />
          <div className="activityDescription parent">
            <div className="activityDescription-container container">
              <div className="faq parent">
                <div className="container faq-container">
                  <h2>
                    Plan Your <span>Visit</span>
                  </h2>
                  <div className="faq-box-container">
                    {testimonialData ? testimonialData.map((item, index) => (
                      <div
                        className={`faq-box ${
                          activeIndex === index ? "active" : ""
                        }`}
                        key={index}
                        onClick={() => setActiveIndex(index)}
                      >
                        <div className="faq-ques">
                          <h3> {item.question} </h3>
                          <span>
                            <IoIosArrowDown />
                          </span>
                        </div>
                        <div className="faq-ans">{item.answer}</div>
                      </div>
                    ))
                  :
                  <p>
                    no data found
                  </p>
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlackBorder flip={true} margin={"-96px"} />
        </>
     
    </>
  );
};

// ✅ Wrap in Suspense for Next.js compatibility
const Page = () => (
  <Suspense fallback={<p>Loading activity...</p>}>
    <ActivityPage />
  </Suspense>
);

export default Page;
