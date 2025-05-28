import { useState } from "react";
import {
  Book,
  Clock,
  Users,
  FileText,
  Wifi,
  Map,
  BookOpen,
} from "lucide-react";

export default function LibraryInformationPage() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      {/* Header Banner */}
      <div className="bg-[#0d173b] text-white p-6 md:p-8 mb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Central Library
          </h1>
          <div className="w-24 h-1 bg-gray-300 mx-auto mt-3"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex items-center">
            <Book className="text-blue-900 mr-3" size={24} />
            <div>
              <h3 className="font-medium text-blue-900">Total Books</h3>
              <p className="text-lg font-bold">64,495</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex items-center">
            <Clock className="text-blue-900 mr-3" size={24} />
            <div>
              <h3 className="font-medium text-blue-900">Library Hours</h3>
              <p className="font-medium">8:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex items-center">
            <Users className="text-blue-900 mr-3" size={24} />
            <div>
              <h3 className="font-medium text-blue-900">Student Services</h3>
              <p className="font-medium">Book Bank Available</p>
            </div>
          </div>
        </div>

        {/* Ranganathan Reference Section Card */}
        <div className="bg-blue-50 p-4 md:p-6 rounded-lg shadow-sm mb-8 border-l-4 border-blue-900">
          <div className="flex items-center mb-2">
            <BookOpen className="text-[#0d173b] mr-3" size={24} />
            <h2 className="text-lg md:text-xl font-bold text-blue-900">
              Ranganathan Reference Section
            </h2>
          </div>
          <p className="text-gray-700">
            The Central Library houses the specialized Ranganathan Reference
            Section, named after Dr. S.R. Ranganathan, the father of library
            science in India. This section contains valuable reference materials,
            rare books, and academic resources that are accessible to all students
            and faculty for research and study purposes.
          </p>
        </div>

        {/* Library Information Table */}
        <div className="overflow-hidden mb-8 bg-white rounded-lg shadow">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left w-20 bg-[#0d173b] text-white">
                  S.No.
                </th>
                <th className="border px-4 py-2 text-left bg-[#0d173b] text-white">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 align-top bg-gray-50">1</td>
                <td className="border px-4 py-2">
                  <div className="font-bold">Department</div>
                  <p className="mb-2">
                    The library is fully Air Conditioned and has all facilities for its readers. The library spreads in four floors and has peaceful, sunlit areas provide ideal study spaces. The floors are divided by the availability of books of specific branch at different floors, making it convenient for readers to search book of their interest and requirements. The reference section remains open from 8:00 a.m. to 8:00 p.m. from Monday to Saturday. Special Arrangements are made to keep the reference section open during the examination. The number of The books available are sufficient to cater to the needs of students and faculties.
                  </p>

                  <div className="mt-4 mb-2">
                    <div className="border border-gray-300 p-4 bg-blue-50 mb-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2 text-blue-900 border-b pb-2">
                        Highlight of Library Resources at CSIT, Tagore Central
                        Library
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 bg-white">
                          <tbody>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center w-12">
                                1
                              </td>
                              <td className="border px-2 py-1">
                                TOTAL NO. OF BOOKS ON DATE
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                64,495
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center">
                                2
                              </td>
                              <td className="border px-2 py-1">
                                TOTAL NO. OF TITLES ON DATE
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                6922
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center">
                                3
                              </td>
                              <td className="border px-2 py-1">
                                TOTAL NO. OF JOURNALS: / ONLINE JOURNALS PACKAGES & PRINT JOURNALS
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                200 DELNET (National & International)
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center">
                                4
                              </td>
                              <td className="border px-2 py-1">
                                TOTAL NO. OF MAGAZINES
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                10
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center">
                                5
                              </td>
                              <td className="border px-2 py-1">
                                TOTAL NO. OF NEWSPAPERS - ENGLISH (07) & HINDI (08)
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                15
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center">
                                6
                              </td>
                              <td className="border px-2 py-1">
                                BOOK BANK FACILITY AVAILABLE (06 BOOKS PER SEM.)
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                FOR EVERY STUDENT
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center">
                                7
                              </td>
                              <td className="border px-2 py-1">
                                NPTEL VIDEO LECTRUE AVAILABLE
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                __ YES __
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center">
                                8
                              </td>
                              <td className="border px-2 py-1">
                                REPROGRAPHIC FACILITY AVAILABLE
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                01 MACHINE
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center">
                                9
                              </td>
                              <td className="border px-2 py-1">
                                PRINT OUT & SCANNING FACILITY AVAILABLE
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                __ YES __
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center">
                                10
                              </td>
                              <td className="border px-2 py-1">
                                CD LIBRARY: AVAILABLE
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                2215
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="border px-2 py-1 text-center">
                                11
                              </td>
                              <td className="border px-2 py-1">
                                ISSUE OF BOOKS / MAGAZINES / QUESTION PAPERS / SYLLABUS / CDs
                              </td>
                              <td className="border px-2 py-1 text-center font-medium">
                                WEEKDAYS: 08:00 A.M. TO 05:00 P.M.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 align-top bg-gray-50">2</td>
                <td className="border px-4 py-2">
                  <div className="font-bold">
                    Central Library
                  </div>
                  <p>
                    The institute has a well equipped state-of-the-art Central Library, named as Tagore Library. This four-storied mammoth structure, housing over 64,000 books, subscription to 150 Journals and other reading materials; is a place of attraction not only for the students but also for the academia of the state. The library is fully air-conditioned and is well equipped to facilitate students, faculties and staff to learn.
                  </p>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 align-top bg-gray-50">3</td>
                <td className="border px-4 py-2">
                  <div className="font-bold">
                    Book Bank Facilities For The Students
                  </div>
                  <p>
                    The library provides Book-Bank facility to all the students, under which each student gets all the text books for the semester studies. This reduces financial burden on the parents. Apart from this, the students can also borrow other books for studies. The library remains open from 8:00 am to 8:00 pm.
                  </p>
                  <p>
                    The Library has a collection of over 64,000 books including more than 45,500 technical books besides magazines and journals.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Key Facilities Section */}
        <div className="mb-8 bg-white rounded-lg shadow p-4 md:p-6">
          <div className="flex items-center mb-4">
            <FileText className="text-blue-900 mr-2" size={24} />
            <h2 className="text-xl font-bold text-blue-900">
              Key Facilities at Library Services:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            <ol className="list-decimal pl-6 space-y-2">
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                Circulation Service
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                e-Library Facility for Online Library Resources
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                Rangnathan Reference Section
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                Reference Services & Study Room Facility
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                National Programme on Technology Enhanced Learning (NPTEL) Video Lectures
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                ILL (Inter Library Loan & Document Delivery Services Through DELNET)
              </li>
            </ol>
            <ol className="list-decimal pl-6 space-y-2" start={7}>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                Reprographic Facility
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                Print out Facility
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                Scanning Facility
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                Book Bank Facility
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                WiFi Facility
              </li>
              <li className="hover:bg-blue-50 p-2 rounded transition-colors">
                OPAC Search (Online Public Access Catalogue for Searching Library Resources)
              </li>
            </ol>
          </div>
        </div>

        {/* Bottom Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Library Hours */}
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <div className="flex items-center mb-3">
              <Clock className="text-blue-900 mr-2" size={20} />
              <h2 className="text-lg font-bold text-blue-900">Library Timing</h2>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">MONDAY TO FRIDAY</span>
                <span>08:00 A.M. TO 08:00 P.M.</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">SATURDAY</span>
                <span>08:00 A.M. TO 03:00 P.M.</span>
              </div>
            </div>
          </div>

          {/* Library In-charge */}
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">
              Library In-charge
            </h2>
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <Users className="text-blue-900" size={20} />
              </div>
              <div>
                <p className="font-medium">Mr. P D Manikpur</p>
                <p className="text-sm text-gray-600">Librarian: 7000859876</p>
                <p className="text-sm text-blue-600">Email: library@csitdurg.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}