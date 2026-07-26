import { BookMarked, FileText, Target, Users } from "lucide-react";
import { useState } from "react";
import ScienceHumanitiesFaculty from "../SH/Faculty"; // Assuming this is the correct faculty component
import QuestionPaper from "./QuestionPaper"; // Assuming this is the correct QP component
import AboutMaths from "./AboutMaths";
import MathsCourseObjectives from "./MathsCourseObjectives";
import MathsCourseOutcomes from "./MathsCourseOutcomes";

const Maths = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabContent = {
    about: {
      title: "Introduction",
      // icon: <Target className="text-indigo-500" />,
      content: <AboutMaths />,
    },
    courses: {
      title: "Course Objective",
      // icon: <BookMarked className="text-emerald-500" />,
      content: <MathsCourseObjectives />,
    },
    coursesOutcome: {
      title: "Course Outcomes",
      // icon: <BookMarked className="text-emerald-500" />,
      content: <MathsCourseOutcomes />,
    },
    faculty: {
      title: "Faculty ",
      // icon: <Users className="text-blue-500" />,
      content: <ScienceHumanitiesFaculty />, // Using shared faculty for now
    },
    questionPaper: {
      title: "Question Paper [CT | University]",
      // icon: <FileText className="text-purple-500" />,
      content: <QuestionPaper />, // Using shared question paper for now
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="w-full bg-[#0a1432] text-white p-8">
        <h1 className="text-4xl font-bold mb-2">Department of Mathematics</h1>
        <p className="text-lg">CSIT | Science & Humanities</p>
        <div className="w-24 h-1 bg-white mt-4"></div>
      </div>

      <div className="flex-1 p-4 lg:p-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="hidden md:flex border-b bg-gray-100 border-gray-200">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center gap-2 py-4 px-6 transition-all duration-300 flex-1 ${
                  activeTab === tab
                    ? "border-b-2 border-[#0d173b] text-[#0d173b] bg-[#b2b9d29e] font-medium"
                    : "border-b-2 border-transparent text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                }`}
              >
               
                <span className="text-xs lg:text-xs">
                  {tabContent[tab].title}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile tab selector can be added here if needed */}

          <div className="p-6 md:p-8">
            <div className="prose max-w-none">
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
};

export default Maths;
