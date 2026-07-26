import React from "react";

const WhyCSIT = () => {
  const whyChooseCsitPoints = [
    {
      title: "Excellence in Education",
      description: "Delivering quality technical education through experienced faculty members, outcome-based learning, and a curriculum aligned with industry requirements.",
      icon: "🎓"
    },
    {
      title: "Modern Infrastructure",
      description: "A vibrant campus equipped with smart classrooms, advanced laboratories, innovation centers, digital library, workshops, sports facilities, hostels, and modern learning resources.",
      icon: "🏢"
    },
    {
      title: "Industry Integration",
      description: "Strong partnerships with leading industries, Centre of Excellence programs, internships, industrial visits, live projects, certification courses, and excellent placement support to prepare students for successful careers.",
      icon: "🤝"
    },
    {
      title: "Research & Innovation",
      description: "Encouraging research, entrepreneurship, startups, innovation projects, patents, and participation in national and international technical competitions.",
      icon: "🔬"
    },
    {
      title: "Holistic Development",
      description: "Promoting leadership, communication skills, personality development, student clubs, cultural activities, sports, and community engagement for overall personality enhancement.",
      icon: "🌱"
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
              Why Choose CSIT?
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Excellence in Engineering Education
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-8 bg-gradient-to-b from-white to-gray-50">
        <div>
          <div className="grid grid-cols-1 gap-6">
            {whyChooseCsitPoints.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl bg-blue-50 p-3 rounded-lg">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0d173b] mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCSIT;