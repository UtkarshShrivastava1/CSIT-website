import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Introduction from "./Intro";

import OfficeBearersAndPolicies from "./OB&Policies";
import Projects from "./Projects";
import Publications from "./Publications";
import IntellectualPropertyRights from "./IPR";
import Activities from "./Activities"
import ResearchSupportGrants from "./RS&Grants"
// import IndustryInteraction from "./IndustryInteraction";
// import ExtracurricularActivities from "./ExtracurricularActivities";

const sidebarLinks = [
  { name: "Introduction", path: "introduction" },
  { name: "Office Bearers & Policies", path: "office-bearers-and-policies" },
  { name: "Projects", path: "projects" },
  { name: " Publications", path: "publications" },
  { name: "Intellectual Property Rights", path: "IPR" },
  {name:"Activities",path:"Activities"},
  {name:"Research Support & Grants",path:"RS&Grants"},
//   { name: "Extracurricular Activities", path: "extracurricular-activities" },
];

export default function RDSidebar() {
  const location = useLocation();

  const getActiveSection = () => {
    const path = location.pathname.split("/").pop();
    const activeLink = sidebarLinks.find((link) => link.path === path);
    return activeLink ? activeLink.name : "Introduction";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full">
        <Navbar />
      </div>

      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Students Clubs</h1>
          <p className="mt-3 text-base md:text-lg font-light">
            Empowering students through leadership, creativity, and collaboration
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
                basePath="/R-D"
              />
            </aside>

            <main className="flex-1 min-h-[calc(100vh-400px)] bg-white rounded-lg shadow-sm p-4 md:p-6">
              <Routes>
                <Route path="introduction" element={<Introduction />} />
                <Route path="office-bearers-and-policies" element={<OfficeBearersAndPolicies />} />
                <Route path="projects" element={<Projects />} />
                <Route path="publications" element={<Publications />} />
                <Route path="IPR" element={< IntellectualPropertyRights/>} />
                <Route path="Activities" element={< Activities/>} />
                <Route path="RS&Grants" element={< ResearchSupportGrants/>} />
                {/* 
           
                <Route path="development-program" element={<DevelopmentProgram />} />
                <Route path="industry-interaction" element={<IndustryInteraction />} />
                <Route path="extracurricular-activities" element={<ExtracurricularActivities />} /> */}
                <Route index element={<Navigate to="introduction" replace />} />
                <Route path="*" element={<Navigate to="introduction" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}