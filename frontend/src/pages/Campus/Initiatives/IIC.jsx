import React, { useState } from 'react'
import { iicActivities } from '../../../data/IIC_DATA';

const IIC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const objectives = [
    "To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in time bound fashion",
    "Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.",
    "Network with peers and national entrepreneurship development organizations.",
    "Create an Institutions Innovation portal to highlight innovative projects carried out by institutions faculty and students.",
    "Organize Hackathons, idea competition, mini-challenges etc.."
  ];

  const facultyMembers = [
    { sn: 1, name: "Dr. Santosh Kumar Sharma", role: "President" },
    { sn: 2, name: "Mr. Anmol Bhardwaj", role: "Convener , Start up Activity Coordinator" },
    { sn: 3, name: "Dr. Padmini Sharma", role: "ARIIA Coordinator,   NIRF Coordinator" },
    { sn: 4, name: "Mr. Rohit Oberoi", role: "Social Media Coordinator" },
    { sn: 5, name: "Mr.  Shubham Chandrakar", role: "Innovation Activity Coordinator, IPR Activity Coordinator" },
    { sn: 6, name: "Mr. Kamlesh Upadhyay", role: "Internship Activity Coordinator" },
    { sn: 7, name: "Mr. Kamal Chandrakar", role: "Member" },
    { sn: 8, name: "Mr. Jayant Rajpurohit", role: "Member" },
  ];

  const studentMembers = [
    { sn: 9, name: "Ms. Anisha Priya", role: "Student Convenor" },
    { sn: 10, name: "Ms. Ankita Mishra", role: "Internship Coordinator" },
    { sn: 11, name: "Ms. Yemesh Sahu", role: "IPR Coordinator" },
    { sn: 12, name: "Mr. Mitul Meshram", role: "Innovation Coordinator" },
    { sn: 13, name: "Mr. Trilokinath", role: "Social Media Coordinator" },
    { sn: 14, name: "Mr. Omkar Dixit", role: "Start Up Coordinator" },
  ];

  const tabs = [
    { id: 'about', label: 'About IIC' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'members', label: 'Council Members' },
    { id: 'activities', label: 'Activities' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'objectives':
        return <ObjectivesSection objectives={objectives} />;
      case 'members':
        return <MembersSection facultyMembers={facultyMembers} studentMembers={studentMembers} />;
      case 'activities':
        return <ActivitiesSection activities={iicActivities} />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Institution's Innovation Council (IIC)</h1>
          <p className="text-sm md:text-base mt-1 text-blue-100">
            Fostering a Culture of Innovation and Entrepreneurship
          </p>
          <hr className="w-16 border-t-2 border-white mt-3 mb-0" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-4 md:px-6 pt-4 border-b border-gray-200 bg-white">
        <div className="flex flex-nowrap overflow-x-auto gap-1 pb-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm md:text-base font-medium whitespace-nowrap transition-all duration-200 rounded-t-lg ${
                activeTab === tab.id
                  ? 'bg-blue-50 text-[#0d173b] border-b-2 border-[#0d173b]'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-[#0d173b]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 md:p-6">
        {renderContent()}
      </div>
    </div>
  )
}

const AboutSection = () => (
  <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold text-[#0d173b] mb-3">About IIC</h3>
    <p className="text-gray-700 text-sm md:text-base mb-4">
      Ministry of Education (MoE) through MoE’s Innovation Cell (MIC) launched the Institution’s Innovation Council (IIC) program in collaboration with AICTE for Higher Educational Institutions (HEIs) to systematically foster the culture of innovation and start-up ecosystem in education institutions. Primarily, IIC’s role is to engage large number of faculty, students and staff in various innovation and entrepreneurship related activities such as ideation, Problem solving, Proof of Concept development, Design Thinking, IPR, project handling and management at Pre-incubation/Incubation stage, etc., so that innovation and entrepreneurship ecosystem gets established and stabilized in HEIs.
    </p>
    <p className="text-gray-700 text-sm md:text-base">
      Chhatrapati Shivaji Institute of Technology is one of the premier engineering college in the region to have an approved Institute Innovation Cell. The Council comprises of the faculty members and the students who are involved in the development of the ecosystem leading to idea generation and innovation.
    </p>
  </div>
);

const ObjectivesSection = ({ objectives }) => (
  <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Objectives of IICs</h3>
    <ul className="space-y-3">
      {objectives.map((objective, index) => (
        <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
          <span className="text-[#0d173b] text-lg mr-3">✦</span>
          <span className="text-sm text-gray-700">{objective}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MembersSection = ({ facultyMembers, studentMembers }) => (
  <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
    <h2 className="text-xl font-semibold text-[#0d173b] mb-4">IIC Council Members</h2>

    {/* Faculty Members Table */}
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#0d173b] mb-3">Faculty Members</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg">
          <thead className="bg-[#0d173b]">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-white">S.N.</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-white">Name of Member</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-white">Key Role/ Position assigned in IIC</th>
            </tr>
          </thead>
          <tbody>
            {facultyMembers.map((member) => (
              <tr key={member.sn} className="hover:bg-blue-50 border-b border-gray-100">
                <td className="py-3 px-4 text-sm text-gray-700">{member.sn}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{member.name}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Student Members Table */}
    <div>
      <h3 className="text-lg font-semibold text-[#0d173b] mb-3">Student Members</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 rounded-lg">
          <thead className="bg-[#0d173b]">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-white">S.N.</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-white">Name of Member</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-white">Key Role/ Position assigned in IIC</th>
            </tr>
          </thead>
          <tbody>
            {studentMembers.map((member) => (
              <tr key={member.sn} className="hover:bg-blue-50 border-b border-gray-100">
                <td className="py-3 px-4 text-sm text-gray-700">{member.sn}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{member.name}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ActivitiesSection = ({ activities }) => (
  <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
    <h2 className="text-xl font-semibold text-[#0d173b] mb-4">IIC Activities (2024-25)</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-blue-200 rounded-lg">
        <thead className="bg-[#0d173b]">
          <tr>
            <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Activity</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Resource Person</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Type</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index} className="hover:bg-blue-50 border-b border-gray-100">
              <td className="py-3 px-4 text-sm text-gray-800">{activity.activity}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{activity.resourcePerson}</td>
              <td className="py-3 px-4 text-sm text-gray-600 whitespace-nowrap">{activity.date}</td>
              <td className="py-3 px-4 text-sm text-gray-600">
                <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${activity.type === 'MIC' ? 'bg-green-100 text-green-800' : activity.type === 'IIC' ? 'bg-blue-100 text-blue-800' : activity.type === 'Celebration' ? 'bg-yellow-100 text-yellow-800' : 'bg-purple-100 text-purple-800'}`}>
                  {activity.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default IIC
