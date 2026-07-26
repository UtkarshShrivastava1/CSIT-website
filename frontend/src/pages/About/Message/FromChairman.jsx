import React from "react";
import chairmanImage from "../../../assets/chairman.webp";
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
               At CSGI, our goal is simple and clear. We strive to blend strong academics with real-world professional relevance. This balance gives our students a solid base not only for successful careers, but also for lifelong personal growth.
              </p>

              <p>
                Along with building technical competence, we focus on creating the right learning environment. Modern infrastructure, advanced laboratories, a well-stocked library, and experienced, dedicated faculty together ensure that our students receive the quality education they deserve.
              </p>

              <p>
                The progress of science and technology depends on skilled and capable
                engineers. Such professionals can only be shaped in institutions that
                maintain high standards and provide the right facilities. With this
                belief, CSGI has consistently worked to deliver quality technical
                education. We continue to introduce new expertise and innovation so
                that our students are well prepared to meet industry expectations and
                succeed in a competitive world.
              </p>

              <p>
                Over the past 22 years, CSGI has built a proud legacy. With each
                passing year, we have achieved new milestones and strengthened our
                position as one of the leading institutes in the region. Our alumni
                have gone on to become successful entrepreneurs, civil servants, and
                founders of promising start-ups. The continued participation of
                reputed companies in our placement drives reflects the trust they
                place in our students and our institution.
              </p>

              <p>
                We remain committed to nation building. Our vision is supported by a
                dedicated team of faculty and staff who work tirelessly to nurture
                young minds and guide them toward meaningful careers. We aim to
                develop not just technically sound professionals, but individuals who
                are principled, responsible, and socially aware, ready to contribute
                as future leaders.
              </p>

              <p className="font-semibold text-[#0d173b]">
                I warmly welcome you to CSGI and invite you to be a part of our
                journey toward excellence.
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

export default FromChairman;
