import React, { useEffect, useRef, useState } from "react";
import {
  MdNotifications,
  MdGroups,
  MdCalendarToday,
  MdAccessTime,
  MdArrowForward,
  MdClose,
} from "react-icons/md"; // import { motion } from "framer-motion";
import { motion } from "framer-motion";
import api from "../../services/api";

/* ── Government Layout Scheme Config ────────────────── */
const COLUMN_CONFIG = [
  {
    id: "notice",
    title: "Latest Notices & Circulars",
    icon: <MdNotifications size={18} />,
    accentColor: "#D85A30",
    urgentColor: "#EF4444",
  },
  {
    id: "event",
    title: "Upcoming Campus Events",
    icon: <MdGroups size={18} />,
    accentColor: "#3B6D11",
    urgentColor: "#EF4444",
  },
];

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

// Check if item is new (within 7 days)
const isNew = (date) => {
  const diff = new Date() - new Date(date);
  return diff < 7 * 24 * 60 * 60 * 1000;
};

// Get category badge color
const getCategoryColor = (category) => {
  switch (category) {
    case "notice":
      return "bg-orange-100 text-orange-700";
    case "tender":
      return "bg-purple-100 text-purple-700";
    case "announcement":
      return "bg-blue-100 text-blue-700";
    case "event":
      return "bg-emerald-100 text-emerald-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

/* ── Infinite Circular Scroll Effect ──────────────────────────── */
const AutoScrollTrack = React.memo(({ items, speed = 0.5, progressBarRef }) => {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const yRef = useRef(0);
  const pausedRef = useRef(false);
  const [itemHeight, setItemHeight] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);
  const speedRef = useRef(speed);

  useEffect(() => { speedRef.current = speed; }, [speed]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!track || !wrapper || items.length === 0) return;

    // Calculate height of one item
    const firstChild = track.children[0];
    if (!firstChild) return;
    const height = firstChild.offsetHeight || 60;
    setItemHeight(height);
    const total = items.length * height;
    setTotalHeight(total);

    // Set initial position
    track.style.transform = "translateY(0px)";

   const animate = () => {
    if (!pausedRef.current) {
      yRef.current -= speedRef.current;
      track.style.transform = `translateY(${yRef.current}px)`;

      if (progressBarRef?.current && total > 0) {
        const progress = Math.min((Math.abs(yRef.current) / total) * 100, 100);
        progressBarRef.current.style.width = `${progress}%`;
      }
    }
    frameRef.current = requestAnimationFrame(animate);
  };

    frameRef.current = requestAnimationFrame(animate); // Start animation

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [items, speed, progressBarRef ]);
  
  if (items.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-sm text-gray-400 bg-gray-50/50 select-none p-4">
        <div className="text-4xl mb-3 opacity-30">📭</div>
        <p className="font-medium">No active records</p>
        <p className="text-xs">Check back later for updates</p>
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className="flex-1 overflow-hidden relative h-[320px]"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="absolute inset-x-0 top-0 will-change-transform w-full">
        {items.map((item, idx) => (
          <NoticeRow key={`${item._id}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
});

/* ── Single Broadcast Element Node ──────────────────────────── */
const NoticeRow = React.memo(({ item }) => {
  const hasLink = item.link && item.link.trim() !== "";
  const handleClick = () => {
    if (hasLink) window.open(item.link, "_blank", "noopener,noreferrer");
  };
  const isNewItem = isNew(item.createdAt);
  const categoryColor = getCategoryColor(item.category);

  return (
    <div
      onClick={handleClick}
      className={`border-b border-gray-100 p-4 transition-all duration-150 bg-white ${
        hasLink ? "cursor-pointer hover:bg-gray-50 group" : "cursor-default"
      } ${isNewItem ? "hover:bg-emerald-50/30" : ""}`}
    >
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-500">
          <MdCalendarToday size={11} />
          {formatDate(item.publishDate || item.createdAt)}
        </span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Category Badge */}
          <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full ${categoryColor}`}>
            {item.category || "General"}
          </span>
          {/* NEW Badge */}
          {isNewItem && (
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200 animate-pulse">
              NEW
            </span>
          )}
          {item.urgent && (
            <span className="text-[9px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded-full border border-red-200 animate-pulse">
              URGENT
            </span>
          )}
        </div>
      </div>

      <h4
        className={`mt-2 text-sm font-bold leading-snug relative group ${
          hasLink ? "text-gray-800 group-hover:text-[#0d173b]" : "text-gray-800"
        }`}
      >
        {item.title}
        {item.title && item.title.length > 50 && (
          <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg p-2 -top-8 left-0 whitespace-nowrap z-10 shadow-lg">
            {item.title}
          </span>
        )}
      </h4>

      <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-2">{item.message}</p>

      {item.lastDate && (
        <p className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-rose-600">
          <MdAccessTime size={12} />
          Deadline: {formatDate(item.lastDate)}
        </p>
      )}
    </div>
  );
});

/* ── Split Dual Category Board Matrix ────────────────────────── */
const CategoryCard = ({ config, items, index }) => {
  const [showAllModal, setShowAllModal] = useState(false);
  const [speed, setSpeed] = useState(0.5);
  const progressBarRef = useRef(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="flex h-[460px] flex-col rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-xl hover:border-[#0d173b]/20 transition-all duration-300 group"
      >
        {/* Header with Gradient */}
        <div className="flex shrink-0 items-center gap-2 px-5 py-4 bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white">
          <span style={{ color: config.accentColor }} className="flex items-center">
            {config.icon}
          </span>
          <h2 className="font-bold text-sm tracking-wide flex-1">{config.title}</h2>
          <span className="font-bold px-2.5 py-0.5 rounded-full text-[10px] bg-white/20 text-white border border-white/20">
            {items.length}
          </span>
        </div>

        {/* Speed Control - Hidden on small screens */}
        {items.length > 1 && (
          <div className="flex items-center justify-end gap-2 px-4 py-1 bg-gray-50/50 border-b border-gray-100">
            <span className="text-[9px] text-gray-400 font-medium">Speed</span>
            <button
              onClick={() => setSpeed(Math.max(0.2, speed - 0.1))}
              className="text-gray-400 hover:text-[#0d173b] text-xs font-bold w-5 h-5 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              −
            </button>
            <span className="text-[10px] text-gray-600 font-medium w-8 text-center">
              {speed.toFixed(1)}x
            </span>
            <button
              onClick={() => setSpeed(Math.min(1, speed + 0.1))}
              className="text-gray-400 hover:text-[#0d173b] text-xs font-bold w-5 h-5 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              +
            </button>
          </div>
        )}

        {/* Rolling Body */}
        <AutoScrollTrack items={items} speed={speed} progressBarRef={progressBarRef} />

        {/* Progress Bar */}
        {items.length > 1 && (
          <div className="h-0.5 bg-gray-100 w-full shrink-0">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-[#0d173b] to-[#1e305f]"
              style={{ width: "0%" }}
            />
          </div>
        )}

        {/* Footer - View All */}
        {items.length > 0 && (
          <button
            onClick={() => setShowAllModal(true)}
            className="w-full shrink-0 flex items-center justify-center gap-1 py-3 text-xs font-bold bg-gray-50 border-t border-gray-100 text-[#0d173b] hover:bg-gray-100/80 transition-colors uppercase tracking-wider"
          >
            View All <MdArrowForward size={14} />
          </button>
        )}
      </motion.div>

      {/* View All Modal */}
      {showAllModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
          >
            <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span style={{ color: config.accentColor }}>{config.icon}</span>
                {config.title}
              </h3>
              <button
                onClick={() => setShowAllModal(false)}
                className="text-white/50 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <MdClose size={22} />
              </button>
            </div>
            <div className="p-2 overflow-y-auto max-h-[60vh]">
              {items.map((item) => (
                <NoticeRow key={item._id} item={item} />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

/* ── Loader Buffer Skeleton ──────────────────────────────────── */
const LoadingSkeleton = () => (
  <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {COLUMN_CONFIG.map((c) => (
        <div
          key={c.id}
          className="h-[460px] rounded-xl border border-gray-200 bg-white overflow-hidden flex flex-col"
        >
          <div className="px-5 py-4 bg-[#0d173b]">
            <div className="h-4 w-32 rounded bg-white/20 animate-pulse" />
          </div>
          <div className="flex-1 p-4 space-y-4">
            {[1, 2, 3].map((j) => (
              <div key={j} className="space-y-2 border-b border-gray-50 pb-3">
                <div className="flex justify-between">
                  <div className="h-3 w-16 rounded bg-gray-200 animate-pulse" />
                  <div className="h-3 w-12 rounded bg-gray-200 animate-pulse" />
                </div>
                <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-4/5 rounded bg-gray-100 animate-pulse" />
              </div>
            ))}
          </div>
          <div className="h-10 bg-gray-50 animate-pulse shrink-0" />
        </div>
      ))}
    </div>
  </section>
);

/* ── Main Workspace Renderer Entry point ─────────────────────── */
export default function NoticeBoard() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await api.get("/notifications");
      const list = response.data.notifications ?? response.data.data ?? response.data ?? [];

      const activeItems = Array.isArray(list) ? list.filter((item) => item.isActive !== false) : [];
      setNotifications(activeItems);
    } catch (err) {
      console.error(err);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  const grouped = React.useMemo(() => {
    return {
      notice: notifications.filter(
        (x) => x.category === "notice" || x.category === "announcement" || x.category === "tender"
      ),
      event: notifications.filter((x) => x.category === "event"),
    };
  }, [notifications]);

  if (loading) return <LoadingSkeleton />;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">Notice Board</h2>
          <p className="text-gray-500 text-sm mt-1">Stay updated with the latest announcements and events</p>
          <div className="h-0.5 w-16 bg-[#0d173b] mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {COLUMN_CONFIG.map((col, index) => (
            <CategoryCard key={col.id} config={col} items={grouped[col.id] ?? []} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}