import React from "react";
import administratorImage from "../../../assets/directoradmin.webp";
const FromAdministrator = () => {
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
          Message From Director
        </h1>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10 bg-gradient-to-b from-white to-gray-50">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Chairman Photo */}
          <div className="w-full md:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={administratorImage} // Replace with actual path
                alt="Chairman"
                className="w-full object-cover object-top rounded-lg border border-gray-200"
              />
              <div className="text-center mt-4">
                <p className="font-semibold text-lg text-[#0d173b]">
                  Rajesh Deshmuk
                </p>
                <p className="text-sm text-gray-600">
                  Director[Administrator], CSIT
                </p>
              </div>
            </div>
          </div> 

          {/* Message Content */}
          <div className="w-full md:w-2/3 text-justify text-gray-800 text-[15px] leading-relaxed space-y-4">
            <p>
              CSGI stands as a respected centre of academic excellence in Chhattisgarh. Over the years, the institute has earned recognition across various sectors for its consistent contribution to education and society. Our students graduate with strong knowledge, confidence, and the determination to serve the nation with integrity and competence. We are committed to shaping young professionals who are ready to face challenges and make the most of every opportunity in their careers.
            </p>
            <p>
             At CSGI, we offer an academic environment that encourages both learning and practical growth. Our experienced faculty, advanced laboratories, and a well-stocked library with over fifty thousand books create a strong foundation for academic success. The campus, spread across 33 acres, offers a peaceful setting away from city distractions while remaining easily accessible through convenient transportation and close proximity to the city.
            </p>
            <p>
              We believe education goes beyond classrooms. Through a wide range of co-curricular and student-led activities, we help students develop leadership, teamwork, and managerial skills. These experiences prepare them to meet the evolving demands of a globalized world. At the same time, we ensure a safe and supportive social and physical environment where every student can grow with confidence
            </p>
            <p>
             It is my firm belief that every CSGI student carries forward the values and traditions learned during their time here. This brochure offers a glimpse into our efforts, achievements, and aspirations. I hope it serves as a helpful guide and provides meaningful insight into what CSGI stands for.
            </p>
            {/* <p className="font-semibold text-[#0d173b]">
              I extend my Heartiest Welcome to all at CSIT.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromAdministrator;
