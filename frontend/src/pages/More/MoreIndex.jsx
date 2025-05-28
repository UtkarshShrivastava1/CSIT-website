import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Gallery from './Gallery';
import Grievances from './Grievances';
import RTI from './RTI';
import Feedback from './Feedback';
import IQAC from './IQAC';
import Calendar from './Calendar';
import StudentAffairsIndex from './Student affairs/StudentAffairsIndex';
import RnD from './RnD';

const sidebarLinks = [
  { name: 'Student Affairs', path: 'student-affairs' },
  { name: 'R&D', path: 'research-and-development' },
  { name: 'Calendar', path: 'calendar' },
  { name: 'Feedback', path: 'feedback' },
  { name: 'Gallery', path: 'gallery' },
  { name: 'Grievances', path: 'grievances' },
  { name: 'IQAC', path: 'iqac' },
  { name: 'RTI', path: 'rti' },
];

export default function MorePage() {
  const location = useLocation();
  
  // Determine active section based on current path
  const getActiveSection = () => {
    const path = location.pathname.split('/').pop();
    const activeLink = sidebarLinks.find(link => link.path === path);
    return activeLink ? activeLink.name : 'Student Affairs';
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
          <h1 className="text-3xl md:text-4xl font-bold">More</h1>
          <p className="mt-3 text-base md:text-lg font-light">
            Explore additional resources and information about CSIT
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
                basePath="/more"
              />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-h-[calc(100vh-400px)] bg-white rounded-lg shadow-sm p-4 md:p-6">
              <Routes>
                <Route path="student-affairs" element={<StudentAffairsIndex />} />
                <Route path="research-and-development" element={<RnD/>} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="grievances" element={<Grievances />} />
                <Route path="iqac" element={<IQAC />} />
                <Route path="rti" element={<RTI />} />
                <Route index element={<Navigate to="student-affairs" replace />} />
                <Route path="*" element={<Navigate to="student-affairs" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
} 