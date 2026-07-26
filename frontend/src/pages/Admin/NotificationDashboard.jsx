import React, { useState, useEffect } from "react";
import { X, AlertCircle, Eye, Loader2, Trash2, Edit, CheckSquare, PlusCircle } from "lucide-react";
import api from "../../services/api";
import NotificationForm from "./NotificationForm";

const NotificationDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNotification, setEditingNotification] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [notificationToDelete, setNotificationToDelete] = useState(null);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const showNotificationToast = (message, type = "success") => {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "fixed bottom-4 right-4 z-50 flex flex-col gap-2";
      document.body.appendChild(container);
    }
    const el = document.createElement("div");
    el.className = `px-6 py-4 rounded-lg shadow-lg ${type === "success" ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-gradient-to-r from-rose-500 to-red-500"} text-white flex items-center gap-3 transform transition-all duration-500`;
    el.innerHTML = `<div class="flex-1"><p class="font-medium">${message}</p></div><button class="ml-2">✕</button>`;
    el.querySelector("button").addEventListener("click", () => el.remove());
    container.appendChild(el);
    setTimeout(() => el.remove(), 4500);
  };

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      // Admin side list h isliye pure status access krne ke liye generic route hit karenge
      const res = await api.get("/notifications");
      if (res.data?.success) {
        setNotifications(res.data.notifications);
      }
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Failed to sync board updates.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await api.patch(`/notifications/${id}/status`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data?.success) {
        setNotifications(prev => prev.map(n => n._id === id ? { ...n, isActive: res.data.isActive } : n));
        showNotificationToast(res.data.message);
      }
    } catch (err) {
      console.error(err);
      showNotificationToast("Status synchronization failed", "error");
    }
  };

  const handleDeleteTrigger = (id) => {
    setNotificationToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await api.delete(`/notifications/${notificationToDelete}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data?.success) {
        setNotifications(prev => prev.filter(n => n._id !== notificationToDelete));
        showNotificationToast("Broadcast instance destroyed successfully.");
      }
    } catch (err) {
      console.error(err);
      showNotificationToast("Deletion runtime execution interrupted.",  "error");
    } finally {
      setIsDeleteModalOpen(false);
      setNotificationToDelete(null);
    }
  };

  const startEdit = (notification) => {
    setEditingNotification(notification);
    setIsFormOpen(true);
  };

  if (loading) return (
    <div className="p-12 flex flex-col items-center gap-2 justify-center">
      <Loader2 size={40} className="text-[#0d173b] animate-spin" />
      <p className="text-gray-600 text-lg">Synchronizing real-time boards...</p>
    </div>
  );

  if (isFormOpen) return (
    <NotificationForm 
      onClose={() => { setIsFormOpen(false); setEditingNotification(null); }} 
      onSuccess={() => { setIsFormOpen(false); setEditingNotification(null); fetchNotifications(); }}
      editData={editingNotification}
    />
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b pb-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-[#0d173b] flex items-center gap-2">
            <AlertCircle className="text-yellow-500" /> Notification Registry Panel
          </h2>
          <p className="text-gray-600 mt-1 text-xs">Manage cross-origin college announcements, tenders, dynamic system rules and alerts.</p>
        </div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 bg-yellow-400 text-[#0d173b] font-semibold px-5 py-3 rounded-lg hover:bg-yellow-500 shadow-md transition-all duration-300 text-xs"
        >
          <PlusCircle className="w-3 h-3" /> Add New Notification
        </button>
      </div>

      {notifications.length === 0 ? (
        <div className="text-center p-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
          <p className="text-gray-500 text-lg">No active notification traces found on system grids.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white">
                <th className="p-2 font-medium text-sm">Title</th>
                <th className="p-2 font-medium text-sm">Category</th>
                <th className="p-2 font-medium text-sm">Publish Window</th>
                <th className="p-2 font-medium text-sm">Visibility Status</th>
                <th className="p-2 font-medium text-sm text-center">Operation Handles</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {notifications.map((n) => (
                <tr key={n._id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-2 max-w-xs text-sm font-medium truncate">{n.title}</td>
                  <td className="p-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                      n.category === 'tender' ? 'bg-amber-100 text-amber-800' :
                      n.category === 'event' ? 'bg-emerald-100 text-emerald-800' :
                      n.category === 'notice' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {n.category}
                    </span>
                  </td>
                  <td className="p-2 text-xs text-gray-500">
                    {new Date(n.publishDate).toLocaleDateString()} {n.lastDate ? `upto ${new Date(n.lastDate).toLocaleDateString()}` : ""}
                  </td>
                  <td className="p-2">
                    <button 
                      onClick={() => handleToggleStatus(n._id)}
                      className={`relative inline-flex h-4 w-11 items-center rounded-full transition-colors focus:outline-none ${n.isActive ? 'bg-emerald-500' : 'bg-gray-300'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${n.isActive ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </td>
                  <td className="p-2 flex gap-2 justify-center items-center">
                    <button onClick={() => startEdit(n)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"><Edit size={18} /></button>
                    <button onClick={() => handleDeleteTrigger(n._id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-full transition-colors"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Execution Engine Interlock Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-scaleIn">
            <h3 className="text-xl font-bold text-[#0d173b] mb-2">Confirm Grid Purge</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to drop this broadcast array registry permanently? Core systems cannot rollback this state sync.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">Abort</button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md">Purge Record</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDashboard;