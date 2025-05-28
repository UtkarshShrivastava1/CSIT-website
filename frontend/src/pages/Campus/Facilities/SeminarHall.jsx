import React from 'react';

export default function SeminarHall() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="bg-[#0d173b] text-white p-6">
        <h1 className="text-3xl font-bold">Seminar Hall</h1>
        <p className="text-sm mt-1">CSIT | Information Dashboard</p>
        <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
      </div>
      <div className="p-4 bg-blue-50 border-b border-blue-100">
          <h2 className="text-xl font-bold text-[#0d173b]">Seminar Hall</h2>
        </div>
      
      
     
      
      <div className="overflow-x-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-1 sm:p-2 mt-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-[#0d173b] to-[#0d173b] text-white">
              <th className="py-3 px-4 text-left font-semibold rounded-tl-lg w-16">S.No</th>
              <th className="py-3 px-4 text-left font-semibold w-48 sm:w-64">Title</th>
              <th className="py-3 px-4 text-left font-semibold rounded-tr-lg">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-blue-100 transition-colors duration-200">
              <td className="p-4 align-top text-center font-bold text-blue-700 border-b border-blue-200">1</td>
              <td className="p-4 align-top font-semibold border-b border-blue-200">Conference and Seminar Halls:</td>
              <td className="p-4 border-b border-blue-200">
                <ul className="space-y-4 sm:space-y-6">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs rounded-full shadow-md">◆</span>
                    <span className="text-gray-700">Open Amphitheatre in <span className="font-semibold text-blue-800">3,000 sq. ft.</span> of area & well planned Nescafe Cafeteria to support student development and learning.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs rounded-full shadow-md">◆</span>
                    <span className="text-gray-700">Shahid Memorial Activity Center for Student Activities unfurled over the area of <span className="font-semibold text-blue-800">4000 sq. ft.</span> of area.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs rounded-full shadow-md">◆</span>
                    <span className="text-gray-700">Swami Vivekanand Conference Hall with the sitting Capacity of <span className="font-semibold text-blue-800">400 people</span>, covering Area of <span className="font-semibold text-blue-800">4000 sq. ft.</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 mr-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs rounded-full shadow-md">◆</span>
                    <span className="text-gray-700">All Departmental have Seminar Hall with the Capacity of <span className="font-semibold text-blue-800">150 Students</span> with capping the area of <span className="font-semibold text-blue-800">7000 sq. ft.</span></span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
     
    </div>
  );
}