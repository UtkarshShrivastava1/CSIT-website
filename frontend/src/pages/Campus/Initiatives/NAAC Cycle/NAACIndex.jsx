import React, { useState } from "react";
import AQAR from "./AQAR";
import NaacCycle1 from "./NAAC-Cycle1";
import NaacCycle2 from "./NAAC-Cycle2";
import NaacCycle2DW from "./NAAC_Cycle2_DVV";

export default function NAACIndex() {
  // ✅ Mapped state configuration variables to prevent route breakage loops
  const [currentSubTab, setCurrentSubTab] = useState("naac-cycle-1");

  const sidebarLinks = [
    { name: "NAAC Cycle 1", id: "naac-cycle-1", content: <NaacCycle1 /> },
    { name: "NAAC Cycle 2", id: "naac-cycle-2", content: <NaacCycle2 /> },
    { name: "NAAC Cycle 2 DW", id: "naac-cycle-2-dw", content: <NaacCycle2DW /> },
    { name: "AQAR", id: "AQAR", content: <AQAR /> },
  ];

  return (
    <div className="w-full animate-fadeIn">
      {/* NAAC Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#0d173b]">NAAC Cycle</h2>
        <p className="text-sm text-gray-600">
          Shaping the future through excellence in technical education since 1999
        </p>
        <div className="mt-2 h-0.5 w-16 bg-[#0d173b]"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Localized Inline Navigation Sidebar to fully prevent Home redirect bugs */}
        <aside className="w-full md:w-56 lg:w-64 flex-shrink-0">
          <div className="bg-white shadow-md rounded-md overflow-hidden w-full sticky top-20 left-0">
            <div className="bg-[#0d173b] text-white py-3 px-4 font-medium text-base">
              NAAC Framework
            </div>
            <ul className="w-full p-2 space-y-1">
              {sidebarLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => setCurrentSubTab(link.id)}
                    className={`w-full text-left px-4 py-3 transition-all duration-200 text-sm rounded-md font-medium ${
                      currentSubTab === link.id
                        ? "bg-gray-100 text-[#0d173b] border-l-4 border-[#0d173b]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[#0d173b]"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Dynamic Context Render Dock */}
        <main className="flex-1 bg-white rounded-lg shadow-sm p-4 md:p-6 min-h-[400px]">
          {sidebarLinks.find((link) => link.id === currentSubTab)?.content}
        </main>
      </div>
    </div>
  );
}