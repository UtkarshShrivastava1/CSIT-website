import React, { useState, useEffect } from 'react'
import { LogOut, Menu, X, Shield, AlertCircle } from "lucide-react"
import { MdPhotoLibrary } from "react-icons/md";
import GalleryForm from './GalleryForm';
import NotificationDashboard from './NotificationDashboard';
import MediaDashboard from './MediaDashboard'; // 👈 New import for Media Coverage
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [lastLogin, setLastLogin] = useState('');
    const [currentTab, setCurrentTab] = useState('gallery');
    const navigate = useNavigate();
    
    useEffect(() => {
        // Check authentication
        const token = localStorage.getItem("adminToken");
        const storedUsername = localStorage.getItem("adminUsername");
        
        if (!token || !storedUsername) {
            navigate("/admin-login");
            return;
        }

        setUsername(storedUsername);
        // Set last login time (you can store this in localStorage when user logs in)
        const lastLoginTime = localStorage.getItem("lastLoginTime") || new Date().toLocaleString();
        setLastLogin(lastLoginTime);
    }, [navigate]);

    const handlelogout = () => {
        // Clear all admin-related data
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUsername");
        localStorage.removeItem("lastLoginTime");
        navigate("/");
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-4 px-4 md:px-8 shadow-lg">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            <Shield className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-xl font-serif font-bold">Admin Dashboard</h1>
                            <p className="text-xs text-gray-300">Welcome back, {username}</p>
                        </div>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <Shield className="h-5 w-5 text-yellow-400" />
                            <span className="text-xs font-medium">Admin Panel</span>
                        </div>
                        <div className="text-xs text-gray-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                            Last login: {lastLogin}
                        </div>
                        <div 
                            onClick={handlelogout} 
                            className="flex items-center space-x-2 bg-red-500/20 hover:bg-red-500/30 px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 group"
                        >
                            <LogOut className="h-4 w-5 text-red-400 group-hover:text-red-300" />
                            <span className="text-xs text-red-400 group-hover:text-red-300">Logout</span>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <div 
                            onClick={handlelogout} 
                            className="flex items-center space-x-2 bg-red-500/20 px-3 py-2 rounded-lg cursor-pointer"
                        >
                            <LogOut className="h-5 w-5 text-red-400" />
                        </div>
                        <button 
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                        >
                            {isMenuOpen ? <X size={24} className="text-yellow-400" /> : <Menu size={24} className="text-yellow-400" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row flex-1">
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <aside className="md:hidden w-full bg-white shadow-lg">
                        <ul className="space-y-2 p-4">
                            {/* Gallery Tab */}
                            <li
                                onClick={() => {
                                    setCurrentTab('gallery');
                                    setIsMenuOpen(false);
                                }}
                                className={`font-serif cursor-pointer p-3 rounded-lg text-center capitalize textt-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                                    currentTab === 'gallery' 
                                        ? 'text-white bg-gradient-to-r from-[#0d173b] to-[#1a2b5f]' 
                                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                }`}
                            > 
                                <MdPhotoLibrary className={`text-sm ${currentTab === 'gallery' ? 'text-yellow-400' : 'text-gray-500'}`} />
                                Gallery Management
                            </li>
                            
                            {/* Notification Tab */}
                            <li
                                onClick={() => {
                                    setCurrentTab('notifications');
                                    setIsMenuOpen(false);
                                }}
                                className={`font-serif cursor-pointer p-3 rounded-lg text-center capitalize textt-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                                    currentTab === 'notifications' 
                                        ? 'text-white bg-gradient-to-r from-[#0d173b] to-[#1a2b5f]' 
                                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                }`}
                            > 
                                <AlertCircle className={`h-5 w-5 ${currentTab === 'notifications' ? 'text-yellow-400' : 'text-gray-500'}`} />
                                Notification Panel
                            </li>

                            {/* 👉 NEW: Media Coverage Tab */}
                            <li
                                onClick={() => {
                                    setCurrentTab('media');
                                    setIsMenuOpen(false);
                                }}
                                className={`font-serif cursor-pointer p-3 rounded-lg text-center capitalize textt-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                                    currentTab === 'media' 
                                        ? 'text-white bg-gradient-to-r from-[#0d173b] to-[#1a2b5f]' 
                                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                }`}
                            > 
                                <Shield className={`h-5 w-5 ${currentTab === 'media' ? 'text-yellow-400' : 'text-gray-500'}`} />
                                Media Coverage
                            </li>
                        </ul>
                    </aside>
                )}

                {/* Sidebar */}
                <aside className="hidden md:block w-64 py-6 shadow-xl bg-white">
                    <div className="px-6 mb-8">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <Shield className="h-5 w-5 text-[#0d173b]" />
                            <span className="text-sm font-medium">Navigation</span>
                        </div>
                    </div>
                    <ul className="space-y-2 px-6">
                        {/* Gallery Tab */}
                        <li
                            onClick={() => setCurrentTab('gallery')}
                            className={`font-serif cursor-pointer p-3 rounded-lg text-center capitalize textt-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                                currentTab === 'gallery' 
                                    ? 'text-white bg-gradient-to-r from-[#0d173b] to-[#1a2b5f]' 
                                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                            }`}
                        > 
                            <MdPhotoLibrary className={`textt-sm ${currentTab === 'gallery' ? 'text-yellow-400' : 'text-gray-500'}`} />
                            Gallery Management
                        </li>
                        
                        {/* Notification Tab */}
                        <li
                            onClick={() => setCurrentTab('notifications')}
                            className={`font-serif cursor-pointer p-3 rounded-lg text-center capitalize textt-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                                currentTab === 'notifications' 
                                    ? 'text-white bg-gradient-to-r from-[#0d173b] to-[#1a2b5f]' 
                                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                            }`}
                        > 
                            <AlertCircle className={`h-5 w-5 ${currentTab === 'notifications' ? 'text-yellow-400' : 'text-gray-500'}`} />
                            Notification Panel
                        </li>

                        {/* 👉 NEW: Media Coverage Tab */}
                        <li
                            onClick={() => setCurrentTab('media')}
                            className={`font-serif cursor-pointer p-3 rounded-lg text-center capitalize textt-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                                currentTab === 'media' 
                                    ? 'text-white bg-gradient-to-r from-[#0d173b] to-[#1a2b5f]' 
                                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                            }`}
                        > 
                            <Shield className={`h-5 w-5 ${currentTab === 'media' ? 'text-yellow-400' : 'text-gray-500'}`} />
                            Media Coverage
                        </li>
                    </ul>
                </aside>

                {/* Content Area - Updated with Media Dashboard */}
                <div className='w-full md:w-[calc(100%-16rem)] pt-8 overflow-hidden overflow-y-auto no-scrollbar'>
                    <div className="container mx-auto px-4">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            {currentTab === 'gallery' && <GalleryForm />}
                            {currentTab === 'notifications' && <NotificationDashboard />}
                            {currentTab === 'media' && <MediaDashboard />} {/* 👈 Media Dashboard */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;