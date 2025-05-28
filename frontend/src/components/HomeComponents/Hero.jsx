import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import csitBanner from "../../assets/csitbanner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom CSS for enhancing the arrow buttons
const customStyles = `
  .hero-swiper .swiper-button-next,
  .hero-swiper .swiper-button-prev {
    background-color: rgba(255, 255, 255, 0.7);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    color: #0d173b;
    font-weight: bold;
  }
  
  .hero-swiper .swiper-button-next:hover,
  .hero-swiper .swiper-button-prev:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  .hero-swiper .swiper-button-next:after,
  .hero-swiper .swiper-button-prev:after {
    font-size: 18px;
  }
  
  .hero-swiper .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
  
  .hero-swiper .swiper-pagination-bullet-active {
    background-color: #0d173b;
  }
`;

const Hero = () => {
  const slides = [
    {
      image: csitBanner,
      alt: "College Campus"
    },
    {
      image: csitBanner,
      alt: "College Facilities"
    },
    {
      image: csitBanner,
      alt: "Student Activities"
    }
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <style>{customStyles}</style>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="w-full max-w-[1920px] mx-auto">
            <img
              src={slide.image}
              alt={slide.alt}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "80vh" }}
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;