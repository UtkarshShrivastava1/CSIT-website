import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AdmissionProcess from "./AdmissionProcess";
import CoursesOffered from "./CoursesOffered";
import HelpDesk from "./HelpDesk";
import Leaflet from "./Leaflet";
import WhyChooseCSIT from "./WhyChooseCSIT"; // 👈 New Component
import Scholarships from "./Scholarships"; // 👈 New Component

const sidebarLinks = [
  { name: "Why Choose CSIT?", path: "why-choose" }, // 👈 Inserted
  { name: "Courses Offered", path: "courses-offered" },
  { name: "Admission Process", path: "admission-process" },
  { name: "Scholarships", path: "scholarships" }, // 👈 Inserted
  { name: "Leaflet", path: "leaflet" },
  { name: "Help Desk", path: "help-desk" },
];

export default function AdmissionPage() {
  const location = useLocation();

  const getActiveSection = () => {
    const path = location.pathname.split("/").pop();
    const activeLink = sidebarLinks.find((link) => link.path === path);
    return activeLink ? activeLink.name : "Why Choose CSIT?";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full">
        <Navbar />
      </div>

      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Admissions</h1>
          <p className="mt-3 text-base md:text-lg font-light">
            Take the first step towards shaping your future at CSIT. Apply now for an enriching educational journey.
          </p>
          <div className="mt-4 h-0.5 w-16 bg-white"></div>
        </div>
      </div>

      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 py-6">
            <aside className="w-full lg:w-64 lg:flex-shrink-0">
              <Sidebar
                links={sidebarLinks}
                activeSection={getActiveSection()}
                basePath="/admission"
              />
            </aside>

            <main className="flex-1 min-h-[calc(100vh-400px)] bg-white rounded-lg shadow-sm p-4 md:p-6">
              <Routes>
                <Route path="why-choose" element={<WhyChooseCSIT />} /> {/* 👈 Managed Route */}
                <Route path="courses-offered" element={<CoursesOffered />} />
                <Route path="admission-process" element={<AdmissionProcess />} />
                <Route path="scholarships" element={<Scholarships />} /> {/* 👈 Managed Route */}
                <Route path="leaflet" element={<Leaflet />} />
                <Route path="help-desk" element={<HelpDesk />} />
                <Route path="/" element={<Navigate to="why-choose" replace />} />
                <Route path="*" element={<Navigate to="why-choose" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}