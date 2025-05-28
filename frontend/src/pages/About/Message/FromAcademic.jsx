import React from 'react'
import academicImage from "../../../assets/director(academic).jpg";
const FromAcademic = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Hero Section - Made smaller with the specified colors */}
      <div className="h-40 md:h-48 bg-gradient-to-r from-[#0d173b] to-[#1e305f] flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-30 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white z-10 text-center">
          Message From Director[Academic]
        </h1>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10 bg-gradient-to-b from-white to-gray-50">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Chairman Photo */}
          <div className="w-full md:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={academicImage} // Replace with actual path
                alt="Chairman"
                className="w-full object-cover object-top rounded-lg border border-gray-200"
              />
              <div className="text-center mt-4">
                <p className="font-semibold text-lg text-[#0d173b]">
                Dr. Santosh Kumar Sharma
                </p>
                <p className="text-sm text-gray-600">Director, CSIT</p>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="w-full md:w-2/3 text-justify text-gray-800 text-[15px] leading-relaxed space-y-4">
            <p>
            It is always gratifying to put on record that Chhatrapati Shivaji Institute of Technology, Durg, has been excellently facilitating engineering education since its inception. The institute is very renowned in Central India due to its academic and co-curricular ventures, which solely aim for the overall development of its students. The Institute  is spread over Forty acres of land, the green environment, the academic facilities and the consortium of learned faculty members together constitute the valuable unique academic environment which is very much required in engineering education.
            </p>
            <p>
            Keeping in view the importance of placement of our students, we have organized not only record number of Campus Drives of companies but also organized training programs, finishing classes and seminars for grooming the students to suit the purpose. 
            </p>
            <p>
            Our visionary management, teaching fraternity and academic support staff is the backbone of our success. Counting students success as our sole priority, we dedicate our fullest energy to provide a brilliant academic environment. Thus, Learning at CSIT is a exceptional experience. I welcome you to CSIT to experience the excellence.
            </p>
            <p className="font-semibold text-[#0d173b]">
              I extend my Heartiest Welcome to all at CSIT.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FromAcademic
