import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Counselling from "./Counselling";
import DevelopmentPrograms from "./DevelopmentPrograms";
import ExtraCurricularActivities from "./ExtraCurricularActivities";
import IndustryInteractions from "./IndustryInteractions";
import StudentsAssociation from "./StudentsAssociation";
import StudentsClubs from "./StudentsClubs";

const tabMapping = {
  associations: "studentsassociation",
  industry: "industryinteractions",
  clubs: "studentsclubs",
  development: "developmentprograms",
  activities: "extracurricularactivities",
  counselling: "counselling"
};

export default function StudentAffairsIndex() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("developmentprograms");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Content data for tabs
  const tabContent = {
    developmentprograms: {
      title: "Development Programs",
      content: <DevelopmentPrograms />,
    },
    industryinteractions: {
      title: "Industry Interactions",
      content: <IndustryInteractions />,
    },
    studentsassociation: {
      title: "Students Association",
      content: <StudentsAssociation />,
    },
    studentsclubs: {
      title: "Students Clubs",
      content: <StudentsClubs />,
    },
    extracurricularactivities: {
      title: "Extracurricular Activities",
      content: <ExtraCurricularActivities />,
    },
    counselling: {
      title: "Counselling",
      content: <Counselling />,
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
    <div className="flex flex-col min-h-screen bg-white rounded-xl ">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] py-8 rounded-t-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page title */}
          <div>
            <h1 className="text-3xl font-bold text-white">Student Affairs</h1>
            <div className="h-1 w-20 rounded-full bg-white mt-2"></div>
          </div>
        </div>
      </div>

      {/* Main content with white background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full bg-white">
        {/* Message card */}
        <div className="bg-white rounded-lg overflow-hidden mb-8 transition-all duration-300">
          {/* Mobile tab selector */}
          <div className="block md:hidden border-b border-gray-100">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-700"
            >
              <div className="flex items-center">
                <span>{tabContent[activeTab].title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  mobileMenuOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {mobileMenuOpen && (
              <div className="border-t border-gray-100 bg-gray-50">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      handleTabChange(tab);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center w-full p-3 text-left ${
                      activeTab === tab
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{tabContent[tab].title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop tab navigation */}
          <div className="hidden md:flex border-b bg-gray-100 border-gray-200">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`flex items-center justify-center py-4 px-6 transition-all duration-300 flex-1 ${
                  activeTab === tab
                    ? "border-b-2 border-[#0d173b] text-[#0d173b] bg-[#b2b9d29e] font-medium"
                    : "border-b-2 border-transparent text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                }`}
              >
                <span className="text-sm lg:text-base">
                  {tabContent[tab].title}
                </span>
              </button>
            ))}
          </div>

          {/* Content area */} 
          <div className="p-6 md:p-8">
            <div className="prose prose-indigo max-w-none">
              {tabContent[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
