"use client";

import Header from "./(component)/header/Header";
import ThemeStore from "./(component)/store/Theme";
import "./globals.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./(component)/footer/Footer";
import { Montserrat } from "next/font/google";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const { isDarkMode } = ThemeStore();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${isDarkMode ? "dark" : "light"}`}
        data-lenis
      >
        <Header />
        {children}
        <Footer />

       
        <Link
          href="https://wa.me/971565776001"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <span>
            <IoLogoWhatsapp />
          </span>
        </Link>
      </body>
    </html>
  );
}
