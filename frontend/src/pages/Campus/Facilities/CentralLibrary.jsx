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

  // Library resources data for easier management
  const libraryResources = [
    { id: "1", item: "TOTAL NO. OF BOOKS ON DATE", value: "64,495" },
    { id: "2", item: "TOTAL NO. OF TITLES ON DATE", value: "6922" },
    {
      id: "3",
      item: "TOTAL NO. OF JOURNALS: / ONLINE JOURNALS PACKAGES & PRINT JOURNALS",
      value: "200 DELNET (National & International)",
    },
    { id: "4", item: "TOTAL NO. OF MAGAZINES", value: "10" },
    {
      id: "5",
      item: "TOTAL NO. OF NEWSPAPERS - ENGLISH (07) & HINDI (08)",
      value: "15",
    },
    {
      id: "6",
      item: "BOOK BANK FACILITY AVAILABLE (06 BOOKS PER SEM.)",
      value: "FOR EVERY STUDENT",
    },
    { id: "7", item: "NPTEL VIDEO LECTURE AVAILABLE", value: "YES" },
    { id: "8", item: "REPROGRAPHIC FACILITY AVAILABLE", value: "01 MACHINE" },
    { id: "9", item: "PRINT OUT & SCANNING FACILITY AVAILABLE", value: "YES" },
    { id: "10", item: "CD LIBRARY: AVAILABLE", value: "2215" },
    {
      id: "11",
      item: "ISSUE OF BOOKS / MAGAZINES / QUESTION PAPERS / SYLLABUS / CDs",
      value: "WEEKDAYS: 08:00 A.M. TO 05:00 P.M.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      {/* Header Banner */}
      <div className="bg-[#0d173b] text-white p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Central Library
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-gray-300 mx-auto mt-2 sm:mt-3"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg shadow-sm flex items-center">
            <Book
              className="text-blue-900 mr-2 sm:mr-3 flex-shrink-0"
              size={20}
            />
            <div>
              <h3 className="font-medium text-blue-900 text-sm sm:text-base">
                Total Books
              </h3>
              <p className="text-base sm:text-lg font-bold">64,495</p>
            </div>
          </div>
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg shadow-sm flex items-center">
            <Clock
              className="text-blue-900 mr-2 sm:mr-3 flex-shrink-0"
              size={20}
            />
            <div>
              <h3 className="font-medium text-blue-900 text-sm sm:text-base">
                Library Hours
              </h3>
              <p className="font-medium text-sm sm:text-base">
                8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg shadow-sm flex items-center sm:col-span-2 lg:col-span-1">
            <Users
              className="text-blue-900 mr-2 sm:mr-3 flex-shrink-0"
              size={20}
            />
            <div>
              <h3 className="font-medium text-blue-900 text-sm sm:text-base">
                Student Services
              </h3>
              <p className="font-medium text-sm sm:text-base">
                Book Bank Available
              </p>
            </div>
          </div>
        </div>

        {/* Ranganathan Reference Section Card */}
        <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm mb-6 sm:mb-8 border-l-4 border-blue-900">
          <div className="flex flex-col sm:flex-row sm:items-center mb-3">
            <div className="flex items-center mb-2 sm:mb-0">
              <BookOpen
                className="text-[#0d173b] mr-2 sm:mr-3 flex-shrink-0"
                size={20}
              />
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-blue-900">
                Ranganathan Reference Section
              </h2>
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            The Central Library houses the specialized Ranganathan Reference
            Section, named after Dr. S.R. Ranganathan, the father of library
            science in India. This section contains valuable reference
            materials, rare books, and academic resources that are accessible to
            all students and faculty for research and study purposes.
          </p>
        </div>

        {/* Library Information - Responsive Layout */}
        <div className="mb-6 sm:mb-8 bg-white rounded-lg shadow">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left w-20 bg-[#0d173b] text-white text-sm">
                    S.No.
                  </th>
                  <th className="border px-4 py-2 text-left bg-[#0d173b] text-white text-sm">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 align-top bg-gray-50 text-center font-medium">
                    1
                  </td>
                  <td className="border px-4 py-3">
                    <div className="font-bold text-base mb-2">Department</div>
                    <p className="mb-4 text-sm leading-relaxed">
                      The library is fully Air Conditioned and has all
                      facilities for its readers. The library spreads in four
                      floors and has peaceful, sunlit areas provide ideal study
                      spaces. The floors are divided by the availability of
                      books of specific branch at different floors, making it
                      convenient for readers to search book of their interest
                      and requirements. The reference section remains open from
                      8:00 a.m. to 8:00 p.m. from Monday to Saturday. Special
                      Arrangements are made to keep the reference section open
                      during the examination. The number of The books available
                      are sufficient to cater to the needs of students and
                      faculties.
                    </p>

                    <div className="mt-4">
                      <div className="border border-gray-300 p-4 bg-blue-50 rounded-lg shadow-sm">
                        <h3 className="font-semibold mb-3 text-blue-900 border-b pb-2 text-base">
                          Highlight of Library Resources at CSIT, Tagore Central
                          Library
                        </h3>
                        <table className="min-w-full border border-gray-300 bg-white text-sm">
                          <tbody>
                            {libraryResources.map((resource, idx) => (
                              <tr key={idx} className="hover:bg-gray-50">
                                <td className="border px-2 py-1 text-center font-medium w-12">
                                  {resource.id}
                                </td>
                                <td className="border px-2 py-1 text-sm">
                                  {resource.item}
                                </td>
                                <td className="border px-2 py-1 text-center font-medium text-sm">
                                  {resource.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top bg-gray-50 text-center font-medium">
                    2
                  </td>
                  <td className="border px-4 py-3">
                    <div className="font-bold text-base mb-2">
                      Central Library
                    </div>
                    <p className="text-sm leading-relaxed">
                      The institute has a well equipped state-of-the-art Central
                      Library, named as Tagore Library. This four-storied
                      mammoth structure, housing over 64,000 books, subscription
                      to 150 Journals and other reading materials; is a place of
                      attraction not only for the students but also for the
                      academia of the state. The library is fully
                      air-conditioned and is well equipped to facilitate
                      students, faculties and staff to learn.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top bg-gray-50 text-center font-medium">
                    3
                  </td>
                  <td className="border px-4 py-3">
                    <div className="font-bold text-base mb-2">
                      Book Bank Facilities For The Students
                    </div>
                    <p className="text-sm leading-relaxed mb-2">
                      The library provides Book-Bank facility to all the
                      students, under which each student gets all the text books
                      for the semester studies. This reduces financial burden on
                      the parents. Apart from this, the students can also borrow
                      other books for studies. The library remains open from
                      8:00 am to 8:00 pm.
                    </p>
                    <p className="text-sm leading-relaxed">
                      The Library has a collection of over 64,000 books
                      including more than 45,500 technical books besides
                      magazines and journals.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden p-4 space-y-6">
            {/* Department Section */}
            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border-l-4 border-blue-900">
              <div className="flex items-center mb-3">
                <div className="bg-[#0d173b] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </div>
                <h3 className="font-bold text-lg text-blue-900">Department</h3>
              </div>
              <p className="text-sm leading-relaxed mb-4 text-gray-700">
                The library is fully Air Conditioned and has all facilities for
                its readers. The library spreads in four floors and has
                peaceful, sunlit areas provide ideal study spaces. The floors
                are divided by the availability of books of specific branch at
                different floors, making it convenient for readers to search
                book of their interest and requirements. The reference section
                remains open from 8:00 a.m. to 8:00 p.m. from Monday to
                Saturday. Special Arrangements are made to keep the reference
                section open during the examination. The number of The books
                available are sufficient to cater to the needs of students and
                faculties.
              </p>

              {/* Library Resources as Cards */}
              <div className="mt-4">
                <h4 className="font-semibold mb-3 text-blue-900 text-base">
                  Library Resources Highlights
                </h4>
                <div className="space-y-3">
                  {libraryResources.map((resource, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3 rounded-lg shadow-sm border border-gray-200"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 pr-2">
                          <p className="text-xs font-medium text-gray-600 mb-1">
                            {resource.item}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                            {resource.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Central Library Section */}
            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border-l-4 border-blue-900">
              <div className="flex items-center mb-3">
                <div className="bg-[#0d173b] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </div>
                <h3 className="font-bold text-lg text-blue-900">
                  Central Library
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                The institute has a well equipped state-of-the-art Central
                Library, named as Tagore Library. This four-storied mammoth
                structure, housing over 64,000 books, subscription to 150
                Journals and other reading materials; is a place of attraction
                not only for the students but also for the academia of the
                state. The library is fully air-conditioned and is well equipped
                to facilitate students, faculties and staff to learn.
              </p>
            </div>

            {/* Book Bank Section */}
            <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border-l-4 border-blue-900">
              <div className="flex items-center mb-3">
                <div className="bg-[#0d173b] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </div>
                <h3 className="font-bold text-lg text-blue-900">
                  Book Bank Facilities
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 mb-2">
                The library provides Book-Bank facility to all the students,
                under which each student gets all the text books for the
                semester studies. This reduces financial burden on the parents.
                Apart from this, the students can also borrow other books for
                studies. The library remains open from 8:00 am to 8:00 pm.
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                The Library has a collection of over 64,000 books including more
                than 45,500 technical books besides magazines and journals.
              </p>
            </div>
          </div>
        </div>

        {/* Key Facilities Section */}
        <div className="mb-6 sm:mb-8 bg-white rounded-lg shadow p-4 sm:p-6">
          <div className="flex items-center mb-3 sm:mb-4">
            <FileText className="text-blue-900 mr-2 flex-shrink-0" size={20} />
            <h2 className="text-base sm:text-xl font-bold text-blue-900">
              Key Facilities at Library Services:
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <ol className="list-decimal pl-4 sm:pl-6 space-y-1 sm:space-y-2">
              {[
                "Circulation Service",
                "e-Library Facility for Online Library Resources",
                "Rangnathan Reference Section",
                "Reference Services & Study Room Facility",
                "National Programme on Technology Enhanced Learning (NPTEL) Video Lectures",
                "ILL (Inter Library Loan & Document Delivery Services Through DELNET)",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="hover:bg-blue-50 p-2 rounded transition-colors text-xs sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ol>
            <ol
              className="list-decimal pl-4 sm:pl-6 space-y-1 sm:space-y-2"
              start={7}
            >
              {[
                "Reprographic Facility",
                "Print out Facility",
                "Scanning Facility",
                "Book Bank Facility",
                "WiFi Facility",
                "OPAC Search (Online Public Access Catalogue for Searching Library Resources)",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="hover:bg-blue-50 p-2 rounded transition-colors text-xs sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Bottom Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Library Hours */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center mb-3">
              <Clock className="text-blue-900 mr-2 flex-shrink-0" size={18} />
              <h2 className="text-base sm:text-lg font-bold text-blue-900">
                Library Timing
              </h2>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-2">
                <span className="font-medium text-sm">MONDAY TO FRIDAY</span>
                <span className="text-sm">08:00 A.M. TO 08:00 P.M.</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-medium text-sm">SATURDAY</span>
                <span className="text-sm">08:00 A.M. TO 03:00 P.M.</span>
              </div>
            </div>
          </div>

          {/* Library In-charge */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold text-blue-900 mb-3">
              Library In-charge
            </h2>
            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                <Users className="text-blue-900" size={18} />
              </div>
              <div>
                <p className="font-medium text-sm sm:text-base">
                  Mr. P D Manikpur
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Librarian: 7000859876
                </p>
                <p className="text-xs sm:text-sm text-blue-600 break-all">
                  Email: library@csitdurg.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
