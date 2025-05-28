import {
  BookOpen,
  Heart,
  Target,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import NSS from './NSS';
import OtherClubs from './OtherClubs';
import SWAR from './SWAR';
import Startups from './Startups';

const tabMapping = {
  nss: "NSS",
  swar: "SWAR",
  startups: "Startups",
  clubs: "OtherClubs"
};

export default function ModernDepartmentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("NSS");

  // Content data for tabs
  const tabContent = {
    NSS: {
      title: "NSS",
      icon: <Users className="text-indigo-500" />,
      content: <NSS />,
    },
    SWAR: {
      title: "SWAR",
      icon: <Heart className="text-emerald-500" />,
      content: <SWAR />,
    },
    Startups: {
      title: "Startups",
      icon: <Target className="text-amber-500" />,
      content: <Startups />,
    },
    OtherClubs: {
      title: "Other Clubs",
      icon: <BookOpen className="text-rose-500" />,
      content: <OtherClubs />,
    },
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam && tabMapping[tabParam]) {
      setActiveTab(tabMapping[tabParam]);
    }
  }, [location.search]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Find the URL parameter key for this tab
    const paramKey = Object.entries(tabMapping).find(([, value]) => value === tab)?.[0];
    if (paramKey) {
      navigate(`?tab=${paramKey}`, { replace: true });
    }
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
          <h1 className="text-3xl md:text-4xl font-bold">Campus Initiatives</h1>
          <p className="mt-3 text-base md:text-lg font-light">
            Empowering students through various programs and activities for holistic development
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
                  <h2 className="text-xl font-bold">Initiatives</h2>
                </div>
                <div className="p-2">
                  {Object.keys(tabContent).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
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
