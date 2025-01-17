
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

const Categorys = () => {
  const { categorys } = useSelector((state) => state.home);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdtablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 640, min: 0 },
      items: 4,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 4,
    },
  };

  return (
    <div className="w-[85%] lg:w-[90%] mx-auto relative bg-white shadow-custom rounded-lg">
      {categorys ? (
        <Carousel
          autoPlay={true}
          infinite={true}
          arrows={false}
          responsive={responsive}
          transitionDuration={500}
        >
          {categorys.map((c, i) => (
            <Link className="block" key={i} to="#">
              <div className="w-full h-full relative p-0 flex flex-col items-center justify-center">
              <img
                src={c.image}
                alt={c.name} // Improved accessibility
                className="w-full h-full sm:w-[70px] sm:h-[70px] rounded-full" // Added responsive classes for small screens
              />
              <div className="w-full flex justify-center"> {/* Added mt-2 for spacing */}
                <span className="text-slate-500 text-base sm:text-sm xs:text-xs">
                  {c.name}
                </span>
              </div>
            </div>
            </Link>
          ))}
        </Carousel>
      ) : (
        <div className="flex gap-3">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <Skeleton styles={"h-[185px] w-full "} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categorys;

/////////////////////////////////
/*import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

const Categorys = () => {
  const { categorys } = useSelector((state) => state.home);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdtablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-[87%] mx-auto relative">
      {categorys ? (
        <Carousel
          autoPlay={true}
          infinite={true}
          arrows={true}
          responsive={responsive}
          transitionDuration={500}
        >
          {categorys.map((c, i) => (
            <Link className="h-[185px] border block" key={i} to="#">
              <div className="w-full h-full relative p-3">
                <img src={c.image} alt="image" className="w-full h-full" />
                <div className="absolute bottom-6 w-full mx-auto font-bold left-0 flex justify-center items-center">
                  <span className="py-[2px] px-6 bg-[#3330305d]  text-white">{c.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      ) : (
        <div className="flex gap-3">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <Skeleton styles={"h-[185px] w-full "} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categorys;*/
