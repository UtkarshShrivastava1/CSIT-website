import React from 'react';
import { ExternalLink } from 'lucide-react';

const Grievances = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Grievance Redressal</h1>
          <p className="text-base text-gray-200 mt-2">
            Ensuring transparency and accountability in addressing student concerns
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      {/* Committee Members Table */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#0d173b] text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Members</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contact Number</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dr. C. S. Sharma, HoD ( Comm. Skills)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Chairman of the Committee</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8966000051</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dr. Padmini Sharma, I/c HoD(EEE)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Member</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9329639384</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mr. H. R. Chandraker, Dean Admission</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Member</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8966000059</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mr. Nirmal Pandey, I/C Exam Section</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Member</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8109167303</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Register Grievance Button */}
        <div className="mt-8 text-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWRh84QcbEflhtYuPkqEhoBn9NNMaW-8shOrxMDHqDo5Qcdw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0d173b] hover:bg-[#1a2b5f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d173b] transition-all duration-300"
          >
            Register Grievance
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Grievances;
