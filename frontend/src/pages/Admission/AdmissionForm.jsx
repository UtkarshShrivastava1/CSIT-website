"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../../../services/api";
import FormImage from "../../assets/FormImage.png";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

gsap.registerPlugin(ScrollTrigger);

function AdmissionForm() {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;
    gsap.set(leftColumn, { x: -200, opacity: 0 });
    gsap.set(rightColumn, { x: 200, opacity: 0 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      onEnter: () => {
        gsap.to(leftColumn, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });
        gsap.to(rightColumn, {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });
      },
    });

    return () => {
      gsap.killTweensOf(leftColumn);
      gsap.killTweensOf(rightColumn);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await api.post("/admission/submit", formData);

      if (response.data) {
        setSuccessMessage(
          "Your admission form has been submitted successfully!"
        );
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
        });
      }
    } catch (error) {
      console.error("Error submitting admission form:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "Unable to submit form. Please try again later or contact support."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full">
        <Navbar />
      </div>

      <div className="bg-white min-h-screen overflow-hidden">
        {/* Hero Section - More responsive padding */}
        <div className="h-auto md:h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative py-8 md:py-0">
          <div className="absolute inset-0 flex items-center px-4 md:px-8">
            <div className="w-full">
              <h1 className="text-2xl md:text-4xl font-bold text-white text-center md:text-left">
                Admission Form
              </h1>
              <p className="text-gray-200 text-sm mt-2 text-center md:text-left">
                Fill in your details to apply for admission
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Improved mobile layout */}
        <div
          ref={containerRef}
          className="container mx-auto px-4 py-6 md:py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Better mobile scaling */}
            <div
              ref={leftColumnRef}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative w-full max-w-md">
                <img
                  src={FormImage}
                  alt="Admission Form"
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d173b]/90 rounded-2xl">
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                    <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 text-white drop-shadow-lg">
                      Shape Your Future at CSIT
                    </h2>
                    <p className="text-sm md:text-base text-gray-100 drop-shadow-md leading-relaxed">
                      Join us for quality education and excellent career
                      opportunities
                    </p>
                    <div className="h-1 w-16 md:w-20 bg-[#ffbe00] mt-3 md:mt-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form improvements */}
            <div
              ref={rightColumnRef}
              className="w-full max-w-md mx-auto md:max-w-none"
            >
              <div className="bg-white rounded-lg p-5 md:p-8 shadow-lg">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
                  Quick Admission Enquiry
                </h2>
                {/* Messages - Better mobile display */}
                {successMessage && (
                  <p className="text-green-600 font-semibold mb-4 text-sm md:text-base text-center md:text-left">
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-red-600 font-semibold mb-4 text-sm md:text-base text-center md:text-left">
                    {errorMessage}
                  </p>
                )}
                {/* Form - Improved input styling */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name*"
                      required
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors text-base"
                      onChange={handleChange}
                      value={formData.fullName}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      required
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors text-base"
                      onChange={handleChange}
                      value={formData.email}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      required
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors text-base"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City*"
                      required
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors text-base"
                      onChange={handleChange}
                      value={formData.city}
                    />
                  </div>
                  {/* Submit Button - Better mobile styling */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 bg-[#ffbe00] text-white rounded-lg hover:bg-[#e5ab00] transition-colors font-semibold text-base"
                      disabled={loading}
                    >
                      {loading ? "SUBMITTING..." : "SUBMIT"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmissionForm;
