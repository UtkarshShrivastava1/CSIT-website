import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import AboutTNPcell from './AboutTNPCell';
import Internship from './Internship';
import MOUS from './MOU\'S';
import OurRecruiters from './OurRecruiters';
import PlacementPolicy from './PlacementPolicy';
import TeamMembers from './TeamMembers';
import PlacementStatistics from './PlacementStatistics';
import TrainingProgramme from './TrainingProgramme';

const sidebarLinks = [
  { name: 'About TNP Cell', path: 'about-tnp-cell' },
  { name: 'Internship', path: 'internship' },
  { name: 'MOUs', path: 'mous' },
  { name: 'Our Recruiters', path: 'our-recruiters' },
  { name: 'Placement Policies', path: 'placement-policies' },
  { name: 'Team Members', path: 'team-members' },
  { name: 'Placement Statistics', path: 'placement-statistics' },
  { name: 'Training Programme', path: 'training-programme' },
];

export default function PlacementPage() {
  const location = useLocation();
  
  // Determine active section based on current path
  const getActiveSection = () => {
    const path = location.pathname.split('/').pop();
    const activeLink = sidebarLinks.find(link => link.path === path);
    return activeLink ? activeLink.name : 'About TNP Cell';
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
          <h1 className="text-3xl md:text-4xl font-bold">Placement</h1>
          <p className="mt-3 text-base md:text-lg font-light">
            Explore opportunities and shape your career with CSIT's comprehensive placement support
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
                basePath="/placement"
              />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-h-[calc(100vh-400px)] bg-white rounded-lg shadow-sm p-4 md:p-6">
              <Routes>
                <Route path="about-tnp-cell" element={<AboutTNPcell />} />
                <Route path="internship" element={<Internship />} />
                <Route path="mous" element={<MOUS />} />
                <Route path="our-recruiters" element={<OurRecruiters />} />
                <Route path="placement-policies" element={<PlacementPolicy />} />
                <Route path="team-members" element={<TeamMembers />} />
                <Route path="placement-statistics" element={<PlacementStatistics />} />
                <Route path="training-programme" element={<TrainingProgramme />} />
                <Route index element={<Navigate to="about-tnp-cell" replace />} />
                <Route path="*" element={<Navigate to="about-tnp-cell" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
} 