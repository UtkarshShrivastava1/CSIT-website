import React from 'react';
import { ExternalLink } from 'lucide-react';

const Grievances = () => {
  const committeeMembers = [
    { id: 1, name: 'Dr. C. S. Sharma, HoD ( Comm. Skills)', role: 'Chairman of the Committee', contact: '8966000051' },
    { id: 2, name: 'Dr. Padmini Sharma, I/c HoD(EEE)', role: 'Member', contact: '9329639384' },
    { id: 3, name: 'Mr. H. R. Chandraker, Dean Admission', role: 'Member', contact: '8966000059' },
    { id: 4, name: 'Mr. Nirmal Pandey, I/C Exam Section', role: 'Member', contact: '8109167303' },
  ];

  const objectives = [
    "To provide a fair, transparent, and accessible grievance redressal mechanism.",
    "To ensure timely resolution of complaints related to academic and administrative matters.",
    "To promote a healthy, safe, and harmonious campus environment.",
    "To protect the rights and dignity of students, faculty, and staff.",
    "To encourage constructive feedback for institutional improvement."
  ];

  const scope = [
    "Academic matters",
    "Examination and evaluation issues",
    "Attendance and classroom-related concerns",
    "Laboratory and library facilities",
    "Hostel, transport, canteen, and campus services",
    "Infrastructure and maintenance issues",
    "Student welfare and support services",
    "Administrative matters",
    "Scholarships and fee-related issues",
    "Any other genuine grievance affecting the academic or campus environment"
  ];

  const processSteps = [
    "Submit the grievance through the online grievance portal or by submitting a written application to the Grievance Redressal Cell.",
    "The grievance is acknowledged and registered.",
    "The Cell reviews the complaint and, if required, seeks clarification from the concerned department.",
    "Appropriate action is taken after thorough examination of the issue.",
    "The complainant is informed about the resolution within the stipulated time."
  ];

  const principles = [
    "Fair and unbiased investigation",
    "Confidential handling of complaints",
    "Timely resolution",
    "Transparency and accountability",
    "Respect for the rights of all stakeholders",
    "Compliance with AICTE, UGC, and affiliating university guidelines"
  ];

  const whoCanSubmit = [
    "Students",
    "Parents/Guardians",
    "Faculty Members",
    "Non-Teaching Staff",
    "Alumni (where applicable)",
    "Other Institutional Stakeholders"
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Grievance Redressal</h1>
          <p className="text-base text-gray-200 mt-2">
            Ensuring transparency and accountability in addressing student concerns
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-8">
        {/* Introduction */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            At Chhatrapati Shivaji Institute of Technology (CSIT), Durg, we are committed to maintaining a transparent, fair, and student-friendly environment. The Grievance Redressal Cell has been established to provide an effective mechanism for addressing the genuine concerns and grievances of students, parents, faculty members, and staff in a timely and impartial manner.
          </p>
          <p className="text-gray-700">
            The Cell ensures that every grievance is heard with sensitivity, confidentiality, and fairness, while promoting a culture of trust, accountability, and continuous improvement.
          </p>
        </div>

        {/* Objectives */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Objectives</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {objectives.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        {/* Scope of Grievances */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Scope of Grievances</h2>
          <p className="text-gray-700 mb-3">The Grievance Redressal Cell addresses concerns related to:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {scope.map((item, index) => (
              <div key={index} className="bg-blue-50 p-3 rounded-md text-sm text-center text-blue-900">{item}</div>
            ))}
          </div>
        </div>

        {/* Grievance Redressal Process */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Grievance Redressal Process</h2>
          <ol className="space-y-3">
            {processSteps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-[#0d173b] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold">{index + 1}</span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Guiding Principles & Who Can Submit */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Guiding Principles</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {principles.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Who Can Submit a Grievance?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {whoCanSubmit.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>

        {/* Grievance Committee */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 p-6">Grievance Committee</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#0d173b] text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Members</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contact Number</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {committeeMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Online Submission & Commitment */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Online Grievance Submission</h2>
          <p className="text-gray-700 mb-4">The Institute encourages stakeholders to submit their grievances through the online grievance portal for faster processing and effective tracking.</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWRh84QcbEflhtYuPkqEhoBn9NNMaW-8shOrxMDHqDo5Qcdw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0d173b] hover:bg-[#1a2b5f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d173b] transition-all duration-300"
          >
            Register Grievance
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-semibold text-[#0d173b] mb-2">Commitment of CSIT</h3>
            <p className="text-gray-700 mb-4">At CSIT Durg, every grievance is treated as an opportunity to improve institutional quality and enhance stakeholder satisfaction. The Institute is committed to resolving concerns promptly, ensuring justice, and fostering a positive learning and working environment for all.</p>
            <p className="text-lg font-semibold text-[#0d173b] italic">
              "Your Voice Matters. We Listen. We Resolve. We Improve."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grievances;
