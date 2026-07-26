import React from "react";

const QuestionPaper = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Question Papers
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              CSIT | CT & University Exam Question Papers
            </p>
            <div className="h-0.5 w-12 bg-[#0d173b] mt-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPaper;