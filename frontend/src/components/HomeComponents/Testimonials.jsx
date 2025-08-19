import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
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
    <div className="flex space-x-1">
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
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="relative text-center mb-16">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#0d173b]/5"></div>
          <h2 className="relative inline-block text-4xl font-bold text-[#0d173b]">
            Student <span className="text-[#0d173b]/70">Testimonials</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#0d173b]"></div>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Discover what our students say about their transformative journey at
            our institution
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={600}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              style={{ width: "70%", maxWidth: "800px" }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 bg-gradient-to-br from-[#0d173b] to-blue-900 p-6 relative flex flex-col items-center justify-center text-center">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white border-opacity-20 shadow-lg mb-4">
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
                      <GraduationCap size={14} className="opacity-70" />
                      <p className="text-sm">{testimonial.program}</p>
                    </div>
                    <div className="mt-2 mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>

                  <div className="md:w-3/5 p-6 flex flex-col justify-center">
                    <div className="mb-4">
                      <Quote size={32} className="text-[#0d173b] opacity-20" />
                    </div>
                    <p className="text-xl font-medium mb-4 text-[#0d173b] leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-base text-slate-600 mb-6 leading-relaxed">
                      {testimonial.description}
                    </p>
                    <div className="h-1 w-16 bg-[#0d173b] rounded-full opacity-30"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
