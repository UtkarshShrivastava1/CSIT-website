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
        <div className="prose max-w-none text-gray-700">
          {/* Introduction section */}
          <div className="mb-8">
            <p className="mb-4">
              <span className="text-lg font-medium text-[#0d173b]">
                Chhatrapati Shivaji Group of Institutions
              </span>{" "}
              considers Alumni as one of the important assets of the college.
              Our alumni are the ambassadors of our college, they are the
              testimonies to our efforts in building their career.
            </p>
            <p className="mb-4">
              CSIT has an established Alumni Association, which works in
              bringing each one of the alumni together. CSIT organizes various
              activities like Alumni meet at different states of India to create
              a healthy bond and a strong relationship with each other.
            </p>
          </div>

          {/* Objectives Section */}
          <div className="my-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-4">
              Our Objectives
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "CSIT strongly believes in bringing its alumni into a common forum",
                "To maintain the contacts of the alumni with the alma-mater",
                "To promote and develop a sense of tradition & heritage with alumni support",
                "To get alumni support for students in developing Entrepreneurship and practical know-how",
              ].map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 bg-gray-50 rounded-md border border-gray-200"
                >
                  <div className="w-2 h-2 bg-[#0d173b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{objective}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-4 my-8">
            {[
              {
                title: "Strong Network",
                description:
                  "Connect with a growing network of 10,000+ alumni across industries",
              },
              {
                title: "Career Support",
                description:
                  "Get access to mentorship and career opportunities from senior alumni",
              },
              {
                title: "Lifelong Learning",
                description:
                  "Participate in alumni-exclusive events, workshops and seminars",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow transition-shadow duration-200"
              >
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-[#0d173b] rounded-full mr-2"></div>
                  <h3 className="font-medium text-[#0d173b]">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-[#0d173b] to-[#1e305f] rounded-md">
            <div className="text-center text-white">
              <h3 className="text-xl font-medium mb-2">
                Join Our Alumni Network
              </h3>
              <p className="text-gray-200 mb-4">
                Stay connected with your alma mater and fellow alumni
              </p>
              <a
                href="https://forms.gle/o5Ah11uviSg2QUL8A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-white text-[#0d173b] rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="my-8 border-l-4 border-[#0d173b] pl-4 py-1">
            <blockquote className="text-gray-600 italic text-base">
              "The CSIT Alumni Association helped me connect with industry
              leaders and provided valuable guidance during my career
              transition. The network continues to be an invaluable resource
              even years after graduation."
            </blockquote>
            <div className="text-sm text-[#0d173b] font-medium mt-2">
              — Alumni, Class of 2015
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAssociation;
