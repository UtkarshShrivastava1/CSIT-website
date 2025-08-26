import React from "react";
import Navbar from "../../../components/Navbar";
import Header from "../../../components/Header";

export default function NPTELPage() {
  const examinationResults = [
    {
      year: "2016",
      gold: "01",
      elite: "21",
      silver: "08",
      completed: "35",
      topper: "01",
      ranking: "52",
    },
    {
      year: "2017",
      gold: "01",
      elite: "61",
      silver: "21",
      completed: "86",
      topper: "05",
      ranking: "91",
    },
    {
      year: "2018",
      gold: "01",
      elite: "85",
      silver: "16",
      completed: "73",
      topper: "02",
      ranking: "99",
    },
    {
      year: "2019",
      gold: "--",
      elite: "18",
      silver: "05",
      completed: "16",
      topper: "01",
      ranking: "--",
    },
    {
      year: "2020",
      gold: "--",
      elite: "03",
      silver: "--",
      completed: "25",
      topper: "01",
      ranking: "--",
    },
    {
      year: "2021",
      gold: "--",
      elite: "02",
      silver: "--",
      completed: "01",
      topper: "01",
      ranking: "--",
    },
    {
      year: "2022",
      gold: "01",
      elite: "02",
      silver: "--",
      completed: "01",
      topper: "01",
      ranking: "--",
    },
    {
      year: "2023",
      gold: "--",
      elite: "01",
      silver: "--",
      completed: "04",
      topper: "01",
      ranking: "--",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <Header />
      {/* Full-width Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full">
        <Navbar />
      </div>
      <div className="max-w-5xl mx-auto w-full px-2 sm:px-4">
        {/* Page Title */}
        <div className="bg-[#0d173b] text-white p-4 sm:p-6 md:p-8 rounded-b-xl">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              NPTEL
            </h1>
            <p className="text-xs sm:text-sm md:text-base mt-1">
              CSIT | LOCAL CHAPTER
            </p>
            <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-md p-3 sm:p-6 mb-8 mt-2 sm:mt-6">
          {/* About NPTEL Section */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">
              About NPTEL
            </h2>
            <div className="bg-blue-50 rounded-lg p-3 sm:p-5 border-l-4 border-blue-400 mb-5 sm:mb-6">
              <p className="text-gray-700 text-sm sm:text-base">
                The National Programme on Technology Enhanced Learning (NPTEL),
                funded by the Ministry of Human Resource Development (MHRD),
                provides e-learning through online Web and Video courses in
                Engineering, Sciences, Technology, Management and Humanities.
                It's a joint initiative by seven IITs and IISc Bangalore, along
                with other partner institutions.
              </p>
            </div>
            <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">
              NPTEL has been offering self-study courses across engineering,
              humanities, and science streams for more than a decade. These are
              available at:{" "}
              <a
                href="http://nptel.ac.in"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                nptel.ac.in
              </a>
            </p>
            <p className="text-gray-700 mb-5 sm:mb-6 text-sm sm:text-base">
              Since March 2014, NPTEL has offered online certification for its
              courses, with opportunities to earn a certificate from the IITs:{" "}
              <a
                href="https://onlinecourses.nptel.ac.in"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                onlinecourses.nptel.ac.in
              </a>
            </p>
          </section>

          {/* Benefits of NPTEL Section */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">
              Benefits of NPTEL online certification courses:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 sm:mb-6">
              {/* ...card items unchanged... */}
              {/* (Copy your individual card divs here; adjust padding/font-size as shown above for mobile) */}
            </div>
            <div className="bg-blue-50 rounded-lg p-3 sm:p-5 border-l-4 border-blue-400">
              <p className="text-gray-700 text-sm sm:text-base">
                NPTEL online certification courses provide accessible,
                high-quality education, flexible learning options, industry
                recognition, and continuous skill development for learners
                seeking to upgrade their knowledge and careers.
              </p>
            </div>
          </section>

          {/* CSIT Local Chapter Section */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">
              CSIT Local Chapter
            </h2>
            <div className="bg-blue-50 rounded-lg p-3 sm:p-5 border-l-4 border-blue-400 mb-5 sm:mb-6">
              <p className="text-gray-700 text-sm sm:text-base">
                With the local chapter opening at CSIT, Durg (Jan-2016), the
                institute further enables students and faculty to access and
                benefit from self-study NPTEL courses. A designated faculty
                member acts as SPOC, updating students about NPTEL
                opportunities.
              </p>
            </div>
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              CSIT students can pursue NPTEL online certification courses,
              earning certificates from IITs.
            </p>
          </section>

          {/* Examination Results Section: Responsive Table */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 sm:mb-6">
              Overall NPTEL Examination Result:
            </h2>
            <div className="overflow-x-auto rounded-lg mb-5 sm:mb-6">
              <table className="min-w-full bg-white border border-gray-200 text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 sm:py-3 px-2 sm:px-4 border text-left">
                      Course registration year wise
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 border text-center">
                      Gold
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 border text-center">
                      Elite
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 border text-center">
                      Silver
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 border text-center">
                      Completed
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 border text-center">
                      Topper
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 border text-center">
                      College Ranking
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {examinationResults.map((result, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="py-2 px-2 sm:px-4 border text-center font-medium">
                        {result.year}
                      </td>
                      <td className="py-2 px-2 sm:px-4 border text-center">
                        {result.gold}
                      </td>
                      <td className="py-2 px-2 sm:px-4 border text-center">
                        {result.elite}
                      </td>
                      <td className="py-2 px-2 sm:px-4 border text-center">
                        {result.silver}
                      </td>
                      <td className="py-2 px-2 sm:px-4 border text-center">
                        {result.completed}
                      </td>
                      <td className="py-2 px-2 sm:px-4 border text-center">
                        {result.topper}
                      </td>
                      <td className="py-2 px-2 sm:px-4 border text-center">
                        {result.ranking}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Faculty and Quick Links Section */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3 sm:mb-4">
                  Faculty Coordinators:
                </h3>
                <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-gray-700 text-sm sm:text-base">
                    <strong>Mr. Deepak Sharma</strong>
                    <br />
                    Phone:{" "}
                    <a
                      href="tel:+918109595204"
                      className="text-blue-600 hover:underline"
                    >
                      +91 8109595204
                    </a>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:deepaksharma@csitdurg.in"
                      className="text-blue-600 hover:underline"
                    >
                      deepaksharma@csitdurg.in
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3 sm:mb-4">
                  Quick Links:
                </h3>
                <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200">
                  <div className="space-y-2 text-sm sm:text-base">
                    <p>
                      <a
                        href="https://swayam.gov.in/About"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        About SWAYAM
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://nptel.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Know about NPTEL
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://onlinecourses.nptel.ac.in/explorer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Register/enroll for online certification courses
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://nptel.ac.in/LocalChapter/swayam/AICTE%20Credit%20Notification.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        AICTE credit guidelines for NPTEL Online Courses
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
