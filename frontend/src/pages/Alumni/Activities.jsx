import React from 'react'

const Activities = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
    {/* Header */}
    <div className="h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
          <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
          <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center px-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Alumni Activities
          </h2>
          <p className="text-gray-200 text-sm mt-2">
            CSIT | Strengthening bonds and creating lifelong connections
          </p>
          <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
        </div>
      </div>
    </div>
  
    <div className="p-6">
      <div className="prose max-w-none text-gray-700">
        {/* Re-Union Section */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-[#0d173b] mb-4">Annual Reunion</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <p className="mb-4">
                Alumni are an important part of any institute, and to maintain strong connections, 
                CSIT organizes an Alumni Meet every year. These reunions provide a platform for 
                alumni to reconnect with their alma mater and batchmates.
              </p>
              <p className="mb-4">
                On the reunion day, alumni share their experiences and success stories with the 
                management and staff members. These meets are organized at different locations 
                across India each year to maximize participation.
              </p>
            </div>
            <div className="md:w-1/3 bg-gray-50 rounded-md border border-gray-200 p-4 flex-shrink-0">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0d173b] mb-2">100+</div>
                <div className="h-0.5 w-12 bg-[#0d173b] mx-auto my-2"></div>
                <p className="text-gray-600">Alumni attend each reunion</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Activities Highlights */}
        <div className="my-8">
          <h3 className="text-xl font-medium text-[#0d173b] mb-4">Event Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-[#0d173b]/10 to-[#1e305f]/10 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#0d173b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-[#0d173b] mb-2">Annual Meet</h4>
                <p className="text-gray-600 text-sm">
                  Our flagship event where alumni from all batches come together to reconnect and reminisce.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-[#0d173b]/10 to-[#1e305f]/10 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#0d173b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-[#0d173b] mb-2">Regional Gatherings</h4>
                <p className="text-gray-600 text-sm">
                  Smaller, more frequent meetups organized in different cities across India.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Testimonial */}
        <div className="my-8 bg-gray-50 rounded-md p-6 border border-gray-200">
          <div className="flex items-start">
            <svg className="w-8 h-8 text-[#0d173b] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
            <div className="ml-4">
              <blockquote className="text-gray-600 italic">
                "The annual alumni meet is always the highlight of my year. It's wonderful to see how our alma mater continues to grow while maintaining the same values we cherished as students."
              </blockquote>
              <div className="text-sm text-[#0d173b] font-medium mt-2">
                — Priya Sharma, Batch of 2012
              </div>
            </div>
          </div>
        </div>
  
        {/* Upcoming Events */}
        <div className="mt-8 p-6 bg-[#0d173b] rounded-md">
          <div className="text-center text-white">
            <h3 className="text-xl font-medium mb-2">Upcoming Alumni Events</h3>
            <p className="text-gray-200 mb-4">
              Join us for our next gathering and reconnect with your CSIT family
            </p>
            <button className="inline-block px-6 py-2 bg-white text-[#0d173b] cursor-pointer rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
              View Event Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Activities
