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
              About CSIT
            </h2>
            <p className="text-gray-200 text-sm md:mt-6">
             Engineering Excellence Since 1999
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
                  Global Competitiveness
                </span>{" "}
               has become the hallmark of leading technical institutions. In today's rapidly evolving world, driven by science, technology, and innovation, engineers must possess strong technical knowledge, practical skills, creativity, and a global outlook.
              </p>

              <p className="mb-4">
            <strong>
            Chhatrapati Shivaji Institute of Technology (CSIT), Durg { " "}
              </strong>              
            is one of the premier engineering institutions in Chhattisgarh. Established in <strong>1999,</strong>  the institute is <stronng>AICTE approved, ISO 9001:2015 Certified,  </stronng>  and affiliated with 
            <strong>
            {" "} Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai.
            </strong>
              </p>
              <p className="mb-4">
                For more than two decades, CSIT has consistently progressed through academic excellence, industry-oriented education, research, innovation, and holistic student development. The institute continues to strengthen its academic ecosystem by integrating modern technologies, experiential learning, and professional skill development.
                </p>
 
            <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#0d173b] mb-4">
                Location
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The institute is situated on Durg–Balod, Dallirajhara Road at
                Shivaji Nagar near Kolihapuri, District Durg, Chhattisgarh. It
                is approximately 4 km from the Collectorate and 6 km from Durg
                Railway Station. The serene surroundings offer a peaceful
                academic atmosphere away from city congestion, while still
                remaining easily accessible.
              </p>
              <div className="text-gray-700 leading-relaxed mb-4">
                <p className="font-medium mb-2">The campus is well connected by:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Air:</strong> Swami Vivekananda Airport, about 45 km
                    away
                  </li>
                  <li>
                    <strong>Rail:</strong> Durg Junction railway station, about
                    6 km away
                  </li>
                  <li>
                    <strong>Road:</strong> Durg Bus Stand, about 4 km from the
                    institute.
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                This balance of connectivity and calm surroundings makes it an
                ideal setting for focused learning.
              </p>
            </div>
        </div>
      </div>

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

         <div className="mt-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#0d173b] mb-4">
                Our Philosophy
              </h3>

              <p className="text-gray-700 leading-relaxed">
                CSIT believes that education should bridge the gap between knowledge
                and its practical application. The institute nurtures competent
                professionals who combine technical expertise with ethical values,
                innovation, leadership, and social responsibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A student-centric learning environment, experienced faculty, and continuous interaction with industry create an atmosphere where students are encouraged to think critically, solve real-world problems, and become future-ready engineers.
              </p>
            </div>


          {/* <p className="mb-4">
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

          {/* Quote section 
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
          </p> */}

       <div className="mt-10">
  <h3 className="text-2xl font-semibold text-[#0d173b] mb-3">
    Preparing Engineers for Tomorrow
  </h3>

  <p className="text-gray-600 mb-6">
    The engineering profession is evolving rapidly with advancements in
    Artificial Intelligence, Automation, Industry 4.0, Data Science,
    Robotics, Sustainable Technologies, and Digital Transformation.
  </p>

  <div className="grid md:grid-cols-2 gap-3">
    {[
      "Develop strong technical and analytical skills",
      "Build innovation and problem-solving capabilities",
      "Gain hands-on industry exposure",
      "Learn through projects, internships, and research",
      "Develop leadership and entrepreneurial abilities",
      "Compete confidently in the global engineering landscape",
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-3 p-4 border rounded-lg"
      >
        <span className="text-green-600 text-lg">✓</span>
        <span className="text-gray-700">{item}</span>
      </div>
    ))}
  </div>
</div>

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


          <div className="mt-12 border-l-4 border-[#0d173b] bg-gray-50 p-6 rounded-r-lg">
  <h3 className="text-2xl font-semibold text-[#0d173b] mb-3">
    Our Commitment
  </h3>

  <p className="text-gray-700 leading-relaxed">
    At CSIT, we are committed to creating future-ready engineers who
    possess technical competence, innovative thinking, ethical values,
    and the confidence to excel in a globally competitive environment.
  </p>

  <p className="mt-4 font-semibold text-[#0d173b]">
    CSIT – Engineering Excellence, Innovation & Career Success.
  </p>
</div>

          {/* Programs Section */}
          {/* <div className="my-8">
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
          </div> */}
        </div>
    
  );
}
