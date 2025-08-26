import React from "react";
import Navbar from "../../../components/Navbar";
import Header from "../../../components/Header";

export default function NPTELPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <Header />
      {/* Full-width Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full">
        <Navbar />
      </div>
    </div>
  );
}
