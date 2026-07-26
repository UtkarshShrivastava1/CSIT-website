import React from "react";

const AboutAssociation = () => {
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
              Alumni Association
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Connecting past, present and future of CSIT
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Introduction */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            Chhatrapati Shivaji Institute of Technology regards its alumni as one of the college's most treasured assets — true ambassadors of our institution and living testimonials to the values we instill and the careers we help shape. Recognizing this, CSIT has established a vibrant Alumni Association that brings our graduates together under one common thread. Through alumni meets organized across various states of India, we cultivate meaningful connections and nurture a strong, enduring bond within our extended CSIT family.
          </p>
        </div>

        {/* Objectives */}
        <div className="mb-6">
          <h3 className="text-base font-semibold text-[#0d173b] mb-3">
            Our Objectives
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5">•</span>
              To bring our alumni together on a common forum, strengthening unity and shared pride
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5">•</span>
              To sustain meaningful, lasting contact between alumni and their alma mater
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5">•</span>
              To nurture a deep sense of tradition and heritage, carried forward through alumni engagement
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold mt-0.5">•</span>
              To draw upon alumni expertise and mentorship in fostering entrepreneurship and practical skill-building among students
            </li>
          </ul>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Strong Network</h4>
            <p className="text-sm text-gray-600">
              Be part of a thriving community of 10,000+ alumni making their mark across industries worldwide.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Career Support</h4>
            <p className="text-sm text-gray-600">
              Gain access to valuable mentorship and career opportunities guided by the insight of accomplished seniors.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Lifelong Learning</h4>
            <p className="text-sm text-gray-600">
              Stay engaged through exclusive alumni events, workshops, and seminars that fuel continuous growth.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-6 p-6 bg-gradient-to-r from-[#0d173b] to-[#1e305f] rounded-md">
          <div className="text-center text-white">
            <h3 className="text-xl font-medium mb-2">
              Join Our Alumni Network
            </h3>
            <p className="text-gray-200 mb-4">
              Stay connected with your alma mater and fellow alumni
            </p>
            <a
              href="https://forms.gle/391ULYRAYn6MxWDb9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-white text-[#0d173b] rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAssociation;