import React from "react";

export default function IntroductionPage() {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              About Us
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              Established in 1999 | ISO 9001-2015 Certified
            </p>
            <div className="h-0.5 w-12 bg-white mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Top content section */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="mb-4">
                <span className="text-lg font-medium text-[#0d173b]">
                  Global Competitive Spirit
                </span>{" "}
                is the trademark of all the technical institutes of the world,
                as globalisation has indeed arrived on the wings of Science and
                Technology and is here to stay. CSIT is the{" "}
                <strong className="text-[#0d173b]">
                  Best Engineering College in Chhattisgarh
                </strong>
                , an <strong>AICTE recognised ISO 9001-2015 Certified</strong>{" "}
                institute. It is affiliated to{" "}
                <strong>
                  Chhattisgarh Swami Vivekanand Technical University, Bhilai
                </strong>{" "}
                and was founded in the <strong>Year 1999</strong>.
              </p>
              <p className="mb-4">
                Since its inception, the college has progressed in leaps and
                bounds and is undergoing a continuous process of improvement in
                all aspects of curricular and extracurricular activities.
              </p>
            </div>
            <div className="md:w-1/3 bg-gray-50 rounded-md border border-gray-200 flex-shrink-0">
              <div className="p-6 text-center h-full flex flex-col justify-center">
                <div className="text-4xl font-bold mb-2 text-[#0d173b]">
                  CSIT
                </div>
                <div className="h-0.5 w-12 bg-[#0d173b] mx-auto my-2"></div>
                <p className="text-gray-500 italic">Engineering Excellence</p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="grid md:grid-cols-3 gap-4 my-8">
            {[
              "Excellence in Education",
              "Modern Infrastructure",
              "Industry Connections",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow transition-shadow duration-200"
              >
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-[#0d173b] rounded-full mr-2"></div>
                  <h3 className="font-medium text-[#0d173b]">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {index === 0 &&
                    "Providing high-quality technical education since 1999 with experienced faculty"}
                  {index === 1 &&
                    "State-of-the-art facilities with advanced laboratories and learning resources"}
                  {index === 2 &&
                    "Strong ties with industry partners for internships and placement opportunities"}
                </p>
              </div>
            ))}
          </div>

          <p className="mb-4">
            Unique in its structure, methods and goals, the college is strongly
            rooted in a philosophy of training and research that emphasizes the
            intimate relationship between knowledge and its application and
            seeks to promote the creation of an ideal society.{" "}
            <strong className="text-[#0d173b]">
              This is Best Engineering College in Chhattisgarh
            </strong>
            , as it provides a congenial atmosphere for diligent academic
            pursuits.
          </p>

          {/* Quote section */}
          <div className="my-6 border-l-4 border-[#0d173b] pl-4 py-1">
            <blockquote className="text-gray-600 italic text-base">
              To operate successfully in the world by facing Global Competition,
              Rapid Technological Advancement and Discriminating Consumerism,
              today's engineer needs broad vision with creative, global
              perspective and ability for Real Time Management of a Dynamic
              Scenario.
            </blockquote>
          </div>

          <p className="mb-4">
            To operate successfully in the world by facing Global Competition,
            Rapid Technological Advancement and Discriminating Consumerism,
            today's engineer needs broad vision with creative, global
            perspective/outlook & ability for Real Time Management of a Dynamic
            Scenario with increasing diversity. Our faculty employs creative
            methods to make studying an exciting experience.
          </p>

          {/* Statistics section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {[
              { value: "25+", label: "Years of Excellence" },
              { value: "50+", label: "Experienced Faculty" },
              { value: "95%", label: "Placement Rate" },
              { value: "10k+", label: "Alumni Network" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 text-center border border-gray-200 rounded-md"
              >
                <div className="text-2xl font-bold text-[#0d173b] mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Programs Section */}
          <div className="my-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-4">
              Our Programs
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "B.Tech in Computer Science Engineering",
                "B.Tech in Electrical Engineering",
                "B.Tech in Mechanical Engineering",
                "B.Tech in Civil Engineering",
              ].map((program, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gray-50 rounded-md"
                >
                  <div className="w-1 h-4 bg-[#0d173b] mr-3"></div>
                  <span className="text-gray-700">{program}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
