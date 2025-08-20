import React, { useState } from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/csitlogo.png";
import Image1 from "../assets/Aicte-logo.png";
import Image2 from "../assets/Institutions innovation council.png";
import Image3 from "../assets/ISO_logo.png";
import Image4 from "../assets/CSVTU.png";
import Image5 from "../assets/dataquest.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="w-full">
      {/* Top Navbar with improved mobile responsiveness */}
      <div className="bg-gray-200 text-white py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Mobile Layout (xs to sm) */}
          <div className="block sm:hidden">
            {/* Mobile Top Row - Logo and Form Icon */}
            <div className="flex items-center justify-between mb-3">
              <Link
                to="/"
                className="flex items-center space-x-2 hover:opacity-90 transition-opacity flex-1"
              >
                <img
                  src={Logo}
                  alt="CSIT Logo"
                  className="w-12 h-12 rounded-full flex-shrink-0"
                />
                <div className="text-left min-w-0 flex-1">
                  <h1 className="text-sm font-serif text-black leading-tight">
                    Chhatrapati Shivaji Institute of Technology
                  </h1>
                  <p className="text-xs text-black opacity-80 leading-tight">
                    Shivaji Nagar, Baload Road Durg, CG 491001
                  </p>
                </div>
              </Link>

              {/* Mobile Form Icon */}
              <Link
                to="/enquiry-form"
                className="flex flex-col items-center px-2 py-1 text-[#0d173b] hover:text-[#1a2d5e] transition-colors flex-shrink-0 ml-2"
                onMouseEnter={() => handleDropdownHover("directory")}
                onMouseLeave={handleDropdownLeave}
              >
                <User className="h-4 w-4" />
                <span className="text-xs font-semibold mt-0.5 whitespace-nowrap">
                  Form
                </span>
              </Link>
            </div>

            {/* Mobile Bottom Row - Banner Images */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                <img
                  src={Image1}
                  alt="AICTE Logo"
                  className="h-8 w-8 rounded-md object-contain hover:scale-105 transition-transform flex-shrink-0"
                />
                <img
                  src={Image2}
                  alt="IIC Logo"
                  className="h-8 w-8 rounded-md object-contain hover:scale-105 transition-transform flex-shrink-0"
                />
                <img
                  src={Image3}
                  alt="ISO Logo"
                  className="h-8 w-8 rounded-md object-contain hover:scale-105 transition-transform flex-shrink-0"
                />
                <img
                  src={Image4}
                  alt="CSVTU Logo"
                  className="h-8 w-8 rounded-md object-contain hover:scale-105 transition-transform flex-shrink-0"
                />
                <img
                  src={Image5}
                  alt="DataQuest Logo"
                  className="h-8 w-8 rounded-md object-contain hover:scale-105 transition-transform flex-shrink-0"
                />
              </div>
            </div>
          </div>

          {/* Tablet Layout (sm to md) */}
          <div className="hidden sm:block md:hidden">
            <div className="flex items-center justify-between">
              {/* Logo and Title */}
              <Link
                to="/"
                className="flex items-center space-x-3 hover:opacity-90 transition-opacity flex-1 min-w-0"
              >
                <img
                  src={Logo}
                  alt="CSIT Logo"
                  className="w-16 h-16 rounded-full flex-shrink-0"
                />
                <div className="text-left min-w-0 flex-1">
                  <h1 className="text-lg md:text-xl font-serif text-black leading-tight">
                    Chhatrapati Shivaji Institute of Technology
                  </h1>
                  <p className="text-xs text-black opacity-80">
                    Shivaji Nagar, Baload Road Durg, Chhattisgarh 491001
                  </p>
                </div>
              </Link>

              {/* Right Side - Images and Form */}
              <div className="flex items-center space-x-3 flex-shrink-0">
                {/* Banner Images */}
                <div className="flex items-center gap-2">
                  <img
                    src={Image1}
                    alt="AICTE Logo"
                    className="h-10 w-10 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image2}
                    alt="IIC Logo"
                    className="h-10 w-10 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image3}
                    alt="ISO Logo"
                    className="h-10 w-10 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image4}
                    alt="CSVTU Logo"
                    className="h-10 w-10 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image5}
                    alt="DataQuest Logo"
                    className="h-10 w-10 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                </div>

                {/* Form Icon */}
                <Link
                  to="/enquiry-form"
                  className="flex flex-col items-center px-3 py-2 text-[#0d173b] hover:text-[#1a2d5e] transition-colors"
                  onMouseEnter={() => handleDropdownHover("directory")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <User className="h-5 w-5" />
                  <span className="text-xs font-semibold mt-1">
                    Enquiry Form
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout (md and above) */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between">
              {/* Logo and Title */}
              <Link
                to="/"
                className="flex items-center space-x-4 md:space-x-6 hover:opacity-90 transition-opacity flex-1 min-w-0"
              >
                <img
                  src={Logo}
                  alt="CSIT Logo"
                  className="w-32 md:w-40 h-auto rounded-full flex-shrink-0"
                />
                <div className="text-left min-w-0 flex-1">
                  <h1 className="text-xl md:text-4xl text-black font-serif leading-tight">
                    Chhatrapati Shivaji Institute of Technology
                  </h1>
                  <p className="text-xs md:text-sm text-black opacity-80">
                    Shivaji Nagar, Baload Road Durg, Chhattisgarh 491001
                  </p>
                </div>
              </Link>

              {/* Right Side - Images and Form */}
              <div className="flex items-center space-x-4 flex-shrink-0">
                {/* Banner Images */}
                <div className="flex items-center gap-2 md:gap-4">
                  <img
                    src={Image1}
                    alt="AICTE Logo"
                    className="h-16 w-16 md:h-18 md:w-18 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image2}
                    alt="IIC Logo"
                    className="h-16 w-16 md:h-18 md:w-18 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image3}
                    alt="ISO Logo"
                    className="h-16 w-16 md:h-18 md:w-18 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image4}
                    alt="CSVTU Logo"
                    className="h-16 w-16 md:h-18 md:w-18 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                  <img
                    src={Image5}
                    alt="DataQuest Logo"
                    className="h-16 w-16 md:h-18 md:w-18 rounded-md object-contain hover:scale-105 transition-transform"
                  />
                </div>

                {/* Form Icon */}
                <Link
                  to="/enquiry-form"
                  className="flex flex-col items-center px-4 py-2 text-[#0d173b] hover:text-[#1a2d5e] transition-colors border-l border-gray-300 ml-4"
                  onMouseEnter={() => handleDropdownHover("directory")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <User className="h-5 w-5" />
                  <span className="text-xs font-semibold mt-1">
                    Enquiry Form
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu fallback (if needed for other functionality) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            {/* Other mobile menu items if needed */}
          </div>
        </div>
      )}

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Header;
