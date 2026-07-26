import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import startups from '../../../data/startUps';

export default function StartupPage() {
  const [activeTab, setActiveTab] = useState('introduction');
  const scrollContainerRef = useRef(null);
  


  const scrollTabs = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-[#0d173b] text-white p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">Start-ups at CSIT</h1>
            <p className="text-sm md:text-base mt-1">CSIT | Our Startups</p>
            <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
          </div>
        </div>
       
        {/* Custom Scrollable Tab Navigation */}
        <div className="relative flex items-center mb-8 mt-6 px-2">
          <button
            onClick={() => scrollTabs('left')}
            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-[#0d173b]" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-2 py-2 px-2 mx-8 no-scrollbar scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {startups.map((startup) => (
              <button
                key={startup.id}
                onClick={() => setActiveTab(startup.id)}
                className={`px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0
                  ${activeTab === startup.id 
                    ? 'bg-[#0d173b] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-blue-50 bg-white border border-gray-200'}`}
              >
                {startup.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTabs('right')}
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-[#0d173b]" />
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mb-8">
          
          {/* Introduction Tab */}
          {activeTab === 'introduction' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-[#0d173b] mb-6">Start-ups at CSIT</h2>
              
              <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 mb-6">
                <p className="text-blue-900">
                  The Chhatrapati Shivaji Institute of Technology (CSIT) fosters a vibrant culture of innovation and entrepreneurship by providing an enabling ecosystem for aspiring entrepreneurs, innovators, and startup founders.
                </p>
              </div>
              
              <p className="text-gray-700 mb-4">
                CSIT offers a modern co-working environment equipped with open workspace seating, fully furnished meeting rooms, and presentation facilities that support collaborative working, client interactions, mentoring sessions, business planning, and investor presentations. The institute also provides access to expert guidance, networking opportunities, and industry interactions to help transform innovative ideas into successful ventures.
              </p>

              <p className="text-gray-700 mb-4">
                To encourage entrepreneurial growth, CSIT has established a dedicated <strong>Start-up Enclave</strong> within the campus. The enclave serves as an incubation space where emerging startups can develop, validate, and scale their business ideas in a supportive academic and industry-oriented environment.
              </p>

              <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 mb-8">
                <p className="text-blue-900 font-medium">
                  At present, five startup companies are successfully operating from the CSIT Start-up Enclave, reflecting the institute's commitment to nurturing innovation and creating future entrepreneurs.
                </p>
              </div>
            </div>
          )}
        
          {/* Startup Tabs */}
          {activeTab !== 'introduction' && (
            <div className="animate-fadeIn">
              {startups.filter(s => s.id === activeTab).map(startup => (
                <div key={startup.id}>
                  <div className="border-b border-gray-200 pb-4 mb-6">
                    <h2 className="text-2xl font-bold text-[#0d173b]">{startup.name}</h2>
                    {startup.location && (
                      <p className="text-gray-500 mt-1">
                        <span className="inline-block mr-2">📍</span> 
                        {startup.location}
                      </p>
                    )}
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-5 mb-8">
                    <p className="text-gray-700">{startup.description}</p>
                    {startup.uniqueStrength && <p className="text-gray-700 mt-4"><strong>Unique Strength:</strong> {startup.uniqueStrength}</p>}
                  </div>
                  
                  {/* Strengths Section */}
                  {startup.strengths && startup.strengths.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Core Strengths
                      </h3>
                      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        {startup.strengths.map((strength, idx) => (
                          <div 
                            key={idx} 
                            className={`p-4 ${idx !== startup.strengths.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-blue-50 transition-colors`}
                          >
                            <span className="text-blue-500 mr-3">•</span>
                            <span className="text-gray-700">{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Team Expertise Section (Auditech specific) */}
                  {activeTab === 'auditech' && startup.strengths && startup.strengths.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Team Expertise
                      </h3>
                      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                        {startup.strengths.map((strength, idx) => (
                          <div
                            key={idx}
                            className={`p-4 ${idx !== startup.strengths.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-blue-50 transition-colors`}
                          >
                            <span className="text-blue-500 mr-3">•</span>
                            <span className="text-gray-700">{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Projects Section */}
                  {startup.projects && startup.projects.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Key Projects
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.projects.map((project, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Services Section */}
                  {startup.services && startup.services.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        {activeTab === 'zager' ? 'Products & Solutions' : 'Services Offered'}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.services.map((service, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Expertise Section (Zager specific) */}
                  {startup.expertise && startup.expertise.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Areas of Expertise
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.expertise.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Collaborations Section (SOCH specific) */}
                  {startup.collaborations && startup.collaborations.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Work & Collaborations
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.collaborations.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Exclusive Projects Section (SOCH specific) */}
                  {startup.exclusiveProjects && startup.exclusiveProjects.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Exclusive Projects
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.exclusiveProjects.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Live Events Section (SOCH specific) */}
                  {startup.liveEvents && startup.liveEvents.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Live Event Coverage
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {startup.liveEvents.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Global Association (SOCH specific) */}
                  {startup.globalAssociation && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                        Global Association
                      </h3>
                      <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400">
                        <p className="text-gray-700">{startup.globalAssociation}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* ✅ ADDED: Closing Line - For ALL Startups */}
                  {startup.closingLine && (
                    <div className="mt-8 p-5 bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] rounded-lg border-l-4 border-yellow-400">
                      <p className="text-white text-sm md:text-base leading-relaxed">
                        {startup.closingLine}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}