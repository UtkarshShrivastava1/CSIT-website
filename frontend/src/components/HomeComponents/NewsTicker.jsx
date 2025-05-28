import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const NewsTicker = () => {
  return (
    <div className="bg-[#0d173b] text-white py-6 overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          speed: 3000,
        }}
        loop={true}
        modules={[Autoplay]}
        className="news-ticker"
      >
        <SwiperSlide>
          <p className="text-center">Admissions Open for Session 2025-26</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-center">Register for the Tech Seminar - 12th July</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-center">
            Join an institution renowned for academic excellence, cutting-edge
            research, and state-of-the-art facilities. Join us on a journey to
            professional success and innovation.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewsTicker;