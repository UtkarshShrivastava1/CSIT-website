import React from 'react'

const ExtraCurricularActivities = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
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
              Extra Curricular Activities
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Empowering students through leadership, innovation, and community
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

  {/* Table Container */}
  <div className="p-6">
    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-[#0d173b]">
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">S.No</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Prominent Event</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[
              { sno: 1, date: "2023-01-28", event: "Dancing", category: "Cultural" },
              { sno: 2, date: "2023-02-04", event: "Skit", category: "Cultural" },
              { sno: 3, date: "2023-02-11", event: "Painting", category: "Art" },
              { sno: 4, date: "2023-02-21", event: "Debate", category: "Academic" },
              { sno: 5, date: "2023-02-25", event: "Food Mania", category: "Social" },
              { sno: 6, date: "2023-03-04", event: "Chess", category: "Sports" },
              { sno: 7, date: "2023-03-11", event: "Snake Ladder", category: "Game" },
              { sno: 8, date: "2023-03-18", event: "Athletics", category: "Sports" },
              { sno: 9, date: "2023-03-25", event: "Table Tennis", category: "Sports" },
              { sno: 10, date: "2023-04-01", event: "Arm Wrestling", category: "Sports" },
              { sno: 11, date: "2023-04-08", event: "Cricket", category: "Sports" },
              { sno: 12, date: "2023-04-15", event: "Foot ball", category: "Sports" },
              { sno: 13, date: "2022-09-24", event: "Sur and Saaz", category: "Cultural" },
              { sno: 14, date: "2022-10-01", event: "Rangoli", category: "Art" },
              { sno: 15, date: "2022-10-08", event: "Badminton", category: "Sports" },
              { sno: 16, date: "2022-10-13", event: "Speech", category: "Academic" },
              { sno: 17, date: "2022-10-15", event: "Extempore", category: "Academic" },
              { sno: 18, date: "2022-10-22", event: "Volley ball", category: "Sports" },
              { sno: 19, date: "2022-11-05", event: "Carrom", category: "Game" },
              { sno: 20, date: "2022-11-09", event: "Basket Ball", category: "Sports" },
              { sno: 21, date: "2022-11-12", event: "Kabaddi", category: "Sports" },
              { sno: 22, date: "2022-11-19", event: "Angry Bird", category: "Game" },
              { sno: 23, date: "2022-11-26", event: "Kho kho", category: "Sports" },
              { sno: 24, date: "2022-12-03", event: "Pubg", category: "Game" },
            ].map((activity, index) => {
              // Format date for better display
              const dateObj = new Date(activity.date);
              const formattedDate = dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              });
              
              return (
                <tr 
                  key={activity.sno} 
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#0d173b]">{activity.sno}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{formattedDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      {/* Icon based on category */}
                      <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0d173b] bg-opacity-10">
                        {activity.category === "Sports" && (
                          <svg className="h-3.5 w-3.5 text-[#0d173b]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                          </svg>
                        )}
                        {activity.category === "Cultural" && (
                          <svg className="h-3.5 w-3.5 text-[#0d173b]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
                          </svg>
                        )}
                        {activity.category === "Art" && (
                          <svg className="h-3.5 w-3.5 text-[#0d173b]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                            <path fillRule="evenodd" d="M10.893 9.889a1 1 0 01-1.736-.197l-1.7-3.838a1 1 0 01.197-1.05l3.55-3.55A2 2 0 0112.318 1H13a2 2 0 012 2v.582a2 2 0 01-.586 1.414l-3.55 3.55a1 1 0 01-1.05.197l-.737-.327 1.335 3.014a1 1 0 01-.197 1.05l-3.55 3.55A2 2 0 015.389 15H5a2 2 0 01-2-2v-.582a2 2 0 01.586-1.414l3.55-3.55a1 1 0 011.05-.197l-.443-.998z" clipRule="evenodd"></path>
                          </svg>
                        )}
                        {activity.category === "Academic" && (
                          <svg className="h-3.5 w-3.5 text-[#0d173b]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                          </svg>
                        )}
                        {activity.category === "Game" && (
                          <svg className="h-3.5 w-3.5 text-[#0d173b]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                          </svg>
                        )}
                        {activity.category === "Social" && (
                          <svg className="h-3.5 w-3.5 text-[#0d173b]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                          </svg>
                        )}
                      </span>
                      <span>{activity.event}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>

    {/* Stats Summary */}
    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { label: "Total Events", value: "24", icon: (
          <svg className="w-6 h-6 text-[#0d173b]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        )},
        { label: "Sports Events", value: "10", icon: (
          <svg className="w-6 h-6 text-[#0d173b]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )},
        { label: "Cultural Events", value: "3", icon: (
          <svg className="w-6 h-6 text-[#0d173b]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
        )},
        { label: "Academic Events", value: "3", icon: (
          <svg className="w-6 h-6 text-[#0d173b]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        )}
      ].map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center">
          <div className="bg-[#0d173b] bg-opacity-10 p-3 rounded-lg mr-4">
            {stat.icon}
          </div>
          <div>
            <div className="text-2xl font-bold text-[#0d173b]">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Year Filter */}
    {/* <div className="mt-8 flex flex-wrap gap-2">
      <span className="text-sm font-medium text-gray-700">Filter by Year:</span>
      {["All", "2022", "2023"].map((year, index) => (
        <button 
          key={index} 
          className={`px-3 py-1 text-sm rounded-md ${
            index === 0 
              ? "bg-[#0d173b] text-white" 
              : "bg-white text-[#0d173b] border border-[#0d173b] hover:bg-blue-50"
          }`}
        >
          {year}
        </button>
      ))}
    </div> */}
  </div>

  {/* Footer */}
  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
    <div className="text-center text-sm text-gray-500">
      © 2023 CSIT Student Activities. For more information, contact the Student Affairs Office.
    </div>
  </div>
</div>
  )
}

export default ExtraCurricularActivities
