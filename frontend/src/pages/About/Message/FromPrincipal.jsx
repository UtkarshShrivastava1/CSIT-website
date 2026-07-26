import React from "react";
import academicImage from "../../../assets/principal(academic).webp";
const FromAcademic = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Hero Section - Made smaller with the specified colors */}
      <div className="h-40 md:h-48 bg-gradient-to-r from-[#0d173b] to-[#1e305f] flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-30 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white z-10 text-center">
          Message From Principal
        </h1>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10 bg-gradient-to-b from-white to-gray-50">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Chairman Photo */}
          <div className="w-full md:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={academicImage} // Replace with actual path
                alt="Chairman"
                className="w-full object-cover object-top rounded-lg border border-gray-200"
              />
              <div className="text-center mt-4">
                <p className="font-semibold text-lg text-[#0d173b]">
                  Dr. Ravi Mishra{" "}
                </p>
                <p className="text-sm text-gray-600">
                  Principal[Academic], CSIT
                </p>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="w-full md:w-2/3 text-justify text-gray-800 text-[15px] leading-relaxed space-y-4">
            <p>
              It gives us immense satisfaction to share that Chhatrapati Shivaji Institute of Technology, Durg has been delivering quality engineering education since its inception. Over the years, the institute has earned a strong reputation across Central India for its academic standards and vibrant co-curricular culture, both focused on the complete development of students.
            </p>
            <p>
              Spread over a vast green campus, the institute offers a peaceful and academically rich environment. Modern infrastructure, well-equipped laboratories, and a dedicated team of experienced faculty together create the kind of atmosphere that engineering education truly demands.
            </p>
            <p>
             At CSIT, we believe that education is a shared responsibility between committed teachers, motivated students, and supportive parents who expect the best. The learning environment here is engaging and experiential. Students are encouraged to participate actively in academics as well as extracurricular activities. Equal importance is given to teamwork, critical thinking, leadership, and emotional resilience so that students are fully prepared for professional life.
            </p>
            <p>
             The modern industrial world looks for dynamic individuals with innovative thinking. CSIT keeps students closely connected to innovation through technical events, workshops, competitions, and hands-on projects. Each semester is thoughtfully structured with academic, technical, cultural, and sports activities that build confidence and competence. Our students have consistently excelled in national-level competitions in robotics, automobile engineering, computing, programming, and sports.
            </p>
            <p>
            Placement remains a key priority. Along with organizing a strong lineup of campus recruitment drives, the institute conducts training programs, finishing schools, and seminars to prepare students for industry expectations. This structured approach ensures they are career-ready.
            </p>
            <p>
            Our visionary management, committed faculty, and supportive academic staff form the foundation of our success. Student achievement remains our primary focus, and we dedicate our full energy to creating an environment where learning becomes meaningful and memorable.
            </p>
            <p className="font-semibold text-[#0d173b]">
              I warmly welcome you to CSIT to experience this pursuit of excellence firsthand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromAcademic;
