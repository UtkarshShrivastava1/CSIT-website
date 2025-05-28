// import React, { useState } from 'react';
// const NaacCycle2 = () => {
//   const [expandedSections, setExpandedSections] = useState({});
//   const [expandedSubSections, setExpandedSubSections] = useState({});

//   const toggleSection = (index) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }));
//   };

//   const toggleSubSection = (sectionIndex, itemIndex) => {
//     setExpandedSubSections(prev => ({
//       ...prev,
//       [`${sectionIndex}-${itemIndex}`]: !prev[`${sectionIndex}-${itemIndex}`]
//     }));
//   };

//   const handleViewPdf = (pdfPath) => {
//     try {
//       // Convert relative path to absolute path
//       const basePath = '/src/assets/Naac Cycle/';
//       const absolutePath = pdfPath.startsWith(basePath) ? pdfPath : basePath + pdfPath;
      
//       // Create the full URL using the current origin
//       const fullUrl = window.location.origin + absolutePath;
      
//       // Open in a new tab
//       window.open(fullUrl, '_blank', 'noopener,noreferrer');
//     } catch (error) {
//       console.error('Error handling PDF:', error);
//       alert('Unable to open PDF. Please try again.');
//     }
//   };

//   // Update the paths in criteriaData to use absolute paths
//   const criteriaData = [
//     {
//       title: "EXTENDED PROFILE",
//       items: [
//         {
//           title: "Extended 1.1 - Number of students year wise during the last five years",
//           pdf: "/src/assets/Naac Cycle/Naac Cycle2/Extended profile/EP 1.1 Summary.pdf"
//         },
//         {
//           title: "Extended 2.1 - Number of Full time teachers during the last five years",
//           pdf: "/src/assets/Naac Cycle/Naac Cycle2/Extended profile/EP 2.1 Faculty List without Repeat Count (1).pdf"
//         },
//         {
//           title: "Extended 2.2 - Number of full time teachers year wise during the last five years",
//           pdf: "/src/assets/Naac Cycle/Naac Cycle2/Extended profile/EP 2.2 Summary.pdf"
//         },
//         {
//           title: "Extended 3.1 - Expenditure Excluding salary component year wise during the last five years",
//           pdf: "/src/assets/Naac Cycle/Naac Cycle2/Extended profile/EP 3.1 Summary.pdf"
//         }
//       ]
//     },
//     {
//       title: "Criteria 1 - Curricular Aspects",
//       items: [
//         {
//           title: "1.1 – Curriculum Design and Developments",
//           pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 1/1.1.1.pdf",
//           subItems: [
//             {
//               title: "1.1.1 The Institution ensures effective curriculum planning and delivery through a well-planned and documented process...",
//               pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 1/1.1.1.pdf"
//             }
//           ]
//         },
//         {
//           title: "1.2 - Academic Flexibility",
//           pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 1/1.2.1 Summary.pdf",
//           subItems: [
//             {
//               title: "1.2.1 Number of Add on/Certificate/Value added programs offered during the last five years",
//               pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 1/1.2.1 Summary.pdf"
//             },
//             {
//               title: "1.2.2 Percentage of students enrolled in Certificate/Add-on/Value added programs...",
//               pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 1/1.2.2 Summary.pdf"
//             }
//           ]
//         },
//         {
//           title: "1.3 – Curriculum Enrichment",
//           pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 1/1.3.1.pdf",
//           subItems: [
//             {
//               title: "1.3.1 Institution integrates crosscutting issues relevant to Professional Ethics...",
//               pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 1/1.3.1.pdf"
//             },
//             {
//               title: "1.3.2 Percentage of students undertaking project work/field work/internships",
//               pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 1/1.3.2.pdf"
//             }
//           ]
//         },
//         {
//           title: "1.4 – Feedback System",
//           pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 1/1.4.pdf"
//         }
//       ]
//     },
//     {
//       title: "Criteria 2 - Teaching - Learning and Evaluation",
//       items: [
//         { title: "2.1.1 Enrolment percentage", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 2/2.1.1 Summary.pdf" },
//         { title: "2.1.2 Percentage of seats filled against seats reserved for various categories...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 2/2.1.2 Summary.pdf" },
//         { title: "2.2.1 Student–Full time Teacher Ratio", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 2/2.2.1 Summary.pdf" },
//         { title: "2.3.1 Student centric methods, such as experiential learning...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 2/2.3.1.pdf" },
//         { title: "2.4.1 Percentage of full-time teachers against sanctioned posts...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 2/2.4.1 Summary.pdf" },
//         { title: "2.4.2 Percentage of full time teachers with NET/SET/SLET/Ph.D...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 2/2.4.2 Summary.pdf" },
//         { title: "2.5.1 Mechanism of internal/external assessment...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 2/2.5.1.pdf" },
//         { title: "2.6.1 Programme Outcomes (POs) and Course Outcomes (COs)...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 2/2.6.1.pdf" },
//         { title: "2.6.2 Attainment of POs and COs are evaluated", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 2/2.6.2.pdf" },
//         { title: "2.6.3 Pass percentage of Students during last five years", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 2/2.6.3 Summary.pdf" }
//       ]
//     },
//     {
//       title: "Criteria 3 - Research, Innovations and Extension",
//       items: [
//         { title: "3.1.1 Grants received from Government and non-governmental agencies...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 3/3.1.1 Summary.pdf" },
//         { title: "3.2.1 Institution has created an ecosystem for innovations...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 3/3.2.1.pdf" },
//         { title: "3.2.2 Number of workshops/seminars/conferences...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 3/3.2.2_Summary.pdf" },
//         { title: "3.3.1 Number of research papers published per teacher...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 3/3.3.1 Summary.pdf" },
//         { title: "3.3.2 Number of books and chapters in edited volumes/books...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 3/3.3.2 Summary.pdf" },
//         { title: "3.4.1 Extension activities are carried out in the neighborhood community...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 3/3.4.1.pdf" },
//         { title: "3.4.2 Awards and recognitions received for extension activities...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 3/3.4.2.pdf" },
//         { title: "3.4.3 Number of extension and outreach programs...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 3/3.4.3 Summary.pdf" },
//         { title: "3.5.1 Number of MoUs, collaborations/linkages...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 3/3.5.1_Summary.pdf" }
//       ]
//     },
//     {
//       title: "Criteria 4 - Infrastructure and Learning Resources",
//       items: [
//         {
//           title: "4.1 Physical Facilities",
//           subItems: [
//             { title: "4.1.1 Availability of adequate infrastructure and physical facilities...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 4/4.1.1.pdf" },
//             { title: "4.1.2 Percentage of expenditure, excluding salary for infrastructure...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 4/4.1.2 Summary.pdf" }
//           ]
//         },
//         {
//           title: "4.2 Library as a learning Resource",
//           subItems: [
//             { title: "4.2.1 Library is automated using Integrated Library Management System...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 4/4.2.1.pdf" }
//           ]
//         },
//         {
//           title: "4.3 IT Infrastructure",
//           subItems: [
//             { title: "4.3.1 Institution frequently updates its IT facilities...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 4/4.3.1.pdf" },
//             { title: "4.3.2 Student–Computer ratio", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 4/4.3.2 Summary.pdf" }
//           ]
//         },
//         {
//           title: "4.4 Maintenance of Campus Infrastructure",
//           subItems: [
//             { title: "4.4.1 Percentage of expenditure incurred on maintenance of infrastructure...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 4/4.4.1 Summary.pdf" }
//           ]
//         }
//       ]
//     },
//     {
//       title: "Criteria 5 - Student Support and Progression",
//       items: [
//         { title: "5.1.1 Percentage of students benefited by scholarships...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 5/5.1.1_Summary.pdf" },
//         { title: "5.1.2 Capacity building and skills enhancement initiatives...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 5/5.1.2_Summary.pdf" },
//         { title: "5.1.3 Percentage of students benefitted by guidance...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 5/5.1.3_Summary sheet.pdf" },
//         { title: "5.1.4 The Institution has a transparent mechanism...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 5/5.1.4_Summary.pdf" },
//         { title: "5.2.1 Percentage of placement of outgoing students...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 5/5.2.1_Summary.pdf" },
//         { title: "5.2.2 Percentage of students qualifying in state/national...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 5/5.2.2_Summary.pdf" },
//         { title: "5.3.1 Number of awards/medals for outstanding performance...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 5/5.3.1_summary.pdf" },
//         { title: "5.3.2 Average number of sports and cultural programs...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 5/5.3.2_summary final.pdf" },
//         { title: "5.4.1 There is a registered Alumni Association...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 5/5.4.1.pdf" }
//       ]
//     },
//     {
//       title: "Criteria 6 - Governance, Leadership and Management",
//       items: [
//         { title: "6.1.1 The governance and leadership is in accordance with vision...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 6/6.1.1.pdf" },
//         { title: "6.2.1 The functioning of the institutional bodies is effective...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 6/6.2.1.pdf" },
//         { title: "6.2.2 Implementation of e-governance in areas of operation", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 6/6.2.2_Summary.pdf" },
//         { title: "6.3.1 The institution has effective welfare measures...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 6/6.3.1.pdf" },
//         { title: "6.3.2 Percentage of teachers provided with financial support...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 6/6.3.2_Summary.pdf" },
//         { title: "6.3.3 Percentage of teaching and non-teaching staff participating...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 6/Summary-6.3.3.pdf" },
//         { title: "6.4.1 Institution has strategies for mobilization...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 6/6.4.1.pdf" },
//         { title: "6.5.1 Internal Quality Assurance Cell (IQAC)...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 6/6.5.1.pdf" },
//         { title: "6.5.2 Quality assurance initiatives of the institution", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 6/6.5.2_Summary.pdf" }
//       ]
//     },
//     {
//       title: "Criteria 7 – Institutional Values and Best Practices",
//       items: [
//         { title: "7.1.1 Measures initiated by the Institution for the promotion of gender equity...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 7/7.1.1.pdf" },
//         { title: "7.1.2 The Institution has facilities and initiatives for...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 7/7.1.2 Summary.pdf" },
//         { title: "7.1.3 Quality audits on environment and energy...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 7/7.1.3 Summary.pdf" },
//         { title: "7.1.4 Describe the Institutional efforts/initiatives...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 7/7.1.4.pdf" },
//         { title: "7.2.1 Describe two best practices successfully implemented...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 7/7.2.1.pdf" },
//         { title: "7.3.1 Portray the performance of the Institution...", pdf: "/src/assets/Naac Cycle/Naac Cycle2/criteria 7/7.3.1.pdf" }
//       ]
//     },
//     {
//       title: "SSR (Self Study Report)",
//       pdf: "/src/assets/Naac Cycle/Naac Cycle2/SSR/CGCOGN21243.pdf",
//       directLink: true
//     },
//     {
//       title: "DVV Clarification",
//       pdf: "/src/assets/Naac Cycle/Naac Cycle2/DVV Clarifiation/DVV Clarification.pdf",
//       directLink: true
//     }
//   ];

//   // Update the styles object
//   const styles = {
//     truncate: {
//       overflow: 'hidden',
//       textOverflow: 'ellipsis',
//       whiteSpace: 'nowrap',
//       maxWidth: '90%'
//     },
//     mainSection: {
//       background: 'linear-gradient(135deg, #0d173b 0%, #1e305f 100%)',
//     },
//     specialSection: {
//       background: 'linear-gradient(135deg, #1e305f 0%, #2a4484 100%)',
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white p-4 md:p-8 w-full overflow-x-hidden">
//       {/* Header */}
//       <div 
//         className="w-full rounded-t-lg p-6 text-white mb-6"
//         style={styles.mainSection}
//       >
//         <h1 className="text-2xl md:text-3xl font-bold">NAAC Cycle 2</h1>
//         <p className="text-blue-100 mt-2">CSIT | View and manage all NAAC cycle related documents</p>
//         <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
//       </div>

//       {/* Documents Container */}
//       <div className="space-y-4 w-full">
//         {criteriaData.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full">
//             {section.directLink ? (
//               // Special sections (SSR and DVV)
//               <div className="relative">
//                 <button
//                   onClick={() => handleViewPdf(section.pdf)}
//                   className="w-full text-left p-4 text-white transition-colors flex justify-between items-center cursor-pointer hover:opacity-90"
//                   style={styles.specialSection}
//                 >
//                   <span className="font-medium truncate pr-2">{section.title}</span>
//                   <svg
//                     className="w-5 h-5 flex-shrink-0"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                 </button>
//               </div>
//             ) : (
//               <div className="w-full">
//                 <button
//                   onClick={() => toggleSection(sectionIndex)}
//                   className="w-full text-left p-4 bg-gray-50 border-b flex justify-between items-center cursor-pointer hover:bg-gray-100 group"
//                 >
//                   <h3 className="font-semibold text-gray-800 truncate pr-2">{section.title}</h3>
//                   <svg
//                     className={`w-5 h-5 transform transition-transform ${expandedSections[sectionIndex] ? 'rotate-180' : ''}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
                
//                 {expandedSections[sectionIndex] && (
//                   <div className="divide-y divide-gray-200">
//                     {section.items.map((item, itemIndex) => (
//                       <div key={itemIndex}>
//                         <div className="flex flex-col">
//                           <button
//                             onClick={() => item.subItems ? toggleSubSection(sectionIndex, itemIndex) : handleViewPdf(item.pdf)}
//                             className="w-full text-left p-4 hover:bg-blue-50 transition-colors flex justify-between items-center cursor-pointer group"
//                           >
//                             <div className="flex items-center space-x-2 relative group">
//                               <span className="text-gray-700" style={styles.truncate}>
//                               {item.title}
//                             </span>
//                               <div 
//                                 className="invisible group-hover:visible absolute left-0 -top-2 transform -translate-y-full z-50 p-2 bg-gray-800 text-white text-sm rounded whitespace-normal max-w-[500px] pointer-events-none shadow-lg"
//                               >
//                                 {item.title}
//                               </div>
//                             </div>
//                             {item.subItems ? (
//                               <svg
//                                 className={`w-5 h-5 transform transition-transform ${expandedSubSections[`${sectionIndex}-${itemIndex}`] ? 'rotate-180' : ''}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                               </svg>
//                             ) : (
//                               <svg
//                                 className="w-5 h-5 flex-shrink-0 text-blue-600"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                               </svg>
//                             )}
//                           </button>
                          
//                           {item.subItems && expandedSubSections[`${sectionIndex}-${itemIndex}`] && (
//                             <div className="bg-blue-50/50">
//                               {item.subItems.map((subItem, subIndex) => (
//                                 <div key={subIndex} className="relative">
//                                   <button
//                                     onClick={() => handleViewPdf(subItem.pdf)}
//                                     className="w-full text-left p-3 pl-8 hover:bg-blue-100 transition-colors flex justify-between items-center cursor-pointer group"
//                                   >
//                                     <div className="flex items-center space-x-2 relative group">
//                                       <span className="text-gray-600" style={styles.truncate}>
//                                       {subItem.title}
//                                     </span>
//                                       <div 
//                                         className="invisible group-hover:visible absolute left-0 -top-2 transform -translate-y-full z-50 p-2 bg-gray-800 text-white text-sm rounded whitespace-normal max-w-[500px] pointer-events-none shadow-lg"
//                                       >
//                                         {subItem.title}
//                                       </div>
//                                     </div>
//                                     <svg
//                                       className="w-5 h-5 flex-shrink-0 text-blue-600"
//                                       fill="none"
//                                       stroke="currentColor"
//                                       viewBox="0 0 24 24"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                                     </svg>
//                                   </button>
//                                 </div>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Floating Action Button for mobile */}
//       <div className="md:hidden fixed bottom-6 right-6">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="p-3 bg-[#0d173b] text-white rounded-full shadow-lg hover:bg-[#1e305f] transition-colors cursor-pointer"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NaacCycle2;