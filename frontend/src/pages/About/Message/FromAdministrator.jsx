import React from 'react'
import administratorImage from "../../../assets/director(admin).jpg";
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
          Message From Director[Administrator]
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
                <p className="text-sm text-gray-600">Director[Administrator], CSIT</p>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="w-full md:w-2/3 text-justify text-gray-800 text-[15px] leading-relaxed space-y-4">
            <p>
            CSGI is a valued milestone of academic excellence in the state of Chhattisgarh. Its contribution has been well recognised by the various sectors. It has enriched the society by producing exceptional students laced with sound knowledge and immense potential to serve the nation in the best possible way. CSGI has been dedicated in creating a breed of qualified youths who can stand tall to all the challenges, and harness every opportunity that comes across their career-trajectory.
            </p>
            <p>
            We provide an ideal academic environment where students gain not only knowledge but also skills to perform brilliantly. A strong pool of faculty members, state-of-the-art laboratories, a large library hosting more than fifty thousand books are some of the unique features of CSGI that appeal to various scholars and academicians. The scenic campus spread over 33 acres of land, remains unaffected from the nuisances of the city, yet easily available conveyances and proximity with the city together make CSGI easily approachable.
            </p>
            <p>
            We are dedicated to nurturing those strong group of youths who can cater to the emerging demands of the globalised world through various activities. This is done also through CSGI a lot of co-curricular activities - each of which aims to help students know the world beyond the books. Most of these activities are managed by students so that their managerial skills get honed naturally. CSGI has a safe social and physical environment that helps all our students learn and succeed. And this is my firm conviction that every CSGIian carries the rich values and traditions that are imbibed in their collegiate years.
            </p>
            <p>
            This brochure provides a glimpse of CSGIs efforts and treasures. I hope it shall be helpful every reader in various ways.
            </p>
            <p className="font-semibold text-[#0d173b]">
              I extend my Heartiest Welcome to all at CSIT.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FromAdministrator
