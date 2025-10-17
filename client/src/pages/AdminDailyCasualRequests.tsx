import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock, MapPin, DollarSign } from 'lucide-react';
import { dailyCasualRequestAPI } from '../lib/api';

interface DailyCasualRequest {
    id: string;
    casualsRequired: number;
    crop: string;
    cropStage: string;
    date: string;
    week: string;
    activity: string;
    farmName: string;
    adjustment: number;
    units: number;
    costPerUnit: number;
    total: number;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    rejectionReason?: string;
    supervisor: {
        id: string;
        email: string;
        firstName?: string;
        lastName?: string;
    };
    admin?: {
        id: string;
        email: string;
        firstName?: string;
        lastName?: string;
    };
    createdAt: string;
}

const AdminDailyCasualRequests: React.FC = () => {
    const [requests, setRequests] = useState<DailyCasualRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedRequest, setSelectedRequest] = useState<DailyCasualRequest | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [actionType, setActionType] = useState<'approve' | 'reject'>('approve');
    const [rejectionReason, setRejectionReason] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetchAllRequests();
    }, []);

    const fetchAllRequests = async () => {
        try {
            setLoading(true);
            // Fetch all requests without any filters
            const response = await dailyCasualRequestAPI.getAllRequests({
                limit: 1000,
                // No status filter - get all
            });
            console.log('All requests response:', response.data);
            const requestsData = response.data.data.data || [];
            console.log('Number of requests:', requestsData.length);
            console.log('Requests:', requestsData);
            setRequests(requestsData);
        } catch (error) {
            console.error('Error fetching all requests:', error);
            console.error('Error details:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAction = async () => {
        if (!selectedRequest) return;

        try {
            setProcessing(true);
            if (actionType === 'approve') {
                await dailyCasualRequestAPI.approveRequest(selectedRequest.id);
            } else {
                if (!rejectionReason.trim()) {
                    alert('Please provide a reason for rejection');
                    return;
                }
                await dailyCasualRequestAPI.rejectRequest(selectedRequest.id, { rejectionReason });
            }

            setShowModal(false);
            setSelectedRequest(null);
            setRejectionReason('');
            fetchAllRequests();
        } catch (error) {
            console.error('Error processing request:', error);
        } finally {
            setProcessing(false);
        }
    };

    const openModal = (request: DailyCasualRequest, action: 'approve' | 'reject') => {
        setSelectedRequest(request);
        setActionType(action);
        setRejectionReason('');
        setShowModal(true);
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-RW', {
            style: 'currency',
            currency: 'RWF',
        }).format(amount);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Daily Casual Requests</h1>
                    <p className="text-gray-600 mt-1">
                        Review and approve/reject daily casual requests from farm supervisors
                    </p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{requests.filter(r => r.status === 'PENDING').length} pending</span>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <Clock className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Pending</p>
                            <p className="text-2xl font-bold text-gray-900">{requests.filter(r => r.status === 'PENDING').length}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Approved</p>
                            <p className="text-2xl font-bold text-gray-900">{requests.filter(r => r.status === 'APPROVED').length}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-red-100 rounded-lg">
                            <XCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Rejected</p>
                            <p className="text-2xl font-bold text-gray-900">{requests.filter(r => r.status === 'REJECTED').length}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-accent-100 rounded-lg">
                            <DollarSign className="w-6 h-6 text-accent-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Total Amount</p>
                            <p className="text-2xl font-bold text-gray-900">
                                {formatCurrency(requests.reduce((sum, req) => sum + req.total, 0))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="card">
                {loading ? (
                    <div className="flex items-center justify-center h-32">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Request Details
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date/Week
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Casuals Required
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Total Amount
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Submitted
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {requests.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center">
                                            <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-500">No requests found</p>
                                        </td>
                                    </tr>
                                ) : (
                                    requests.map((request) => (
                                        <tr key={request.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {request.activity}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {request.crop} • {request.farmName}
                                                    </p>
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <MapPin className="w-3 h-3 mr-1" />
                                                        {request.cropStage}
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        {request.units} units × {formatCurrency(request.costPerUnit)}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <p className="text-sm text-gray-900">
                                                    {new Date(request.date).toLocaleDateString()}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {request.week}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {request.casualsRequired} casuals
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div className="flex items-center">
                                                    <DollarSign className="w-4 h-4 mr-1" />
                                                    {formatCurrency(request.total)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(request.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="space-y-1">
                                                    <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${request.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                                                        request.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                                            'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {request.status}
                                                    </span>
                                                    {request.status === 'REJECTED' && request.rejectionReason && (
                                                        <p className="text-xs text-red-600 mt-1 max-w-xs">
                                                            {request.rejectionReason}
                                                        </p>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                {request.status === 'PENDING' && (
                                                    <div className="flex flex-col space-y-2">
                                                        <button
                                                            onClick={() => openModal(request, 'approve')}
                                                            className="text-green-600 hover:text-green-900 flex items-center"
                                                        >
                                                            <CheckCircle className="w-4 h-4 mr-1" />
                                                            Approve
                                                        </button>
                                                        <button
                                                            onClick={() => openModal(request, 'reject')}
                                                            className="text-red-600 hover:text-red-900 flex items-center"
                                                        >
                                                            <XCircle className="w-4 h-4 mr-1" />
                                                            Reject
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && selectedRequest && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">
                            {actionType === 'approve' ? 'Approve Request' : 'Reject Request'}
                        </h2>

                        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-medium text-gray-900 mb-2">Request Details:</h3>
                            <p className="text-sm text-gray-600">
                                <strong>Activity:</strong> {selectedRequest.activity}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Crop:</strong> {selectedRequest.crop} ({selectedRequest.cropStage})
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Farm:</strong> {selectedRequest.farmName}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Casuals Required:</strong> {selectedRequest.casualsRequired}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Date:</strong> {new Date(selectedRequest.date).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Total Amount:</strong> {formatCurrency(selectedRequest.total)}
                            </p>
                        </div>

                        {actionType === 'reject' && (
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Reason for Rejection *
                                </label>
                                <textarea
                                    value={rejectionReason}
                                    onChange={(e) => setRejectionReason(e.target.value)}
                                    className="input-field h-20 resize-none"
                                    placeholder="Please provide a reason for rejection..."
                                    required
                                />
                            </div>
                        )}

                        <div className="flex space-x-3">
                            <button
                                onClick={handleAction}
                                disabled={processing}
                                className={`flex-1 py-2 px-4 rounded-lg font-medium text-white transition-colors ${actionType === 'approve'
                                    ? 'bg-green-600 hover:bg-green-700 disabled:bg-green-400'
                                    : 'bg-red-600 hover:bg-red-700 disabled:bg-red-400'
                                    }`}
                            >
                                {processing ? 'Processing...' : actionType === 'approve' ? 'Approve' : 'Reject'}
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 btn-secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDailyCasualRequests;

