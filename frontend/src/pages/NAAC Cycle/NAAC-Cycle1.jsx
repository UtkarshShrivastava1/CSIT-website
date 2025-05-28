import React from 'react';
// import pdf1 from '../../assets/Naac Cycle/Naac Cycle1/NAAC_SSR_Cycle1.pdf';
// import pdf2 from '../../assets/Naac Cycle/Naac Cycle1/Cycle1_Certificate.pdf';
// import pdf3 from '../../assets/Naac Cycle/Naac Cycle1/Peer_Team_Report_Cycle1.pdf';
const NaacCycle1 = () => {
  const handleViewPdf = (pdfUrl) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Header with gradient background */}
      <div 
        className="w-full rounded-t-lg p-6 text-white mb-6"
        style={{
          background: 'linear-gradient(135deg, #0d173b 0%, #1e305f 100%)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h1 className="text-2xl md:text-3xl font-bold">NAAC Cycle 1</h1>
        <p className="text-blue-100 mt-2">CSIT | View and manage all NAAC cycle related documents</p>
        <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
      </div>

      {/* Responsive table container */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          {/* Table header */}
          <thead>
            <tr 
              className="text-white text-left"
              style={{
                background: 'linear-gradient(135deg, #0d173b 0%, #1e305f 100%)'
              }}
            >
              <th className="p-4 font-semibold text-sm md:text-base rounded-tl-lg">Document Title</th>
              <th className="p-4 font-semibold text-sm md:text-base rounded-tr-lg">Action</th>
            </tr>
          </thead>
          
          {/* Table body - Static content */}
          <tbody className="divide-y divide-gray-200">
            {/* Row 1 */}
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="p-4 text-sm md:text-base font-medium text-gray-800">
                Self Study Report (SSR) 2023-24
              </td>
              <td className="p-4">
                <button
                  onClick={() => handleViewPdf()} // pdf1
                  className="px-4 py-2 bg-[#1e305f] hover:bg-[#0d173b] cursor-pointer text-white text-sm md:text-base rounded-md transition-colors duration-200 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Document
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="p-4 text-sm md:text-base font-medium text-gray-800">
                Certificate
              </td>
              <td className="p-4">
                <button
                  onClick={() => handleViewPdf()} // pdf2
                  className="px-4 py-2 bg-[#1e305f] hover:bg-[#0d173b] cursor-pointer text-white text-sm md:text-base rounded-md transition-colors duration-200 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Document
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="p-4 text-sm md:text-base font-medium text-gray-800">
                Report
              </td>
              <td className="p-4">
                <button
                  onClick={() => handleViewPdf()} // pdf3
                  className="px-4 py-2 bg-[#1e305f] hover:bg-[#0d173b] cursor-pointer text-white text-sm md:text-base rounded-md transition-colors duration-200 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Document
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NaacCycle1;