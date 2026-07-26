import React from "react";
import { Cpu, Server, Code, Wifi } from 'lucide-react';

export default function ComputerCentreTable() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="bg-[#0d173b] text-white p-6">
        <h1 className="text-3xl font-bold">Computing Infrastructure and Software</h1>
        <p className="text-sm mt-1">CSIT | Facilities at CSIT</p>
        <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
      </div>

      <div className="p-6 space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The institute provides a modern computing environment to support academic, research, and project activities across all departments. These facilities support laboratory sessions, programming practice, software training, simulation studies, project development, online learning, and placement preparation. The computing infrastructure and software resources collectively provide students with practical exposure to industry-standard tools, enhancing their technical competence and employability.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><Server className="mr-2" />Infrastructure Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-900">360</p>
              <p className="text-sm text-[#0d173b]">Total Computer Systems</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-900">11</p>
              <p className="text-sm text-[#0d173b]">Laboratories</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-xl font-bold text-blue-900">Intel Core i7</p>
              <p className="text-sm text-[#0d173b]">5th Gen Processors</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-900">16 GB</p>
              <p className="text-sm text-[#0d173b]">RAM per System</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><Code className="mr-2" />Department-Specific Software</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Mechanical Engineering</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>AutoCAD</li>
                <li>CREO</li>
                <li>ANSYS</li>
              </ul>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Civil Engineering</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>STAAD Pro</li>
                <li>SAP</li>
                <li>SketchUp</li>
                <li>Revit</li>
              </ul>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Electrical & Electronics Engineering</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>MATLAB</li>
                <li>My Power</li>
              </ul>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Computer Science & Engineering</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>C++, Python, Java</li>
                <li>Android Development</li>
                <li>R Programming</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><Wifi className="mr-2" />Internet Bandwidth Information</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 w-16">S.NO</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700">Description</th>
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 w-32">Bandwidth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">1.</td>
                  <td className="py-3 px-4">BSNL Broadband</td>
                  <td className="py-3 px-4 font-semibold text-blue-700">300Mbps</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">2.</td>
                  <td className="py-3 px-4">BSNL Broadband</td>
                  <td className="py-3 px-4 font-semibold text-blue-700">40Mbps</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">3.</td>
                  <td className="py-3 px-4">JIO Leased Line</td>
                  <td className="py-3 px-4 font-semibold text-blue-700">10Mbps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}