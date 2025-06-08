import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiBook, FiEye, FiTarget } from "react-icons/fi";
import AboutImageSlider from "./AboutImageSlider";

const AboutSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Optimize AOS settings for mobile
    AOS.init({
      duration: window.innerWidth < 768 ? 800 : 1000, // Faster animation on mobile
      once: false,
      easing: "ease-out-cubic",
      offset: window.innerWidth < 768 ? 50 : 120, // Lower offset for mobile
      mirror: true,
      disable: "phone", // Disable AOS on phone and handle with custom animations
    });

    // Enhanced intersection observer with lower threshold for mobile
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: window.innerWidth < 768 ? 0.05 : 0.1,
        rootMargin: "50px",
      }
    );

    const sectionElement = document.querySelector("#about-section");
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section
      id="about-section"
      className="relative bg-white py-12 md:py-20 overflow-hidden transition-all duration-1000"
    >
      {/* Background with optimized mobile parallax */}
      <div
        className="absolute inset-0 bg-[#0d173b] opacity-5 transition-opacity duration-1000"
        style={{
          transform: isInView ? "translateY(0)" : "translateY(-10px)",
          opacity: isInView ? 0.05 : 0,
          transition: "transform 0.8s ease-out, opacity 1s ease-out",
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Responsive Section Header */}
        <div
          className="text-center mb-8 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <span className="text-[#0d173b] font-semibold text-base md:text-lg mb-2 md:mb-4 block">
            About Institution
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0d173b] mb-4 md:mb-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Shaping Future Innovators
          </h2>
          <div
            className="w-16 md:w-24 h-1 bg-[#0d173b] mx-auto rounded-full"
            data-aos="fade-up"
            data-aos-delay="150"
          ></div>
        </div>

        {/* Responsive Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 xl:gap-16">
          {/* Left Column */}
          <div
            className="space-y-6 md:space-y-12"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* About Card - Mobile Optimized */}
            <div
              className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg md:shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 group"
              data-aos="flip-left"
              data-aos-delay="50"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 mb-6">
                <div className="bg-[#0d173b] p-3 md:p-4 rounded-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <FiBook className="text-2xl md:text-3xl text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0d173b] mb-2 md:mb-3">
                    About CSIT
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Established in 1999, CSIT stands as a beacon of excellence
                    in technical education. Recognized as Chhattisgarh's premier
                    engineering institute, we combine academic rigor with
                    industry relevance to shape tomorrow's leaders.
                  </p>
                </div>
              </div>

              {/* Stats Grid - Mobile Optimized */}
              <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { value: "24+", label: "Years of Excellence" },
                  { value: "50+", label: "Industry Partners" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-[#f8f9fa] rounded-xl transition-all duration-500 hover:bg-[#0d173b] hover:text-white group/stat transform hover:scale-105"
                    data-aos="zoom-in"
                    data-aos-delay={150 + index * 100}
                  >
                    <div className="text-2xl font-bold text-[#0d173b] mb-2 group-hover/stat:text-white transition-all duration-300">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600 group-hover/stat:text-white/90 transition-all duration-300">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Slider - Mobile Optimized */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="transform transition-all duration-700 hover:scale-[1.01] md:hover:scale-[1.02]"
            >
              <AboutImageSlider />
            </div>
          </div>

          {/* Right Column - Mobile Optimized */}
          <div
            className="space-y-6 md:space-y-8"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {/* Vision Card */}
            <div
              className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg md:shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 group"
              data-aos="flip-right"
              data-aos-delay="100"
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#0d173b] p-4 rounded-xl mr-5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <FiEye className="text-3xl text-white transition-all duration-500 group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0d173b] mb-3 transition-all duration-300 group-hover:translate-x-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-800">
                    To cultivate global innovators through transformative
                    education, fostering intellectual growth that bridges
                    technological advancement with societal progress.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg md:shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 group"
              data-aos="flip-right"
              data-aos-delay="150"
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#0d173b] p-4 rounded-xl mr-5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <FiTarget className="text-3xl text-white transition-all duration-500 group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0d173b] mb-3 transition-all duration-300 group-hover:translate-x-2">
                    Our Mission
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    {[
                      "Deliver world-class technical education through innovative pedagogy",
                      "Foster research-driven environment with industry collaborations",
                      "Develop socially responsible technocrats with global perspective",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start transition-all duration-500 hover:pl-3 opacity-0 transform translate-x-4"
                        style={{
                          animation: isInView
                            ? `fadeInRight 0.8s forwards ${0.5 + index * 0.2}s`
                            : "none",
                        }}
                      >
                        <div className="w-2 h-2 bg-[#0d173b] rounded-full mt-2 mr-3 transition-all duration-300 hover:scale-150 hover:bg-blue-500"></div>
                        <span className="transition-all duration-300 hover:text-[#0d173b] font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div
              className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg md:shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold text-[#0d173b] mb-6 text-center">
                Our Impact
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "95%", label: "Placement Rate" },
                  { value: "200+", label: "Research Papers" },
                  { value: "15k+", label: "Alumni Network" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center transition-all duration-500 hover:scale-110"
                    data-aos="zoom-in"
                    data-aos-delay={450 + index * 100}
                  >
                    <div className="text-3xl font-bold text-[#0d173b] mb-1 transition-all duration-300 hover:text-blue-600">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated animations for better mobile performance */}
      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(5px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
