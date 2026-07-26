import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { activitiesData } from "../../data/activitiesData";




const Activities = () => {
  const [expandedClub, setExpandedClub] = useState(null);

  const toggleExpand = (clubName) => {
    setExpandedClub(expandedClub === clubName ? null : clubName);
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Activities @ CSGI DURG
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              Chhatrapati Shivaji Group of Institutions Durg
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          Explore the vibrant campus life at Chhatrapati Shivaji Group of Institutions Durg through a wide array of activities organized by various clubs and departments. These events provide students with opportunities for holistic development, skill enhancement, and community engagement.
        </p>

        <div className="space-y-4">
          {activitiesData.map((club, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleExpand(club.clubName)}
              >
                <h3 className="text-lg font-semibold text-[#0d173b]">
                  {club.clubName}
                </h3>
                {expandedClub === club.clubName ? (
                  <ChevronUp className="text-[#0d173b]" size={20} />
                ) : (
                  <ChevronDown className="text-[#0d173b]" size={20} />
                )}
              </button>
              {expandedClub === club.clubName && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    {club.events.map((event, eventIndex) => (
                      <li key={eventIndex}>{event}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;


