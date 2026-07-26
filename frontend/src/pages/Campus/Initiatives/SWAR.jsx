import React, { useState } from 'react';

export default function SWARInitiative() {
  const [activeTab, setActiveTab] = useState('about');

  // Updated Committee Members
  const members = [
    { id: 1, name: "Dr. Padmini Sharma", designation: "Dean – First Yera", role: "Chairperson" },
    { id: 2, name: "Mrs. Nalesh Banjare", designation: "Assistant Professor(CSE)", role: "Member" },
    { id: 3, name: "Miss. Aastha Yadav", designation: "Assistant Professor(Civil)", role: "Member" },
    { id: 4, name: "Miss. Radhika Shukla", designation: "Assistant Professor(Chemistry)", role: "Member" },
    { id: 5, name: "Miss. Mamta Yadav", designation: "Hostel Warden(Girls Hostel)", role: "Member" }
  ];

  // Updated Student Representatives
  const studentReps = [
    { id: 1, name: "Miss. Aditi Sharma", department: "CSE 7TH", role: "Member" },
    { id: 2, name: "Miss. Komal Verma", department: "CSE 7TH", role: "Member" },
    { id: 3, name: "Miss. Yemesh Sahu", department: "Civil 5TH", role: "Member" },
    { id: 4, name: "Miss. Chhavi Deshmukh", department: "EEE 5TH", role: "Member" },
    { id: 5, name: "Miss. Shail Sahu", department: "CSE 3RD", role: "Member" },
    { id: 6, name: "Miss. Megha Sahu", department: "CSE 3RD", role: "Member" },
    { id: 7, name: "Miss. Neelam Sahu", department: "CSE 3RD", role: "Member" }
  ];

  // Updated Objectives
  const objectives = [
    "To uphold and protect the dignity, rights, and well-being of women within the institution.",
    "To foster a safe, inclusive, and gender-sensitive environment at CSIT, Durg, ensuring that women employees and students are free from discrimination, harassment, and bias.",
    "To promote a positive and supportive academic and professional atmosphere for female students, faculty, and staff members.",
    "To encourage gender awareness and cultivate a culture of mutual respect, equality, and inclusivity across the institution.",
    "To organize seminars, workshops, training sessions, and awareness programs on gender sensitization, women's rights, and workplace ethics on a regular basis.",
    "To receive, examine, and address complaints related to harassment, discrimination, or misconduct against women, and to recommend appropriate action to the competent authority in accordance with institutional policies and applicable laws."
  ];

  // SWAR Program Details
  const programDetails = [
    { id: 1, program: "Guest Lecture on International Women's Day", topic: "From Passion to Profession: A women's Journey to success", resourcePerson: "Mrs. Shivani Rastogi", date: "12.03.2026" },
    { id: 2, program: "Guest Lecture", topic: "Skin Care Routine", resourcePerson: "Mrs. Gurvinder kaur", date: "19.12.2025" },
    { id: 3, program: "Guest Lecture on International Women's Day", topic: "The Power of Action", resourcePerson: "All Female Staff CSIT", date: "08.03.2025" },
    { id: 4, program: "Guest Lecture", topic: "Female Health Awareness and Lifestyle at Present Scenario", resourcePerson: "Dr. Manshi Gultai", date: "28.01.2025" },
    { id: 5, program: "Guest Lecture", topic: "Financial Awareness", resourcePerson: "Lioness Suman Pandey", date: "18.07.2024" },
    { id: 6, program: "International Women's Day", topic: "Cultural Event", resourcePerson: "All Female Staff CSIT", date: "08.03.2024" },
    { id: 7, program: "Guest Lecture", topic: "Professional Image", resourcePerson: "Mrs. Juhi Vyas", date: "13.02.2024" },
    { id: 8, program: "Guest Lecture", topic: "Women Empowerment", resourcePerson: "Mrs. Roshni Bhagat", date: "29.03.2023" }
  ];

  // Tab IDs
  const tabs = [
    { id: 'about', label: 'About SWAR' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'programs', label: 'Program Details' },
    { id: 'members', label: 'Committee Members' },
    { id: 'students', label: 'Student Team' }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#0d173b] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Strengthening Women Awareness & Rights</h1>
          <p className="text-sm md:text-base mt-1">CSIT | SWAR - Women's Grievance Handling Cell</p>
          <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
        </div>
      </div>

      {/* Tab Navigation - Single Line with Scroll */}
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
        
        {/* Tab 1: About SWAR */}
        {activeTab === 'about' && (
          <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-[#0d173b] mb-4">About SWAR</h2>
            <p className="mb-4 text-gray-700 text-sm md:text-base">
              Strengthening Women Awareness & Rights (SWAR) – Women's Grievance Handling Cell is a dedicated platform that empowers women through awareness, support, and advocacy. It brings women together to share knowledge, address concerns, promote their rights, and foster personal and professional growth. Through collaboration and community engagement, SWAR works towards creating a more inclusive, equitable, and empowered society for women.
            </p>
            
            <h3 className="text-lg font-semibold text-[#0d173b] mt-6 mb-2">Women's Grievance Handling Cell</h3>
            <p className="text-gray-700 text-sm md:text-base mb-4">
              The Women's Grievance Handling Cell is established to ensure a safe, respectful, and supportive environment for all women employees and stakeholders of the institution. The Cell is committed to safeguarding the rights, dignity, and well-being of women by addressing their concerns and grievances promptly, fairly, and confidentially. It serves as a dedicated platform for resolving workplace issues and fostering a culture of equality, respect, and inclusivity.
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              Recognizing the vital role of women in both personal and professional spheres, the Cell works towards empowering women by providing support, guidance, and protection against discrimination, harassment, and any form of workplace misconduct. Through awareness initiatives and grievance redressal mechanisms, it strives to create a secure and conducive environment where women can thrive, contribute effectively, and achieve their full potential.
            </p>
          </div>
        )}

        {/* Tab 2: Objectives */}
        {activeTab === 'objectives' && (
          <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-[#0d173b] mb-4">Objectives of the Women's Grievance Handling Cell</h2>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-200 text-[#0d173b] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-sm md:text-base">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tab 3: Program Details */}
        {activeTab === 'programs' && (
          <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-[#0d173b] mb-4">SWAR Program Details</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-blue-200 rounded-lg">
                <thead className="bg-[#0d173b]">
                  <tr>
                    <th className="py-3 px-3 text-left text-xs font-medium text-white">S.No.</th>
                    <th className="py-3 px-3 text-left text-xs font-medium text-white">Program</th>
                    <th className="py-3 px-3 text-left text-xs font-medium text-white">Topic</th>
                    <th className="py-3 px-3 text-left text-xs font-medium text-white">Resource Person</th>
                    <th className="py-3 px-3 text-left text-xs font-medium text-white">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {programDetails.map((item) => (
                    <tr key={item.id} className="hover:bg-blue-50 border-b border-gray-100">
                      <td className="py-3 px-3 text-sm text-gray-700">{item.id}</td>
                      <td className="py-3 px-3 text-sm text-gray-700">{item.program}</td>
                      <td className="py-3 px-3 text-sm text-gray-700">{item.topic}</td>
                      <td className="py-3 px-3 text-sm text-gray-700">{item.resourcePerson}</td>
                      <td className="py-3 px-3 text-sm text-gray-700">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Committee Members */}
        {activeTab === 'members' && (
          <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-[#0d173b] mb-4">Professional Bodies – Committee Members</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-blue-200 rounded-lg">
                <thead className="bg-[#0d173b]">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-white">S.No</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-white">Name, Designation</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-white">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.id} className="hover:bg-blue-50 border-b border-gray-100">
                      <td className="py-3 px-4 text-sm text-gray-700">{member.id}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{member.name}, {member.designation}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{member.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-gray-700 text-sm">
              You can contact chairperson, SWAR at{' '}
              <a href="mailto:padminisharma@csitdurg.in" className="text-blue-600 hover:underline">
                padminisharma@csitdurg.in
              </a>
            </div>
          </div>
        )}

        {/* Tab 5: Student Representatives */}
        {activeTab === 'students' && (
          <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-[#0d173b] mb-4">SWAR Student Representative Team</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-blue-200 rounded-lg">
                <thead className="bg-[#0d173b]">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-white">S.No</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-white">Name</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-white">Department & Semester</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-white">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {studentReps.map((student) => (
                    <tr key={student.id} className="hover:bg-blue-50 border-b border-gray-100">
                      <td className="py-3 px-4 text-sm text-gray-700">{student.id}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{student.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{student.department}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{student.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}