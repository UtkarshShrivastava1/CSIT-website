import React from 'react';

const Activities = () => {
  const activitiesData = [
    {
      id: 1,
      date: "13-May-26",
      event: "Guest Lecture",
      speaker: "Mrinal Madaria",
      topic: "The Future is Encrypted: Cryptography Meets Networking"
    },
    {
      id: 2,
      date: "06-May-26",
      event: "Guest Lecture",
      speaker: "Rahul Singhai",
      topic: "Java is Easy. Engg is Hard Reimagine with AI"
    },
    {
      id: 3,
      date: "29-Nov-25",
      event: "Samagam-25",
      speaker: "Alumni Meet",
      topic: ""
    },
    {
      id: 4,
      date: "06-Nov-25",
      event: "Guest Lecture",
      speaker: "Aakash Dubey",
      topic: "Backend Engineering at Scale"
    },
    {
      id: 5,
      date: "29-Oct-25",
      event: "Guest Lecture",
      speaker: "Vivek Saraf",
      topic: "Introduction of Salesforce"
    },
    {
      id: 6,
      date: "17-Sep-25",
      event: "Guest Lecture",
      speaker: "Sijo Thomas",
      topic: "Gateways to Industries"
    },
    {
      id: 7,
      date: "16-Sep-25",
      event: "Guest Lecture",
      speaker: "Rahul Barchhiha",
      topic: "The Art of Prompt Engineering"
    },
    {
      id: 8,
      date: "11-Sep-25",
      event: "Guest Lecture",
      speaker: "Shishir Parshai",
      topic: "Gate Orientation Session"
    },
    {
      id: 9,
      date: "09-Sep-25",
      event: "Guest Lecture",
      speaker: "Navneet Dewangan",
      topic: "Database Administration"
    }
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
              Alumni Activities
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Strengthening bonds and creating lifelong connections
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            CSIT keeps its alumni engagement alive through a calendar of meaningful activities. Every year, we host an <strong>Annual Alumni Meet</strong>, bringing graduates together to reconnect, reminisce, and reinforce their bond with the institution. Alongside this, we regularly organize guest lectures, conducted as needed or at least once every two months, where alumni return to share their industry experience, insights, and practical knowledge with current students — bridging the gap between academic learning and real-world application.
          </p>
        </div>

        {/* Activities Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0d173b] text-white">
                <th className="px-4 py-3 text-left text-sm font-semibold rounded-tl-md">S. No</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Event Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Speaker's Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold rounded-tr-md">Topic</th>
              </tr>
            </thead>
            <tbody>
              {activitiesData.map((item, index) => (
                <tr key={item.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                  <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-600">{item.id}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-700">{item.date}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-700">
                    {item.event === "Samagam-25" ? (
                      <span className="bg-[#0d173b] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {item.event}
                      </span>
                    ) : (
                      item.event
                    )}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-700">{item.speaker}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-700">{item.topic || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Activities;