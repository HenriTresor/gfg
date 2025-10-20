import React, { useState, useEffect } from 'react';
import { Plus, Clock, CheckCircle, XCircle } from 'lucide-react';
import { dailyCasualRequestAPI } from '../lib/api';
import { useNotification } from '../components/ErrorNotification';

// Helper function to extract error messages from different response formats
const extractErrorMessage = (error: any): string => {
    if (!error.response?.data) {
        return error.message || 'An unexpected error occurred';
    }

    const data = error.response.data;

    // Handle validation errors with details array
    if (data.error === 'Validation failed' && data.details && Array.isArray(data.details)) {
        return data.details.map((detail: any) => detail.message).join(', ');
    }

    // Handle single error message
    if (data.error) {
        return data.error;
    }

    // Handle array of error messages
    if (Array.isArray(data.message)) {
        return data.message.join(', ');
    }

    // Handle single message
    if (data.message) {
        return data.message;
    }

    return 'An unexpected error occurred';
};

// Activity rates
const ACTIVITY_RATES: { [key: string]: number } = {
    'Kamabuye-Security Guard': 7500,
    'Kamabuye-Security Guard (All Farm)': 7500,
    'Kamabuye-Security Guard (Stock)': 7500,
    'Kamabuye-Staking': 2000,
    'Kamabuye-Cleaning': 2000,
    'Kamabuye-Uprooting': 2000,
    'Kamabuye-Spraying': 2000,
    'Kamabuye-Harvesting French Beans': 2000,
    'Kamabuye-Harvesting Tomatoes': 2000,
    'Kamabuye-Harvesting Snow Peas': 2000,
    'Kamabuye-Harvesting Sugar Snaps': 2000,
    'Kamabuye-Harvesting Karela': 2000,
    'Kamabuye-Harvesting Habanero': 2000,
    'Kamabuye-Harvesting Green Chilli': 2000,
    'Kamabuye-Green House Maintenance': 2000,
    'Kamabuye-Sorting': 2000,
    'Kamabuye-Pruning': 2000,
    'Kamabuye-Sowing': 2000,
    'Kamabuye-Land Preparation': 2000,
    'Kamabuye-Tracing Furrows': 2000,
    'Kamabuye-Holingout': 2000,
    'Kamabuye-Transporting Compost': 2000,
    'Kamabuye-Field Supervisor': 2000,
    'Kamabuye-Manure Application': 2000,
    'Kamabuye-Fertilizer Application': 2000,
    'Kamabuye-Transplanting': 2000,
    'Kamabuye-Drenching': 2000,
    'Kamabuye-Irrigation': 2000,
    'Kamabuye-Weeding': 2000,
    'Kamabuye-Top Dressing': 2000,
    'Kamabuye-Mulching': 2000,
    'Kamabuye-Trellising': 2000,
};

// Available activities
const ACTIVITIES = Object.keys(ACTIVITY_RATES);

// Available crops
const CROPS = [
    'Snow Peas',
    'Avocado',
    'Tomato',
    'Habanero',
    'Green Chilli',
    'Red Chilli',
    'Karela',
    'Sugar Snaps',
    'Baby Corn',
    'Okra',
    'Fine Beans',
    'Extra Fine Beans',
    'Sunflower',
    'Tender Stem Broccoli'
];

// Crop stages (Phase 1-30)
const CROP_STAGES = Array.from({ length: 30 }, (_, i) => `Phase ${i + 1}`);

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

const DailyCasualRequests: React.FC = () => {
    const { showError, showSuccess } = useNotification();
    const [requests, setRequests] = useState<DailyCasualRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editingRequest, setEditingRequest] = useState<DailyCasualRequest | null>(null);
    const [formData, setFormData] = useState({
        casualsRequired: 1,
        crop: '',
        cropStage: '',
        date: '',
        week: '',
        activity: '',
        farmName: 'Kamabuye',
        units: 1,
        costPerUnit: 2000,
    });

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            setLoading(true);
            const response = await dailyCasualRequestAPI.getMyRequests({ limit: 1000 });
            setRequests(response.data.data.data || []);
        } catch (error) {
            console.error('Error fetching requests:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const data = {
                ...formData,
                casualsRequired: Number(formData.casualsRequired),
                units: Number(formData.units),
                costPerUnit: Number(formData.costPerUnit),
            };

            if (editingRequest) {
                await dailyCasualRequestAPI.update(editingRequest.id, data);
                showSuccess('Daily casual request updated successfully!');
            } else {
                await dailyCasualRequestAPI.create(data);
                showSuccess('Daily casual request created successfully!');
            }

            setShowModal(false);
            setEditingRequest(null);
            resetForm();
            fetchRequests();
        } catch (error: any) {
            console.error('Error saving request:', error);
            const errorMessage = extractErrorMessage(error);
            showError(errorMessage);
        } finally {
            setSubmitting(false);
        }
    };

    // const handleEdit = (request: DailyCasualRequest) => {
    //     setEditingRequest(request);
    //     setFormData({
    //         casualsRequired: request.casualsRequired,
    //         crop: request.crop,
    //         cropStage: request.cropStage,
    //         date: request.date.split('T')[0],
    //         week: request.week,
    //         activity: request.activity,
    //         farmName: request.farmName,
    //         units: request.units,
    //         costPerUnit: request.costPerUnit,
    //     });
    //     setShowModal(true);
    // };

    // const handleDelete = async (id: string) => {
    //     if (window.confirm('Are you sure you want to delete this request?')) {
    //         try {
    //             await dailyCasualRequestAPI.delete(id);
    //             fetchRequests();
    //         } catch (error) {
    //             console.error('Error deleting request:', error);
    //         }
    //     }
    // };

    const resetForm = () => {
        setFormData({
            casualsRequired: 1,
            crop: '',
            cropStage: '',
            date: '',
            week: '',
            activity: '',
            farmName: 'Kamabuye',
            units: 1,
            costPerUnit: 2000,
        });
    };

    const handleActivityChange = (activity: string) => {
        const rate = ACTIVITY_RATES[activity] || 2000;
        setFormData({
            ...formData,
            activity: activity,
            costPerUnit: rate,
        });
    };

    const openModal = () => {
        setEditingRequest(null);
        resetForm();
        setShowModal(true);
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

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'APPROVED':
                return <CheckCircle className="w-4 h-4" />;
            case 'PENDING':
                return <Clock className="w-4 h-4" />;
            case 'REJECTED':
                return <XCircle className="w-4 h-4" />;
            default:
                return null;
        }
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
                        Request casual workers for specific tasks
                    </p>
                </div>
                <button onClick={openModal} className="btn-primary flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    New Request
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card">
                    <div className="flex items-center">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <Clock className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">Pending</p>
                            <p className="text-2xl font-bold text-gray-900">
                                {requests.filter(r => r.status === 'PENDING').length}
                            </p>
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
                            <p className="text-2xl font-bold text-gray-900">
                                {requests.filter(r => r.status === 'APPROVED').length}
                            </p>
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
                            <p className="text-2xl font-bold text-gray-900">
                                {requests.filter(r => r.status === 'REJECTED').length}
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
                                        <td colSpan={6} className="px-6 py-12 text-center">
                                            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
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
                                                    <p className="text-xs text-gray-500">
                                                        {request.cropStage}
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
                                                {formatCurrency(request.total)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                                                    {getStatusIcon(request.status)}
                                                    <span className="ml-1">{request.status}</span>
                                                </span>
                                                {request.status === 'REJECTED' && request.rejectionReason && (
                                                    <p className="text-xs text-red-600 mt-1">
                                                        {request.rejectionReason}
                                                    </p>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                {/* Supervisors can only add, not edit or delete */}
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
            {showModal && (
                <div className="fixed inset-0 bg-[rgb(0,0,0,0.3)] flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <h2 className="text-lg font-semibold mb-4">
                            {editingRequest ? 'Edit Request' : 'New Daily Casual Request'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Casuals Required *
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        min="1"
                                        value={formData.casualsRequired}
                                        onChange={(e) => setFormData({ ...formData, casualsRequired: Number(e.target.value) })}
                                        className="input-field"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Date *
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="input-field"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Week *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.week}
                                        onChange={(e) => setFormData({ ...formData, week: e.target.value })}
                                        className="input-field"
                                        placeholder="e.g., week 7-13"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Farm Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.farmName}
                                        onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                                        className="input-field bg-gray-100"
                                        placeholder="Kamabuye"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Crop *
                                    </label>
                                    <select
                                        required
                                        value={formData.crop}
                                        onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                                        className="input-field"
                                    >
                                        <option value="">Select Crop</option>
                                        {CROPS.map((crop) => (
                                            <option key={crop} value={crop}>
                                                {crop}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Crop Stage *
                                    </label>
                                    <select
                                        required
                                        value={formData.cropStage}
                                        onChange={(e) => setFormData({ ...formData, cropStage: e.target.value })}
                                        className="input-field"
                                    >
                                        <option value="">Select Phase</option>
                                        {CROP_STAGES.map((stage) => (
                                            <option key={stage} value={stage}>
                                                {stage}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Activity *
                                    </label>
                                    <select
                                        required
                                        value={formData.activity}
                                        onChange={(e) => handleActivityChange(e.target.value)}
                                        className="input-field"
                                    >
                                        <option value="">Select Activity</option>
                                        {ACTIVITIES.map((activity) => (
                                            <option key={activity} value={activity}>
                                                {activity}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Units *
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        min="1"
                                        value={formData.units}
                                        onChange={(e) => setFormData({ ...formData, units: Number(e.target.value) })}
                                        className="input-field"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Cost per Unit (RWF) *
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        min="0"
                                        value={formData.costPerUnit}
                                        onChange={(e) => setFormData({ ...formData, costPerUnit: Number(e.target.value) })}
                                        className="input-field"
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-3 pt-4">
                                <button
                                    type="submit"
                                    className="btn-primary flex-1"
                                    disabled={submitting}
                                >
                                    {submitting ? 'Submitting...' : (editingRequest ? 'Update' : 'Create')}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="btn-secondary flex-1"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DailyCasualRequests;

