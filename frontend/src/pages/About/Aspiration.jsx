import React from "react";

const Aspiration = () => {
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
              Aspiration
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Vison, Mission & Core Values
            </p>
            <div className="h-0.5 w-12 bg-white mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Vision Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Our Vision
            </h3>
            <p>
              To Nurture world-class Intellectual growth by Imparting High
              Quality, Futuristic Technical Education to Emerge as one of the
              Best Technical institutes to serve mankind.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Our Mission
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Creating inspiring environment which suits Innovations, Research
                and Creativity.
              </li>
              <li>
                Providing Quality Technical Education with Global standards.
              </li>
              <li>
                Accomplishing National Centre of Excellence in Collaboration
                with Industry.
              </li>
              <li>
                Establishing International Alliances and Collaborations with
                Foreign Universities to achieve Global Excellence.
              </li>
            </ul>
          </div>

          {/* Core Values Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Core Values
            </h3>
            <p className="mb-4">
              We focus on Continual Improvement in Scope with Rapid Technical
              Growth in the national and International markets. Professionals
              broad Vision, Global Perspectives and Environmental changes
              Management.
            </p>
            <p className="mb-4">
              We also keep upgrading the existing Lab Facilities with Latest
              Modern Equipment. We exposure our Students to most Advanced
              Technologies through Frequent Industrial Visits, Seminars,
              Workshops and Group Discussions under Guidance of Eminent
              Personalities of varied respective spheres & fields.
            </p>
            <p>We conduct Teachers Competency Mapping and Training.</p>
          </div>

          {/* Quality Policy Section */}
          <div className="mb-4">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Our Quality Policy
            </h3>
            <p>
              To provide all Rounded Skilful and Suave Engineering Graduates
              with Intellect and Knowledge along with Positive Outlook and
              Savvy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aspiration;
