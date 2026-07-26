import React from 'react';
import NPTELimg from "../../../assets/NPTEL/NPTEL_Congrats_image.webp";

export default function NPTEL() {
  const nptelInitiatives = [
    "Laboratory workshops: These are proposed for learners who complete theory courses with NPTEL for them to get an idea of the hands-on lab experiments in the same area. These will be in person at the institutes most times unless the workshop can be conducted online (like programming-based workshop, etc).",
    "Soft Skills Workshops for improving employability: NPTEL is now offering 3/7/14 day soft skill training for NPTEL certified learners and students of NPTEL local chapters to face interviews. The training includes group discussion, 1-1 mock interviews, resume evaluation, etc.",
    "GATE preparation portal: NPTEL is developing a subsite to help students prepare for GATE exams based on NPTEL courses. This will include detailed video solutions to questions in previous GATE papers, mock tests for learners and maybe live sessions for learners with experts who can help clarify doubts.",
    "Support to attend technical conferences: NPTEL will sponsor the cost of travel and conference registration fees for Coordinators of different Local Chapters (colleges who partner with NPTEL), if the required conditions are met. This will help them upgrade and be abreast of the latest developments in the field which will benefit the students they are teaching.",
    "Maintenance of SWAYAM portal: NPTEL maintains SWAYAM portal with the help of Persistent Systems as Application Service Provider. We keep adding new features based on requests from different national Coordinators.",
    "NPTEL portal for Self-paced certification and Short term training: NPTEL is coming out with a portal that will host popular courses offered to learners for certification in a self-paced mode. Short term training programs from various institutes will also be hosted here for learners to register to. These programs will all be on payment basis.",
    "Translation of English Transcripts of NPTEL Videos: Translation of the English transcripts of NPTEL video courses are being carried out in 11 regional languages. The goal is to help the students coming from local language schooling understand NPTEL course content better.",
    "NPTEL Stars: NPTEL also has implemented more modes of recognition for learners who have excelled in various ways."
  ];

  const nptelStars = [
    "NPTEL DOMAIN SCHOLARS",
    "NPTEL SUPERSTARS",
    "NPTEL EVANGELISTS",
    "NPTEL MOTIVATED LEARNERS",
    "NPTEL ENTHUSIASTS",
    "NPTEL DISCIPLINE STARS",
    "NPTEL BELIEVERS"
  ];

  const benefits = [
    "Free Access to Quality Education – Learn from courses developed by expert faculty from IITs and other prestigious institutions at no cost.",
    "Flexible Learning – Study anytime and anywhere at your own pace through online resources.",
    "Industry-Relevant Skills – Gain practical knowledge and skills aligned with current academic and industry requirements.",
    "Wide Range of Courses – Choose from diverse disciplines including engineering, science, management, humanities, and emerging technologies.",
    "Certification Opportunities – Earn recognized certificates by successfully completing courses and examinations.",
    "Career Advancement – Enhance your resume, improve employability, and strengthen professional competencies.",
    "Self-Paced and Structured Learning – Benefit from a balanced approach that combines flexibility with guided course schedules.",
    "Accessible to All – Provides learning opportunities to students, professionals, and lifelong learners regardless of location.",
    "Interactive Learning Experience – Engage with assignments, quizzes, discussion forums, and peer learning communities.",
    "Enhanced Recruitment Opportunities – Organizations can identify and recruit from a pool of certified candidates who possess specialized knowledge and industry-relevant skills, helping bridge the gap between education and employment."
  ];

  const starPerformers2025_26 = [
    { name: "NISHKARSH VERMA", star: "NPTEL DISCIPLINE STARS", timeline: "Jan-Apr 2026" },
    { name: "NISHKARSH VERMA", star: "NPTEL BELIEVERS", timeline: "Jan-Apr 2026" },
    { name: "NISHKARSH VERMA", star: "NPTEL DOMAIN SCHOLARS", timeline: "Jan-Apr 2026" },
    { name: "NISHKARSH VERMA", star: "NPTEL BELIEVERS", timeline: "Jul-Dec 2025" },
    { name: "NISHKARSH VERMA", star: "NPTEL MOTIVATED LEARNERS", timeline: "Jul-Dec 2025" }
  ];

  const starPerformers2024_25 = [
    { name: "NISHKARSH VERMA", star: "NPTEL DISCIPLINE STARS", timeline: "Jan-Apr 2025" }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">NPTEL</h1>
          <p className="text-sm md:text-base mt-1 text-blue-100">
            National Programme on Technology Enhanced Learning
          </p>
          <p className="text-sm md:text-base text-blue-200 mt-2">
            CSIT | NPTEL Local Chapter
          </p>
          <hr className="w-16 border-t-2 border-white mt-3 mb-0" />
        </div>
      </div>

      {/* About SWAYAM */}
      <div className="p-5 md:p-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">About SWAYAM</h3>
          <p className="text-gray-700 text-sm md:text-base">
            SWAYAM is a flagship initiative of the Government of India aimed at making quality education accessible to all learners. Built on the principles of access, equity, and excellence, the platform offers a wide range of online courses developed by leading educational institutions and expert educators. It enables students, professionals, and lifelong learners to access high-quality learning resources regardless of their location or background.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-3">
            By leveraging digital technology, SWAYAM helps bridge educational gaps and extends learning opportunities to underserved and remote communities. The platform empowers learners with flexible, affordable, and inclusive education, fostering skill development, academic growth, and greater participation in the knowledge-driven economy.
          </p>
        </div>
      </div>

      {/* About NPTEL */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">About NPTEL</h3>
          <p className="text-gray-700 text-sm md:text-base">
            NPTEL (National Programme on Technology Enhanced Learning) is an initiative by the premier Indian institutions, including the Indian Institutes of Technology (IITs) and the Indian Institute of Science (IISc), supported by the Ministry of Education (MoE), Government of India. Launched in 2003, NPTEL was established with the vision of providing high-quality educational resources to learners across the country through online learning.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-3">
            Over the years, NPTEL has grown into one of India's largest online learning platforms, offering <strong>600+ certification courses</strong> each semester across a wide range of disciplines, including engineering, science, management, humanities, and interdisciplinary subjects. Through its accessible and affordable programs, NPTEL continues to promote lifelong learning and skill development for students, professionals, and educators nationwide.
          </p>
        </div>
      </div>

      {/* NPTEL Initiative */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">NPTEL Initiative</h3>
          <p className="text-gray-700 text-sm md:text-base mb-4">
            NPTEL is a transformative online learning platform dedicated to making world-class education accessible to everyone. Through its Massive Open Online Courses (MOOC) model, it delivers expertly curated courses featuring engaging video lectures, comprehensive learning resources, assignments, and assessments developed by faculty from the IITs and other premier institutions. The platform combines academic excellence with flexibility, enabling learners to pursue high-quality education at their own pace.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            By removing geographical and financial barriers, NPTEL empowers students, professionals, and lifelong learners to expand their knowledge and enhance their skills from anywhere. Its commitment to inclusive and accessible education helps create meaningful learning opportunities for diverse communities, fostering personal growth, professional development, and lifelong learning.
          </p>
        </div>
      </div>

      {/* NPTEL Initiatives List */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">NPTEL Initiatives</h3>
          <ul className="space-y-3">
            {nptelInitiatives.map((item, index) => (
              <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span className="text-[#0d173b] text-lg mr-3">✦</span>
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* NPTEL Stars */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">NPTEL Stars</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {nptelStars.map((star, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                <span className="text-sm font-medium text-gray-700">{star}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits of NPTEL */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Benefits of NPTEL</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span className="text-emerald-500 text-lg mr-2">✓</span>
                <span className="text-sm text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* NPTEL @ CSIT Campus */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">NPTEL @ CSIT Campus</h3>
          <p className="text-gray-700 text-sm md:text-base">
            At CSIT, we believe that quality education extends beyond the classroom. Through NPTEL, students gain access to expert-led courses from premier institutions, enabling them to develop advanced skills, earn prestigious certifications, and prepare for successful careers in academia and industry.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-3">
            NPTEL courses have been accessible to CSIT students through the NPTEL Local Chapter initiative, promoting continuous learning and skill enhancement through courses offered by IITs and IISc. Since its inception, the CSIT NPTEL Local Chapter has encouraged students to pursue industry-relevant and emerging technology courses, enabling them to gain valuable certifications and strengthen their academic and professional competencies. To date, CSIT students have achieved <strong>500+ course registrations</strong> and earned <strong>370+ Elite, Elite + Silver, and Elite + Gold certifications</strong>, reflecting their commitment to excellence in online learning. Through regular awareness programs, faculty mentorship, and academic support, CSIT continues to foster a strong learning ecosystem that empowers students to achieve success in a rapidly evolving technological landscape.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-2xl font-bold text-[#0d173b]">2016</p>
              <p className="text-sm text-gray-600">NPTEL Local Chapter Started</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-2xl font-bold text-[#0d173b]">500+</p>
              <p className="text-sm text-gray-600">Total Enrollments</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-2xl font-bold text-[#0d173b]">370+</p>
              <p className="text-sm text-gray-600">Elite/Gold/Silver Certifications</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Institutional Honour with Image - USING IMPORTED IMAGE */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3 flex items-center gap-2">
            <span className="text-2xl">🏆</span> INSTITUTIONAL HONOUR
          </h3>
          
          {/* ✅ Image using imported variable */}
          <div className="flex justify-center mb-4">
            <img 
              src={NPTELimg} 
              alt="NPTEL Congratulations" 
              className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
              onError={(e) => {
                e.target.onerror = null;
                e.target.alt = "NPTEL Congratulations Image";
              }}
            />
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-100 text-center">
            <p className="text-2xl font-bold text-[#0d173b]">NPTEL Local Chapter Rating: A</p>
          </div>
        </div>
      </div>

      {/* Individual Star Performers */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">INDIVIDUAL STAR PERFORMERS</h3>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
            <p className="text-gray-700 text-sm md:text-base">
              <strong>Nishkarsh Verma</strong> has emerged as one of our most distinguished NPTEL achievers, earning multiple prestigious NPTEL Star recognitions, including <strong>Discipline Star, Domain Scholar, Believer, and Motivated Learner</strong> across consecutive academic sessions. Demonstrating exceptional academic performance, he has secured <strong>Top 5%</strong> ranks in numerous NPTEL courses and has been awarded multiple Elite, Elite + Silver, and Elite + Gold certifications. His consistent achievements reflect an unwavering commitment to self-learning, technical excellence, and academic distinction, placing him among the institute's finest NPTEL performers.
            </p>
          </div>
        </div>
      </div>

      {/* Student NPTEL Star Session 2025-2026 */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">STUDENT NPTEL STAR SESSION 2025-2026</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-[#0d173b]">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">S.No</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Star</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {starPerformers2025_26.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}>
                    <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">{item.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                        {item.star}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">{item.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Student NPTEL Star Session 2024-2025 */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">STUDENT NPTEL STAR SESSION 2024-2025</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-[#0d173b]">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">S.No</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Star</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-white uppercase tracking-wider">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {starPerformers2024_25.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}>
                    <td className="py-3 px-4 text-sm text-gray-700">{index + 1}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">{item.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                        {item.star}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">{item.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* About Our Local Chapter */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">About Our Local Chapter</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-2xl font-bold text-[#0d173b]">2016</p>
              <p className="text-sm text-gray-600">Established</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-sm font-medium text-[#0d173b]">SPOC</p>
              <p className="text-sm text-gray-600">Mr. Reetesh Kumar Sharma</p>
              <p className="text-xs text-gray-500">(Associate Professor, CSE)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
              <p className="text-sm font-medium text-[#0d173b]">Local Chapter ID</p>
              <p className="text-2xl font-bold text-[#0d173b]">337</p>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Coordinator */}
      <div className="px-5 md:px-6 mb-6">
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">Faculty Coordinator</h3>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-700 text-sm md:text-base">
              <strong>Mr. Reetesh Kumar Sharma</strong> (Associate Professor CSE)
            </p>
            <p className="text-blue-600 text-sm mt-1">
              ✉️ reeteshsharma@csitdurg.in
            </p>
          </div>
        </div>
      </div>

      {/* Important Links */}
      <div className="px-5 md:px-6 pb-6">
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <span className="text-sm font-medium text-gray-700">Main NPTEL Portal:</span>
              <a href="#" className="text-sm text-blue-600 hover:underline ml-2">
                View course catalogs, access video hours, and enroll via the SWAYAM NPTEL Course Page.
              </a>
            </li>
            <li className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <span className="text-sm font-medium text-gray-700">SWAYAM Central:</span>
              <a href="#" className="text-sm text-blue-600 hover:underline ml-2">
                Access the full repository of national courses at SWAYAM Official.
              </a>
            </li>
            <li className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <span className="text-sm font-medium text-gray-700">GATE preparation portal:</span>
              <a href="https://gate.nptel.ac.in/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline ml-2">
                https://gate.nptel.ac.in/
              </a>
            </li>
            <li className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <span className="text-sm font-medium text-gray-700">FAQ & Passing Criteria:</span>
              <span className="text-sm text-gray-600 ml-2">
                Check scoring rubrics and certification guidelines on the NPTEL FAQ.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}