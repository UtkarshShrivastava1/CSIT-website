import React, { useState } from "react";
import clubs from '../../data/StudentClub'

const VariousClubs = () => {
  const [expandedClub, setExpandedClub] = useState(null);

  const toggleExpand = (id) => {
    setExpandedClub(expandedClub === id ? null : id);
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
              Various Clubs
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Explore, Learn, and Grow with Our Student Clubs
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          Chhatrapati Shivaji Institute of Technology offers a diverse range of student clubs that cater to various interests, skills, and career aspirations. Each club provides a unique platform for students to learn, collaborate, and excel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                <div className="mr-4">{club.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-[#0d173b]">{club.name}</h4>
                  <p className="text-xs text-gray-500 italic">{club.tagline}</p>
                </div>
              </div>
              
              {/* Show only description initially */}
              <div className="text-sm text-gray-600">
                {club.description}
              </div>

              {/* Read More / Read Less Button */}
              <button
                onClick={() => toggleExpand(club.id)}
                className="mt-3 text-sm font-medium text-[#0d173b] hover:text-[#1e305f] transition-colors flex items-center gap-1"
              >
                {expandedClub === club.id ? (
                  <>Read Less ↑</>
                ) : (
                  <>Read More ↓</>
                )}
              </button>

              {/* Full Content - shown when expanded */}
              {expandedClub === club.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold mb-2">Objectives:</h5>
                    <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                      {club.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                    </ul>
                  </div>
                  {club.events && club.events.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold mb-2">Key Events:</h5>
                      <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                        {club.events.map((event, i) => <li key={i}>{event}</li>)}
                      </ul>
                    </div>
                  )}
                  <p className="text-xs text-gray-500"><b>Faculty Coordinator:</b> {club.facultyCoordinator}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariousClubs;