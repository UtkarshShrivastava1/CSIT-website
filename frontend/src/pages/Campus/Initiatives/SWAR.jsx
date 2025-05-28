import React, { useState } from 'react';

export default function SWARInitiative() {
  const [activeTab, setActiveTab] = useState('about');

  const members = [
    { id: 1, name: "Dr. Padmini Sharma", designation: "I/c HOD", role: "EEE" },
    { id: 2, name: "Miss. Ayushi Pillay", designation: "Assistant Professor", role: "CSE" },
    { id: 3, name: "Miss. Aastha Yadav", designation: "Assistant Professor", role: "Civil" },
    { id: 4, name: "Miss. Surbhi Sahu", designation: "Assistant Professor", role: "Chemistry" },
    { id: 5, name: "Miss. Mamta Yadav", designation: "Hostel Warden", role: "Girls Hostel" }
  ];

  const studentReps = [
    { id: 1, name: "Miss. Ritika Sahu", department: "CSE 8th Sem" },
    { id: 2, name: "Miss. Aditi Rai", department: "CSE 8th Sem" },
    { id: 3, name: "Miss. Soniya Dewangan", department: "CSE 8th Sem" },
    { id: 4, name: "Miss. Aditi Sharma", department: "CSE 8th Sem" },
    { id: 5, name: "Miss. Komal Deshmukh", department: "CSE 5th Sem" },
    { id: 6, name: "Miss. Nivedya Indu B", department: "CSE 5th Sem" },
    { id: 7, name: "Miss. Aishwarya Sahu", department: "Civil 6th Sem" },
    { id: 8, name: "Miss. Yemesh Sahu", department: "Civil 6th Sem" },
    { id: 9, name: "Miss. Chhavi Deshmukh", department: "EEE 3rd Sem" }
  ];

  const objectives = [
    "To Uphold the Dignity of Women.",
    "To Facilitate a Gender-Sensitive and congenial working environment at CSIT, Durg so that women, whether female employee or girls student, are not subjected to gender specific discrimination.",
    "Encourage a healthy working environment for all our female staff, students and faculty.",
    "Work towards building a gender-sensitized environment at our institute.",
    "Organize workshops and awareness programmes at regular intervals for building a gender-neutral place of work.",
    "To investigate reported cases of harassment of women, if any and submit its report to the disciplinary authority recommending action to be taken against the accused miscreants."
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <header className="mb-8">
      <div className="bg-[#0d173b] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold"> Strengthening Women Awareness & Rights</h1>
          <p className="text-sm md:text-base mt-1">CSIT |  Strengthening Women Awareness & Rights [SWAR]</p>
          <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
        </div>
        </div>
      </header>
      

      <div className="mb-6">
        <div className="flex flex-wrap mb-4 space-x-1 border-b">
          <button 
            className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'about' ? 'bg-blue-100 text-[#0d173b] border-b-2 border-[#0d173b]' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('about')}
          >
            About SWAR
          </button>
          <button 
            className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'objectives' ? 'bg-blue-100 text-[#0d173b] border-b-2 border-[#0d173b]' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('objectives')}
          >
            Objectives
          </button>
          <button 
            className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'members' ? 'bg-blue-100 text-[#0d173b] border-b-2 border-[#0d173b]' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('members')}
          >
            Committee Members
          </button>
          <button 
            className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'students' ? 'bg-blue-100 text-[#0d173b] border-b-2 border-[#0d173b]' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('students')}
          >
            Student Representatives
          </button>
        </div>
        
        {activeTab === 'about' && (
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-[#0d173b] mb-4">About SWAR</h2>
            <p className="mb-4 text-gray-700">
              Strengthening Women Awareness & Rights (SWAR), Womens Grievance Handling Cell is a growing community of women who share a common purpose to learn, educate and collaborate on ideas that have the power to effect meaningful and positive change while fighting the odds they face! It is an expanding network that brings women together to learn, laugh, and celebrate their authentic self, their unique gifts and their personal power!
            </p>
            
            <h3 className="text-lg font-semibold text-[#0d173b] mt-6 mb-2">Women Grievance Handling Cell:</h3>
            <p className="text-gray-700 mb-4">
              Womens grievance cell is supposed to sheltered, guard and promotes well being of all women employees of the institute. It takes care of all the problems of women at workplace and takes action.
            </p>
            <p className="text-gray-700">
              In the current scenario we find multitudes of women marching towards success in their personal and professional lives. Behind the confidence and strength of these women lies the feminine grace that fights all the odds that comes in their ways. The women grievance cell also deals with the harassment and violence at the workplace.
            </p>
          </div>
        )}
        
        {activeTab === 'objectives' && (
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-[#0d173b] mb-4">Objectives</h2>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-200 text-[#0d173b] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'members' && (
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-[#0d173b] mb-4">Committee Members</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-blue-200 rounded-lg">
                <thead className="bg-[#0d173b]">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-white">S.No</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-white">Name, Designation</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-white">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.id} className="hover:bg-blue-50">
                      <td className="py-3 px-4 border-b text-gray-700">{member.id}</td>
                      <td className="py-3 px-4 border-b text-gray-700">{member.name}, {member.designation}</td>
                      <td className="py-3 px-4 border-b text-gray-700">{member.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-gray-700">
              You can contact chairperson, SWAR at <a href="mailto:padminisharma@csitdurg.in" className="text-blue-600 hover:underline">padminisharma@csitdurg.in</a>
            </div>
          </div>
        )}
        
        {activeTab === 'students' && (
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-[#0d173b] mb-4">SWAR Student Representative Team 2021-22:</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-blue-200 rounded-lg">
                <thead className="bg-[#0d173b]">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-white">S.No</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-white">Name</th>
                    <th className="py-3 px-4 border-b text-left text-sm font-medium text-white">Department & Semester</th>
                  </tr>
                </thead>
                <tbody>
                  {studentReps.map((student) => (
                    <tr key={student.id} className="hover:bg-blue-50">
                      <td className="py-3 px-4 border-b text-gray-700">{student.id}</td>
                      <td className="py-3 px-4 border-b text-gray-700">{student.name}</td>
                      <td className="py-3 px-4 border-b text-gray-700">{student.department}</td>
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