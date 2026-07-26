import React from 'react';
import { ShieldAlert, Target, ListChecks, Users, Phone, Mail, Globe } from 'lucide-react';
import {
  antiRaggingIntro,
  objectives,
  whatIsRagging,
  helplineInfo,
  antiRaggingCommittee 
} from '../../data/antiRaggingData';

const Anti_Raging = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <ShieldAlert className="mr-3" />
            {antiRaggingIntro.title}
          </h1>
          <p className="text-base text-gray-200 mt-2">
            Zero tolerance towards ragging. A safe and secure campus for all.
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4 leading-relaxed">{antiRaggingIntro.description}</p>
            <p className="text-gray-700 leading-relaxed">{antiRaggingIntro.commitment}</p>
          </section>

          {/* Objectives */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><Target className="mr-2" />Objectives</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {objectives.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </section>

          {/* What Constitutes Ragging */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ListChecks className="mr-2" />What Constitutes Ragging?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {whatIsRagging.map((item, index) => (
                <div key={index} className="bg-red-50 p-3 rounded-md text-sm text-red-900">{item}</div>
              ))}
            </div>
          </section>

          {/* Committee Members */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4 p-6 flex items-center"><Users className="mr-2" />Anti-Ragging Committee</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#0d173b] text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Role</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contact Number</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {antiRaggingCommittee.committeeMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Squad Members */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4 p-6 flex items-center"><Users className="mr-2" />Anti-Ragging Squad</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#0d173b] text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Role</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contact Number</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {antiRaggingCommittee.squadMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Vigilant Team */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4 p-6 flex items-center"><Users className="mr-2" />Vigilant Team</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#0d173b] text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Designation</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Responsibility</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contact Number</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {antiRaggingCommittee.vigilantTeam.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.designation}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.responsibility}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Flying Squad */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4 p-6 flex items-center"><Users className="mr-2" />Flying Squad</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#0d173b] text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">S.No</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Designation</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Responsibility</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contact Number</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {antiRaggingCommittee.flyingSquad.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.designation}</td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">{member.responsibility}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Helpline Info */}
          <section className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600 text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">{helplineInfo.title}</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-red-700">
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span className="font-semibold">{helplineInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href={`mailto:${helplineInfo.email}`} className="hover:underline">{helplineInfo.email}</a>
              </div>
              <div className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                <a href={helplineInfo.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{helplineInfo.website}</a>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600">In case of any emergency, please feel free to contact the committee members or the national helpline.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Anti_Raging;
