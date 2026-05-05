import React from "react";
import { trackLead } from "../../utils/fbPixel";

const Leaflet = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-4 text-center">
        CSGI Leaflet 2024-25
      </h1>

      {/* PDF Viewer */}
      <div className="w-full max-w-6xl h-[70vh] sm:h-[75vh] md:h-[80vh] border border-gray-300 shadow-lg rounded-lg overflow-hidden bg-white">
        <iframe
          src="/leaflet/CSGI_LEAFLET_2024-25.pdf"
          title="CSGI Leaflet"
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </div>

      {/* Download Button */}
      <a
        href="/leaflet/CSGI_LEAFLET_2024-25.pdf"
        download="CSGI_LEAFLET_2024-25.pdf"
        onClick={() => trackLead({ content_name: "Leaflet Download" })}
        className="mt-6 mb-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out"
      >
        Download Leaflet
      </a>
    </div>
  );
};

export default Leaflet;
