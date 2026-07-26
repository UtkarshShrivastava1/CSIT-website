import { BookOpen, Calculator, FlaskConical, Mic, Users } from "lucide-react";
import React, { useState } from "react";

import PhysicsContent from "./Physics"; // Import the new PhysicsContent component
import EnglishContent from "./English"; // Import the new EnglishContent component
import ChemistryContent from "./Chemistry"; // Import the new ChemistryContent component
// Placeholder components for subject details
import MathsContent from "./Maths";






const ScienceHumanitiesIndex = () => {
  const [activeTab, setActiveTab] = useState("physics");

  const tabs = {
    physics: {
      title: "Physics",
      icon: <BookOpen className="w-5 h-5" />,
      content: <PhysicsContent />,
    },
    chemistry: {
      title: "Chemistry",
      icon: <FlaskConical className="w-5 h-5" />,
      content: <ChemistryContent />,
    },
    english: {
      title: "English (Communication Skill)",
      icon: <Mic className="w-5 h-5" />,
      content: <EnglishContent />,
    },
    maths: {
      title: "Mathematics",
      icon: <Calculator className="w-5 h-5" />, // Example icon
      content: <MathsContent />,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 ">
      {/* Header Section */}
      <div className="w-full bg-[#0a1432] text-white p-8">
        <h1 className="text-4xl font-bold mb-2">Science & Humanities</h1>
        <p className="text-lg">
          Foundational knowledge in Maths, Physics, Chemistry, and Communication
          Skills
        </p>
        <div className="w-24 h-1 bg-white mt-4"></div>
      </div>

      {/* Content area */}
      <div className="flex-1 p-4 lg:p-8 ">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Desktop tab navigation */}
          <div className="hidden md:flex border-b bg-gray-100 border-gray-200">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center gap-2 py-4 px-6 transition-all duration-300 flex-1 ${
                  activeTab === tab
                    ? "border-b-2 border-[#0d173b] text-[#0d173b] bg-[#b2b9d29e] font-medium"
                    : "border-b-2 border-transparent text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                }`}
              >
                {/* {tabs[tab].icon} */}
                <span className="text-xs lg:text-xs">{tabs[tab].title}</span>
              </button>
            ))}
          </div>

          {/* Mobile tab selector */}
          <div className="block md:hidden p-4 border-b border-gray-200">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {Object.keys(tabs).map((tab) => (
                <option key={tab} value={tab}>
                  {tabs[tab].title}
                </option>
              ))}
            </select>
          </div>

          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-100 py-6 px-6">
            <div className="flex items-center">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg mr-4 shadow-sm">
                <span className="block w-6 h-6 text-black">
                  {tabs[activeTab].icon}
                </span>
              </div>
              <h2 className="text-2xl md:text-2xl font-bold text-black capitalize">
                {tabs[activeTab].title}
              </h2>
            </div>
          </div>

          {/* Content area */}
          <div className="p-6 md:p-8">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceHumanitiesIndex;