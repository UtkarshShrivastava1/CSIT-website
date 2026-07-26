import React, { useState, useEffect } from "react";
import { ArrowLeft, Loader2, Save, AlertCircle } from "lucide-react";
import api from "../../services/api";

function NotificationForm({ onClose, onSuccess, editData }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    message: "",
    publishDate: new Date().toISOString().split('T')[0],
    lastDate: "",
    link: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  useEffect(() => {
    if (editData) {
      setFormData({
        title: editData.title || "",
        category: editData.category || "",
        message: editData.message || "",
        publishDate: editData.publishDate ? editData.publishDate.split('T')[0] : "",
        lastDate: editData.lastDate ? editData.lastDate.split('T')[0] : "",
        link: editData.link || "",
      });
    }
  }, [editData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) throw new Error("Authentication context invalid. Session expired.");

      let response;
      if (editData) {
        // PUT dynamic state context modification
        response = await api.put(`/notifications/${editData._id}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        // POST initial tracking array push
        response = await api.post("/notifications", formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }

      if (response.data?.success) {
        setStatus({ type: "success", message: "Data pipelines successfully stored to active clusters." });
        setTimeout(() => onSuccess(), 1000);
      }
    } catch (error) {
      setStatus({ type: "error", message: error?.response?.data?.message || error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-6">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onClose} className="flex items-center gap-2 text-gray-600 hover:text-[#0d173b] transition-colors font-medium">
          <ArrowLeft className="w-5 h-5" /> Cancel & Back
        </button>
        <h3 className="text-2xl font-serif font-bold text-[#0d173b]">
          {editData ? "Update Broadcast Registry" : "Generate Core System Broadcast"}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Notice Header Title <span className="text-red-500">*</span></label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full rounded-lg border border-gray-200 p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0d173b] text-black shadow-sm"
              placeholder="e.g. Rate Contract for Catering Services..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category Segment <span className="text-red-500">*</span></label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full rounded-lg border border-gray-200 p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0d173b] text-black shadow-sm"
            >
              <option value="">Select Routing Type</option>
              {/* <option value="announcement">Announcement</option>
              <option value="tender">Tender Document</option> */}
              <option value="notice">Official Notice</option>
              <option value="event">Campus Event</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">External Link / Action URL</label>
            <input
              type="url"
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              className="w-full rounded-lg border border-gray-200 p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0d173b] text-black shadow-sm"
              placeholder="https://college.edu/assets/document.pdf"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Execution Publish Date</label>
            <input
              type="date"
              value={formData.publishDate}
              onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
              className="w-full rounded-lg border border-gray-200 p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0d173b] text-black shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cut-off Deadline (Last Date)</label>
            <input
              type="date"
              value={formData.lastDate}
              onChange={(e) => setFormData({ ...formData, lastDate: e.target.value })}
              className="w-full rounded-lg border border-gray-200 p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0d173b] text-black shadow-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Broadcast Message / Body <span className="text-red-500">*</span></label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded-lg border border-gray-200 p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0d173b] text-black shadow-sm resize-none"
            placeholder="Provide context specifics or brief dynamic description lines..."
          />
        </div>

        {status.message && (
          <div className={`p-4 rounded-lg flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium">{status.message}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 font-semibold text-lg px-6 py-4 bg-[#0d173b] text-white rounded-lg hover:bg-[#0d173b]/90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Updating Grid Clusters...</span>
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              <span>{editData ? "Apply Structural Changes" : "Add Notification "}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default NotificationForm;