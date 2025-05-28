import React, { useState } from 'react';

const MOUs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // List of companies with their details
  const companies = [
    { id: 1, name: 'NFOLKS DATA SOLUTIONS', location: 'PUNE', category: 'IT' },
    { id: 2, name: 'OPEX ACCELERATOR PVT. LTD.', location: 'KOLHAPUR, MAHARASHTRA', category: 'IT' },
    { id: 3, name: 'HUAWEI ICT ACADEMY', location: 'GURGAON', category: 'IT' },
    { id: 4, name: 'AARVI ELECTROMECH', location: 'HIMACHAL PRADESH', category: 'Manufacturing' },
    { id: 5, name: 'AXIOM SOFTECH PVT. LTD.', location: 'NAGPUR', category: 'IT' },
    { id: 6, name: 'PYLONS TECHNOLOGIES', location: 'PUNE', category: 'IT' },
    { id: 7, name: 'BANCHHOR INFRASTRUCTURES PVT. LTD.', location: 'DURG', category: 'Infrastructure' },
    { id: 8, name: 'INNOVATION4U', location: 'BHILAI', category: 'IT' },
    { id: 9, name: 'RUBICON SKILL DEVELOPMENT PVT. LTD.', location: 'PUNE', category: 'Education' },
    { id: 10, name: 'PROWIZ MANSYSTEMS PVT. LTD.', location: 'PUNE', category: 'IT' },
    { id: 11, name: 'WEBLENGTH INFONET PRIVATE LIMITED [SUPERSET]', location: 'BHOPAL', category: 'IT' },
    { id: 12, name: 'SORTING HAT TECHNOLOGIES PRIVATE LIMITED', location: 'BANGALORE (UNACADEMY)', category: 'IT' },
    { id: 13, name: 'SIDDHIVINAYAK ASSOCIATES', location: 'DURG', category: 'Consulting' },
    { id: 14, name: 'TECH36GARH', location: 'DURG', category: 'IT' },
    { id: 15, name: 'AUDITTECH INDUSTRIAL SERVICES PVT. LTD.', location: 'DURG', category: 'Services' },
    { id: 16, name: 'SHRIRAM VALUE SERVICES (P) LTD.', location: 'CHENNAI', category: 'Services' },
    { id: 17, name: 'EDUNET FOUNDATION', location: 'GURGAON', category: 'Education' },
    { id: 18, name: 'SK DEEP TECH PVT. LTD.', location: 'HYDERABAD', category: 'IT' },
    { id: 19, name: 'SWADESH', location: 'LUCKNOW', category: 'IT' },
    { id: 20, name: 'MY ANATOMY', location: 'BANGALORE', category: 'Healthcare' },
    { id: 21, name: 'DCS', location: 'PUNE', category: 'IT' },
    { id: 22, name: 'KRITARTHA ACADEMY', location: 'BHILAI', category: 'Education' },
    { id: 23, name: '4D EDUCATION', location: 'BHILAI', category: 'Education' },
    { id: 24, name: 'ELEATION', location: 'PUNE', category: 'Education' },
    { id: 25, name: 'ARN TELE SERVICES PVT. LTD.', location: 'HARYANA', category: 'Telecom' },
    { id: 26, name: 'NETLINK SOFTWARE PRIVATE LIMITED', location: 'BHOPAL', category: 'IT' },
    { id: 27, name: 'S2P EDUTECH', location: 'NAGPUR', category: 'Education' },
    { id: 28, name: 'NEXTGEN VENTURES', location: 'BHUBANESHWAR', category: 'IT' },
    { id: 29, name: 'KREYA SOLUTIONS', location: 'PUNE', category: 'IT' },
    { id: 30, name: 'CONSTA CLOUD PVT. LTD.', location: 'RAIPUR', category: 'IT' }
  ];

  // Get unique categories for filter
  const categories = ['all', ...new Set(companies.map(company => company.category))];

  // Filter companies based on search term and category
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         company.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filter === 'all' || company.category === filter;
    return matchesSearch && matchesCategory;
  });

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
              MOU's with Prominent Companies
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              CSIT | Strategic Partnerships
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Search and Filter Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search companies..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d173b] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex-shrink-0">
              <select
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d173b] focus:border-transparent"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Showing {filteredCompanies.length} of {companies.length} companies
          </p>
        </div>

        {/* Companies Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.No
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company Name
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCompanies.map((company, index) => (
                <tr 
                  key={company.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-[#0d173b]">
                    {index + 1}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {company.name}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[#0d173b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {company.location}
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {company.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No companies found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MOUs; 