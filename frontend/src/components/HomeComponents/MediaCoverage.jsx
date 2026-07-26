import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
import { Link } from "react-router-dom";
import api from "../../services/api"; // ✅ Use API service instead of axios
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const customStyles = `
  /* ... existing styles ... */
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: #0d173b;
    opacity: 0.5;
    transition: all 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 20px;
    border-radius: 4px;
  }
`;

const MediaSlide = React.memo(({ item, onImageClick }) => (
  <div
    className="relative h-64 sm:h-[420px] lg:h-[480px] group cursor-pointer"
    onClick={(e) => onImageClick(item.image?.url, e)}
  >
    <img
      src={item.image?.url || "/placeholder-image.webp"}
      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      alt={item.title}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
      <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
        <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium uppercase tracking-wide">
          {item.category || "General"}
        </span>
        <span className="text-white/60 text-xs">{item.date || ""}</span>
      </div>
      <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 line-clamp-2">
        {item.title}
      </h3>
      <p className="text-sm sm:text-base text-white/80 leading-relaxed line-clamp-2">
        {item.description}
      </p>
    </div>
  </div>
));

const SidebarUpdates = React.memo(
  ({ items, activeSlide, onItemClick }) => (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg h-full border border-gray-100">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#0d173b]">
            Latest Updates
          </h3>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-emerald-700">Live</span>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 max-h-[400px] overflow-y-auto pr-1">
          {items.slice(0, 4).map((item, index) => (
            <div
              key={item._id}
              className={`p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                activeSlide === index
                  ? "bg-[#0d173b] text-white shadow-lg"
                  : "bg-gray-50 hover:bg-gray-100 border border-transparent hover:border-gray-200"
              }`}
              onClick={() => onItemClick(index)}
            >
              <div className="flex gap-3 items-start">
                <img
                  src={item.image?.url || "/placeholder-image.webp"}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover flex-shrink-0"
                  onError={(e) => {
                    e.target.src = "/placeholder-image.webp";
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                        activeSlide === index
                          ? "bg-white/20 text-white"
                          : "bg-[#0d173b]/10 text-[#0d173b]"
                      }`}
                    >
                      {item.category || "General"}
                    </span>
                    <span
                      className={`text-[10px] ${
                        activeSlide === index ? "text-white/60" : "text-gray-400"
                      }`}
                    >
                      {item.date || ""}
                    </span>
                  </div>
                  <h6
                    className={`text-sm font-semibold line-clamp-2 ${
                      activeSlide === index ? "text-white" : "text-[#0d173b]"
                    }`}
                  >
                    {item.title}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
);

const MediaCoverage = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const fetchMediaItems = async () => {
      try {
        setLoading(true);
        // ✅ Use api service instead of axios
        const response = await api.get("/media-coverage");
        
        // ✅ Handle response properly
        if (response.data?.success && Array.isArray(response.data.articles)) {
          // ✅ Filter only active items
          const activeArticles = response.data.articles.filter(item => item.isActive !== false);
          setMediaItems(activeArticles);
        } else if (Array.isArray(response.data)) {
          setMediaItems(response.data);
        } else {
          setMediaItems([]);
        }
        setError(null);
      } catch (err) {
        console.error("Error fetching media coverage:", err);
        setError("Failed to load media coverage. Please try again later.");
        setMediaItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMediaItems();
  }, []);

  const handleSideItemClick = (index) => {
    setActiveSlide(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const openImageModal = useCallback((imageUrl, e) => {
    e.stopPropagation();
    setModalImage(imageUrl);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeImageModal = useCallback(() => {
    setShowModal(false);
    setModalImage(null);
    document.body.style.overflow = "unset";
  }, []);

  // ✅ Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeImageModal(); // `closeImageModal` is now memoized
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#0d173b] border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading media coverage...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-red-500 font-medium">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-[#0d173b] text-white rounded-lg hover:bg-[#1a2b5f] transition"
        >
          Retry
        </button>
      </div>
    );
  }

  if (mediaItems.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0d173b] mb-4">Media Coverage</h2>
          <div className="w-16 h-1 bg-[#0d173b] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-md mx-auto">
            No media coverage available at the moment. Check back later for updates.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <style>{customStyles}</style>

      {/* Image Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10"
          >
            <FaTimes size={28} />
          </button>
          <img
            src={modalImage}
            alt="Expanded View"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d173b] mb-4">
            Media Coverage
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#0d173b] mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mt-4">
            Discover our institution's journey through media highlights and
            achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Slider */}
          <div className="lg:col-span-2 relative">
            <Swiper
              ref={swiperRef}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              effect="creative"
              creativeEffect={{
                prev: { shadow: true, translate: [0, 0, -400] },
                next: { translate: ["100%", 0, 0] },
              }}
              modules={[Autoplay, Pagination, EffectCreative]}
              className="rounded-2xl overflow-hidden shadow-xl"
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            >
              {mediaItems.map((item) => (
                <SwiperSlide key={item._id}>
                  <MediaSlide item={item} onImageClick={openImageModal} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-between items-center px-3 -translate-y-1/2 pointer-events-none">
              <button
                onClick={handlePrevClick}
                className="pointer-events-auto p-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all"
                aria-label="Previous slide"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextClick}
                className="pointer-events-auto p-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all"
                aria-label="Next slide"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar - Latest Updates */}
          <SidebarUpdates
            items={mediaItems}
            activeSlide={activeSlide}
            onItemClick={handleSideItemClick}
          />
        </div>

        {/* View More Button */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            to="/more/gallery"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0d173b] text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-[#162654] transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">View More</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
};

export default MediaCoverage;