import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AboutAssociation from "./AboutAssociation";
import Activities from "./Activities";
import Presence from "./Presence";
import RegisteredAssociation from "./RegisteredAssociation";
import TeamMembers from "./TeamMembers";

const sidebarLinks = [
  { name: "About Association", path: "about-association" },
  { name: "Activities", path: "activities" },
  { name: "Presence", path: "presence" },
  { name: "Team Members", path: "team-members" },
  { name: "Registered Association", path: "registered-association" },
];

export default function AlumniPage() {
  const location = useLocation();

  // Determine active section based on current path
  const getActiveSection = () => {
    const path = location.pathname.split("/").pop();
    const activeLink = sidebarLinks.find((link) => link.path === path);
    return activeLink ? activeLink.name : "About Association";
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
          <h1 className="text-3xl md:text-4xl font-bold">Alumni</h1>
          <p className="mt-3 text-base md:text-lg font-light">
            Welcome to the CSIT Alumni Association.
          </p>
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
                basePath="/alumni"
              />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-h-[calc(100vh-400px)] bg-white rounded-lg shadow-sm p-4 md:p-6">
              <Routes>
                <Route path="about-association" element={<AboutAssociation />} />
                <Route path="activities" element={<Activities />} />
                <Route path="presence" element={<Presence />} />
                <Route path="registered-association" element={<RegisteredAssociation />} />
                <Route path="team-members" element={<TeamMembers />} />
                <Route path="/" element={<Navigate to="about-association" replace />} />
                <Route path="*" element={<Navigate to="about-association" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
