import React from "react";

export default function CSR() {
  const focusAreas = [
    {
      title: "Community Development",
      icon: "🏘️",
      description:
        "Organizing outreach programmes that support rural and urban communities through education, awareness campaigns, technical guidance, and social welfare activities.",
    },
    {
      title: "Education for All",
      icon: "📚",
      description:
        "Conducting literacy drives, career guidance programmes, digital literacy workshops, STEM awareness initiatives, and mentoring sessions for school students.",
    },
    {
      title: "Environmental Sustainability",
      icon: "🌿",
      description:
        "Promoting a green campus through tree plantation drives, water conservation, energy conservation, waste management, plastic-free campaigns, and environmental awareness programmes.",
    },
    {
      title: "Health & Well-being",
      icon: "❤️",
      description:
        "Organizing blood donation camps, health check-up camps, mental health awareness programmes, yoga sessions, fitness campaigns, and public health awareness activities.",
    },
    {
      title: "Rural Development",
      icon: "🌾",
      description:
        "Supporting nearby villages through technical solutions, clean water initiatives, sanitation awareness, renewable energy projects, and community development activities.",
    },
    {
      title: "Women Empowerment",
      icon: "👩",
      description:
        "Conducting workshops on women's health, safety, financial literacy, entrepreneurship, leadership, and skill development to empower women and girls.",
    },
    {
      title: "Digital & Technical Awareness",
      icon: "💻",
      description:
        "Providing training on digital literacy, cybersecurity awareness, emerging technologies, coding, and entrepreneurship for students and community members.",
    },
  ];

  const studentEngagement = [
    "National Service Scheme (NSS) activities",
    "Social awareness campaigns",
    "Village adoption programmes",
    "Swachh Bharat initiatives",
    "Environmental conservation drives",
    "Community volunteering",
    "Technical service projects",
    "Charity and donation campaigns",
    "Road safety awareness programmes",
    "Voter awareness and civic engagement programmes",
  ];

  const sustainableInitiatives = [
    "Green campus development",
    "Energy-efficient infrastructure",
    "Rainwater harvesting",
    "Waste segregation and recycling",
    "Paperless administrative practices",
    "Water conservation measures",
    "Renewable energy initiatives",
    "Plantation and biodiversity conservation",
  ];

  const impactOnStudents = [
    "Develop leadership and teamwork skills.",
    "Build empathy and social responsibility.",
    "Strengthen communication and problem-solving abilities.",
    "Apply engineering knowledge for community benefit.",
    "Understand sustainable development practices.",
    "Become ethical professionals and responsible citizens.",
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">
            Corporate Social Responsibility
          </h1>
          <p className="text-sm md:text-base mt-1 text-blue-100">
            Building Responsible Engineers. Creating a Better Society.
          </p>
          <p className="text-sm md:text-base text-blue-200 mt-2">
            CSIT | CSR Initiatives
          </p>
          <hr className="w-16 border-t-2 border-white mt-3 mb-0" />
        </div>
      </div>

      {/* Introduction */}
      <div className="p-5 md:p-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <p className="text-gray-700 text-sm md:text-base">
            At Chhatrapati Shivaji Institute of Technology (CSIT), Durg,
            education extends beyond classrooms and laboratories. We believe
            that engineers have a vital role in addressing social, environmental,
            and economic challenges. Through our Corporate Social Responsibility
            (CSR) initiatives, CSIT strives to create socially responsible
            professionals who contribute meaningfully to the sustainable
            development of society.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-3">
            Our CSR philosophy is built on the principles of compassion, ethics,
            inclusivity, environmental stewardship, and community engagement.
            Students, faculty, staff, alumni, and industry partners actively
            participate in initiatives that promote social welfare, environmental
            conservation, education, healthcare, and rural development,
            reflecting the broader CSR ideals adopted by educational
            institutions.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="px-5 md:px-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white p-5 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Our Vision</h4>
            <p className="text-sm text-blue-100">
              To develop socially conscious engineers and responsible citizens
              who use knowledge, technology, and innovation to improve the
              quality of life and contribute to nation-building.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#1e305f] to-[#0d173b] text-white p-5 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Our Mission</h4>
            <ul className="text-sm text-blue-100 space-y-1">
              <li>• Foster a culture of social responsibility and ethical leadership.</li>
              <li>• Encourage students to apply technical knowledge for community development.</li>
              <li>• Promote sustainable environmental practices.</li>
              <li>• Support education, healthcare, and social welfare initiatives.</li>
              <li>• Collaborate with government bodies, industries, NGOs, and local communities for inclusive growth.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">
            Our CSR Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{area.icon}</div>
                <h4 className="font-semibold text-[#0d173b] text-sm mb-2">
                  {area.title}
                </h4>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Engagement */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">
            Student Engagement
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            CSIT encourages every student to become an active contributor to
            society through:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {studentEngagement.map((item, index) => (
              <div
                key={index}
                className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-center"
              >
                <span className="text-xs font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainable Campus Initiatives */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">
            Sustainable Campus Initiatives
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            The institute is committed to building a sustainable campus through:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {sustainableInitiatives.map((item, index) => (
              <div
                key={index}
                className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-center"
              >
                <span className="text-xs font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry & Community Collaboration */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">
            Industry & Community Collaboration
          </h3>
          <p className="text-sm text-gray-700">
            CSIT collaborates with industries, government organizations,
            educational institutions, healthcare organizations, NGOs, and local
            communities to implement impactful CSR initiatives. These
            partnerships provide students with opportunities to contribute to
            meaningful projects while gaining practical exposure to real-world
            social challenges.
          </p>
        </div>
      </div>

      {/* Impact on Students */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">
            Impact on Students
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Participation in CSR activities helps students:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {impactOnStudents.map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3"
              >
                <span className="text-[#0d173b] text-xl">✦</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Commitment & Motto */}
      <div className="px-5 md:px-6 pb-6">
        <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-5 md:p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Our Commitment</h3>
          <p className="text-sm text-blue-100 mb-4">
            At CSIT, Corporate Social Responsibility is an integral part of
            institutional culture. We are committed to creating engineers who
            not only excel professionally but also contribute to the welfare of
            society through innovation, compassion, and sustainable development.
          </p>
          <div className="border-t border-blue-800 pt-4 mt-2">
            <p className="text-sm text-blue-200 font-medium">
              Engineering Solutions for Society. Inspiring Change for a Better
              Tomorrow.
            </p>
            <p className="text-sm text-blue-300 mt-2 italic">
              "Together We Learn, Together We Serve, Together We Build a Better
              Future."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}