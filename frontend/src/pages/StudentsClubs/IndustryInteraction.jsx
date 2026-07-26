import React from "react";

const IndustryInteraction = () => {
  const activities = [
    "Guest Lectures & Webinars by industry experts",
    "Industrial visits and exposure trips",
    "Internship and placement support",
    "Mentorship programs with industry professionals",
    "Networking events and alumni interactions",
  ];

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
              Industry Interaction
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Bridging the Gap Between Academia and Industry
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          The Industry Interaction program at Chhatrapati Shivaji Institute of Technology bridges the gap between academic learning and real-world industry requirements. Through expert lectures, workshops, and collaborations, students gain practical insights into current industry trends and practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b]"
            >
              <p className="text-sm text-gray-700">{activity}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-4 rounded-lg text-center">
          <p className="text-sm font-medium">
            "Connecting Students with Industry Leaders for a Brighter Future."
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryInteraction;