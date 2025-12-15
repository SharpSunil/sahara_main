import React from "react";
import "./Footer.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer parent">
        <div className="footer-container container">
          <div className="col">
            <h3>Quick Links</h3>

            <div className="links">
              <Link href="/">Home</Link>
              <Link href="/#about">About Us</Link>
              <Link href="/#activities">Activities</Link>
              <Link href="/#gallery">Our Gallery</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/#faq">FAQs</Link>
            </div>
          </div>

          <div className="col">
            <h3>Social Media Links</h3>

            <div className="links">
              <Link href="https://m.facebook.com/Saharaamusementofficial/" target="_blank">Facebook</Link>
              <Link href="https://www.instagram.com/saharaamusementofficial?igsh=MTB4cjh5OGZ4ZGtxYg==" target="_blank">Instagram</Link>
              <Link href="https://wa.me/971565776001" target="_blank">WhatsApp</Link>
            </div>
          </div>

          <div className="col">
            <h3>Legal</h3>

            <div className="links">
              <Link href="/privacy_policy">Privacy Policy</Link>
              {/* <Link href="/term_conditions">Terms & Conditions</Link> */}
            </div>
          </div>

          <div className="col">
            <h3>Contacts</h3>

            <div className="links">
              <Link href="https://maps.app.goo.gl/JYnP62LWWdzxMKPC6" target="_blank">
                E44-Dubai-Hatta Road, AI Badayer-Sharjah, U.A.E
              </Link>
              <Link href="mailto:info@saharaamusement.com" target="_blank">info@saharaamusement.com</Link>
              <Link href="tel:+971565776001" target="_blank">+971 565776001</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright parent">
        <div className="copyright-container container">
          <p>© 2025 Sahara Amusement. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
