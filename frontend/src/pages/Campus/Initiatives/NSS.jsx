import React, { useState } from "react";

export default function NSS() {
  const [activeYear, setActiveYear] = useState("2025-26");

  // Updated initiatives data with new content
  const activities = {
    "2025-26": [
      {
        id: 1,
        event: "Kargil Vijay Diwas",
        date: "26-07-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 2,
        event: "Vyas Pujan",
        date: "08-08-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 3,
        event: "Nasha Mukt Bharat Abhiyan (Pledge)",
        date: "13-08-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 4,
        event: "Tiranga Mahotsav",
        date: "15-08-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 5,
        event: "B - Certificate Distribution",
        date: "29-08-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 6,
        event: "National Sports Day Celebration",
        date: "29-08-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 7,
        event: "Pre- RDC Parade Participation",
        date: "10-09-2025",
        venue: "CSVTU, Bhilai",
        remark: ""
      },
      {
        id: 8,
        event: "Blood Donation at Sector -9 Hospital",
        date: "10-09-2025",
        venue: "Sector -09 Hospital, Bhilai",
        remark: "Outreach Programme"
      },
      {
        id: 9,
        event: "Engineers Day Celebration",
        date: "15-09-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 10,
        event: "Raktdan Amrit Mahotsav 2.0",
        date: "17-09-2025",
        venue: "Village - Thanoud",
        remark: "Outreach Programme"
      },
      {
        id: 11,
        event: "NSS Day",
        date: "24-09-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 12,
        event: "Cyber Security Workshop",
        date: "10-10-2025 & 11-10-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 13,
        event: "Essay writing & Poster Making competition on Voting Awareness",
        date: "15-10-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 14,
        event: "Essay Writing Competition at G.H.S.S. Vinayakpur",
        date: "16-10-2025",
        venue: "Village - Vinayakpur",
        remark: "One Day Camp (Outreach Programme)"
      },
      {
        id: 15,
        event: "Essay writing & Poster Making competition on HIV Awareness",
        date: "17-10-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 16,
        event: "Technical Session on Ekta Diwas",
        date: "31-10-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 17,
        event: "Education Day",
        date: "11-11-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 18,
        event: "Blood Donation Drive",
        date: "16-11-2025",
        venue: "Dist. Hospital Durg",
        remark: "Outreach Programme"
      },
      {
        id: 19,
        event: "AIDS Day (Digital Poster making)",
        date: "01-12-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 20,
        event: "Aids awareness (Presentation Session)",
        date: "04-12-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 21,
        event: "Pollution Day (Presentation Session)",
        date: "04-12-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 22,
        event: "Veer Bal Diwas",
        date: "26-12-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 23,
        event: "Youth Day",
        date: "10-01-2026",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 24,
        event: "Traditional Games Day",
        date: "01-12-2026",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 25,
        event: "Army Day",
        date: "14-01-2026",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 26,
        event: "Medical Camp",
        date: "15-01-2026",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 27,
        event: "Basant Panchami",
        date: "16-01-2026",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 28,
        event: "Republic Day",
        date: "26-01-2026",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 29,
        event: "Pariksha Pe Charcha",
        date: "29-01-2026",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 30,
        event: "Yuva Samvaad",
        date: "02-06-2026",
        venue: "SRIU, Raipur",
        remark: ""
      },
      {
        id: 31,
        event: "International Women's Day",
        date: "08-03-2026",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 32,
        event: "Run and Ride Marathon",
        date: "03-08-2026",
        venue: "Jayanti Stadium Bhilai",
        remark: "Outreach Programme"
      },
      {
        id: 33,
        event: "Shaheed Diwas",
        date: "23-03-2026",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 34,
        event: "World Environment Day",
        date: "05-06-2026",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 35,
        event: "International Yoga Day",
        date: "21-06-2026",
        venue: "CSIT, Campus",
        remark: ""
      }
    ],
    "2024-25": [
      {
        id: 1,
        event: "Plantation Drive",
        date: "18-07-2024 to 23-07-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 2,
        event: "Kargil Vijay Diwas",
        date: "26-07-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 3,
        event: "Independence Day",
        date: "15-08-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 4,
        event: "Teachers Day",
        date: "05-09-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 5,
        event: "Hindi Diwas",
        date: "14-09-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 6,
        event: "Engineers' Day",
        date: "15-09-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 7,
        event: "NSS Foundation Day",
        date: "24-09-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 8,
        event: "Speech & Poetry competition",
        date: "26-09-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 9,
        event: "Swachh Bharat Abhiyan",
        date: "28-09-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 10,
        event: "Gandhi Jayanti",
        date: "02-10-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 11,
        event: "NSS Induction Program",
        date: "10-10-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 12,
        event: "Word Food Day",
        date: "16-10-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 13,
        event: "Red Ribbon Introduction",
        date: "24-10-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 14,
        event: "Chhattisgarh Foundation Day Celebration",
        date: "01-11-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 15,
        event: "Children's Day",
        date: "14-11-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 16,
        event: "Blood Donation Drive",
        date: "15-11-2024",
        venue: "Dist Hospital Durg",
        remark: "Outreach Programme"
      },
      {
        id: 17,
        event: "Mother's Day",
        date: "19-11-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 18,
        event: "Traffic Week (Helmet Awareness)",
        date: "24-11-2024 to 30-11-2024",
        venue: "Durg & Bhilai",
        remark: "Outreach Programme"
      },
      {
        id: 19,
        event: "Constitution Day",
        date: "26-11-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 20,
        event: "Aids Day",
        date: "01-12-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 21,
        event: "National Pollution Control Day",
        date: "02-12-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 22,
        event: "Devi Ahilya Bai Holkar Program",
        date: "04-12-2024",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 23,
        event: "National Youth Day",
        date: "12-01-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 24,
        event: "NSS Day Celebration",
        date: "15-01-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 25,
        event: "Swachhata Abhiyan",
        date: "19-01-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 26,
        event: "Republic Day",
        date: "26-01-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 27,
        event: "Martyrs' Day",
        date: "30-01-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 28,
        event: "Awareness on Civil Defence Mock Drill",
        date: "07-05-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 29,
        event: "Poster & Rangoli Making Competition on Technology for Nation First",
        date: "16-05-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 30,
        event: "Environment Day",
        date: "05-06-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 31,
        event: "Awareness to Beat Plastic solution",
        date: "05-06-2025",
        venue: "CSIT, Campus",
        remark: ""
      },
      {
        id: 32,
        event: "International Yoga Day",
        date: "21-06-2025",
        venue: "CSIT, Campus",
        remark: ""
      }
    ]
  };

  // Special Camps Data
  const specialCamps = [
    {
      id: 1,
      campTheme: "7 days Special Camp: Youth for Drug free Society",
      date: "13-02-2026 to 19-02-2026",
      venue: "Village- Acchoti, Dist - Durg"
    },
    {
      id: 2,
      campTheme: "7 days Special Camp: Youth For digital Literacy",
      date: "03-03-2025 to 09-03-2025",
      venue: "Village- Acchoti, Dist – Durg"
    }
  ];

  // Benefits data
  const benefits = [
    "Additional advantage in recruitment for various Government Posts where NSS certificates and social service experience are considered during selection, interviews, or merit evaluation.",
    "Prestigious opportunity to represent the college at the Republic Day Camp (RDC), the highest and most celebrated NSS platform at the National Level.",
    "Exclusive chance to participate in the National Integration Camp (NIC) and connect with talented youth from diverse cultures across India.",
    "Exciting opportunity to attend Adventure Camps, enhancing leadership, teamwork, resilience, and confidence.",
    "Proud platform to showcase your talents and represent the college at State and National Youth Festivals.",
    "Supports holistic student development in line with NEP 2020 objectives.",
    "Enhances your Resume/CV and provides an edge during campus placements and job interviews.",
    "Develops strong leadership, teamwork, and organizational skills valued by employers and government agencies.",
    "Builds communication, public speaking, and event management skills, decision-making, problem-solving, and project management abilities through real-life community engagement.",
    "Expands your professional and social network through interaction with students, officials, and community leaders.",
    "Creates a sense of social responsibility and nation-building, making you a well-rounded citizen."
  ];

  const achievements = [
    { id: 1, name: "Ms. Shanu Vaishnav", year: "2023-24", subject: "Selected For Republic Day Parade (RDC)" },
    { id: 2, name: "Mr. Deepanshu Sahu", year: "2024-25", subject: "Selected For NIC Camp at Somani C.G" },
    { id: 3, name: "Ms. Swati sahu", year: "2025-26", subject: "Selected For Viksit Bharat Younge Leadet Dialogue C.G. Team through My Bharat." },
    { id: 4, name: "Mr. Nitin Chakradhari", year: "2025-26", subject: "Selected For State lavel Camp 2025-26 at Balodabazar" },
    { id: 5, name: "Mr. Shubham Chandrakar", year: "2025-26", subject: "Selected As P.O. of CSVTU NSS Team for State Level Camp At Balodabazar" },
    { id: 6, name: "Ms. Anjali Sahu", year: "2025-26", subject: "Selected For Top 400 Student under MY Bharat Budget Quest 2026" }
  ];

  const nssStructure = [
    "Dr. Ravi Mishra (Principal CSIT, Durg)",
    "Mr. Shubham Chandrakar (Programme Officer)",
    "Mr. Narendra Suryavanshi (Asst. Programme Officer)",
    "Student Co Ordinator",
    "Volunteers"
  ];

  const nssSymbols = [
    { title: "Wheel", description: "Symbolizes movement, progress, and social change." },
    { title: "Eight Spokes", description: "Represent the 24 hours of the day, reminding volunteers to serve society at all times." },
    { title: "Red Colour", description: "Signifies youth, energy, enthusiasm, and dedication." },
    { title: "Navy Blue Colour", description: "Represents the vast universe and NSS's contribution to the welfare of humanity." }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#0d173b] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">NSS</h1>
          <p className="text-sm md:text-base mt-1">CSIT | National Service Scheme</p>
          <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
        </div>
      </div>

      <div className="p-4 md:p-6">
        {/* About NSS */}
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold text-[#0d173b] mb-4">About NSS</h2>
          <p className="mb-4 text-gray-700 text-sm md:text-base">
            The National Service Scheme (NSS) is a flagship youth development programme launched by the Government of India under the Ministry of Youth Affairs & Sports. Established in 1969, NSS aims to develop the personality and character of students through voluntary community service. Guided by its motto, "Not Me, But You," the scheme instills the values of social responsibility, leadership, discipline, teamwork, and national integration while encouraging students to actively contribute to the welfare and development of society.
          </p>
        </div>

        {/* About Us */}
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-semibold text-[#0d173b] mb-4">About Us</h2>
          <p className="mb-4 text-gray-700 text-sm md:text-base">
            The National Service Scheme (NSS) Unit of CSIT Durg is dedicated to developing socially responsible, skilled, and compassionate students through community service and leadership activities. The unit actively organizes awareness campaigns, cleanliness drives, health camps, environmental initiatives, and rural development programs. NSS at CSIT provides students with opportunities to serve society, enhance their personality, and contribute to nation-building while embodying the motto "Not Me But You."
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-sm font-medium text-gray-600">Unit Size</p>
              <p className="text-lg font-bold text-[#0d173b]">100 Volunteers/year</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-sm font-medium text-gray-600">Motto</p>
              <p className="text-lg font-bold text-[#0d173b]">"Not Me But You."</p>
            </div>
          </div>
        </div>

        {/* NSS Symbols & Badge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#0d173b] mb-3">NSS Symbols</h3>
            <p className="text-gray-700 text-sm mb-4">The NSS symbol is inspired by the wheel of the Konark Sun Temple and represents continuous progress, social service, and nation-building.</p>
            <ul className="space-y-2">
              {nssSymbols.map(symbol => (
                <li key={symbol.title} className="flex items-start"><span className="font-bold text-[#0d173b] w-28 flex-shrink-0">{symbol.title}:</span><span className="text-sm text-gray-600">{symbol.description}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#0d173b] mb-3">NSS Badge</h3>
            <p className="text-gray-700 text-sm">The NSS Badge symbolizes the spirit of selfless service, discipline, and social responsibility. Its design is inspired by the wheel of the Konark Sun Temple, representing continuous movement, progress, and dedication to nation-building. Wearing the NSS badge reflects a volunteer's commitment to the motto "Not Me, But You", emphasizing service to society above self-interest.</p>
          </div>
        </div>
      </div>

      {/* Objectives & Who Can Join */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-6 mb-6">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-[#0d173b] mb-3">🎯 Objectives</h3>
          <p className="text-gray-700 text-sm md:text-base italic">"Student personality development through community services."</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-[#0d173b] mb-3">👥 Who Can Join</h3>
          <p className="text-gray-700 text-sm md:text-base">All the Students From CSIT, Durg are eligible to join the NSS Unit.</p>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="px-4 md:px-6 mb-6">
        <h3 className="text-xl font-semibold text-[#0d173b] mb-4 flex items-center gap-2">
          <span className="text-2xl">⭐</span> Key Benefits of Joining NSS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start gap-3 hover:shadow-md transition-shadow">
              <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
              <p className="text-sm text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="px-4 md:px-6 mb-6">
        <h3 className="text-xl font-semibold text-[#0d173b] mb-4 flex items-center gap-2">
          <span className="text-2xl">🏆</span> Achievements
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-blue-200 rounded-lg">
            <thead className="bg-[#0d173b]">
              <tr>
                <th className="py-3 px-3 text-left text-xs font-medium text-white">S.No.</th>
                <th className="py-3 px-3 text-left text-xs font-medium text-white">Name of the Awardee</th>
                <th className="py-3 px-3 text-left text-xs font-medium text-white">Year</th>
                <th className="py-3 px-3 text-left text-xs font-medium text-white">Subject</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50 border-b border-gray-100">
                  <td className="py-3 px-3 text-sm text-gray-700">{item.id}</td>
                  <td className="py-3 px-3 text-sm text-gray-700">{item.name}</td>
                  <td className="py-3 px-3 text-sm text-gray-700">{item.year}</td>
                  <td className="py-3 px-3 text-sm text-gray-700">{item.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Special Camps Section */}
      <div className="px-4 md:px-6 mb-6">
        <h3 className="text-xl font-semibold text-[#0d173b] mb-4 flex items-center gap-2">
          <span className="text-2xl">⛺</span> 7 Days Special Camp
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-[#0d173b]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">S.No.</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Camp Theme</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Venue</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {specialCamps.map((camp, index) => (
                <tr key={camp.id} className={index % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{camp.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{camp.campTheme}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{camp.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{camp.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Year Filter Tabs */}
      <div className="px-4 md:px-6 mb-4 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveYear("2025-26")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            activeYear === "2025-26" 
              ? "bg-[#0d173b] text-white shadow-md" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Academic Year 2025-26
        </button>
        <button
          onClick={() => setActiveYear("2024-25")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            activeYear === "2024-25" 
              ? "bg-[#0d173b] text-white shadow-md" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Academic Year 2024-25
        </button>
      </div>

      {/* Events Table */}
      <div className="px-4 md:px-6 pb-6">
        <h3 className="text-xl font-semibold text-[#0d173b] mb-4 flex items-center gap-2">
          <span className="text-2xl">📅</span> Events - {activeYear}
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-[#0d173b]">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">S.No.</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Events</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date of Event</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Venue</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Remark</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activities[activeYear].map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.event}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{item.venue}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {item.remark ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.remark}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* From the Programme Officer's Desk */}
      <div className="px-4 md:px-6 pb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-[#0d173b] mb-4">From the Programme Officer's Desk</h3>
          <p className="text-gray-700 text-sm md:text-base mb-4 italic">
            Dear Students,
            <br /><br />
            The National Service Scheme (NSS) is more than a volunteer programme—it is a platform for learning, leadership, and nation-building. It inspires students to step beyond academics, connect with society, and develop qualities such as responsibility, teamwork, discipline, and compassion.
            <br /><br />
            Through community service and social initiatives, NSS empowers young minds to become confident leaders and responsible citizens. Every activity is an opportunity to learn, serve, and create a meaningful impact.
            <br /><br />
            I invite every student to join this journey of service, personal growth, and social commitment. Together, let us work towards building a better society while shaping ourselves into responsible professionals and future leaders.
          </p>
          <p className="text-gray-800 font-semibold">Best Wishes,</p>
          <p className="text-gray-700 font-medium">Mr. Shubham Chandrakar</p>
          <p className="text-sm text-gray-600">Programme Officer</p>
          <p className="text-sm text-gray-600">National Service Scheme (NSS)</p>
          <a href="mailto:shubhamchandrakar@csitdurg.in" className="text-sm text-blue-600 hover:underline">shubhamchandrakar@csitdurg.in</a>
        </div>
      </div>

      {/* NSS Structure Section */}
      <div className="px-4 md:px-6 pb-6">
        <h3 className="text-xl font-semibold text-[#0d173b] mb-4 flex items-center gap-2">
          <span className="text-2xl">🏛️</span> NSS Structure
        </h3>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <ul className="space-y-3">
            {nssStructure.map((member, index) => (
              <li key={index} className="flex items-center">
                <span className="bg-blue-200 text-[#0d173b] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700 text-sm md:text-base">{member}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}