import React from "react";

export default function ComputerCentreTable() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="bg-[#0d173b] text-white p-6">
        <h1 className="text-3xl font-bold">Computer Centre</h1>
        <p className="text-sm mt-1">CSIT | Information Dashboard</p>
        <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
      </div>
    
      
      <div className="bg-white rounded-b-lg shadow-lg overflow-hidden mb-8">
        <div className="p-4 bg-blue-50 border-b border-blue-100">
          <h2 className="text-xl font-bold text-[#0d173b]">Computer Centers</h2>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700 flex-1 min-w-48 shadow-sm">
              <p className="text-sm text-[#0d173b] mb-1">Total Computers</p>
              <p className="text-3xl font-bold text-blue-900">300</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700 flex-1 min-w-48 shadow-sm">
              <p className="text-sm text-[#0d173b] mb-1">Student-Computer Ratio</p>
              <p className="text-3xl font-bold text-indigo-900">1.25:1</p>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Internet Bandwidth Information</h3>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                    <th className="py-3 px-4 text-left border-b-2 border-gray-300 font-bold text-gray-700 w-16">S.NO</th>
                    <th className="py-3 px-4 text-left border-b-2 border-gray-300 font-bold text-gray-700">Description</th>
                    <th className="py-3 px-4 text-left border-b-2 border-gray-300 font-bold text-gray-700 w-32">Bandwidth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50 transition-colors duration-150">
                    <td className="py-3 px-4 border-b border-gray-200">1.</td>
                    <td className="py-3 px-4 border-b border-gray-200">BSNL Broadband</td>
                    <td className="py-3 px-4 border-b border-gray-200 font-semibold text-blue-700">300Mbps</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors duration-150">
                    <td className="py-3 px-4 border-b border-gray-200">2.</td>
                    <td className="py-3 px-4 border-b border-gray-200">BSNL Broadband</td>
                    <td className="py-3 px-4 border-b border-gray-200 font-semibold text-blue-700">40Mbps</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors duration-150">
                    <td className="py-3 px-4 border-b border-gray-200">3.</td>
                    <td className="py-3 px-4 border-b border-gray-200">JIO Leased Lin</td>
                    <td className="py-3 px-4 border-b border-gray-200 font-semibold text-blue-700">10Mbps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        
        </div>
      </div>
    </div>
  );
}