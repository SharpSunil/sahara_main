"use client";
import React, { useState } from "react";
import "./Header.scss";
import Theme from "../store/Theme";
import Link from "next/link";
import Image from "next/image";
// import logo from "@/../public/sahara_logo.png";
import logo from "@/../public/logos/logo.png"

import {
  ChevronDown,
  Facebook,
  Instagram,
  Menu,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

const Header = () => {
  const { isDarkMode, toggleTheme } = Theme();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };


  return (
    <>
      {menu && (
        <div className="mobmenu active parent">
          <div className="mobmenu-container container">
            <div
              className="close"
              onClick={handleMenu}
              data-aos="fade-left"
              data-aos-delay="100"
              id="closebtn"
            >
              <X />
            </div>

            <div className="links">
              <Link
                href={"/"}
                onClick={handleMenu}
                data-aos="fade-left"
                data-aos-delay="00"
                data-aos-anchor="closebtn"
              >
                Home
              </Link>
              <Link
                href={"/#about"}
                onClick={handleMenu}
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-anchor="closebtn"
              >
                About
              </Link>
              <Link
                href={"/#activities"}
                onClick={handleMenu}
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-anchor="closebtn"
              >
                Activities
              </Link>
              <Link
                href={"/#gallery"}
                onClick={handleMenu}
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-anchor="closebtn"
              >
                Gallery
              </Link>
              <Link
                href={"/contact"}
                onClick={handleMenu}
                data-aos="fade-left"
                data-aos-delay="150"
                data-aos-anchor="closebtn"
              >
                Contact
              </Link>
            </div>

            <div className="social">
              <button
                onClick={toggleTheme}
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-anchor="closebtn"
              >
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>

              <div className="social-links">
                <Link
                  className="social-link-btn"
                  data-aos="fade-left"
                  data-aos-delay="250"
                  data-aos-anchor="closebtn"
                  href="https://m.facebook.com/Saharaamusementofficial/"
                   target="_blank"
                >
                  <Facebook />
                </Link>
                <Link
                  className="social-link-btn"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-anchor="closebtn"
                  href="https://www.instagram.com/saharaamusementofficial?igsh=MTB4cjh5OGZ4ZGtxYg=="
                   target="_blank"
                >
                  <Instagram />
                </Link>
                {/* <a
                  className="social-link-btn"
                  data-aos="fade-left"
                  data-aos-delay="350"
                  data-aos-anchor="closebtn"
                >
                  <Twitter />
                </a> */}
                <Link
                  className="social-link-btn"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-anchor="closebtn"
                  href="https://youtube.com/@saharaamusement9183?feature=shared"
                  target="_blank"
                >
                  <Youtube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="parent header">
        <div
          className={
            isDarkMode
              ? "container header-container"
              : "container header-container bglight"
          }
        >
          <Link href="/" className="logo">
            <Image src={logo}  alt="Sahara Amusement Logo" />
          </Link>
          <div className="menu" onClick={handleMenu}>
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
