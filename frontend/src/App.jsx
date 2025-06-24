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
import AdmissionForm from "./pages/Admission/AdmissionForm";
import AlumniPage from "./pages/Alumni/AlumniIndex";
import FacilitiesIndex from "./pages/Campus/Facilities/Facilitiesindex";
import InitiativesIndex from "./pages/Campus/Initiatives/InitiativesIndex";
import FundsPage from "./pages/Funds/FundsIndex";
import Home from "./pages/Home";

import MorePage from "./pages/More/MoreIndex";
import NaacPage from "./pages/NAAC Cycle/NAACIndex";
import PlacementPage from "./pages/Placement/PlacementIndex";
import ScrollToTop from "./components/ScrollToTop";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />

            {/* External Redirect Routes */}
            <Route path="/external/:type" element={<ExternalRedirect />} />
            <Route
              path="/external/:type/:param"
              element={<ExternalRedirect />}
            />

            {/* About page and its nested routes */}
            <Route path="/about/*" element={<AboutPage />} />

            {/* Admission page and its nested routes */}
            <Route path="/admission/*" element={<AdmissionPage />} />
            <Route path="/admission-form" element={<AdmissionForm />} />

            {/* Alumni page and its nested routes */}
            <Route path="/alumni/*" element={<AlumniPage />} />

            {/* Naac page and its nested routes */}
            <Route path="/naac-cycle/*" element={<NaacPage />} />

            {/* Placement page and its nested routes */}
            <Route path="/placement/*" element={<PlacementPage />} />

            {/* Academic page and its nested routes */}
            <Route path="/academics/*" element={<AcademicPage />} />

            {/* Funds page and its nested routes */}
            <Route path="/funds/*" element={<FundsPage />} />

            {/* Campus routes */}
            <Route path="/campus/facilities" element={<FacilitiesIndex />} />
            <Route path="/campus/initiatives" element={<InitiativesIndex />} />

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

            {/* Redirects for About section */}
            <Route
              path="/introduction"
              element={<Navigate to="/about/introduction" replace />}
            />
            <Route
              path="/society"
              element={<Navigate to="/about/society" replace />}
            />
            <Route
              path="/aspiration"
              element={<Navigate to="/about/aspiration" replace />}
            />
            <Route
              path="/achievement"
              element={<Navigate to="/about/achievement" replace />}
            />
            <Route
              path="/professional-bodies"
              element={<Navigate to="/about/professional-bodies" replace />}
            />
            <Route
              path="/message"
              element={<Navigate to="/about/message" replace />}
            />
            <Route
              path="/governing-body"
              element={<Navigate to="/about/governing-body" replace />}
            />
            <Route
              path="/governing-bodies"
              element={<Navigate to="/about/governing-body" replace />}
            />
            <Route
              path="/celebration"
              element={<Navigate to="/about/celebration" replace />}
            />

            {/* Redirects for Academics section */}
            <Route
              path="/computer-science-and-engineering"
              element={
                <Navigate
                  to="/academics/computer-science-and-engineering"
                  replace
                />
              }
            />
            <Route
              path="/artificial-intelligence-and-data-engineering"
              element={
                <Navigate
                  to="/academics/artificial-intelligence-and-data-engineering"
                  replace
                />
              }
            />
            <Route
              path="/civil-engineering"
              element={<Navigate to="/academics/civil-engineering" replace />}
            />
            <Route
              path="/electrical-and-electronics-engineering"
              element={
                <Navigate
                  to="/academics/electrical-and-electronics-engineering"
                  replace
                />
              }
            />
            <Route
              path="/mechatronics"
              element={<Navigate to="/academics/mechatronics" replace />}
            />
            <Route
              path="/mechanical-engineering"
              element={
                <Navigate to="/academics/mechanical-engineering" replace />
              }
            />
            <Route
              path="/information-technology-engineering"
              element={
                <Navigate
                  to="/academics/information-technology-engineering"
                  replace
                />
              }
            />

            {/* Redirects for Admission section */}
            <Route
              path="/courses-offered"
              element={<Navigate to="/admission/courses-offered" replace />}
            />
            <Route
              path="/admission-process"
              element={<Navigate to="/admission/admission-process" replace />}
            />
            <Route
              path="/leaflet"
              element={<Navigate to="/admission/leaflet" replace />}
            />
            <Route
              path="/help-desk"
              element={<Navigate to="/admission/help-desk" replace />}
            />

            {/* Redirects for NAAC Cycle section */}
            <Route
              path="/naac-cycle-1"
              element={<Navigate to="/naac-cycle/naac-cycle-1" replace />}
            />
            {/* <Route path="/naac-cycle-2" element={<Navigate to="/naac-cycle/naac-cycle-2" replace />} /> */}
            {/* <Route path="/naac-cycle-3" element={<Navigate to="/naac-cycle/naac-cycle-3" replace />} /> */}
            <Route
              path="/AQAR"
              element={<Navigate to="/naac-cycle/AQAR" replace />}
            />

            {/* Redirects for Alumni section */}
            <Route
              path="/about-association"
              element={<Navigate to="/alumni/about-association" replace />}
            />
            <Route
              path="/activities"
              element={<Navigate to="/alumni/activities" replace />}
            />
            <Route
              path="/presence"
              element={<Navigate to="/alumni/presence" replace />}
            />
            <Route
              path="/team-members"
              element={<Navigate to="/alumni/team-members" replace />}
            />
            <Route
              path="/registered-association"
              element={<Navigate to="/alumni/registered-association" replace />}
            />

            {/* Redirects for Funds section */}
            <Route
              path="/patents"
              element={<Navigate to="/funds/patents" replace />}
            />
            <Route
              path="/conference-workshop"
              element={<Navigate to="/funds/conference-workshop" replace />}
            />
            <Route
              path="/publications"
              element={<Navigate to="/funds/publications" replace />}
            />
            <Route
              path="/projects"
              element={<Navigate to="/funds/projects" replace />}
            />
            <Route
              path="/funds-grants"
              element={<Navigate to="/funds/funds-grants" replace />}
            />

            {/* Redirects for Placement section */}
            <Route
              path="/about-tnp-cell"
              element={<Navigate to="/placement/about-tnp-cell" replace />}
            />
            <Route
              path="/internship"
              element={<Navigate to="/placement/internship" replace />}
            />
            <Route
              path="/mous"
              element={<Navigate to="/placement/mous" replace />}
            />
            <Route
              path="/our-recruiters"
              element={<Navigate to="/placement/our-recruiters" replace />}
            />
            <Route
              path="/placement-policies"
              element={<Navigate to="/placement/placement-policies" replace />}
            />
            <Route
              path="/team-members"
              element={<Navigate to="/placement/team-members" replace />}
            />
            <Route
              path="/placement-statistics"
              element={
                <Navigate to="/placement/placement-statistics" replace />
              }
            />
            <Route
              path="/training-programme"
              element={<Navigate to="/placement/training-programme" replace />}
            />

            {/* Gallery routes - update to use the More section Gallery component */}
            <Route path="/gallery/*" element={<MorePage />} />
            <Route path="/gallery/upload" element={<GalleryForm />} />
            <Route path="/gallery/manage" element={<GalleryDashboard />} />

            {/* More page and its nested routes */}
            <Route path="/more/*" element={<MorePage />} />

            {/* Redirects for More section */}
            <Route
              path="/student-affairs"
              element={<Navigate to="/more/student-affairs" replace />}
            />
            <Route
              path="/research-and-development"
              element={<Navigate to="/more/research-and-development" replace />}
            />
            <Route
              path="/calendar"
              element={<Navigate to="/more/calendar" replace />}
            />
            <Route
              path="/feedback"
              element={<Navigate to="/more/feedback" replace />}
            />
            <Route
              path="/grievances"
              element={<Navigate to="/more/grievances" replace />}
            />
            <Route
              path="/iqac"
              element={<Navigate to="/more/iqac" replace />}
            />
            <Route path="/rti" element={<Navigate to="/more/rti" replace />} />

            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
