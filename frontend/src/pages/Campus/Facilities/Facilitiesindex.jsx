import { useState } from "react";
import {
  BookOpen,
  Briefcase,
  Users,
  Beaker,
  Menu,
  X,
  Target
} from "lucide-react";

import Library from './CentralLibrary';
import Workshop from './CentralWorkshop';
import ComputerCentre from './ComputerCentre';
import CanteenCafe from './CanteenAndCafe'
import StudentActivity from './StudentActivityCentre'
import SeminarHall from './SeminarHall'
import Hostel from './HostelAndOthers'
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';

export default function ModernDepartmentPage() {
  const [activeTab, setActiveTab] = useState("Library");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Content data for tabs
  const tabContent = {
    Library: {
      title: "Central Library",
      icon: <BookOpen className="text-indigo-500" />,
      content: <Library />,
    },
    Workshop: {
      title: "Central Workshop",
      icon: <Beaker className="text-emerald-500" />,
      content: <Workshop/>,
    },
    ComputerCentre: {
      title: "Computer Centre",
      icon: <BookOpen className="text-amber-500" />,
      content: <ComputerCentre />,
    },
    CanteenCafe: {
      title: "Canteen & Cafe",
      icon: <Briefcase className="text-rose-500" />,
      content: <CanteenCafe />,
    },
    StudentActivity: {
      title: "Student Activity Centre",
      icon: <Users className="text-blue-500" />,
      content: <StudentActivity />,
    },
    SeminarHall: {
      title: "Seminar Hall",
      icon: <Target className="text-purple-500" />,
      content: <SeminarHall />,
    },
    Hostal: {
      title: "Hostel & Other Facilities",
      icon: <Users className="text-green-500" />,
      content: <Hostel />,
    },
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
          <h1 className="text-3xl md:text-4xl font-bold">Campus Facilities</h1>
          <p className="mt-3 text-base md:text-lg font-light">
            State-of-the-art infrastructure and modern amenities for an enhanced learning experience
          </p>
          <div className="mt-4 h-0.5 w-16 bg-white"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 py-6">
            {/* Sidebar */}
            <div className="w-full lg:w-64 lg:flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#0d173b] text-white px-6 py-4">
                  <h2 className="text-xl font-bold">Facilities</h2>
                </div>
                <div className="p-2">
                  {Object.keys(tabContent).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`w-full px-4 py-3 text-left transition-colors duration-200 rounded-md mb-1
                      ${
                        activeTab === tab
                          ? "bg-[#0d173b] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {tabContent[tab].title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="prose prose-indigo max-w-none">
                  {typeof tabContent[activeTab].content === "string" ? (
                    <p className="text-gray-700 leading-relaxed">
                      {tabContent[activeTab].content}
                    </p>
                  ) : (
                    tabContent[activeTab].content
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
