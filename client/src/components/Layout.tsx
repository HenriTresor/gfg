import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { SidebarProvider } from '../contexts/SidebarContext';

const Layout: React.FC = () => {
    return (
        <SidebarProvider>
            <div className="flex h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default Layout;

