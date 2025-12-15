"use client";

import React, { useEffect, useState, Suspense } from "react";
import "./contact.scss";
import BlackBorder from "../(component)/border/BlackBorder";
import GreyBorder from "../(component)/border/GreyBorder";
import {
  FaLocationDot,
  FaPhone,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import { IoMail, IoLogoYoutube } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import ThemeStore from "../(component)/store/Theme";
import { toast, ToastContainer } from "react-toastify";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("activityid") || "";
  const { isDarkMode } = ThemeStore();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    activity: id,
    email: "",
    message: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      activity: id,
    }));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/addContact`,
        formData
      );
      if (response.status === 200) {
        toast.success("Contact Sent Successfully", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: false,
          theme: isDarkMode ? "dark" : "light",
        });
        setFormData({
          name: "",
          phoneNumber: "",
          activity: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.warning("Contact failed", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        theme: isDarkMode ? "dark" : "light",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Your Name*</p>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <div className="row">
        <label>
          <p>Your Phone*</p>
          <input
            type="number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            required
          />
        </label>
        <label>
          <p>Activity*</p>
          <input
            type="text"
            value={formData.activity}
            onChange={(e) =>
              setFormData({ ...formData, activity: e.target.value })
            }
            required
          />
        </label>
      </div>
      <label>
        <p>Your Email*</p>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </label>
      <label>
        <p>Your Message</p>
        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </label>
      <button className="btn" type="submit">
        Send
      </button>
    </form>
  );
};

const Page = () => {
  return (
    <>
      <ToastContainer />
      <div className="contact1 parent">
        <div className="contact-container1 container">
          <h1>
            Let’s <span>Get in Touch!</span>
          </h1>
          <p>
            Have questions or ready to book your adventure? Reach out to us! Our
            team is here to help you plan the ultimate experience with Sahara
            Amusement.
          </p>
        </div>
      </div>

      <BlackBorder flip={true} margin={"-96px"} />

      <div className="contact2 parent">
        <div className="contact-container2 container">
          <div className="left">
            <h2>We’re Here to Help!</h2>
            <p className="para">
              Whether you need details about our activities, want to book a
              session, or just have a question, we’re just a message away.
            </p>
            <div className="contact-details">
              <div className="icons-box">
                <div className="icon">
                  <FaLocationDot />
                </div>
                <div className="text">
                  <p>
                    <span>Address</span>
                  </p>
                  <Link
                    href="https://maps.app.goo.gl/JYnP62LWWdzxMKPC6"
                    target="_blank"
                  >
                    E44-Dubai-Hatta Road, AI Badayer-Sharjah, U.A.E
                  </Link>
                </div>
              </div>
              <div className="icons-box">
                <div className="icon">
                  <IoMail />
                </div>

                <div className="text">
                  <p>
                    <span>Email</span>
                  </p>
                  <Link href="mailto:info@saharaamusement.com" target="_blank">
                    info@saharaamusement.com
                  </Link>
                </div>
              </div>
              <div className="icons-box">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="text">
                  <p>
                    <span>Phone</span>
                  </p>
                  <Link href="tel:+971565776001" target="_blank">
                    +971 565776001
                  </Link>
                </div>
              </div>
            </div>
            <div className="line"></div>

            <div className="social">
              <Link
                className="icon"
                href="https://m.facebook.com/Saharaamusementofficial/"
                target="_blank"
              >
                <FaFacebookF />
              </Link>
              <Link
                className="icon"
                href="https://www.instagram.com/saharaamusementofficial?igsh=MTB4cjh5OGZ4ZGtxYg=="
                target="_blank"
              >
                <AiFillInstagram />
              </Link>
              <Link className="icon"   href="https://wa.me/971565776001" target="_blank">
                <IoLogoWhatsapp />
              </Link>
            </div>
          </div>
          <div className="right">
            <Suspense fallback={<p>Loading form...</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>

      <GreyBorder margin={"-96px"} />

      <div className="parent map">
        <div className="container map-container">
          <div className="mapbox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4450.647000446021!2d55.69807107604907!3d24.964966241066566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef577c60bfa0881%3A0xe2c5cf58379725a8!2zU2FoYXJhIEFtdXNlbWVudCDYtdit2KfYsdmJINmE2YTYqtix2YHZitmH!5e1!3m2!1sen!2sin!4v1741334602465!5m2!1sen!2sin"
              style={{ border: 0 }}
              height="100%"
              width="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <BlackBorder flip={true} margin={"-96px"} />
    </>
  );
};

export default Page;
