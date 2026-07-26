import {
  Beaker,
  BookOpen,
  BookUser,
  Briefcase,
  ChevronDown,
  FileText,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";

import AimContent from "./Aim.jsx";
import Career from "./Careers.jsx";
import CourseOutcome from "./CourseOutcome.jsx";
import Faculty from "./Faculty.jsx";
import LaboratoriesContent from "./laboratory.jsx";
import QuestionPapaer from "./QuestionPaper.jsx";


const HodDeskContent = () => (
  <div className="bg-white shadow-md rounded-md overflow-hidden">
    <div className="h-40 bg-gray-100 relative">
      <div className="absolute inset-0 flex items-center px-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
            From the HOD's Desk
          </h2>
          <p className="text-gray-500 text-sm mt-2">CSIT | Department of Information Technology</p>
          <div className="h-0.5 w-12 bg-[#0d173b] mt-3"></div>
        </div>
      </div>
    </div>
    <div className="p-6 prose max-w-none text-gray-700">
      <p>Established with a vision to create skilled IT professionals, the Department of Information Technology at CSIT, Durg is dedicated to imparting quality education and fostering innovation in the field of information and communication technologies. The department focuses on developing strong technical foundations along with problem-solving and analytical skills required in today's digital world.</p>
      <p>The department is equipped with modern laboratories that provide practical exposure to programming, database management, computer networks, web technologies, cloud computing, cyber security, and emerging IT domains. Our experienced faculty members act as mentors and facilitators, guiding students in academics, skill development, career planning, and professional growth.</p>
      <p>Through industry interactions, workshops, internships, certification programs, and project-based learning, students are encouraged to bridge the gap between classroom knowledge and real-world applications. The department strives to nurture competent IT professionals who are capable of adapting to rapidly changing technologies and contributing effectively to industry and society.</p>
      <p>We are committed to academic excellence, innovation, and holistic development, empowering our students to become successful professionals and lifelong learners.</p>
      <p className="font-bold">Dr. Anand Kumbhare<br />Head of Department<br />Department of Information Technology<br />CSIT, Durg</p>
    </div>
  </div>
);

export default function ModernDepartmentPage() {
  const [activeTab, setActiveTab] = useState("aim");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Content data for tabs
  const tabContent = {
   
    aim: {
      title: "Our Aim",
      icon: <Target className="text-indigo-500" />,
      content: <AimContent />,
    }, 
    hod: {
      title: "HOD's Desk",
      icon: <BookUser className="text-purple-500" />,
      content: <HodDeskContent />,
    },
    laboratories: {
      title: "Laboratories",
      icon: <Beaker className="text-emerald-500" />,
      content: <LaboratoriesContent />,
    },
    outcomes: {
      title: "Course Outcomes",
      icon: <BookOpen className="text-amber-500" />,
      content: <CourseOutcome />,
    },
    careers: {
      title: "Career Opportunity",
      icon: <Briefcase className="text-rose-500" />,
      content: <Career />,
    },
    faculty: {
      title: "Faculty Members",
      icon: <Users className="text-blue-500" />,
      content: <Faculty />,
    },
    question: {
      title: "Question Paper [CT | University] ",
      icon: <FileText className="text-blue-500" />,
      content: <QuestionPapaer />,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Professional Bodies Header Section */}
      <div className="w-full bg-[#0a1432] text-white p-8">
        <h1 className="text-4xl font-bold mb-2">Information Technology Engineering</h1>
        <p className="text-lg">CSIT | Information Technology Engineering</p>
        <div className="w-24 h-1 bg-white mt-4"></div>
      </div>

      {/* Content area */}
      <div className="flex-1 p-4 lg:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-100 py-6 px-6">
            <div className="flex items-center">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg mr-4 shadow-sm">
                <span className="block w-6 h-6 text-white">{tabContent[activeTab].icon}</span>
              </div>
              <h2 className="text-2xl font-bold text-black">
                {tabContent[activeTab].title}
              </h2>
            </div>
          </div>

          {/* Mobile tab selector */}
          <div className="block md:hidden border-b border-gray-100">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-700"
            >
              <div className="flex items-center">
                <span>{tabContent[activeTab].title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  mobileMenuOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {mobileMenuOpen && (
              <div className="border-t border-gray-100 bg-gray-50">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center w-full p-3 text-left ${
                      activeTab === tab
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{tabContent[tab].title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop tab navigation */}
          <div className="hidden md:flex border-b bg-gray-100 border-gray-200">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center py-4 px-6 transition-all duration-300 flex-1 ${
                  activeTab === tab
                    ? "border-b-2 border-[#0d173b] text-[#0d173b] bg-[#b2b9d29e] font-medium"
                    : "border-b-2 border-transparent text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                }`}
              >
                <span className="text-sm lg:text-xs">
                  {tabContent[tab].title}
                </span>
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="p-6 md:p-8">
            <div className="prose prose-indigo max-w-none">
              {typeof tabContent[activeTab].content === "string" ? (
                <p className="text-gray-700 leading-relaxed">
                  {tabContent[activeTab].content}
                </p>
              ) : (
                tabContent[activeTab].content
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}