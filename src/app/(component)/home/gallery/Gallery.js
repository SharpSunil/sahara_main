"use client";
import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import img1 from "../../../../../public/gokart1.jpg";
import img2 from "../../../../../public/mini_gp1.jpg";
import img3 from "../../../../../public/paintball1.jpg";
import img4 from "../../../../../public/quat_bike1.jpg";
import img5 from "../../../../../public/dune_buggy1.jpg";
import img6 from "../../../../../public/mini_gp1.jpg";
import Image from "next/image";
import Link from "next/link";
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

function Gallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
// const [data,setData] = useState()
const [data, setData] = useState([]);


  const getAllGallery = async ()=>{
    try {

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/MediaController/getAllImage`);

console.log("gallery response",response.data);

      // const images = response.data.data.map((item,index)=>({
      //   image1:item?.data?.image
      // }));
const images = response.data.data.map(item => ({
  image1: item.images
}));



console.log("gallery images fsdf sdf sdf fdsffds sdffdfdsdfs sdffdsdsfdsdffdsfsd",images);

      setData(images)
    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(()=>{
    getAllGallery()
  },[])

  // const slides = data && data?.map((item) => ({
  //   src: item.image1,
  // }));


// const slides = data.map(item => ({
//   src: item.image1,
// }));
const slides = data.map(item => ({
  src: item.image1,
}));


  return (
    <>
      <div className="gallery-parent parent">
        <div className="container gallery-container">
          <h2>Our <span>Gallery</span></h2>
          <div className="wrapper">
            {data && data?.map((item, index) => (
              <div
                key={index}
                className="gallery-card bg-img-cover"
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              >
                {/* <Image className="images"   src={item.image1} alt="image" /> */}

                <div className="images" style={{ backgroundImage: `url(${item.image1})` }}>

                </div>
                
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

          <Link href={"/all_gallery"} className="btn">
            View All
          </Link>
        </div>
      </div>
    </>
  );
}

export default Gallery;
