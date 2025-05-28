import React from 'react';

export default function NPTELPage() {
  const examinationResults = [
    { year: '2016', gold: '01', elite: '21', silver: '08', completed: '35', topper: '01', ranking: '52' },
    { year: '2017', gold: '01', elite: '61', silver: '21', completed: '86', topper: '05', ranking: '91' },
    { year: '2018', gold: '01', elite: '85', silver: '16', completed: '73', topper: '02', ranking: '99' },
    { year: '2019', gold: '--', elite: '18', silver: '05', completed: '16', topper: '01', ranking: '--' },
    { year: '2020', gold: '--', elite: '03', silver: '--', completed: '25', topper: '01', ranking: '--' },
    { year: '2021', gold: '--', elite: '02', silver: '--', completed: '01', topper: '01', ranking: '--' },
    { year: '2022', gold: '01', elite: '02', silver: '--', completed: '01', topper: '01', ranking: '--' },
    { year: '2023', gold: '--', elite: '01', silver: '--', completed: '04', topper: '01', ranking: '--' }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#0d173b] text-white p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">NPTEL</h1>
            <p className="text-sm md:text-base mt-1">CSIT | LOCAL CHAPTER</p>
            <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
          </div>
        </div>
        
        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          {/* About NPTEL Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">About NPTEL</h2>
            
            <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 mb-6">
              <p className="text-gray-700">
                The National Programme on Technology Enhanced Learning (NPTEL), a project funded by the Ministry of Human Resource Development (MHRD), provides e-learning through online Web and Video courses in Engineering, Sciences, Technology, Management and Humanities. This is a joint initiative by seven IITs and IISc Bangalore. Other selected premier institutions also act as Associate Partner Institutions.
              </p>
            </div>
            
            <p className="text-gray-700 mb-3">
              NPTEL has been offering self-study courses across engineering, humanities and science streams for more than a decade. These are available at: <a href="http://nptel.ac.in" className="text-blue-600 hover:underline">http://nptel.ac.in</a>
            </p>
            
            <p className="text-gray-700 mb-6">
              From March 2014 NPTEL has been offering online certification for its courses, the highlight being the certification exam through which the student gets an opportunity to earn a certificate from the IITs. These are available at: <a href="https://onlinecourses.nptel.ac.in" className="text-blue-600 hover:underline">https://onlinecourses.nptel.ac.in</a>
            </p>
          </section>

          {/* Benefits of NPTEL Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Benefits of NPTEL online certification courses:</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Quality Content:</h3>
                <p className="text-gray-700 text-sm">
                  NPTEL courses are developed by experienced professors and experts from renowned institutions. The content is well researched, up to date, and aligned with industry standards, ensuring high quality education.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Diverse Course Selection:</h3>
                <p className="text-gray-700 text-sm">
                  NPTEL offers courses in various disciplines, including engineering, science, management, humanities, and more. Learners have access to a wide range of topics and can choose courses based on their interests and career goals.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Flexibility and Convenience:</h3>
                <p className="text-gray-700 text-sm">
                  NPTEL courses are delivered entirely online, allowing learners to study at their own pace and convenience. There are no strict deadlines, and learners can access course materials at any time, making it suitable for working professionals or those with busy schedules.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Interactive Learning Experience:</h3>
                <p className="text-gray-700 text-sm">
                  NPTEL courses often include video lectures, quizzes, assignments, and discussion forums to enhance the learning experience. Learners can interact with instructors, ask questions, and collaborate with fellow participants, fostering a sense of community and engagement.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Industry Recognition:</h3>
                <p className="text-gray-700 text-sm">
                  NPTEL courses are highly regarded and recognized by industries and employers in India. The certifications earned through NPTEL courses can boost a learners resume and demonstrate their commitment to continuous learning and professional development.
                </p>
              </div>
              
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Cost-Effective:</h3>
                <p className="text-gray-700 text-sm">
                  NPTEL courses are typically offered free of charge, allowing learners to access high-quality education without any financial burden. However, learners can also opt for a certification exam at a nominal fee to earn a verified certificate, which adds further value.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Continuous Learning Opportunities:</h3>
                <p className="text-gray-700 text-sm">
                  NPTEL offers courses throughout the year, allowing learners to continuously upgrade their skills and knowledge. Learners can choose from a vast library of courses and explore new subjects, making NPTEL a platform for lifelong learning.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Preparatory Material for Competitive Exams:</h3>
                <p className="text-gray-700 text-sm">
                  Many NPTEL courses cover topics that are relevant to competitive exams in India, such as GATE (Graduate Aptitude Test in Engineering) and other entrance exams. NPTEL courses can serve as excellent preparatory material for such exams, helping learners enhance their chances of success.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400">
              <p className="text-gray-700">
                Overall, NPTEL online certification courses provide accessible, high quality education, flexible learning options, industry recognition, and opportunities for continuous skill development, making them beneficial for learners seeking to upgrade their knowledge and advance their careers.
              </p>
            </div>
          </section>

          {/* CSIT Local Chapter Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">CSIT Local Chapter</h2>
            
            <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 mb-6">
              <p className="text-gray-700">
                With the local chapter opening at CSIT, Durg (Jan-2016), the initiative of offering self study courses to the students as well as the Faculties of the institute, is taken forward. NPTEL have the faculty member of CSIT as single point of contact (SPOC) and keep students updated about all the latest NPTEL initiatives, thereby disseminating the knowledge amongst the students.
              </p>
            </div>
            
            <p className="text-gray-700 mb-6">
              NPTEL also offer the students of CSIT online certification courses where the student gets an opportunity to earn a certificate from the IITs.
            </p>
          </section>

          {/* Examination Results Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Overall NPTEL Examination Result:</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 border text-left">Course registration year wise</th>
                    <th className="py-3 px-4 border text-center">Gold</th>
                    <th className="py-3 px-4 border text-center">Elite</th>
                    <th className="py-3 px-4 border text-center">Silver</th>
                    <th className="py-3 px-4 border text-center">Successfully completed</th>
                    <th className="py-3 px-4 border text-center">Topper</th>
                    <th className="py-3 px-4 border text-center">College Ranking</th>
                  </tr>
                </thead>
                <tbody>
                  {examinationResults.map((result, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-4 border text-center">{result.year}</td>
                      <td className="py-2 px-4 border text-center">{result.gold}</td>
                      <td className="py-2 px-4 border text-center">{result.elite}</td>
                      <td className="py-2 px-4 border text-center">{result.silver}</td>
                      <td className="py-2 px-4 border text-center">{result.completed}</td>
                      <td className="py-2 px-4 border text-center">{result.topper}</td>
                      <td className="py-2 px-4 border text-center">{result.ranking}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Faculty and Quick Links Section */}
          <section>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Faculty Coordinators:</h3>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-gray-700">
                    <strong>Mr. Deepak Sharma</strong><br />
                    Phone No: +91 8109595204<br />
                    Email ID: deepaksharma@csitdurg.in
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Quick Links:</h3>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                  <div className="space-y-2">
                    <p><a href="https://swayam.gov.in/About" target='_blank' className="text-blue-600 hover:underline">About SWAYAM Click Here</a></p>
                    <p><a href="https://nptel.ac.in/" target='_blank' className="text-blue-600 hover:underline">Know about NPTEL Click Here</a></p>
                    <p><a href="https://onlinecourses.nptel.ac.in/explorer" target='_blank' className="text-blue-600 hover:underline">Register enroll for online certification courses Click Here</a></p>
                    <p><a href="https://nptel.ac.in/LocalChapter/swayam/AICTE%20Credit%20Notification.pdf" target='_blank' className="text-blue-600 hover:underline">AICTE credit guidelines for NPTEL Online Courses Click Here</a></p>
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