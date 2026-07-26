import React from 'react';

export default function MOUs() {
  const mouData = [
    { id: 1, name: "Nfolks Data Solutions", location: "Pune", category: "IT" },
    { id: 2, name: "Opex Accelerator Pvt. Ltd.", location: "Kolhapur, Maharashtra", category: "IT" },
    { id: 3, name: "Huawei ICT Academy", location: "Gurgaon", category: "IT" },
    { id: 4, name: "AarviElectromech", location: "Himachal Pradesh", category: "Manufacturing" },
    { id: 5, name: "Axiom SoftechPvt. Ltd.", location: "Nagpur", category: "IT" },
    { id: 6, name: "Pylons Technologies", location: "Pune", category: "IT" },
    { id: 7, name: "Banchhor Infrastructures Pvt. Ltd.", location: "Durg", category: "Infrastructure" },
    { id: 8, name: "Innovation4U", location: "Bhilai", category: "IT" },
    { id: 9, name: "Rubicon Skill Development Pvt. Ltd.", location: "Pune", category: "Education" },
    { id: 10, name: "ProwizMansystemsPvt. Ltd.", location: "Pune", category: "IT" },
    { id: 11, name: "WeblengthInfonetPvt. Ltd. (Superset)", location: "Bhopal", category: "IT" },
    { id: 12, name: "Sorting Hat Technologies Pvt. Ltd. (Unacademy)", location: "Bangalore", category: "IT" },
    { id: 13, name: "Siddhivinayak Associates", location: "Durg", category: "Consulting" },
    { id: 14, name: "Tech36garh", location: "Durg", category: "IT" },
    { id: 15, name: "Audittech Industrial Services Pvt. Ltd.", location: "Durg", category: "Services" },
    { id: 16, name: "Shriram Value Services (P) Ltd.", location: "Chennai", category: "Services" },
    { id: 17, name: "Edunet Foundation", location: "Gurgaon", category: "Education" },
    { id: 18, name: "SK Deep Tech Pvt. Ltd.", location: "Hyderabad", category: "IT" },
    { id: 19, name: "Swadesh", location: "Lucknow", category: "IT" },
    { id: 20, name: "My Anatomy", location: "Bangalore", category: "Healthcare" },
    { id: 21, name: "DCS", location: "Pune", category: "IT" },
    { id: 22, name: "Kritartha Academy", location: "Bhilai", category: "Education" },
    { id: 23, name: "4D Education", location: "Bhilai", category: "Education" },
    { id: 24, name: "Eleation", location: "Pune", category: "Education" },
    { id: 25, name: "ARN Tele Services Pvt. Ltd.", location: "Haryana", category: "Telecom" },
    { id: 26, name: "Netlink Software Pvt. Ltd.", location: "Bhopal", category: "IT" },
    { id: 27, name: "S2P Edutech", location: "Nagpur", category: "Education" },
    { id: 28, name: "Nextgen Ventures", location: "Bhubaneshwar", category: "IT" },
    { id: 29, name: "Kreya Solutions", location: "Pune", category: "IT" },
    { id: 30, name: "Consta Cloud Pvt. Ltd.", location: "Raipur", category: "IT" }
  ];

  const objectives = [
    "Facilitate internships and vocational training",
    "Organize industrial visits and expert sessions",
    "Conduct skill development and certification programs",
    "Enhance placement opportunities",
    "Promote industry-oriented curriculum and research"
  ];

  const keyOutcomes = [
    "Improved industry exposure for students",
    "Better alignment with market demands",
    "Increased employability and placement success",
    "Strong industry-academia collaboration"
  ];

  const teamStrength = [
    "A team of skilled and proactive professionals",
    "Strong industry connections and networking",
    "Student-centric approach to career development"
  ];

  const teamRole = [
    "Bridging the gap between academia and industry",
    "Facilitating internships and placement opportunities",
    "Coordinating recruitment drives and industry interactions",
    "Guiding students through every stage of their career journey"
  ];

  const commitments = [
    "Industry Exposure: Organizing regular industrial visits and guest lectures by industry experts to provide real-world insights.",
    "Skill Development: Conducting pre-placement training sessions, workshops, and certification programs to enhance technical and soft skills.",
    "Career Preparation: Providing structured support for resume building, interview preparation, and aptitude development.",
    "Personalized Guidance: Offering career counselling sessions to help students make informed decisions about their future.",
    "Industry Collaboration: Strengthening industry–academia partnerships to create better training and placement opportunities."
  ];

  // Get unique categories for filter badges
  const categories = [...new Set(mouData.map(item => item.category))];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">MOUs</h1>
          <p className="text-sm md:text-base mt-1 text-blue-100">
            Memorandums of Understanding with Prominent Companies
          </p>
          <p className="text-sm md:text-base text-blue-200 mt-2">
            30+ Industry MoUs | Strong Collaboration | Enhanced Career Opportunities
          </p>
          <hr className="w-16 border-t-2 border-white mt-3 mb-0" />
        </div>
      </div>

      {/* Overview Section */}
      <div className="p-5 md:p-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">Overview</h3>
          <p className="text-gray-700 text-sm md:text-base">
            CSIT has established strategic Memorandums of Understanding (MoUs) with reputed organizations across various industry sectors. These collaborations aim to enhance industry exposure, provide hands-on training, facilitate internships, and strengthen placement opportunities for students.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-3">
            Through these partnerships, the institute ensures alignment with current industry requirements and promotes skill-based learning.
          </p>
        </div>
      </div>

      {/* MoUs List */}
      <div className="px-5 md:px-6 mb-6">
        <h3 className="text-lg font-semibold text-[#0d173b] mb-4">List of MoUs Partners</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-[#0d173b]">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">S.No</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Company Name</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Location</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mouData.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}>
                  <td className="py-3 px-4 text-sm text-gray-700">{item.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 font-medium">{item.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{item.location}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.category === 'IT' ? 'bg-indigo-100 text-indigo-700' :
                      item.category === 'Education' ? 'bg-emerald-100 text-emerald-700' :
                      item.category === 'Manufacturing' ? 'bg-amber-100 text-amber-700' :
                      item.category === 'Infrastructure' ? 'bg-cyan-100 text-cyan-700' :
                      item.category === 'Consulting' ? 'bg-purple-100 text-purple-700' :
                      item.category === 'Services' ? 'bg-blue-100 text-blue-700' :
                      item.category === 'Healthcare' ? 'bg-rose-100 text-rose-700' :
                      item.category === 'Telecom' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Objectives */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Objectives of MoUs</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-[#0d173b] bg-opacity-10 text-[#0d173b] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700 text-sm">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key Outcomes */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Key Outcomes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {keyOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                <span className="text-sm font-medium text-gray-700">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-2">Our Team</h3>
          <p className="text-sm text-gray-600 mb-4 italic">"Dedicated Professionals Driving Student Success and Career Growth."</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-[#0d173b] mb-2">Our Strength</h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {teamStrength.map((item, index) => (
                <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <span className="text-[#0d173b] mr-2">•</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0d173b] mb-2">Our Role</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {teamRole.map((item, index) => (
                <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <span className="text-[#0d173b] mr-2">•</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="px-5 md:px-6 pb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-2">Our Commitment</h3>
          <p className="text-sm text-gray-600 mb-4 italic">"Guiding, Training, and Empowering Students for Successful Careers."</p>
          
          <p className="text-sm text-gray-700 mb-4">
            The Training & Placement Cell at CSIT is dedicated to providing continuous and comprehensive support to students throughout their academic journey and beyond. Our focus is on nurturing talent, enhancing employability, and preparing students to meet industry expectations with confidence and competence.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Through a combination of structured training, industry interaction, and personalized guidance, we ensure that every student is well-equipped for a successful career.
          </p>

          <h4 className="font-semibold text-[#0d173b] mb-3">Our Key Commitments</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {commitments.map((item, index) => (
              <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span className="text-[#0d173b] text-lg mr-2">✦</span>
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}