import BlackBorder from "./(component)/border/BlackBorder";
import GreyBorder from "./(component)/border/GreyBorder";
import Gallery from "./(component)/home/gallery/Gallery";
import About from "./(component)/home/about/About";
import Activity from "./(component)/home/activity/Activity";
import FAQ from "./(component)/home/faq/FAQ";
import Hero from "./(component)/home/hero/Hero";
import Testimonial from "./(component)/home/testimonial/Testimonial";
import Promotional_activity from "./(component)/promotional_activities/Promotional_activity";

export default function Home() {
  return (
    <>
      <Hero />
      <BlackBorder margin={"-96px"} />
      {/* <BlackBorder flip={true} margin={"-96px"} /> */}
      <div id="about">
        <About />
      </div>

      <GreyBorder flip={true} margin={"-96px"} />

      <div className="promo_activity">
        <Promotional_activity />
      </div>

      <BlackBorder margin={"-100px"} />

      <div id="activities">
        <Activity />
      </div>

      <GreyBorder margin={"-100px"} />
      <div id="gallery">
        <Gallery />
      </div>

      <BlackBorder flip={true} margin={"-96px"} />

      <div id="testimonial">
        <Testimonial />
      </div>
      <GreyBorder margin={"-100px"} />

      <div id="faq">
        <FAQ />
      </div>
      <BlackBorder flip={true} margin={"-96px"} />
    </>
  );
}
