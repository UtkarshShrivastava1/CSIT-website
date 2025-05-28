import React from 'react';
import { ExternalLink } from 'lucide-react';

const Feedback = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Feedback</h1>
          <p className="text-base text-gray-200 mt-2">
            Share your thoughts and help us improve
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-6 text-center">Student Feedback Forms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* First Year */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0d173b] hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#0d173b] mb-4">First Year</h3>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScFwz2EPJr49DKDkP-_qPxWF8bW4wbz5Gv4EK8GR02YBGqFPg/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300"
              >
                Fill Feedback Form
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            {/* Second Year */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0d173b] hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#0d173b] mb-4">Second Year</h3>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSd7LizR6rD2Ov6aB8tgU_ik5mKWcu1wb5RfeO2d6QycyuAwxA/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300"
              >
                Fill Feedback Form
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            {/* Third Year */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0d173b] hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#0d173b] mb-4">Third Year</h3>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeNJP_S8POIQ3iwRBAfCo5HZoFs8Qfbw1nBGPnRCzPPTFjLJQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300"
              >
                Fill Feedback Form
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            {/* Fourth Year */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0d173b] hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#0d173b] mb-4">Fourth Year</h3>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf-u0J9-BmzKWQzXWntQmmDl-F2wPqIFP5yikmivlXhzgE6OA/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300"
              >
                Fill Feedback Form
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-[#0d173b] mb-6 text-center">Other Stakeholder Feedback Forms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Teachers */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0d173b] hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#0d173b] mb-4">Teachers</h3>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSegxM2UejomMcRoW7VPj9z5nxGt_bzeZKRCVssYNLhxoQm-RA/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300"
              >
                Fill Feedback Form
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            {/* Alumni */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0d173b] hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#0d173b] mb-4">Alumni</h3>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSed2TGBhrpenY4VT7q6j8CTyph0AH3YfwC55UNDTYOVgtphzQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300"
              >
                Fill Feedback Form
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            {/* Employer */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0d173b] hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#0d173b] mb-4">Employer</h3>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfVOaNhyoFF7-O4g8FUyRCes--dxfmq0SAh_Pc3nK8jdDuCWQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300"
              >
                Fill Feedback Form
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
