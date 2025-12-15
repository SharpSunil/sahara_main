"use client";
import React, { useEffect, useState } from "react";
import "./All_gallery.scss";
import Image from "next/image";
import img1 from "../../../public/gokart1.jpg";
import img2 from "../../../public/mini_gp1.jpg";
import img3 from "../../../public/paintball1.jpg";
import img4 from "../../../public/quat_bike1.jpg";
import img5 from "../../../public/dune_buggy1.jpg";
import img6 from "../../../public/mini_gp1.jpg";

import Lightbox from "yet-another-react-lightbox";

import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import axios from "axios";

function page() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [data, setData] = useState([]);

  const getAllGallery = async () => {
    try {

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/MediaController/getAllImage`
      );

      // const images = response.data.map((item, index) => ({
      //   image1: item?.data?.image,
      // }));
const images = response.data.data.map(item => ({
  image1: item.images
}));
      

      setData(images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllGallery();
  }, []);

  const slides = data && data.map((item) => ({
    src: item.image1,
  
  }));

  return (
    <>
      <div className="page-top parent">
        <h1>Gallery</h1>
      </div>
      <div className="parent gallery-page-top">
        <div className="gallery-cont container">
          {data && data.map((item, index) => (
            <div
              className="gallery-card bg-img-cover"
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <div
                className="images"
                style={{ backgroundImage: `url(${item.image1})` }}
              ></div>
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={currentIndex}
          plugins={[Fullscreen, Video, Slideshow, Thumbnails, Zoom, Captions]}
        />
      </div>
    </>
  );
}

export default page;
