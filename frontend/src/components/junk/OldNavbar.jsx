// import { ChevronDown, Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeDropdownMobile, setActiveDropdownMobile] = useState(null);
//   const [activeSubDropdownMobile, setActiveSubDropdownMobile] = useState(null);

//   const toggleMobileDropdown = (index) => {
//     if (activeDropdownMobile === index) {
//       setActiveDropdownMobile(null);
//       setActiveSubDropdownMobile(null);
//     } else {
//       setActiveDropdownMobile(index);
//       setActiveSubDropdownMobile(null);
//     }
//   };

//   const toggleMobileSubDropdown = (index) => {
//     if (activeSubDropdownMobile === index) {
//       setActiveSubDropdownMobile(null);
//     } else {
//       setActiveSubDropdownMobile(index);
//     }
//   };

//   const navItems = [
//     { name: 'Home', dropdown: [] },
//     {
//       name: 'About',
//       dropdown: ['Introduction', 'Society', 'Aspiration', 'Achievement',  'Professional Bodies','Message', 'Governing Body','Celebration'],
//     },
//     {
//       name: 'Academics',
//       dropdown: ['Computer Science and Engineering', 'Electrical and Electronics Engineering', 'Mechanical Engineering', 'Information Technology Engineering', 'Civil Engineering', ' Artificial Intelligence & Data Science Engineering', 'Mechatronics'],
//     },
//     {
//       name: 'Admission',
//       dropdown: ['Courses Offered', 'Admission Process', 'Help Desk', ' Leaflet'],
//     },
//     {
//       name: 'Campus',
//       dropdown: ['Facilities', 'Initiatives'],
//     },
//     { name: 'Connect', dropdown: [] },
//     {
//       name: 'Placement',
//       dropdown: ['About TNP Cell', 'Internship', 'MOUs', 'Our Recruiters', 'Placement Policies', 'Team Members', 'Placement Statistics', 'Training Programme'],
//     },
//     {
//       name: 'Alumni',
//       dropdown: ['About Association', 'Activities', 'Presence', 'Registered Association', 'Team Members'],
//     },
//     {
//       name:'NAAC Cycle',
//       dropdown:['NAAC Cycle 1','NAAC Cycle 2','NAAC Cycle 3'],
//     },
//     {
//       name: 'More',
//       dropdown: [
//         // {
//         //   name: 'Student Affairs',
//         //   submenu: ['Counselling', 'Development Programs', 'Extra Co-curricular Activities', 'Industry Interactions', 'Students Clubs', 'The Student Association'],
//         // },
//         // {
//         //   name: 'R&D',
//         //   submenu: ['About Association', 'Activities', 'Presence', 'Registered Association', 'Team Members'],
//         // },
//         'Student Affairs',
//         'R&D',
//         'Calendar',
//         'Feedback',
//         'Gallery',
//         'Grievances',
//         'IQAC',
//         'RTI',
//       ],
//     },
//   ];

//   return (
//     <nav className="bg-[#0d173b] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Desktop Menu */}
//           <div className="hidden md:flex w-full justify-between">
//             {navItems.map((item, index) => (
//               <div key={index} className="group relative">
//                 {item.dropdown.length === 0 ? (
//                   <Link
//                     to={`/${item.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') === 'home' ? '' : item.name.toLowerCase()}`}
//                     className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer"
//                   >
//                     {item.name}
//                   </Link>
//                 ) : (
//                   <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1a2d5e] focus:outline-none cursor-pointer">
//                     {item.name}
//                     <ChevronDown className="ml-1 h-4 w-4" />
//                   </button>
//                 )}

//                 {/* Dropdowns */}
//                 {item.dropdown.length > 0 && (
//                   <div className="hidden group-hover:block absolute z-20 top-full pt-2 w-56">
//                     <div className="absolute h-2 -top-2 inset-x-0"></div>
//                     <div className="rounded-md shadow-lg bg-white">
//                       <div className="py-1">
//                         {item.dropdown.map((subItem, subIndex) => (
//                           <div key={subIndex}>
//                             {typeof subItem === 'string' ? (
//                               <Link
//                                 to={`/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
//                                 className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
//                               >
//                                 {subItem}
//                               </Link>
//                             ) : (
//                               <div className="group/submenu relative">
//                                 <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-100">
//                                   {subItem.name}
//                                   <ChevronDown className="ml-1 h-4 w-4" />
//                                 </button>
//                                 <div className={`hidden group-hover/submenu:block absolute ${index === navItems.length - 1 ? 'right-full pr-2' : 'left-full pl-2'} top-0 z-30 mt-0 w-56`}>
//                                   <div className={`absolute h-full w-2 ${index === navItems.length - 1 ? 'right-0' : 'left-0'} top-0`} />
//                                   <div className="rounded-md shadow-lg bg-white">
//                                     <div className="py-1">
//                                       {subItem.submenu.map((subSubItem, subSubIndex) => (
//                                         <Link
//                                           key={subSubIndex}
//                                           to={`/${subSubItem.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
//                                           className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
//                                         >
//                                           {subSubItem}
//                                         </Link>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden w-full flex justify-end">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#1a2d5e] focus:outline-none"
//             >
//               {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item, index) => (
//               <div key={index}>
//                 {item.dropdown.length === 0 ? (
//                   <Link
//                     to={`/${item.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') === 'home' ? '' : item.name.toLowerCase()}`}
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => toggleMobileDropdown(index)}
//                       className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#1a2d5e]"
//                     >
//                       {item.name}
//                       <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdownMobile === index ? 'rotate-180' : ''}`} />
//                     </button>

//                     {activeDropdownMobile === index && (
//                       <div className="pl-4 space-y-1 mt-1">
//                         {item.dropdown.map((subItem, subIndex) => (
//                           <div key={subIndex}>
//                             {typeof subItem === 'string' ? (
//                               <Link
//                                 to={`/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
//                                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white"
//                                 onClick={() => setMobileMenuOpen(false)}
//                               >
//                                 {subItem}
//                               </Link>
//                             ) : (
//                               <>
//                                 <button
//                                   onClick={() => toggleMobileSubDropdown(subIndex)}
//                                   className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white"
//                                 >
//                                   {subItem.name}
//                                   <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeSubDropdownMobile === subIndex ? 'rotate-180' : ''}`} />
//                                 </button>
//                                 {activeSubDropdownMobile === subIndex && (
//                                   <div className="pl-4 space-y-1 mt-1">
//                                     {subItem.submenu.map((subSubItem, subSubIndex) => (
//                                       <Link
//                                         key={subSubIndex}
//                                         to={`/${subSubItem.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
//                                         className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#1a2d5e] hover:text-white"
//                                         onClick={() => setMobileMenuOpen(false)}
//                                       >
//                                         {subSubItem}
//                                       </Link>
//                                     ))}
//                                   </div>
//                                 )}
//                               </>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }