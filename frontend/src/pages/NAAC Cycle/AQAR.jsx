import React from 'react'
// import pdf1 from '../../assets/Naac Cycle/AQAR/AQAR 2018-19.pdf'
// import pdf2 from '../../assets/Naac Cycle/AQAR/AQAR 2019-20.pdf'
// import pdf3 from '../../assets/Naac Cycle/AQAR/AQAR 2020-21.pdf'
// import pdf4 from '../../assets/Naac Cycle/AQAR/AQAR 2021-22.pdf'

const AQAR = () => {
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
        <h1 className="text-2xl md:text-3xl font-bold">AQAR</h1>
        <p className="text-blue-100 mt-2">CSIT | View and manage all AQAR related documents</p>
        <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
      </div>

      {/* Responsive table container */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          {/* Table header */}
          <thead>
            <tr 
              className="text-white"
              style={{
                background: 'linear-gradient(135deg, #0d173b 0%, #1e305f 100%)'
              }}
            >
              <th className="p-3 sm:p-4 pl-8 font-semibold text-sm md:text-base rounded-tl-lg text-left">Year</th>
              <th className="p-3 sm:p-4 font-semibold text-sm md:text-base rounded-tr-lg text-center">Action</th>
            </tr>
          </thead>
          
          {/* Table body */}
          <tbody className="divide-y divide-gray-200">
            {/* Row 1 */}
            <tr className="hover:bg-blue-50 transition-colors duration-150">
              <td className="p-3 sm:p-4 pl-8 text-sm md:text-base font-medium text-gray-800">
                2018-2019
              </td>
              <td className="p-3 sm:p-4 text-center">
                <button
                  onClick={() => handleViewPdf()} // pdf1
                  className="px-4 py-2 bg-[#1e305f] hover:bg-[#0d173b] cursor-pointer text-white text-sm md:text-base rounded-md transition-colors duration-200 flex items-center gap-2 mx-auto"
                  style={{
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Document</span>
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-blue-50 transition-colors duration-150">
              <td className="p-3 sm:p-4 pl-8 text-sm md:text-base font-medium text-gray-800">
                2019-2020
              </td>
              <td className="p-3 sm:p-4 text-center">
                <button
                  onClick={() => handleViewPdf()} // pdf2
                  className="px-4 py-2 bg-[#1e305f] hover:bg-[#0d173b] cursor-pointer text-white text-sm md:text-base rounded-md transition-colors duration-200 flex items-center gap-2 mx-auto"
                  style={{
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Document</span>
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-blue-50 transition-colors duration-150">
              <td className="p-3 sm:p-4 pl-8 text-sm md:text-base font-medium text-gray-800">
                2020-2021
              </td>
              <td className="p-3 sm:p-4 text-center">
                <button
                  onClick={() => handleViewPdf()} // pdf3
                  className="px-4 py-2 bg-[#1e305f] hover:bg-[#0d173b] cursor-pointer text-white text-sm md:text-base rounded-md transition-colors duration-200 flex items-center gap-2 mx-auto"
                  style={{
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Document</span>
                </button>
              </td>
            </tr>
            
            {/* Row 4 */}
            <tr className="hover:bg-blue-50 transition-colors duration-150">
              <td className="p-3 sm:p-4 pl-8 text-sm md:text-base font-medium text-gray-800">
                2021-2022
              </td>
              <td className="p-3 sm:p-4 text-center">
                <button
                  onClick={() => handleViewPdf()} // pdf4
                  className="px-4 py-2 bg-[#1e305f] hover:bg-[#0d173b] cursor-pointer text-white text-sm md:text-base rounded-md transition-colors duration-200 flex items-center gap-2 mx-auto"
                  style={{
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Document</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AQAR