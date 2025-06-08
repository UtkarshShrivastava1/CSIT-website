// File: pages/About/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar({ links, activeSection, basePath }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Function to handle navigation and scroll to top with smooth transitions
  const handleNavigation = (path) => {
    // Prevent multiple clicks during navigation
    if (isNavigating) return;

    // Set navigating state to true
    setIsNavigating(true);

    // Add a small delay before navigation to allow for transition effects
    setTimeout(() => {
      // Navigate to the new path
      navigate(`${basePath}/${path}`);

      // Scroll to the top of the page with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Reset navigating state after a short delay
      setTimeout(() => {
        setIsNavigating(false);
      }, 300);
    }, 100);
  };

  // Reset navigating state when location changes
  useEffect(() => {
    setIsNavigating(false);
  }, [location]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile tab view
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden z-50">
        <div className="flex overflow-x-auto hide-scrollbar">
          {links.map((link, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation(link.path)}
              disabled={isNavigating}
              className={`flex-1 min-w-[100px] py-3 px-2 text-center text-xs transition-all duration-200
                ${
                  activeSection === link.name
                    ? "text-[#0d173b] font-medium border-t-2 border-[#0d173b]"
                    : "text-gray-600"
                }
                ${isNavigating ? "opacity-70 cursor-wait" : ""}`}
            >
              <span className="block truncate">{link.name}</span>
              {activeSection === link.name && (
                <motion.div
                  className="mx-auto mt-1 w-1 h-1 rounded-full bg-[#0d173b]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Desktop sidebar view
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden w-full md:w-64 min-h-[calc(100vh-400px)] sticky top-20 left-0">
      <div className="bg-[#0d173b] text-white py-3 px-4 font-medium text-base md:text-lg">
        Navigation
      </div>
      <ul className="w-full">
        {links.map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={() => handleNavigation(link.path)}
              disabled={isNavigating}
              className={`w-full text-left px-3 md:px-4 py-2 md:py-3 transition-all duration-200 flex items-center border-l-2 text-sm md:text-base
                ${
                  activeSection === link.name
                    ? "border-[#0d173b] bg-gray-50 text-[#0d173b] font-medium"
                    : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#0d173b]"
                }
                ${isNavigating ? "opacity-70 cursor-wait" : ""}`}
            >
              <span>{link.name}</span>
              {activeSection === link.name && (
                <motion.div
                  className="ml-auto w-2 h-2 rounded-full bg-[#0d173b]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
