import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import AQAR from './AQAR';
import NaacCycle1 from './NAAC-Cycle1';
// import NaacCycle2 from './NAAC-Cycle2';
// import NaacCycle3 from './NAAC-Cycle3';

const sidebarLinks = [
  { name: 'NAAC Cycle 1', path: 'naac-cycle-1' },
  // { name: 'NAAC Cycle 2', path: 'naac-cycle-2' },
  // { name: 'NAAC Cycle 3', path: 'naac-cycle-3' },
  { name: 'AQAR', path: 'AQAR' }
];

// Sample data for NAAC Cycle 1
const naacCycle1Data = [
  {
    id: 1,
    title: 'Self Study Report (SSR)',
    category: 'SSR',
    cycle: 'Cycle 1',
    date: '2023-01-15',
    pdfUrl: '/documents/naac/cycle1/ssr.pdf'
  },
  {
    id: 2,
    title: 'Data Verification Visit Report',
    category: 'DVV',
    cycle: 'Cycle 1',
    date: '2023-02-20',
    pdfUrl: '/documents/naac/cycle1/dvv.pdf'
  },
  {
    id: 3,
    title: 'Annual Quality Assurance Report',
    category: 'AQAR',
    cycle: 'Cycle 1',
    date: '2023-03-10',
    pdfUrl: '/documents/naac/cycle1/aqar.pdf'
  }
];

export default function NAACPage() {
  const location = useLocation();
  
  // Determine active section based on current path
  const getActiveSection = () => {
    const path = location.pathname.split('/').pop();
    const activeLink = sidebarLinks.find(link => link.path === path);
    return activeLink ? activeLink.name : 'NAAC Cycle 1';
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
          <h1 className="text-3xl md:text-4xl font-bold">NAAC Cycle</h1>
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
                basePath="/naac-cycle"
              />
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-h-[calc(100vh-400px)] bg-white rounded-lg shadow-sm p-4 md:p-6">
              <Routes>
                <Route path="naac-cycle-1" element={<NaacCycle1 data={naacCycle1Data} />} />
                {/* <Route path="naac-cycle-2" element={<NaacCycle2 />} /> */}
                {/* <Route path="naac-cycle-3" element={<NaacCycle3 />} /> */}
                <Route path="AQAR" element={<AQAR />} />
                <Route index element={<Navigate to="naac-cycle-1" replace />} />
                <Route path="*" element={<Navigate to="naac-cycle-1" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}