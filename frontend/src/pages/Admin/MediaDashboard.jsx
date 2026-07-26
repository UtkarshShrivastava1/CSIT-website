import React, { useState, useEffect } from "react";
import { Trash2, Loader2, PlusCircle, Newspaper, Edit, AlertCircle } from "lucide-react";
import api from "../../services/api";
import MediaForm from "./MediaForm";

const MediaDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewState, setViewState] = useState("list");
  const [editData, setEditData] = useState(null);
  
  // Confirmation Modal & Toast States
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  useEffect(() => {
    fetchMediaLog();
  }, []);

  const showMediaToast = (message, type = "success") => {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "fixed bottom-4 right-4 z-50 flex flex-col gap-2";
      document.body.appendChild(container);
    }
    const el = document.createElement("div");
    el.className = `px-6 py-4 rounded-lg shadow-lg ${
      type === "success" ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-gradient-to-r from-rose-500 to-red-500"
    } text-white flex items-center gap-3 transform transition-all duration-500`;
    el.innerHTML = `<div class="flex-1"><p class="font-medium">${message}</p></div><button class="ml-2">✕</button>`;
    el.querySelector("button").addEventListener("click", () => el.remove());
    container.appendChild(el);
    setTimeout(() => el.remove(), 4500);
  };

  const fetchMediaLog = async () => {
    try {
      setLoading(true);
      const res = await api.get("/media-coverage");
      if (res.data?.success) {
        const articlesWithStatus = res.data.articles.map(item => ({
          ...item,
          isActive: item.isActive !== undefined ? Boolean(item.isActive) : true
        }));
        setArticles(articlesWithStatus);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to stream structural content artifacts.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTrigger = (id) => {
    setArticleToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await api.delete(`/media-coverage/${articleToDelete}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data?.success) {
        setArticles(prev => prev.filter(item => item._id !== articleToDelete));
        showMediaToast("Media coverage asset purged entirely.");
      }
    } catch (err) {
      showMediaToast("Execution processing sequence aborted by target layer.", "error");
    } finally {
      setIsDeleteModalOpen(false);
      setArticleToDelete(null);
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await api.patch(`/media-coverage/${id}/status`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (res.data?.success) {
        const newStatus = res.data.isActive === true || res.data.isActive === 'true';

        setArticles(prev => 
          prev.map(item => 
            item._id === id ? { ...item, isActive: newStatus } : item
          )
        );
        showMediaToast(res.data.message || "Visibility state synchronized successfully.");
      }
    } catch (err) {
      showMediaToast("Visibility state synchronization failed.", "error");
    }
  };

  const handleEditTrigger = (item) => {
    setEditData(item);
    setViewState("add");
  };

  if (loading) return (
    <div className="p-12 flex flex-col items-center gap-3 justify-center">
      <Loader2 size={32} className="text-[#0d173b] animate-spin" />
      <p className="text-gray-500">Buffering digital index matrices...</p>
    </div>
  );

  if (viewState === "add") return (
    <MediaForm 
      onBack={() => {
        setViewState("list");
        setEditData(null);
      }} 
      onSuccess={() => { 
        setViewState("list"); 
        setEditData(null);
        fetchMediaLog(); 
      }} 
      editData={editData}
    />
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h2 className="text-2xl font-serif font-bold text-[#0d173b] flex items-center gap-2">
            <Newspaper className="text-yellow-500" /> Media & Faculty Press Portal
          </h2>
          <p className="text-xs text-gray-500">Manage real-time updates of achievements and news recognition parameters.</p>
        </div>
        <button 
          onClick={() => {
            setEditData(null);
            setViewState("add");
          }} 
          className="flex items-center gap-2 bg-yellow-400 text-[#0d173b] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 shadow-sm transition-all text-xs"
        >
          <PlusCircle size={15} /> Add Record
        </button>
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-400 text-center py-8">No live structural media data strings traced.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item) => {
            const isItemActive = !!item.isActive;
            
            return (
              <div 
                key={item._id} 
                className={`bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative group ${
                  !isItemActive ? 'opacity-60 bg-gray-50' : ''
                }`}
              >
                <div className="h-44 bg-gray-100 relative">
                  <img 
                    src={item.image?.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.target.src = '/placeholder-image.webp';
                    }}
                  />
                  <span className="absolute top-2 left-2 bg-[#0d173b] text-white text-xs px-2 py-1 rounded-md font-medium">
                    {item.category}
                  </span>
                  
                  <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-md font-medium transition-colors duration-300 ${
                    isItemActive ? 'bg-emerald-500 text-white' : 'bg-gray-500 text-white'
                  }`}>
                    {isItemActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                
                <div className="p-4 space-y-2">
                  <p className="text-xs text-gray-400 font-semibold">{item.date}</p>
                  <h4 className="font-bold text-[#0d173b] truncate text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
                  
                  <div className="pt-3 flex justify-between items-center border-t border-gray-100 mt-4">
                    <div className="flex items-center gap-2 relative z-10">
                      <span className="text-xs text-gray-500 font-medium select-none">Visibility:</span>
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleStatus(item._id);
                        }}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 focus:outline-none cursor-pointer shadow-inner ${
                          isItemActive ? 'bg-emerald-500' : 'bg-gray-300'
                        }`}
                      >
                        <span 
                          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-300 ${
                            isItemActive ? 'translate-x-5' : 'translate-x-1'
                          }`} 
                        />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleEditTrigger(item)}
                        className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors flex items-center gap-1 text-xs font-medium"
                      >
                        <Edit size={16} /> Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteTrigger(item._id)} 
                        className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors flex items-center gap-1 text-xs font-medium"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Custom Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-scaleIn">
            <h3 className="text-xl font-bold text-[#0d173b] mb-2 flex items-center gap-2">
              <AlertCircle className="text-red-500" /> Confirm Grid Purge
            </h3>
            <p className="text-gray-600 mb-6">Are you sure you want to drop this media article record matrix permanently? Core systems cannot rollback this state sync.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg font-medium transition-colors">Abort</button>
              <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md transition-colors">Purge Record</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaDashboard;