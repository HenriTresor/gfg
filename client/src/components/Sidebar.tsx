import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    ClipboardList,
    ClipboardCheck,
    FileText,
    ChevronLeft,
    ChevronRight,
    UserPlus,
    Clock,
    X
} from 'lucide-react';
import { useAuth } from '../lib/authContext';
import { useSidebar } from '../contexts/SidebarContext';

const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { isOpen, setIsOpen } = useSidebar();
    const location = useLocation();
    const { user } = useAuth();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setIsCollapsed(true);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navigation = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: LayoutDashboard,
            roles: ['FARM_SUPERVISOR', 'SYSTEM_ADMIN']
        },
        {
            name: 'Casuals',
            href: '/casuals',
            icon: Users,
            roles: ['FARM_SUPERVISOR', 'SYSTEM_ADMIN']
        },
        {
            name: 'Daily Casual Requests',
            href: '/daily-casual-requests',
            icon: Clock,
            roles: ['FARM_SUPERVISOR']
        },
        {
            name: 'Review Requests',
            href: '/admin/daily-casual-requests',
            icon: ClipboardCheck,
            roles: ['SYSTEM_ADMIN']
        },
        {
            name: 'Cost Report',
            href: '/cost-report',
            icon: ClipboardList,
            roles: ['SYSTEM_ADMIN']
        },
        {
            name: 'Payment Reports',
            href: '/admin/reports',
            icon: FileText,
            roles: ['SYSTEM_ADMIN']
        },
        {
            name: 'Add Supervisor',
            href: '/admin/supervisors',
            icon: UserPlus,
            roles: ['SYSTEM_ADMIN']
        },
    ];

    const filteredNavigation = navigation.filter(item =>
        user && item.roles.includes(user.role)
    );

    const handleToggle = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
        } else {
            setIsCollapsed(!isCollapsed);
        }
    };

    const handleLinkClick = () => {
        if (isMobile) {
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed md:relative z-50
                    transition-all duration-300 
                    ${isMobile
                        ? (isOpen ? 'w-full' : 'w-0 overflow-hidden')
                        : (isCollapsed ? 'w-16' : 'w-64')
                    }
                    min-h-screen flex flex-col
                `}
                style={{ backgroundColor: '#166534', color: 'white' }}
            >
                {/* Header */}
                <div className="p-4 border-b" style={{ borderColor: '#15803d' }}>
                    <div className="flex items-center justify-between">
                        {(!isCollapsed || isMobile) && (
                            <h1 className="text-xl font-bold text-white">
                                GFG System
                            </h1>
                        )}
                        <button
                            onClick={handleToggle}
                            className="p-2 rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            {isMobile ? (
                                <X className="w-5 h-5" />
                            ) : isCollapsed ? (
                                <ChevronRight className="w-5 h-5" />
                            ) : (
                                <ChevronLeft className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        {filteredNavigation.map((item) => {
                            const isActive = location.pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        onClick={handleLinkClick}
                                        className={`flex items-center px-3 py-2 rounded-lg transition-colors ${isActive
                                            ? 'bg-primary-600 text-white'
                                            : 'text-primary-100 hover:bg-primary-700 hover:text-white'
                                            }`}
                                        title={isCollapsed && !isMobile ? item.name : undefined}
                                    >
                                        <Icon className="w-5 h-5 flex-shrink-0" />
                                        {(!isCollapsed || isMobile) && (
                                            <span className="ml-3 font-medium">{item.name}</span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* User Info */}
                {(!isCollapsed || isMobile) && user && (
                    <div className="p-4 border-t border-primary-700">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium">
                                    {user.firstName?.charAt(0) || user.email.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">
                                    {user.firstName ? `${user.firstName} ${user.lastName || ''}` : user.email}
                                </p>
                                <p className="text-xs text-primary-200 capitalize">
                                    {user.role.replace('_', ' ').toLowerCase()}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Sidebar;
