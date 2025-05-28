import React from "react";
import chairmanImage from "../../../assets/chairman.png";
const FromChairman = () => {
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
          Message From Chairman
        </h1>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10 bg-gradient-to-b from-white to-gray-50">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Chairman Photo */}
          <div className="w-full md:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={chairmanImage} // Replace with actual path
                alt="Chairman"
                className="w-full object-cover object-top rounded-lg border border-gray-200"
              />
              <div className="text-center mt-4">
                <p className="font-semibold text-lg text-[#0d173b]">
                  Er. Ajay Prakash Verma
                </p>
                <p className="text-sm text-gray-600">Chairman, CSIT</p>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="w-full md:w-2/3 text-justify text-gray-800 text-[15px] leading-relaxed space-y-4">
            <p>
              CSIT aims at providing a distinctive combination of academic
              supremacy and professional relevance. Such a combination is
              designed to provide a stable foundation for a lifetime
              professional and Personal Development.
            </p>
            <p>
              Apart from laying steady professional foundation, the institute
              provides the right ambience to attain excellence in education
              through appropriate infra structural facilities, combined with
              well qualified and experienced faculty, well established Library
              and State of the Art Laboratories.
            </p>
            <p>
              To carry forward the flag of growth and prosperity of Science and
              Technology, essentially requires skilled, brilliant and
              technically sound Engineers. Such personalities can only be
              groomed in an Educational Institution having appropriate standard
              and facilities. With such a noble Vision in heart, CSIT has been
              dedicated towards providing Quality Education in every possible
              way.
            </p>
            <p>
              We are working hard to import more expertise and innovation to
              meet the expectations and technical needs of our students so that
              they prosper professionally amidst ruthless competition. Our
              institute is one of the leading institutes which has taken a leap
              forward in Quality Technical Education.
            </p>
            <p>
              CSIT has a proud history spanning over 22 glorious years and has
              created many milestones with each passing year. It is a premier
              Educational Institute in the region. The biggest Testimony of
              CSIT's rapid progress is the impressive list of Entrepreneurs,
              Civil Servants and Startups. Reputed companies choosing to
              participate in Placement Drives year after year.
            </p>
            <p>
              CSIT is well committed towards Nation building. Its vision and
              dedication is strongly backed by dedicated faculty and staff, who
              are continuously striving to contribute in the growth of the
              institute and to shape up the career of Budding Technocrats.
            </p>
            <p>
              CSIT is again Empowering students to become intellectually sound,
              upright in values, virtuous and socially concerned to contribute
              as future leaders of the Nation by fulfilling their academic
              passions through liberal education and spiritual zeal.
            </p>
            <p className="font-semibold text-[#0d173b]">
              I extend my Heartiest Welcome to all at CSIT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromChairman;
