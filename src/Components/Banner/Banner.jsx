import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="h-screen w-full bg-banner-background bg-cover flex flex-col justify-center items-center space-y-3" >
      <h1 data-aos="zoom-in" className="text-2xl md:text-5xl font-bold text-white text-center md:w-3/4 lg:w-1/2 mx-auto ">Your Educational Event Partner for Success</h1>

      <p data-aos="fade-right"

     className="text-white  md:w-3/4  lg:w-1/2 mx-auto text-center">Your educational events, our expertise. We design memorable experiences that inspire and empower, fostering growth and success for all.</p>
    </div>
  );
};

export default Banner;
