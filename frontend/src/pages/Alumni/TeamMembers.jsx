import React from 'react'
import teamMembers from "../../assets/team-members.png"
const TeamMembers = () => {
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
              Team Members
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Team Members
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="p-6">
        <div className="flex justify-center items-center bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
          <img
            className="w-full max-w-3xl object-contain p-4"
            src={teamMembers}
            alt="Team Members"
          />
        </div>
      </div>
    </div>
  )
}

export default TeamMembers
