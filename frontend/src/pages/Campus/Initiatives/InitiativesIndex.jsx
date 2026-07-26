import {
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import NSS from './NSS';
// import OtherClubs from './OtherClubs';
import SWAR from './SWAR';
import Startups from './Startups';
import CentreOfExcellence from './CentreOfExcellence';
import IncubationCentre from './IncubationCentre';
import NPTEL from './NPTEL';
import MOUs from './MOUs';
import IQAC from './IQAC';
import IIC from './IIC';
import CSR from './CSR';

// NAAC Cycle individual files imported right here
import AQAR from "./NAAC Cycle/AQAR";
import NaacCycle1 from "./NAAC Cycle/NAAC-Cycle1";
import NaacCycle2 from "./NAAC Cycle/NAAC-Cycle2";
import NaacCycle2DW from "./NAAC Cycle/NAAC_Cycle2_DVV";

const tabMapping = {
  nss: "NSS",
  swar: "SWAR",
  startups: "Startups",
  // clubs: "OtherClubs",
  coe: "Centre of Excellence",
  incubation: "Incubation Cell",
  nptel: "NPTEL",
  mous: "MOUs",
  iqac: "IQAC",
  iic: "IIC",
  csr: "CSR",
  "naac-1": "NAAC Cycle 1",
  "naac-2": "NAAC Cycle 2",
  "naac-dw": "NAAC Cycle 2 DW",
  aqar: "AQAR"
};

// Main Tab Configuration
const MAIN_TABS = [
  "Centre of Excellence",
  "Incubation Cell",
  "NPTEL",
  "Startups",
  "MOUs",
  "IQAC",
  "IIC",
  "CSR"
];

const NAAC_SUB_TABS = [
  "NAAC Cycle 1",
  "NAAC Cycle 2",
  "NAAC Cycle 2 DW",
  "AQAR"
];

const BOTTOM_TABS = ["NSS", "SWAR"];

export default function ModernDepartmentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("NSS");
  const [naacDropdownOpen, setNaacDropdownOpen] = useState(false);

  // Content configuration data
  const tabContent = {
    "Centre of Excellence": {
      title: "Centre of Excellence",
      content: <CentreOfExcellence />,
    },
    "Incubation Cell": {
      title: "Incubation Cell",
      content: <IncubationCentre />,
    },
    "NPTEL": {
      title: "NPTEL",
      content: <NPTEL />,
    },
    Startups: {
      title: "Startups",
      content: <Startups />,
    },
    "MOUs": {
      title: "MOUs",
      content: <MOUs />,
    },
    "IQAC": {
      title: "IQAC",
      content: <IQAC />,
    },
    "IIC": {
      title: "IIC",
      content: <IIC />,
    },
    // NAAC Sub Tabs
    "NAAC Cycle 1": {
      title: "NAAC Cycle 1",
      content: <NaacCycle1 />,
    },
    "NAAC Cycle 2": {
      title: "NAAC Cycle 2",
      content: <NaacCycle2 />,
    },
    "NAAC Cycle 2 DW": {
      title: "NAAC Cycle 2 DW",
      content: <NaacCycle2DW />,
    },
    "AQAR": {
      title: "AQAR",
      content: <AQAR />,
    },
    NSS: {
      title: "NSS",
      content: <NSS />,
    },
    SWAR: {
      title: "SWAR",
      content: <SWAR />,
    },
        "CSR": {
      title: "CSR",
      content: <CSR />,
    }
    // OtherClubs: {
    //   title: "Other Clubs",
    //   content: <OtherClubs />,
    // }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam && tabMapping[tabParam]) {
      setActiveTab(tabMapping[tabParam]);
      if (NAAC_SUB_TABS.includes(tabMapping[tabParam])) {
        setNaacDropdownOpen(true);
      }
    }
  }, [location.search]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const paramKey = Object.entries(tabMapping).find(([, value]) => value === tab)?.[0];
    if (paramKey) {
      navigate(`?tab=${paramKey}`, { replace: true });
    }
  };

  const handleNaacParentClick = () => {
    setNaacDropdownOpen(!naacDropdownOpen);
    if (!NAAC_SUB_TABS.includes(activeTab)) {
      handleTabChange("NAAC Cycle 1");
    }
  };

  const isNaacActive = NAAC_SUB_TABS.includes(activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full">
        <Navbar />
      </div>
      
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-bold">Campus Initiatives</h1>
          <p className="mt-3 text-base md:text-lg font-light">
            Empowering students through various programs and activities for holistic development
          </p>
          <div className="mt-4 h-0.5 w-16 bg-white"></div>
        </div>
      </div>

      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 py-6">
            
            {/* Sidebar */}
            <div className="w-full lg:w-64 lg:flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#0d173b] text-white px-6 py-4">
                  <h2 className="text-xl font-bold">Initiatives</h2>
                </div>
                <div className="p-2 space-y-0.5">
                  
                  {/* Main Tabs */}
                  {MAIN_TABS.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`w-full px-4 py-3 text-left transition-colors duration-200 rounded-md text-sm font-medium
                      ${activeTab === tab ? "bg-[#0d173b] text-white shadow-sm" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      <span>{tabContent[tab].title}</span>
                    </button>
                  ))}

                  {/* NAAC Cycle Accordion */}
                  <div>
                    <button
                      onClick={handleNaacParentClick}
                      className={`w-full px-4 py-3 text-left transition-colors duration-200 rounded-md flex items-center justify-between text-sm font-medium
                      ${isNaacActive ? "bg-[#0d173b]/10 text-[#0d173b]" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      <span>NAAC Cycle</span>
                      {naacDropdownOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </button>

                    {/* NAAC Sub Tabs */}
                    {naacDropdownOpen && (
                      <div className="pl-6 pr-2 py-1 space-y-0.5 bg-gray-50/50 mt-0.5 rounded-lg border border-gray-100">
                        {NAAC_SUB_TABS.map((subTab) => (
                          <button
                            key={subTab}
                            onClick={() => handleTabChange(subTab)}
                            className={`w-full px-3 py-2.5 text-left text-xs font-medium rounded-md transition-colors ${
                              activeTab === subTab ? "bg-[#0d173b] text-white shadow-sm" : "text-gray-600 hover:bg-gray-200/60"
                            }`}
                          >
                            {subTab}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Tabs */}
                  {BOTTOM_TABS.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`w-full px-4 py-3 text-left transition-colors duration-200 rounded-md text-sm font-medium
                      ${activeTab === tab ? "bg-[#0d173b] text-white shadow-sm" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      <span>{tabContent[tab].title}</span>
                    </button>
                  ))}

                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-scroll">
              <div className="bg-white rounded-lg shadow-md p-6 min-h-[500px]">
                <div className="prose prose-indigo max-w-none">
                  {tabContent[activeTab]?.content || <div>Select a tab to view content</div>}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}