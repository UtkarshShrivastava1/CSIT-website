import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ExternalRedirect from "./components/ExternalRedirect";
import Footer from "./components/Footer";
import AboutPage from "./pages/About/AboutIndex";
import AcademicPage from "./pages/Academics/AcademicIndex";
import AdminDashboard from "./pages/Admin/AdminDasboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import GalleryDashboard from "./pages/Admin/GalleryDashboard";
import GalleryForm from "./pages/Admin/GalleryForm";
import AdmissionPage from "./pages/Admission/AdmissionIndex";
import EnquiryForm from "./pages/Admission/EnquiryForm";
import AlumniPage from "./pages/Alumni/AlumniIndex";
import FacilitiesIndex from "./pages/Campus/Facilities/Facilitiesindex";
import InitiativesIndex from "./pages/Campus/Initiatives/InitiativesIndex"; // 👈 FIXED: Points to Initiatives tab manager
import NPTEL from "./pages/Campus/Initiatives/NPTEL";
import StudentsClubsIndex from "./pages/StudentsClubs/StudentsClubsIndex";

import FundsPage from "./pages/Funds/FundsIndex";
import Home from "./pages/Home";
import DvvDetails from "./pages/Campus/Initiatives/NAAC Cycle/NAAC_Cycle2_DVV";
import MorePage from "./pages/More/MoreIndex";
import PlacementPage from "./pages/Placement/PlacementIndex";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar"; 
import Header from "./components/Header";
import PixelTracker from "./components/PixelTracker";
import NotificationForm from "./pages/Admin/NotificationForm";  
import NotificationDashboard from "./pages/Admin/NotificationDashboard";
import Adminstration from "./pages/About/Adminstration";

import ResearchDevelopment from "./pages/R&D/R&DSidebar";
import Anti_Raging from "./pages/More/Anti_Raging";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};

const NIRFRedirect = () => {
  React.useEffect(() => {
    window.location.replace("https://drive.google.com/file/d/1P0xQZA__INNdQyytWcZfj33QR1IDD3MJ/view?usp=sharing");
  }, []);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
       <PixelTracker />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/external/:type" element={<ExternalRedirect />} />
            <Route path="/external/:type/:param" element={<ExternalRedirect />} />
            <Route path="/about/*" element={<AboutPage />} />
            
            <Route path="/admission/*" element={<AdmissionPage />} />
            <Route path="/enquiry-form" element={<EnquiryForm />} />
            <Route path="/alumni/*" element={<AlumniPage />} />
            
            {/* Mapped dynamic routing base parent cluster */}
            <Route path="/naac-cycle/*" element={<InitiativesIndex />} /> {/* 👈 FIXED */}
            
            <Route path="/placement/*" element={<PlacementPage />} />
            <Route path="/academics/*" element={<AcademicPage />} />
            <Route path="/funds/*" element={<FundsPage />} />
            <Route path="/campus/facilities" element={<FacilitiesIndex />} />
            <Route path="/campus/initiatives" element={<InitiativesIndex />} />
            <Route path="/campus/NPTEL" element={<Navigate to="/campus/initiatives?tab=nptel" replace />}/>
            <Route path="/campus/NIRF24" element={<NIRFRedirect />} />
            <Route path="/students-clubs/*" element={<StudentsClubsIndex />} />
            <Route path="/R-D/*" element={<ResearchDevelopment />} />
            {/* Admin Routes */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/gallery/upload"
              element={
                <ProtectedRoute>
                  <GalleryForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/gallery-dashboard"
              element={
                <ProtectedRoute>
                  <GalleryDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/notifications-dashboard"
              element={
                <ProtectedRoute>
                  <NotificationDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/notifications/push"
              element={
                <ProtectedRoute>
                  <NotificationForm />
                </ProtectedRoute>
              }
            />

            {/* Redirects */}
            <Route path="/introduction" element={<Navigate to="/about/introduction" replace />} />
            <Route path="/administrators" element={<Navigate to="/about/administrators" replace />} />
            <Route path="/society" element={<Navigate to="/about/society" replace />} />
            <Route path="/aspiration" element={<Navigate to="/about/aspiration" replace />} />
            <Route path="/achievement" element={<Navigate to="/about/achievement" replace />} />
            <Route path="/professional-bodies" element={<Navigate to="/about/professional-bodies" replace />} />
            <Route path="/message" element={<Navigate to="/about/message" replace />} />
            <Route path="/governing-body" element={<Navigate to="/about/governing-body" replace />} />
            <Route path="/governing-bodies" element={<Navigate to="/about/governing-body" replace />} />
            <Route path="/celebration" element={<Navigate to="/about/celebration" replace />} />
            <Route path="/computer-science-and-engineering" element={<Navigate to="/academics/computer-science-and-engineering" replace />} />
            <Route path="/artificial-intelligence-and-data-engineering" element={<Navigate to="/academics/artificial-intelligence-and-data-engineering" replace />} />
            <Route path="/civil-engineering" element={<Navigate to="/academics/civil-engineering" replace />} />
            <Route path="/electrical-and-electronics-engineering" element={<Navigate to="/academics/electrical-and-electronics-engineering" replace />} />
            <Route path="/mechatronics" element={<Navigate to="/academics/mechatronics" replace />} />
            <Route path="/mechanical-engineering" element={<Navigate to="/academics/mechanical-engineering" replace />} />
            <Route path="/science-and-humanities" element={<Navigate to="/academics/science-and-humanities" replace />} /> 
            <Route path="/information-technology-engineering" element={<Navigate to="/academics/information-technology-engineering" replace />} />
            <Route path="/R&D Cells" element={<Navigate to="/R&D cells/R&D Cells" replace />} />
            <Route path="/courses-offered" element={<Navigate to="/admission/courses-offered" replace />} />
            <Route path="/admission-process" element={<Navigate to="/admission/admission-process" replace />} />
            <Route path="/leaflet" element={<Navigate to="/admission/leaflet" replace />} />
            <Route path="/help-desk" element={<Navigate to="/admission/help-desk" replace />} />
            <Route path="/naac-cycle-1" element={<Navigate to="/naac-cycle/naac-cycle-1" replace />} />
            <Route path="/AQAR" element={<Navigate to="/naac-cycle/AQAR" replace />} />
            <Route path="/about-association" element={<Navigate to="/alumni/about-association" replace />} />
            <Route path="/activities" element={<Navigate to="/alumni/activities" replace />} />
            <Route path="/presence" element={<Navigate to="/alumni/presence" replace />} />
            <Route path="/team-members" element={<Navigate to="/alumni/team-members" replace />} />
            <Route path="/registered-association" element={<Navigate to="/alumni/registered-association" replace />} />
            <Route path="/patents" element={<Navigate to="/funds/patents" replace />} />
            <Route path="/conference-workshop" element={<Navigate to="/funds/conference-workshop" replace />} />
            <Route path="/publications" element={<Navigate to="/funds/publications" replace />} />
            <Route path="/projects" element={<Navigate to="/funds/projects" replace />} />
            <Route path="/funds-grants" element={<Navigate to="/funds/funds-grants" replace />} />
            <Route path="/about-tnp-cell" element={<Navigate to="/placement/about-tnp-cell" replace />} />
            <Route path="/internship" element={<Navigate to="/placement/internship" replace />} />
            <Route path="/mous" element={<Navigate to="/placement/mous" replace />} />
            <Route path="/our-recruiters" element={<Navigate to="/placement/our-recruiters" replace />} />
            <Route path="/placement-policies" element={<Navigate to="/placement/placement-policies" replace />} />
            <Route path="/team-members" element={<Navigate to="/placement/team-members" replace />} />
            <Route path="/placement-statistics" element={<Navigate to="/placement/placement-statistics" replace />} />
            <Route path="/training-programme" element={<Navigate to="/placement/training-programme" replace />} />
            <Route path="/gallery/*" element={<MorePage />} />
            <Route path="/gallery/upload" element={<GalleryForm />} />
            <Route path="/gallery/manage" element={<GalleryDashboard />} />
            <Route path="/more/*" element={<MorePage />} />
            {/* <Route path="/more/anti-ragging" element={<Anti_Raging />} /> */}
            {/* <Route path="/student-affairs" element={<Navigate to="/more/student-affairs" replace />} /> */}
            <Route path="/research-and-development" element={<Navigate to="/more/research-and-development" replace />} />
            <Route path="/calendar" element={<Navigate to="/more/calendar" replace />} />
            <Route path="/feedback" element={<Navigate to="/more/feedback" replace />} />
            <Route path="/grievances" element={<Navigate to="/more/grievances" replace />} />
            <Route path="/iqac" element={<Navigate to="/more/iqac" replace />} />
            <Route path="/rti" element={<Navigate to="/more/rti" replace />} />
            <Route path="/naac-cycle/dvv-details" element={<DvvDetails />} />
            <Route path="/iic" element={<Navigate to="/campus/initiatives?tab=iic" replace />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;