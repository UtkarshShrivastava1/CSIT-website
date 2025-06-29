import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import PatentsPage from './Patents';
import ConferencePage from './ConferenceWorkshop';
import PublicationsPage from './Publications';
import ProjectsPage from './Projects';
import FundsGrantsPage from './FundsAndGrants';

const sidebarLinks = [
  { name: 'Patents', path: 'patents' },
  { name: 'ConferenceWorkshop', path: 'conference-workshop' },
  { name: 'Publications', path: 'publications' },
  { name: 'Projects', path: 'projects' },
  { name: 'FundsGrants', path: 'funds-grants' },
];

export default function FundsPage() {
  const location = useLocation();
  
  // Determine active section based on current path
  const getActiveSection = () => {
    const path = location.pathname.split('/').pop();
    const activeLink = sidebarLinks.find(link => link.path === path);
    return activeLink ? activeLink.name : 'Patents';
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
          <h1 className="text-3xl md:text-4xl font-bold">Funds</h1>
          <p className="mt-3 text-base md:text-lg font-light">Shaping the future through excellence in technical education since 1999</p>
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
                basePath="/funds"
              />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-h-[calc(100vh-400px)] bg-white rounded-lg shadow-sm p-4 md:p-6">
              <Routes>
                <Route path="patents" element={<PatentsPage />} />
                <Route path="conference-workshop" element={<ConferencePage />} />
                <Route path="publications" element={<PublicationsPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="funds-grants" element={<FundsGrantsPage />} />
                <Route index element={<Navigate to="patents" replace />} />
                <Route path="*" element={<Navigate to="patents" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}