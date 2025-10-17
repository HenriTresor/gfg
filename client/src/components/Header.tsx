import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, Bell } from 'lucide-react';
import { useAuth } from '../lib/authContext';

const Header: React.FC = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const notificationRef = useRef<HTMLDivElement>(null);
    const { user, logout } = useAuth();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setIsNotificationsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        logout();
        setIsProfileOpen(false);
    };

    return (
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Left side - could add breadcrumbs here */}
                <div>
                    <h2 className="text-xl font-semibold text-primary-600">
                        {getPageTitle(window.location.pathname)}
                    </h2>
                </div>

                {/* Right side - Notifications and Profile */}
                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <div className="relative" ref={notificationRef}>
                        <button
                            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors relative"
                        >
                            <Bell className="w-5 h-5" />
                            {/* Notification badge */}
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
                        </button>

                        {isNotificationsOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                <div className="p-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800">Notifications</h3>
                                </div>
                                <div className="max-h-64 overflow-y-auto">
                                    <div className="p-4 border-b border-gray-100">
                                        <p className="text-sm text-gray-600">No new notifications</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Profile Dropdown */}
                    <div className="relative" ref={profileRef}>
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <div className="w-8 h-8 bg-neutral-400 rounded-full flex items-center justify-center">
                                <span className="text-lg font-bold text-white">
                                    {user?.firstName?.charAt(0) || user?.email.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-medium text-primary-600">
                                    {user?.firstName ? `${user.firstName} ${user.lastName || ''}` : user?.email}
                                </p>
                                <p className="text-xs text-accent-600 capitalize">
                                    {user?.role.replace('_', ' ').toLowerCase()}
                                </p>
                            </div>
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                <div className="py-1">
                                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                        <User className="w-4 h-4 mr-3" />
                                        View Profile
                                    </button>
                                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                        <Settings className="w-4 h-4 mr-3" />
                                        Settings
                                    </button>
                                    <hr className="my-1" />
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                    >
                                        <LogOut className="w-4 h-4 mr-3" />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

// Helper function to get page title based on route
const getPageTitle = (pathname: string): string => {
    const titles: { [key: string]: string } = {
        '/dashboard': 'Dashboard',
        '/casuals': 'Casual Workers',
        '/work-entries': 'Work Entries',
        '/admin/pending': 'Pending Requests',
        '/admin/approved': 'Approved Requests',
        '/admin/rejected': 'Rejected Requests',
        '/admin/reports': 'Payment Reports',
        '/admin/analytics': 'Analytics',
        '/admin/supervisors': 'Add Supervisor',
    };

    return titles[pathname] || 'GFG System';
};

export default Header;
