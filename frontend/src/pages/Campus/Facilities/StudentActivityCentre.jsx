import React, { useState } from "react";
import { ChevronRight, Activity, Users, Award, ShieldCheck } from "lucide-react";

export default function StudentActivityCenter() {
  const [activeTab, setActiveTab] = useState("cultural");
  
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      {/* Header with decorative elements */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0d173b] via-[#0d173b] to-[#0d173b] p-6 mb-6">
    
        
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">
            <Activity className="mr-3" size={28} />
            Student Activity Center
          </h1>
          <p className="text-blue-100 text-sm md:text-base"> CSIT | Fostering holistic development through co-curricular excellence</p>
          <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="flex mb-6 border-b">
        <button 
          className={`px-4 py-3 flex items-center font-semibold transition-all ${activeTab === "cultural" ? "text-[#0d173b] border-b-2 border-blue-600" : "text-gray-500 hover:text-[#0d173b]"}`}
          onClick={() => setActiveTab("cultural")}
        >
          <Award className="mr-2" size={18} />
          Cultural
        </button>
        <button 
          className={`px-4 py-3 flex items-center font-semibold transition-all ${activeTab === "sports" ? "text-[#0d173b] border-b-2 border-blue-600" : "text-gray-500 hover:text-[#0d173b]"}`}
          onClick={() => setActiveTab("sports")}
        >
          <Users className="mr-2" size={18} />
          Sports
        </button>
      </div>
      
      {/* Content Sections */}
      <div className="mb-6">
        {activeTab === "cultural" && (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 mb-6 border border-blue-100 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <ShieldCheck className="mr-2 text-blue-700" size={22} />
                Cultural Activity
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
              CSIT inculcates a high standard of ethical and moral values amongst the students community to attain this. We train  students to be  morally, culturally and ethically to be on the right side of every aspect. Industrial visits, tours, excursions and study are part of college life.
              </p>
              <p className="text-gray-700 leading-relaxed">
              Students are given equal opportunity to show their talent in other art forms like Dance, Art, Singing, Music, Drama, Debate, Quiz, Writing and Elocution etc. by organizing competitions during the year. Quite a few stars emerge from these competitions. The college felicitates outstanding students for their performance. Cultural events are organized every year by student associations which give students a platform to showcase their talent in cultural fields. Apart from these events the students participate in various state and college level program where students have brought laurels to the college.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Cultural Activities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "Dance", color: "bg-[#0d173b]" },
                  { name: "Art", color: "bg-[#0d173b]" },
                  { name: "Singing", color: "bg-[#0d173b]" },
                  { name: "Music", color: "bg-[#0d173b]" },
                  { name: "Drama", color: "bg-[#0d173b]" },
                  { name: "Debate", color: "bg-[#0d173b]" },
                  { name: "Quiz", color: "bg-[#0d173b]" },
                  { name: "Writing", color: "bg-[#0d173b]" },
                  { name: "Elocution", color: "bg-[#0d173b]" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className={`w-3 h-3 rounded-full ${activity.color} mr-3`}></div>
                    <span className="font-medium text-gray-800">{activity.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
           
          </div>
        )}
        
        {activeTab === "sports" && (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 mb-6 border border-blue-100 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Users className="mr-2 text-[#0d173b]" size={22} />
                Sports Activity
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
              Sports facilities are an integral part of any educational activity to keep students healthy, both physically and mentally. In addition to organizing the Annual Sports routinely, intra-college league matches of basketball, cricket, football, chess, volleyball, badminton, table tennis etc. are framed every year. Each year, the much awaited inter-collegiate volleyball tournament attracts participants from all over the state.
              </p>
             
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-[#0d173b] text-white p-3">
                  <h3 className="font-semibold">Outdoor Facilities</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {[
                      "Cricket / Football Ground",
                      "Basket Ball Court", 
                      "Volley Ball Court", 
                      "Handball Court"
                    ].map((facility, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#0d173b] mr-3"></div>
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-[#0d173b] text-white p-3">
                  <h3 className="font-semibold">Indoor Facilities</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {[
                      "Carrom Tables",
                      "Chess Setup", 
                      "Table Tennis Court", 
                      "Badminton Court"
                    ].map((facility, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#0d173b] mr-3"></div>
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
          
          </div>
        )}
      </div>
    </div>
  );
}