import React, { useState } from "react";
import { placementStatistics } from "../../data/placementStatistic";
import { placement2025Companies } from "../../data/placement2025";
import { placement2025BranchStats } from "../../data/placementStats";

const StatCard = ({ label, value }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
    <p className="text-sm text-gray-600">{label}</p>
    <p className="text-2xl font-bold text-[#0d173b]">{value}</p>
  </div>
);

const PlacementStatistics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [activeTab, setActiveTab] = useState("overall");

  const filteredCompanies = placementStatistics.companies.filter(
    (company) =>
      company.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const paginatedCompanies = filteredCompanies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderContent = () => {
    switch (activeTab) {
      case "branch":
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drives</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Placed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {placement2025BranchStats.map((stat) => (
                  <tr key={stat.branch}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stat.branch}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.students}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.drives}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.placed}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "2025":
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {placement2025Companies.map((record) => (
                  <tr key={record.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.mode}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.package}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "overall":
      default:
        return (
          <>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search by company or location..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d173b]"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
              />
            </div>
            {renderOverallTable()}
          </>
        );
    }
  };

  const renderOverallTable = () => (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Package
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Venue
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedCompanies.map((company) => (
              <tr key={company.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {company.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {company.location || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {company.package}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {company.venue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );

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
              Placement Statistics
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              Academic Year: {placementStatistics.academicYear}
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Summary Stats */}
        <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            label="Academic Year"
            value={placementStatistics.academicYear}
          />
          <StatCard
            label="Highest Package"
            value={placementStatistics.highestPackage}
          />
          <StatCard
            label="Average Package"
            value={placementStatistics.averagePackage}
          />
          <StatCard
            label="Companies Visited"
            value={placementStatistics.companies.length}
          />
        </div>

        {/* Tabs */}
        <div className="mb-4 border-b border-gray-200">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button onClick={() => setActiveTab('overall')} className={`${activeTab === 'overall' ? 'border-[#0d173b] text-[#0d173b]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}>
              Overall Statistics
            </button>
            
            <button onClick={() => setActiveTab('2025')} className={`${activeTab === '2025' ? 'border-[#0d173b] text-[#0d173b]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}>
              Placements (2025)
            </button>

            <button onClick={() => setActiveTab('branch')} className={`${activeTab === 'branch' ? 'border-[#0d173b] text-[#0d173b]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}>
              Branch-wise (2025)
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default PlacementStatistics;
