import React from "react";

const Scholarship = () => {
  const scholarships = [
    {
      title: "Meritorious Student Scholarship",
      icon: "🏅",
      description:
        "Students who have secured 80% or above in the Class 12 Board Examination are eligible to avail up to 100% waive off in the tuition fee for all semesters, irrespective of their caste category.",
      color: "from-yellow-500 to-amber-600",
    },
    {
      title: "Sibling Scholarship",
      icon: "👯",
      description:
        "Applicable to twins and real siblings studying in the institution. Any one of the siblings will receive a fee concession of up to ₹3,000 per semester.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Extracurricular Achievement Scholarship",
      icon: "🎯",
      description:
        "Students who have demonstrated outstanding performance in sports, cultural activities, or other extracurricular activities at the district, state, or national level may be eligible for a scholarship as per the institution's norms.",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="h-44 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Scholarship Facilities
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Empowering Excellence Through Scholarships
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scholarships.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`bg-gradient-to-r ${item.color} p-4 text-white`}>
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-[#0d173b]">Note:</span> Scholarship
            benefits are subject to the rules and regulations of the institution
            and may be revised from time to time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;