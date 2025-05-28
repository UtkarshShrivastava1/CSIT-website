import React from 'react'

const TeamMembers = () => {
  // Array of team member images
  const teamMembers = [
    {
      image: '236b90ec61b8cc28a5b25f1d60caea44 (1).png'
    },
    {
      image: 'eb1982d65352b46c09fdf0b62a4a08f1.png'
    }
    
  ];

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-32 sm:h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Training & Placement Team
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              CSIT | Dedicated Professionals
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Introduction */}
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Our Training & Placement team consists of experienced professionals dedicated to ensuring excellent career opportunities for our students. They work tirelessly to bridge the gap between industry and academia, facilitating successful placements and internships.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-w-3 aspect-h-4 relative">
                  <img 
                    src={`/src/assets/team member/${member.image}`}
                    alt={`Team Member ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-md">
            <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-2">Our Commitment</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              The Training & Placement team is committed to providing comprehensive support to students throughout their academic journey and beyond. We organize regular training sessions, workshops, and industry interactions to prepare students for successful careers.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Regular industry visits and guest lectures</li>
              <li>Pre-placement training and workshops</li>
              <li>Resume building and interview preparation</li>
              <li>Career counseling and guidance</li>
              <li>Industry-academia collaboration initiatives</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMembers
