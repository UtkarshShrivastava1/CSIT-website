import React from 'react';

export default function CentreOfExcellence() {
  // Objectives data
  const objectives = [
    "Bridge the gap between academic curriculum and industry requirements.",
    "Provide hands-on training on emerging technologies.",
    "Enhance students' technical and professional competencies.",
    "Develop problem-solving, analytical, and innovation skills.",
    "Promote research, product development, and entrepreneurship.",
    "Prepare students for internships, placements, and higher education.",
    "Encourage interdisciplinary learning and collaborative projects."
  ];

  // Key Features data with descriptions
  const keyFeatures = [
    {
      title: "Industry-Oriented Training",
      description: "Structured training programs designed and delivered in collaboration with industry professionals to meet current market demands."
    },
    {
      title: "Emerging Technology Labs",
      description: "Specialized laboratories equipped with advanced software, tools, and equipment for practical learning and experimentation."
    },
    {
      title: "Professional Certification Programs",
      description: "Value-added certification courses that improve technical knowledge and strengthen students' professional profiles."
    },
    {
      title: "Live Projects",
      description: "Students gain practical exposure by working on real-world industry projects under expert guidance."
    },
    {
      title: "Internship Support",
      description: "Opportunities for industrial internships that provide practical workplace experience and improve employability."
    },
    {
      title: "Research & Innovation",
      description: "The Centre encourages students to undertake research projects, develop innovative solutions, file patents, and participate in national-level competitions."
    },
    {
      title: "Placement Readiness",
      description: "Comprehensive training in aptitude, technical skills, coding, communication, group discussions, mock interviews, and personality development to prepare students for campus placements."
    }
  ];

  const areasOfExcellence = [
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Data Science & Analytics",
    "Internet of Things (IoT)",
    "Robotics & Automation",
    "Cyber Security",
    "Cloud Computing",
    "Full Stack Development",
    "Embedded Systems",
    "Electric Vehicles (EV) Technology",
    "Industry 4.0 & Smart Manufacturing",
    "CAD/CAM & Product Design",
    "Renewable Energy Technologies"
  ];

  const learningApproach = [
    "Hands-on laboratory sessions",
    "Project-Based Learning (PBL)",
    "Industry expert lectures",
    "Technical workshops and boot camps",
    "Hackathons and coding competitions",
    "Industrial visits",
    "Internship opportunities",
    "Innovation challenges",
    "Research and development activities"
  ];

  const benefits = [
    "Industry-ready technical skills",
    "Globally recognized certifications",
    "Enhanced placement opportunities",
    "Exposure to latest technologies",
    "Practical learning through live projects",
    "Improved problem-solving and innovation capabilities",
    "Entrepreneurial mindset and startup support",
    "Better career prospects in leading organizations"
  ];

  // Program key points
  const programKeyPoints = [
    "Technical Training in Domain Specific and Emerging Technology Area.",
    "Hands on Project work leading to certifications",
    "Industry recognised skill certificates",
    "Regular Evaluations and Assessments aligned with placement benchmarks",
    "Pre-placement training including aptitude, group-discussion and Interview preparation",
    "Campus Placement Drives"
  ];

  // Eligibility conditions
  const eligibilityConditions = [
    "Attendance Requirement",
    "Project Letters and Skill Certificates",
    "No active backlog at the time of campus drive",
    "COE Semester assessment",
    "Pre-Placement Training Attendance"
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Centre of Excellence (CoE)</h1>
          <p className="text-sm md:text-base mt-1 text-blue-100">
            Bridging the Gap Between Academics and Industry
          </p>
          <hr className="w-16 border-t-2 border-white mt-3 mb-0" />
        </div>
      </div>

      {/* About Section - First Part (Institute Setup) */}
      <div className="p-5 md:p-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">About Centre of Excellence</h3>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            Institute has Setup a Centre of Excellence Program, Pre-Placement Offer with Technoledge Eduresearch Pvt Ltd for students from First to Final Year [Engineering | Pharmacy].
          </p>
        </div>
      </div>

      {/* 1. About Centre of Excellence Program */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">About Centre of Excellence Program</h3>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            It is an industry-aligned, skill development initiative alongside the regular academic curriculum which is specifically designed to bridge the gap between academic, earning and real-world industry requirements. Under this Program Key Points are:
          </p>
          <ul className="space-y-2">
            {programKeyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[#0d173b] font-bold mt-0.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2. Placement Guarantee */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-2">Placement Guarantee</h3>
          <p className="text-gray-700 text-sm md:text-base">
            It gives guarantees a minimum placement of <strong>Rs 3.6 LPA (Annual CTC)</strong> for all eligible COE students through its associated and partner companies. This guarantee is subjected to the student satisfying all eligibility criteria.
          </p>
        </div>
      </div>

      {/* 3. Eligibility Conditions */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-amber-50 p-5 md:p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">Eligibility Conditions</h3>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            A student shall be considered eligible for the placement guarantee under this PPO only upon satisfying all of the following conditions. Non-compliance with even one condition may render the student ineligible for the Placement guarantee.
          </p>
          <ul className="space-y-2">
            {eligibilityConditions.map((condition, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[#0d173b] font-bold mt-0.5">•</span>
                <span>{condition}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Centre of Excellence (CoE) - Main Content */}
      <div className="px-5 md:px-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">Centre of Excellence (CoE)</h3>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            The Centre of Excellence (CoE) at Chhatrapati Shivaji Institute of Technology (CSIT), Durg is a dedicated initiative to equip students with industry-relevant skills, emerging technologies, and practical experience beyond the university curriculum. The Centre serves as a platform where academic learning meets real-world applications, preparing students to become competent professionals and future technology leaders.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            The CoE focuses on experiential learning through industry collaborations, hands-on training, certification programs, live projects, internships, innovation activities, and career-oriented skill development. Students are trained by industry experts using modern tools and technologies to enhance their technical proficiency and employability.
          </p>
        </div>
      </div>

      {/* Our Objectives */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Our Objectives</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                {/* <span className="bg-[#0d173b] bg-opacity-10 text-[#0d173b] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">
                </span> */}
                  
                <span className="text-gray-700 text-sm">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key Features */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-[#0d173b] text-sm mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Areas of Excellence */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Areas of Excellence</h3>
          <p className="text-sm text-gray-600 mb-4">The Centre of Excellence provides specialized training in high-demand technologies, including:</p>
          <div className="flex flex-wrap gap-2">
            {areasOfExcellence.map((area, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded-full border border-[#0d173b] border-opacity-20 text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Approach */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Learning Approach</h3>
          <p className="text-sm text-gray-600 mb-4">The Centre adopts a practical, outcome-based learning model that includes:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {learningApproach.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
                <span className="text-[#0d173b] text-lg">✓</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits to Students */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Benefits to Students</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
                <span className="text-[#0d173b] text-xl">✦</span>
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Collaboration */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">Industry Collaboration</h3>
          <p className="text-gray-700 text-sm md:text-base">
            The Centre of Excellence actively collaborates with industries, technology partners, training organizations, and corporate experts to provide students with exposure to current technologies, industrial practices, and career opportunities. These collaborations enable students to learn from experienced professionals and stay aligned with evolving industry trends.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="px-5 md:px-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white p-5 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Our Vision</h4>
            <p className="text-sm text-blue-100">
              To develop globally competent engineers through advanced technical education, industry collaboration, innovation, research, and experiential learning, creating professionals capable of leading technological transformation.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#1e305f] to-[#0d173b] text-white p-5 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Our Mission</h4>
            <ul className="text-sm text-blue-100 space-y-1">
              <li>• Deliver industry-focused skill development programs.</li>
              <li>• Foster innovation, creativity, and research culture.</li>
              <li>• Strengthen academia-industry partnerships.</li>
              <li>• Promote entrepreneurship and startup initiatives.</li>
              <li>• Enhance students' employability through continuous learning and practical exposure.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Motto */}
      <div className="px-5 md:px-6 pb-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-[#0d173b] border-opacity-20 p-5 md:p-6 rounded-lg text-center">
          <p className="text-lg md:text-xl font-bold text-[#0d173b]">
            "Learn Beyond the Classroom. Innovate Beyond Boundaries. Succeed Beyond Expectations."
          </p>
          <p className="text-sm text-gray-600 mt-3">
            Empowering Students with Skills, Innovation, and Industry Excellence
          </p>
        </div>
      </div>
    </div>
  );
}