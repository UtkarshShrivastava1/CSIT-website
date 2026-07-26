import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Gallery from './Gallery';
import Grievances from './Grievances';
import RTI from './RTI';
import Feedback from './Feedback';
// import IQAC from './IQAC';
import Calendar from './Calendar';
import StudentAffairsIndex from './Student affairs/StudentAffairsIndex';
import RnD from './RnD';
import Achievement from './Achievement';
import Library from './Library';
import Gymnasium from './Gymnasium';
import MedicalFacilities from './MedicalFacilities';
import Celebration from './Celebration';
import GuestRoom from './GuestRoom';
import SecurityServices from './SecurityServices';
import EstateOffice from './EstateOffice';
import Sports from './Sports';
import Anti_Raging from './Anti_Raging';
import ProfessionalBodiesPage from './ProfessionalBodies';
import Canteen from './Canteen';
import ComputerCentre from './ComputerCentre';
import ConferenceHalls from './ConferenceHalls';
import HostelAndOthers from './HostelAndOthers';
import CentralWorkshop from './CentralWorkshop';
import StaffQuarters from './StaffQuarters';


const sidebarLinks = [
  { name: 'Calendar', path: 'calendar' },
  { name: 'Feedback', path: 'feedback' },
  { name: 'Gallery', path: 'gallery' },
  { name: 'Grievances', path: 'grievances' },
  {
    name: 'Facilities',
    path: 'facilities',
    subLinks: [
      { name: 'Library', path: 'library' },
      { name: 'Computer Centre', path: 'computer-centre' },
      { name: 'Central Workshop', path: 'workshop' },
      { name: 'Hostel', path: 'hostel' },
      { name: 'Medical Facilities', path: 'medical-facilities' },
      { name: 'Guest Room', path: 'guest-room' },
      { name: 'Conference & Seminar Halls', path: 'conference-halls' },
      { name: 'Security Services', path: 'security-services' },
      { name: 'Gymnasium', path: 'gymnasium' },
      { name: 'Canteen & Mess', path: 'canteen' },
      { name: 'Staff Quarters', path: 'staff-quarters' },
    ],
  },
  {name : 'Achivements' , path : 'achievements'},
  { name: 'Professional Bodies', path: 'professional-bodies' },
  { name: 'Sports', path: 'sports' },
  { name: 'Anti-Ragging', path: 'anti-ragging' },
];

export default function MorePage() {
  const location = useLocation();
  
  // Determine active section based on current path
  const getActiveSection = () => {
    const pathSegments = location.pathname.split('/');
    const currentPath = pathSegments[pathSegments.length - 1];

    for (const link of sidebarLinks) {
      if (link.path === currentPath) return link.name;
      if (link.subLinks) {
        for (const subLink of link.subLinks) {
          if (subLink.path === currentPath) return link.name;
        }
      }
    }
    return 'Calendar'; // Default active section
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
                <Route path="calendar" element={<Calendar />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="grievances" element={<Grievances />} />
                <Route path="library" element={<Library />} />
                <Route path="computer-centre" element={<ComputerCentre />} />
                <Route path="workshop" element={<CentralWorkshop />} />
                <Route path="hostel" element={<HostelAndOthers />} />
                <Route path="gymnasium" element={<Gymnasium />} />
                <Route path="medical-facilities" element={<MedicalFacilities />} />
                <Route path="guest-room" element={<GuestRoom />} />
                <Route path="conference-halls" element={<ConferenceHalls />} />
                <Route path="security-services" element={<SecurityServices />} />
                <Route path="staff-quarters" element={<StaffQuarters />} />
                <Route path="sports" element={<Sports />} />
                <Route path="canteen" element={<Canteen />} />
                <Route path="anti-ragging" element={<Anti_Raging />} />
                <Route path="achievements" element={<Achievement />} />
                <Route path="professional-bodies" element={<ProfessionalBodiesPage />} />
                <Route index element={<Navigate to="calendar" replace />} />
                <Route path="facilities" element={<Navigate to="library" replace />} />
                <Route path="*" element={<Navigate to="calendar" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
} 