import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Quote, Star, GraduationCap } from "lucide-react";

// Import testimonial images
import Testimonials1 from "../../assets/Testimonials/CSIT/ID-1.jpeg";
import Testimonials2 from "../../assets/Testimonials/CSIT/ID-2.jpeg";
import Testimonials3 from "../../assets/Testimonials/CSIT/ID-3.jpeg";
import Testimonials4 from "../../assets/Testimonials/CSIT/ID-4.jpeg";
import Testimonials5 from "../../assets/Testimonials/CSIT/ID-5.jpeg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Empowered by Knowledge and Faculty Support",
      description:
        "I had a good time, learning and enhancing my skills, with the faculty as our upper hand for the moral and support.",
      name: "SAKSHI VERMA",
      program: "Computer Science and Engineering",
      rating: 5,
      image: Testimonials1,
    },
    {
      id: 2,
      quote: "Four Years of Learning, Growth, and Joy at CSIT",
      description:
        "CSIT is one of the best institutions where we spent four wonderful years enjoying both learning and fun on campus.",
      name: "GOVIND KUMAR SAHU",
      program: "Mechanical Engineering",
      rating: 5,
      image: Testimonials2,
    },
    {
      id: 3,
      quote: "From Mechanical Engineering to IT Excellence at TCS",
      description:
        "With a strong Mechanical Engineering foundation, I seamlessly transitioned into IT and now excel as a System Engineer at TCS.",
      name: "SAURABH RAHANGDALE",
      program: "Mechanical Engineering",
      rating: 5,
      image: Testimonials3,
    },
    {
      id: 4,
      quote:
        "Growing with CSE Foundation to Senior Developer at Kinematic Food Tech",
      description:
        "A strong CSE foundation and continuous learning helped me grow into a Senior Software Developer at Kinematic Food Tech Pvt. Ltd.",
      name: "DURLABHA DESHMUKH",
      program: "Computer Science and Engineering",
      rating: 5,
      image: Testimonials4,
    },
    {
      id: 5,
      quote: "From Campus Life to Clarity: My Path to an MBA with Distinction",
      description:
        "My journey at this institute shaped me with resilience, inspired my passion for HR, and guided me to earn an MBA with distinction.",
      name: "UTPALA GHOSH",
      program: "Computer Science and Engineering",
      rating: 5,
      image: Testimonials5,
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex justify-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={`${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#0d173b]/5"></div>
          <h2 className="relative inline-block text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d173b]">
            Student <span className="text-[#0d173b]/70">Testimonials</span>
          </h2>
          <div className="mt-3 sm:mt-4 flex justify-center">
            <div className="w-12 sm:w-16 h-1 bg-[#0d173b]"></div>
          </div>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 px-4">
            Discover what our students say about their transformative journey at
            our institution
          </p>
        </div>

        {/* Swiper Section */}
        <div className="relative">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Mobile Layout */}
                  <div className="block sm:hidden">
                    {/* Mobile Header */}
                    <div className="bg-gradient-to-br from-[#0d173b] to-blue-900 p-6 text-center">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white border-opacity-20 shadow-lg mx-auto mb-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-white text-lg font-bold mb-1">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-blue-200 mb-2">
                        <GraduationCap
                          size={12}
                          className="opacity-70 flex-shrink-0"
                        />
                        <p className="text-xs leading-tight">
                          {testimonial.program}
                        </p>
                      </div>
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Mobile Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <Quote
                          size={24}
                          className="text-[#0d173b] opacity-20 mx-auto"
                        />
                      </div>
                      <p className="text-lg font-medium mb-3 text-[#0d173b] leading-relaxed text-center">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed text-center">
                        {testimonial.description}
                      </p>
                      <div className="h-1 w-12 bg-[#0d173b] rounded-full opacity-30 mx-auto mt-4"></div>
                    </div>
                  </div>

                  {/* Desktop/Tablet Layout */}
                  <div className="hidden sm:flex">
                    <div className="w-2/5 bg-gradient-to-br from-[#0d173b] to-blue-900 p-6 flex flex-col items-center justify-center text-center">
                      <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white border-opacity-20 shadow-lg mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-white text-base lg:text-lg font-bold mb-1">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-blue-200 mb-2">
                        <GraduationCap
                          size={14}
                          className="opacity-70 flex-shrink-0"
                        />
                        <p className="text-xs lg:text-sm leading-tight">
                          {testimonial.program}
                        </p>
                      </div>
                      <StarRating rating={testimonial.rating} />
                    </div>

                    <div className="w-3/5 p-4 lg:p-6 flex flex-col justify-center">
                      <div className="mb-3 lg:mb-4">
                        <Quote
                          size={28}
                          className="text-[#0d173b] opacity-20"
                        />
                      </div>
                      <p className="text-lg lg:text-xl font-medium mb-3 lg:mb-4 text-[#0d173b] leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-sm lg:text-base text-slate-600 mb-4 lg:mb-6 leading-relaxed">
                        {testimonial.description}
                      </p>
                      <div className="h-1 w-12 lg:w-16 bg-[#0d173b] rounded-full opacity-30"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .testimonials-swiper .swiper-pagination-bullet {
          background: #0d173b;
          opacity: 0.3;
          width: 8px;
          height: 8px;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        @media (max-width: 640px) {
          .testimonials-swiper .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            margin: 0 3px;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
