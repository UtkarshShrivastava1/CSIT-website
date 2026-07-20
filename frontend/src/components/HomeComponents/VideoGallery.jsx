"use client";

import { useState } from "react";
import { Play, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const getYoutubeThumbnail = (url) => {
  const videoId = url.split("embed/")[1]?.split("?")[0];
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "/api/placeholder/640/360";
};

const videos = [
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/_tFRUefZKWo",
    title: "Campus Tour",
    duration: "3:24",
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/_tFRUefZKWo"),
    date: "April 15, 2025",
    description:
      "Explore our beautiful campus facilities and academic environment in this exclusive tour.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/_tFRUefZKWo",
    title: "College Events Highlight",
    duration: "5:18",
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/_tFRUefZKWo"),
    date: "March 28, 2025",
    description:
      "Annual college events showcasing student talents, competitions, and celebrations.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/aHc2rm7ZVlY",
    title: "Student Success Stories",
    duration: "4:52",
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/aHc2rm7ZVlY"),
    date: "March 10, 2025",
    description:
      "Hear from our graduates about their journey to success and how the college helped them.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/tA8ZhsOMMPc",
    title: "Faculty Interviews",
    duration: "6:10",
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/tA8ZhsOMMPc"),
    date: "February 22, 2025",
    description:
      "Our distinguished faculty share insights about their research and teaching philosophies.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/aHc2rm7ZVlY",
    title: "Annual Festival",
    duration: "7:45",
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/aHc2rm7ZVlY"),
    date: "February 8, 2025",
    description:
      "Highlights from our biggest cultural festival of the year with performances and activities.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/_tFRUefZKWo",
    title: "Lab Showcase",
    duration: "2:36",
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/_tFRUefZKWo"),
    date: "January 15, 2025",
    description:
      "Tour our state-of-the-art laboratories and research facilities available to students.",
  },
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const handleVideoSelect = (video) => {
    setActiveVideo(video);
  };

  return (
    <section className="relative py-8 sm:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d173b] mb-4">
            Video Gallery
          </h2>
          <div className="w-24 h-1 bg-[#0d173b] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              <iframe
                src={`${activeVideo.src}?rel=0&controls=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activeVideo.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {activeVideo.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {activeVideo.date}
                </span>
              </div>
              <p className="text-gray-600">{activeVideo.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">More Videos</h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {videos.map((video, idx) => (
                <div
                  key={idx}
                  className={`flex gap-4 p-2 rounded-lg cursor-pointer transition-all ${
                    activeVideo === video
                      ? "bg-blue-50 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleVideoSelect(video)}
                >
                  <div className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm mb-1 truncate">
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      YouTube Video
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add View More Button */}
        <div className="mt-12 text-center">
          <Link
            to="/more/gallery"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-semibold text-white bg-[#0d173b] rounded-lg transition-all duration-300 hover:bg-[#162654] shadow-lg hover:shadow-xl group"
          >
            <span className="mr-2">View More</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
