import React, { useState, useEffect } from 'react';
import {
    Users,
    ClipboardList,
    CheckCircle,
    Calendar
} from 'lucide-react';
import { useAuth } from '../lib/authContext';
import { casualAPI, dailyCasualRequestAPI } from '../lib/api';

interface DashboardStats {
    totalCasuals: number;
    totalWorkEntries: number;
    pendingRequests: number;
    approvedRequests: number;
    rejectedRequests: number;
    totalAmount: number;
    totalAmountInclMomoCharges: number;
}

const Dashboard: React.FC = () => {
    const { user } = useAuth();
    const [stats, setStats] = useState<DashboardStats>({
        totalCasuals: 0,
        totalWorkEntries: 0,
        pendingRequests: 0,
        approvedRequests: 0,
        rejectedRequests: 0,
        totalAmount: 0,
        totalAmountInclMomoCharges: 0,
    });
    const [loading, setLoading] = useState(true);
    const [recentWorkEntries, setRecentWorkEntries] = useState([]);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);

            if (user?.role === 'SYSTEM_ADMIN') {
                // Fetch admin statistics - show daily casual requests
                const [casualsResponse, dailyRequestsResponse] = await Promise.all([
                    casualAPI.getAll({ limit: 1000 }),
                    dailyCasualRequestAPI.getAllRequests({ limit: 1000 })
                ]);

                const allRequests = dailyRequestsResponse.data.data.data || [];

                setStats(prev => ({
                    ...prev,
                    totalCasuals: casualsResponse.data.data.data?.length || 0,
                    totalWorkEntries: allRequests.length,
                    pendingRequests: allRequests.filter((r: any) => r.status === 'PENDING').length,
                    approvedRequests: allRequests.filter((r: any) => r.status === 'APPROVED').length,
                    rejectedRequests: allRequests.filter((r: any) => r.status === 'REJECTED').length,
                }));

                // Show recent daily casual requests
                setRecentWorkEntries(allRequests.slice(0, 5));
            } else {
                // Fetch supervisor data - show daily casual requests instead of work entries
                const [casualsResponse, dailyRequestsResponse] = await Promise.all([
                    casualAPI.getAll({ limit: 1000 }),
                    dailyCasualRequestAPI.getMyRequests({ limit: 1000 })
                ]);

                const allRequests = dailyRequestsResponse.data.data.data || [];

                setStats(prev => ({
                    ...prev,
                    totalCasuals: casualsResponse.data.data.data?.length || 0,
                    totalWorkEntries: allRequests.length,
                    pendingRequests: allRequests.filter((r: any) => r.status === 'PENDING').length,
                    approvedRequests: allRequests.filter((r: any) => r.status === 'APPROVED').length,
                    rejectedRequests: allRequests.filter((r: any) => r.status === 'REJECTED').length,
                }));

                // Show recent daily casual requests instead of work entries
                setRecentWorkEntries(allRequests.slice(0, 5));
            }
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            console.error('Error details:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-RW', {
            style: 'currency',
            currency: 'RWF',
        }).format(amount);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'APPROVED':
                return 'bg-green-100 text-green-800';
            case 'PENDING':
                return 'bg-yellow-100 text-yellow-800';
            case 'REJECTED':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Welcome Section */}

            <div className="rounded-xl p-6" style={{ background: 'linear-gradient(to right, #16a34a, #2563eb)' }}>
                <h1 className="text-2xl font-bold mb-2" style={{ color: 'white' }}>
                    Welcome back, {user?.firstName || user?.email}!
                </h1>
                <p style={{ color: 'white', opacity: 0.9 }}>
                    Here's what's happening with your {user?.role === 'SYSTEM_ADMIN' ? 'system' : 'farm'} today.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-primary-100 rounded-lg">
                            <Users className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-primary-600">Total Casuals</p>
                            <p className="text-2xl font-bold text-primary-600">{stats.totalCasuals}</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-secondary-100 rounded-lg">
                            <ClipboardList className="w-6 h-6 text-secondary-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-secondary-600">Daily Requests</p>
                            <p className="text-2xl font-bold text-secondary-600">{stats.totalWorkEntries}</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <CheckCircle className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-secondary-600">Pending</p>
                            <p className="text-2xl font-bold text-secondary-600">{stats.pendingRequests}</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-primary-600">Approved</p>
                            <p className="text-2xl font-bold text-primary-600">{stats.approvedRequests}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Daily Requests */}
            <div className="card">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-accent-600">
                        Recent Daily Requests
                    </h2>
                    <button className="btn-primary text-sm">
                        View All
                    </button>
                </div>

                {recentWorkEntries.length === 0 ? (
                    <div className="text-center py-8">
                        <ClipboardList className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No daily requests found</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Activity
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Crop
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Casuals Required
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {recentWorkEntries.map((entry: any) => (
                                    <tr key={entry.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <p className="text-sm text-gray-900">{entry.activity}</p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <p className="text-sm text-gray-500">{entry.crop}</p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {new Date(entry.date).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <p className="text-sm text-gray-900">
                                                {entry.casualsRequired}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(entry.status)}`}>
                                                {entry.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {formatCurrency(entry.total)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
