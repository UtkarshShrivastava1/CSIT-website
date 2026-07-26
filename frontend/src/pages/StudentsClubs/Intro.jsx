import React from "react";

 import { Award, Code, Zap, BarChart, Palette, Mic, Users, Camera } from 'lucide-react';
const Introduction = () => {
  const benefits = [
    "Develop leadership and teamwork skills",
    "Gain hands-on experience beyond academics",
    "Build confidence and communication abilities",
    "Enhance employability and industry readiness",
    "Contribute to society and community development",
  ];
 const clubs = [
    {
      name: "Skill Development Cell",
      tagline: "Enhancing Employability and Professional Competencies",
      icon: <Award className="text-blue-500" />,
      description: "Dedicated to enhancing the employability and professional competencies of students, acting as a bridge between academic learning and industry expectations by focusing on practical skills, personality development, and career readiness.",
      objectives: [
        "To develop industry-relevant technical and soft skills",
        "To improve communication, aptitude, and problem-solving abilities",
        "To prepare students for campus placements and higher studies",
        "To promote continuous learning and self-improvement",
      ],
      facultyCoordinator: "Prof. Kamlesh Upadhyay – Assistant Professor [Management]",
    },
    {
      name: "Coding Club",
      tagline: "Code. Create. Compete.",
      icon: <Code className="text-green-500" />,
      description: "A vibrant community of passionate programmers and problem solvers dedicated to developing strong coding skills, logical thinking, and a competitive mindset.",
      objectives: [
        "To strengthen programming and problem-solving skills",
        "To promote a coding culture across all branches",
        "To prepare students for technical interviews and coding rounds",
        "To encourage participation in competitive programming and hackathons",
      ],
      facultyCoordinator: "Prof. Kranti Kumar Jain - Assistant Professor, Department of Computer Science & Engineering",
    },
    {
      name: "Entrepreneurship & Innovation Club",
      tagline: "Ideate. Innovate. Incubate.",
      icon: <Zap className="text-yellow-500" />,
      description: "Fosters creativity, problem-solving, and an entrepreneurial mindset, providing a platform for aspiring innovators to transform ideas into impactful solutions and potential business ventures.",
      objectives: [
        "To promote entrepreneurial thinking and innovation culture",
        "To support students in developing startup ideas",
        "To bridge the gap between ideas and execution",
        "To encourage interdisciplinary collaboration and problem-solving",
      ],
      facultyCoordinator: "Prof. Anmol Bharadwaj - Assistant Professor, Department of Civil Engineering",
    },
    {
      name: "Sports Club",
      tagline: "Strength. Discipline. Team Spirit.",
      icon: <BarChart className="text-red-500" />,
      description: "Promotes physical fitness, mental well-being, and team spirit among students, fostering a culture of discipline, leadership, and sportsmanship.",
      objectives: [
        "To promote physical fitness and a healthy lifestyle",
        "To develop teamwork, leadership, and discipline",
        "To identify and nurture sports talent",
        "To encourage participation in competitive sports",
      ],
      facultyCoordinator: "Prof Shubham Chandrakar - Assistant Professor, Department of Civil Engineering",
    },
    {
      name: "Arts Club",
      tagline: "Create. Express. Inspire.",
      icon: <Palette className="text-purple-500" />,
      description: "Provides a creative platform for students to explore and showcase their artistic talents, nurturing imagination, self-expression, and aesthetic appreciation.",
      objectives: [
        "To promote creativity and artistic expression",
        "To develop aesthetic sense and design thinking",
        "To provide a platform for showcasing talent",
        "To encourage participation in cultural and art-based events",
      ],
      facultyCoordinator: "Prof. [Faculty Name] Assistant Professor, Department of Humanities / Fine Arts",
    },
    {
      name: "Cultural Club",
      tagline: "Celebrate Talent. Embrace Diversity.",
      icon: <Mic className="text-pink-500" />,
      description: "Brings life and energy to campus by promoting creativity, cultural awareness, and artistic expression through music, dance, drama, and various performing arts.",
      objectives: [
        "To promote cultural diversity and artistic expression",
        "To encourage participation in extracurricular activities",
        "To develop confidence, creativity, and stage presence",
        "To organize cultural events and celebrations",
      ],
      facultyCoordinator: "Prof. [Faculty Name] Assistant Professor, Department of Humanities",
    },
    {
      name: "Alumni Club",
      tagline: "Connect. Mentor. Grow.",
      icon: <Users className="text-teal-500" />,
      description: "Serves as a strong bridge between the institute and its alumni network, fostering lifelong relationships and creating opportunities for mentorship, collaboration, and career growth.",
      objectives: [
        "To strengthen the bond between alumni and the institute",
        "To facilitate mentorship and career guidance for students",
        "To build a strong professional network",
        "To encourage alumni participation in institutional development",
      ],
      facultyCoordinator: "Prof. [Faculty Name] - Training & Placement Officer / Alumni Coordinator",
    },
    {
      name: "Social Media & Photography Club",
      tagline: "Capture. Create. Connect.",
      icon: <Camera className="text-orange-500" />,
      description: "The creative backbone of campus storytelling, responsible for capturing memorable moments, managing the institute’s digital presence, and showcasing campus life.",
      objectives: [
        "To document and promote campus events and activities",
        "To develop skills in photography, videography, and editing",
        "To manage and enhance the institute’s social media presence",
        "To encourage creative storytelling and digital engagement",
      ],
      facultyCoordinator: "Prof. [Faculty Name] Assistant Professor",
    },
  ];



  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Students Association Clubs
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              Chhatrapati Shivaji Institute of Technology (CSIT), Durg
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <div className="mb-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            At Chhatrapati Shivaji Institute of Technology, we believe that education extends beyond classrooms. The Students Association serves as a dynamic platform that empowers students to explore their passions, develop leadership qualities, and gain practical exposure.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            Our clubs are student-led and faculty-mentored, creating an environment that encourages innovation, creativity, teamwork, and social responsibility. Through these clubs, CSIT Durg nurtures well-rounded professionals ready to meet industry and societal challenges.
          </p>
        </div>

        {/* Why Join */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#0d173b] mb-3">
            Being a part of clubs at Chhatrapati Shivaji Institute of Technology helps students:
          </h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-[#0d173b] font-bold mt-0.5">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubs.map((club, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="mr-4">{club.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-[#0d173b]">{club.name}</h4>
                  <p className="text-xs text-gray-500 italic">{club.tagline}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{club.description}</p>
              <h5 className="text-sm font-semibold mb-2">Objectives:</h5>
              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 mb-4">
                {club.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
              </ul>
              {club.events && club.events.length > 0 && (
                <div className="mb-4">
                  <h5 className="text-sm font-semibold mb-2">Key Events:</h5>
                  <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                    {club.events.map((event, i) => <li key={i}>{event}</li>)}
                  </ul>
                </div>
              )}
              <p className="text-xs text-gray-500"><b>Faculty Coordinator:</b> {club.facultyCoordinator}</p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 rounded-lg text-center">
          <p className="text-xl font-bold">Join. Participate. Lead.</p>
          <p className="text-sm text-gray-200 mt-2">
            At CSIT Durg, every student is encouraged to actively participate in club activities and take initiative in organizing events. The Students Association ensures that every talent finds a platform and every idea gets an opportunity to grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;