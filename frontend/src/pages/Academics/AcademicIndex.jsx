import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Aids from "./AIandDs/AI&DSIndex";
import Civil from "./CIVIL/CIVILIndex";
import Cse from "./CSE/CSEIndex";
import Eee from "./EEE/EEEIndex";
import It from "./IT/ITIndex";
import Mec from "./ME/MEIndex";
import Mechatronics from "./MECHATRONICS/MechatronicsIndex";

const sidebarLinks = [
  { name: "Computer Science and Engineering", path: "computer-science-and-engineering" },
  { name: "Artificial Intelligence & Data Science", path: "artificial-intelligence-and-data-science-engineering" },
  { name: "Civil Engineering", path: "civil-engineering" },
  { name: "Electrical and Electronics Engineering", path: "electrical-and-electronics-engineering" },
  { name: "Mechatronics Engineering", path: "mechatronics" },
  { name: "Mechanical Engineering", path: "mechanical-engineering" },
  { name: "Information Technology", path: "information-technology-engineering" },
];

export default function AcademicPage() {
  const location = useLocation();

  // Determine active section based on current path
  const getActiveSection = () => {
    const path = location.pathname.split('/').pop();
    const activeLink = sidebarLinks.find(link => link.path === path);
    return activeLink ? activeLink.name : "Computer Science and Engineering";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Full-width Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Academic Departments</h1>
          <p className="mt-3 text-base md:text-lg font-light">Explore our diverse range of engineering programs and discover your path to excellence</p>
          <div className="mt-4 h-0.5 w-16 bg-white"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 py-6">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 lg:flex-shrink-0">
              <Sidebar
                links={sidebarLinks}
                activeSection={getActiveSection()}
                basePath="/academics"
              />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-h-[calc(100vh-400px)] bg-white rounded-lg shadow-sm p-4 md:p-6">
              <Routes>
                <Route path="computer-science-and-engineering" element={<Cse />} />
                <Route path="artificial-intelligence-and-data-science-engineering" element={<Aids />} />
                <Route path="civil-engineering" element={<Civil />} />
                <Route path="electrical-and-electronics-engineering" element={<Eee />} />
                <Route path="mechatronics" element={<Mechatronics />} />
                <Route path="mechanical-engineering" element={<Mec />} />
                <Route path="information-technology-engineering" element={<It />} />
                <Route path="/" element={<Navigate to="computer-science-and-engineering" replace />} />
                <Route path="*" element={<Navigate to="computer-science-and-engineering" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
