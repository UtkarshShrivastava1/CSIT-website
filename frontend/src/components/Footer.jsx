import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../assets/csitlogo.webp";
const MandatoryDisclosure = "https://drive.google.com/file/d/15vPDhJU1cn8VdzTpXYMTZlp0LtAfPbfR/view?usp=sharing";
// import AboutPage from '../pages/About/Introduction';

const SchoolFooter = () => {
  return (
    <footer className="bg-[#0d173b] text-white font-sans">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Top section with logo and social media */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 border-b border-gray-700 pb-8">
          <div className="flex items-center mb-8 lg:mb-0">
            <img
              src={Logo}
              alt="Chhatrapati Shivaji Institute of Technology Logo"
              className="w-16 h-auto mr-4"
            />
            <div>
              <h2 className="text-xl font-bold text-white">CSIT DURG</h2>
              <p className="text-gray-300 text-sm">
                Chhatrapati Shivaji Institute of Technology
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link
              to="/external/instagram"
              className="bg-blue bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition duration-300"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="h-5 w-5 text-white"
                style={{ fontSize: "1.25rem" }}
              />
            </Link>
            <Link
              to="/external/facebook"
              className="bg-blue bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition duration-300"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="h-5 w-5 text-white"
                style={{ fontSize: "1.25rem" }}
              />
            </Link>
            <Link
              to="/external/youtube"
              className="bg-blue bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition duration-300"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="h-5 w-5 text-white"
                style={{ fontSize: "1.25rem" }}
              />
            </Link>
            <Link
              to="/external/linkedin"
              className="bg-blue bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="h-5 w-5 text-white"
                style={{ fontSize: "1.25rem" }}
              />
            </Link>
            <Link
              to="/external/twitter"
              className="bg-blue bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition duration-300"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/x.svg" alt="Twitter " class="h-7 w-7 text-white" />
              {/* <XTwitterIcon className="h-5 w-5 text-white" /> */}
            </Link>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              <span className="border-b-2 border-blue-400 pb-1">About</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  About CSIT
                </Link>
              </li>
              <li>
                <Link
                  to="/admission/courses-offered"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Courses Offered
                </Link>
              </li>
              <li>
                <Link
                  to="/more/anti-ragging"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Anti-Ragging
                </Link>
              </li>
              <li>
                <Link
                  to="/campus/initiatives?tab=iqac"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  IQAC
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/more/student-affairs?tab=associations"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Students Associations
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/more/student-affairs?tab=industry"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Industrial Visit
                </Link>
              </li> */}
              <li>
                <Link
                  to="/more/professional-bodies"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Professional Bodies
                </Link>
              </li>
              <li>
                <Link
                  to="/campus/initiatives?tab=nss"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  National Service Scheme
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/more/newsletter"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  News Letter
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Academics Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              <span className="border-b-2 border-blue-400 pb-1">Academics</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/more/calendar"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Academic Calendar
                </Link>
              </li>

              <li>
                <Link
                  to="/admission/admission-process"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Admission Processes
                </Link>
              </li>
              <li>
                <Link
                  to="/campus/initiatives?tab=iic"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Institutional Innovation Council
                </Link>
              </li>
              <li>
                <Link
                  to="/campus/initiatives?tab=incubation"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Incubation Cell
                </Link>
              </li>
              <li>
                <Link
                  to="/campus/initiatives?tab=nptel"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  NPTEL
                </Link>
              </li>
              <li>
                <Link
                  to="/campus/NIRF24"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  NIRF 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Mandatory Information Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              <span className="border-b-2 border-blue-400 pb-1">
                Mandatory Information
              </span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={MandatoryDisclosure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Mandatory Disclosure
                </a>
              </li>
              <li>
                <Link
                  to="/more/gallery"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Gallary
                </Link>
              </li>
              <li>
                <Link
                  to="/more/grievances"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Grievances
                </Link>
              </li>
              <li>
                <Link
                  to="/funds/funds-grants"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  FUNDS & GRANTS
                </Link>
              </li>
              <li>
                <a
                  href="https://csvtu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  CSVTU Link
                </a>
              </li>
              <li>
                <Link
                  to="/more/achievements"
                  className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1"
                >
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              <span className="border-b-2 border-blue-400 pb-1">
                Contact Us
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <a
                  href="https://goo.gl/maps/YourMapLink" // Replace with actual Google Maps link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300 w-full"
                  aria-label="Visit our location on Google Maps"
                >
                  <div className="bg-blue-900 p-2 rounded-md mr-3 flex-shrink-0 mt-1 group-hover:bg-blue-800">
                    <HiLocationMarker className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-blue-300 transition duration-300">
                    Shivaji Nagar, Balod Road Durg, Chhattisgarh 491001
                  </span>
                </a>
              </li>

              <li className="flex items-center group">
                <a
                  href="mailto:registrar@csitdurg.in"
                  className="flex items-center hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300 w-full"
                  aria-label="Send email to registrar"
                >
                  <div className="bg-blue-900 p-2 rounded-md mr-3 flex-shrink-0 group-hover:bg-blue-800">
                    <HiMail className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-blue-300 transition duration-300">
                    registrar@csitdurg.in
                  </span>
                </a>
              </li>

              <li className="flex items-center group">
                <a
                  href="mailto:info@csitdurg.in"
                  className="flex items-center hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300 w-full"
                  aria-label="Send email to info"
                >
                  <div className="bg-blue-900 p-2 rounded-md mr-3 flex-shrink-0 group-hover:bg-blue-800">
                    <HiMail className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-blue-300 transition duration-300">
                    info@csitdurg.in
                  </span>
                </a>
              </li>

              <li className="flex items-center group">
                <a
                  href="tel:+919826199557"
                  className="flex items-center hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300 w-full"
                  aria-label="Call our primary contact number"
                >
                  <div className="bg-blue-900 p-2 rounded-md mr-3 flex-shrink-0 group-hover:bg-blue-800">
                    <HiPhone className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-blue-300 transition duration-300">
                    +91 98261 99557
                  </span>
                </a>
              </li>

              <li className="flex items-center group">
                <a
                  href="tel:+918966000102"
                  className="flex items-center hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300 w-full"
                  aria-label="Call our secondary contact number"
                >
                  <div className="bg-blue-900 p-2 rounded-md mr-3 flex-shrink-0 group-hover:bg-blue-800">
                    <HiPhone className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-blue-300 transition duration-300">
                    +91 89660 00102
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black bg-opacity-30">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-gray-400 mb-2 md:mb-0">
            Copyright © 2026 All rights reserved By CSIT
          </div>
          <div className="flex space-x-8 justify-end">
            {/* <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-gray-200 transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-gray-200 transition duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/sitemap"
              className="text-gray-400 hover:text-gray-200 transition duration-300"
            >
              Sitemap
            </Link>  */}
            <Link
              to="/admin-login"
              className="text-gray-400 hover:text-gray-200 transition duration-300"
            >
              Admin
            </Link>
          </div>
          <div className="text-gray-400 mt-2 md:mt-0">
            Powered by{" "}
            <Link
              to="/external/zager"
              className="text-blue-400 hover:text-blue-300 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zager Digital Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SchoolFooter;
