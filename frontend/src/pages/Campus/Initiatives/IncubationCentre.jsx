import React from 'react';

export default function IncubationCentre() {
  const objectives = [
    "Identify and nurture innovative ideas and start-up opportunities.",
    "Provide pre-incubation and incubation support to aspiring entrepreneurs.",
    "Offer guidance on business planning, market validation, and product development.",
    "Facilitate access to funding opportunities, grants, and investment networks.",
    "Support start-ups in legal compliance, intellectual property rights (IPR), and company registration.",
    "Promote interdisciplinary collaboration and innovation-driven projects.",
    "Create employment opportunities through entrepreneurship and start-up development."
  ];

  const facilities = [
    {
      title: "Infrastructure Support",
      items: [
        "Dedicated co-working and incubation space",
        "High-speed internet and computing facilities",
        "Meeting and conference rooms",
        "Access to laboratories and prototyping facilities"
      ]
    },
    {
      title: "Mentorship & Guidance",
      items: [
        "Expert mentorship from academicians and industry professionals",
        "Business model development support",
        "Product design and validation assistance",
        "Start-up strategy and growth planning"
      ]
    },
    {
      title: "Funding & Investment Support",
      items: [
        "Guidance for Start-up India, MSME, and government schemes",
        "Assistance in preparing project proposals and pitch decks",
        "Investor and venture capital networking opportunities",
        "Support for seed funding applications"
      ]
    },
    {
      title: "Industry Connect",
      items: [
        "Industry-academia collaboration projects",
        "Internship and live project opportunities",
        "Networking events, start-up conclaves, and innovation challenges",
        "Corporate partnerships and technology transfer support"
      ]
    }
  ];

  const keyActivities = [
    "Start-up Awareness Programs",
    "Entrepreneurship Development Programs (EDPs)",
    "Innovation Challenges and Hackathons",
    "Idea Pitching Competitions",
    "Business Plan Competitions",
    "Workshops on Design Thinking, IPR, and Start-up Funding",
    "Industry Interaction Sessions",
    "Prototype Development and Product Demonstration Events"
  ];

  const whoCanApply = [
    "Students of all disciplines",
    "Faculty members and researchers",
    "Alumni entrepreneurs",
    "Early-stage start-ups",
    "Innovators with scalable business ideas",
    "Social entrepreneurs and technology innovators"
  ];

  const whyChoose = [
    "Innovation-friendly academic ecosystem",
    "Experienced faculty mentors and industry experts",
    "Strong industry and institutional collaborations",
    "Access to modern technical infrastructure",
    "Focus on technology, sustainability, and social impact",
    "End-to-end support from ideation to commercialization"
  ];

  const teamMembers = [
    {
      name: "Mr. Anil Kumar",
      role: "Manager",
      phone: "87701 96674",
      email: "anilray926@gmail.com"
    },
    {
      name: "Mr. Anmol Bhardwaj",
      role: "Deputy Manager",
      phone: "78983 10486",
      email: "anmolbhardwaj@csitdurg.in"
    },
    {
      name: "Vijay Kumar Bhonsle",
      role: "Accounts Officer",
      phone: "98261 24312",
      email: "vijaybhonsle@csitdurg.in"
    }
  ];
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Incubation Cell</h1>
          {/* <p className="text-sm md:text-base mt-1 text-blue-100">
            Chhatrapati Shivaji Institute of Technology (CSIT), Durg
          </p> */}
          <p className="text-sm md:text-base text-blue-200 mt-2">
            Transforming Ideas into Successful Ventures
          </p>
          <hr className="w-16 border-t-2 border-white mt-3 mb-0" />
        </div>
      </div>

      {/* About Section - Header Description */}
      <div className="p-5 md:p-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <p className="text-gray-700 text-sm md:text-base mb-4">
            The Incubation Cell at Chhatrapati Shivaji Institute of Technology is established to foster a culture of innovation, entrepreneurship, and technology-driven problem solving among students, faculty members, researchers, and aspiring entrepreneurs. The Centre serves as a dynamic platform where innovative ideas are nurtured, refined, and transformed into sustainable start-ups and impactful solutions for society and industry.
          </p>
        </div>
      </div>

      {/* About the Incubation Cell */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">About the Incubation Cell</h3>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            Chhatrapati Shivaji Institute of Technology (CSIT), Durg has established the Incubation Cell as a significant step towards building a strong innovation and entrepreneurship ecosystem within the institute. Initiated under the visionary leadership of <strong>Ajay Prakash Verma</strong> (Chairman, CSIT), the Centre is dedicated to nurturing innovative ideas and transforming them into scalable and sustainable ventures that contribute to society and industry.
          </p>
          {/* <p className="text-gray-700 text-sm md:text-base mb-4">
            The Centre is efficiently managed by <strong>Anil Kumar</strong> (Manager, Incubation Cell), supported by <strong>Anmol Bhardwaj</strong> (Deputy Manager) and <strong>Vijay Kumar Bhonsle</strong> (Accounts Officer), ensuring smooth operations, strategic growth, and effective support to start-ups and innovators.
          </p> */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-700">
              <span className="font-bold text-emerald-700">🏆 Recognition:</span> With immense pride, CSIT has been recognized as a <strong>Host Institution (HI)</strong> under the Ministry of Micro, Small and Medium Enterprises <strong>(MSME) in 2026</strong>, marking a significant milestone in its journey towards excellence in innovation and start-up development. This prestigious recognition strengthens the Centre's ability to support budding entrepreneurs through enhanced resources, funding opportunities, and government-backed incubation support.
            </p>
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            <span className="font-bold text-[#0d173b]">💡Under The  MSME Innovative Scheme:</span> Selected ideas and start-ups incubated at CSIT can receive financial assistance of up to <strong>₹15 lakh</strong> for prototype development and commercialization, providing a strong foundation for transforming innovative concepts into successful ventures.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-4">
            The Incubation Cell is committed to creating a dynamic environment where start-ups can ideate, develop, and grow their businesses from conception to commercialization. It provides a supportive ecosystem with access to mentorship, technical resources, infrastructure, and industry collaboration, enabling entrepreneurs to establish their ventures with strong ethical and professional foundations.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-3">
            CSIT Incubation Cell actively contributes to enhancing competitiveness, generating employment opportunities, and supporting start-ups and SMEs with high growth potential. It fosters strong linkages between academia, research institutions, and industry, facilitating knowledge transfer, innovation, and effective utilization of intellectual property.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="px-5 md:px-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white p-5 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Vision</h4>
            <p className="text-sm text-blue-100">
              To become a leading hub of innovation and entrepreneurship by empowering young innovators to create impactful, sustainable, and technology-driven enterprises that contribute to economic growth and societal development.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#1e305f] to-[#0d173b] text-white p-5 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Mission</h4>
            <ul className="text-sm text-blue-100 space-y-1">
              <li>• To promote a culture of creativity, innovation, and entrepreneurial thinking among students and faculty.</li>
              <li>• To provide incubation support for transforming innovative ideas into viable business ventures.</li>
              <li>• To facilitate industry-academia collaboration for product development and commercialization.</li>
              <li>• To connect start-ups with mentors, investors, government agencies, and industry experts.</li>
              <li>• To encourage research, intellectual property creation, and technology transfer for societal benefit.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Motto */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#0d173b] border-opacity-20 p-5 rounded-lg text-center">
          <h4 className="text-xl font-bold text-[#0d173b] mb-2">Our Motto</h4>
          <p className="text-lg md:text-xl font-bold text-[#0d173b]">
            "Innovate • Incubate • Inspire"
          </p>
          <p className="text-sm text-gray-600 mt-2">
            At CSIT, we believe that every innovative idea has the potential to create meaningful impact. The Incubation Cell is committed to empowering innovators and entrepreneurs to build solutions that shape the future and contribute to the vision of an Atmanirbhar Bharat.
          </p>
        </div>
      </div>

      {/* Objectives */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Objectives</h3>
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

      {/* Facilities and Support */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Facilities and Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-[#0d173b] mb-2">{facility.title}</h4>
                <ul className="space-y-1">
                  {facility.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-[#0d173b] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Activities */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Key Activities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {keyActivities.map((activity, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                <span className="text-sm font-medium text-gray-700">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who Can Apply */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Who Can Apply?</h3>
          <p className="text-sm text-gray-600 mb-4">The Incubation Cell welcomes:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {whoCanApply.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
                <span className="text-[#0d173b] text-lg">✓</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose CSIT Incubation Cell */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Why Choose CSIT Incubation Cell?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whyChoose.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
                <span className="text-[#0d173b] text-xl">✦</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="px-5 md:px-6 pb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Team Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-[#0d173b]">{member.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600">📞</span>
                    <span>{member.phone}</span>
                  </p>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-blue-600 hover:underline">
                    <span className="text-blue-600">✉️</span>
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}