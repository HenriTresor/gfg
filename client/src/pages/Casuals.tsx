import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, User, Power, PowerOff } from 'lucide-react';
import { casualAPI } from '../lib/api';
import { useAuth } from '../lib/authContext';
import { useNotification } from '../components/ErrorNotification';
import ConfirmationDialog from '../components/ConfirmationDialog';

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

interface Casual {
    id: string;
    name: string;
    nationalId: string;
    phoneNumber: string;
    farmName: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

const Casuals: React.FC = () => {
    const { user } = useAuth();
    const { showError, showSuccess } = useNotification();
    const [casuals, setCasuals] = useState<Casual[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingCasual, setEditingCasual] = useState<Casual | null>(null);
    const [searchTimeout, setSearchTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    // Confirmation dialog states
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showToggleDialog, setShowToggleDialog] = useState(false);
    const [selectedCasual, setSelectedCasual] = useState<Casual | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        nationalId: '',
        phoneNumber: '',
        farmName: 'Kamabuye',
    });

    const isAdmin = user?.role === 'SYSTEM_ADMIN';

    useEffect(() => {
        fetchCasuals();
    }, []);

    const fetchCasuals = async () => {
        try {
            setLoading(true);
            const response = await casualAPI.getAll();
            setCasuals(response.data.data.data || []);
        } catch (error) {
            console.error('Error fetching casuals:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            fetchCasuals();
            return;
        }

        try {
            setLoading(true);
            console.log('Searching for:', searchTerm);
            const response = await casualAPI.search(searchTerm);
            console.log('Search response:', response.data);
            const casuals = response.data.data.data || [];
            console.log('Found casuals:', casuals.length);
            console.log('Casual names:', casuals.map((c: any) => c.name));
            setCasuals(casuals);
        } catch (error) {
            console.error('Error searching casuals:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);

        // Clear existing timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        // Set new timeout for auto-search
        const timeout = setTimeout(() => {
            handleSearch();
        }, 500); // 500ms delay

        setSearchTimeout(timeout);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            if (editingCasual) {
                await casualAPI.update(editingCasual.id, formData);
                showSuccess('Casual worker updated successfully!');
            } else {
                await casualAPI.create(formData);
                showSuccess('Casual worker created successfully!');
            }
            setShowModal(false);
            setEditingCasual(null);
            setFormData({ name: '', nationalId: '', phoneNumber: '', farmName: 'Kamabuye' });
            fetchCasuals();
        } catch (error: any) {
            console.error('Error saving casual:', error);
            const errorMessage = extractErrorMessage(error);
            showError(errorMessage);
        } finally {
            setSubmitting(false);
        }
    };

    const handleEdit = (casual: Casual) => {
        setEditingCasual(casual);
        setFormData({
            name: casual.name,
            nationalId: casual.nationalId,
            phoneNumber: casual.phoneNumber,
            farmName: casual.farmName,
        });
        setShowModal(true);
    };

    const handleDelete = (casual: Casual) => {
        setSelectedCasual(casual);
        setShowDeleteDialog(true);
    };

    const confirmDelete = async () => {
        if (!selectedCasual) return;

        try {
            await casualAPI.delete(selectedCasual.id);
            showSuccess('Casual worker deleted permanently!');
            fetchCasuals();
        } catch (error: any) {
            console.error('Error deleting casual:', error);
            const errorMessage = extractErrorMessage(error);
            showError(errorMessage);
        }
    };

    const handleToggleStatus = (casual: Casual) => {
        setSelectedCasual(casual);
        setShowToggleDialog(true);
    };

    const confirmToggleStatus = async () => {
        if (!selectedCasual) return;

        try {
            await casualAPI.toggleStatus(selectedCasual.id, !selectedCasual.isActive);
            showSuccess(`Casual worker ${!selectedCasual.isActive ? 'activated' : 'deactivated'} successfully!`);
            fetchCasuals();
        } catch (error: any) {
            console.error('Error toggling casual status:', error);
            const errorMessage = extractErrorMessage(error);
            showError(errorMessage);
        }
    };

    const openModal = () => {
        setEditingCasual(null);
        setFormData({ name: '', nationalId: '', phoneNumber: '', farmName: 'Kamabuye' });
        setShowModal(true);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Casual Workers</h1>
                <button onClick={openModal} className="btn-primary flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Casual
                </button>
            </div>

            {/* Search */}
            <div className="card">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search by name, national ID, or phone number..."
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="input-field pl-10 w-full"
                    />
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
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        National ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Phone Number
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Farm
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Created
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {casuals.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center">
                                            <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-500">No casuals found</p>
                                        </td>
                                    </tr>
                                ) : (
                                    casuals.map((casual) => (
                                        <tr key={casual.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                                                        <span className="text-sm font-medium text-primary-600">
                                                            {casual.name.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-medium text-gray-900">
                                                            {casual.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {casual.nationalId}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {casual.phoneNumber}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {casual.farmName}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${casual.isActive
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    {casual.isActive ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(casual.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                {isAdmin && (
                                                    <>
                                                        <button
                                                            onClick={() => handleToggleStatus(casual)}
                                                            className={`${casual.isActive ? 'text-yellow-600 hover:text-yellow-900' : 'text-green-600 hover:text-green-900'}`}
                                                            title={casual.isActive ? 'Deactivate' : 'Activate'}
                                                        >
                                                            {casual.isActive ? <PowerOff className="w-4 h-4" /> : <Power className="w-4 h-4" />}
                                                        </button>
                                                        <button
                                                            onClick={() => handleEdit(casual)}
                                                            className="text-accent-600 hover:text-accent-900"
                                                            title="Edit"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(casual)}
                                                            className="text-red-600 hover:text-red-900"
                                                            title="Delete Permanently"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </>
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
            {showModal && (
                <div className="fixed inset-0 bg-[rgb(0,0,0,0.3)] flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">
                            {editingCasual ? 'Edit Casual' : 'Add New Casual'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="input-field"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    National ID
                                </label>
                                <input
                                    type="text"
                                    required
                                    maxLength={16}
                                    value={formData.nationalId}
                                    onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                                    className="input-field"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    className="input-field"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Farm Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.farmName}
                                    onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                                    className="input-field"
                                    placeholder="e.g., Kamabuye"
                                />
                            </div>
                            <div className="flex space-x-3 pt-4">
                                <button
                                    type="submit"
                                    className="btn-primary flex-1"
                                    disabled={submitting}
                                >
                                    {submitting ? 'Submitting...' : (editingCasual ? 'Update' : 'Create')}
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

            {/* Delete Confirmation Dialog */}
            <ConfirmationDialog
                isOpen={showDeleteDialog}
                onClose={() => setShowDeleteDialog(false)}
                onConfirm={confirmDelete}
                title="Delete Casual Worker"
                message={`Are you sure you want to permanently delete ${selectedCasual?.name}? This action cannot be undone.`}
                confirmText="Delete Permanently"
                cancelText="Cancel"
                type="danger"
            />

            {/* Toggle Status Confirmation Dialog */}
            <ConfirmationDialog
                isOpen={showToggleDialog}
                onClose={() => setShowToggleDialog(false)}
                onConfirm={confirmToggleStatus}
                title={selectedCasual?.isActive ? 'Deactivate Casual Worker' : 'Activate Casual Worker'}
                message={`Are you sure you want to ${selectedCasual?.isActive ? 'deactivate' : 'activate'} ${selectedCasual?.name}?`}
                confirmText={selectedCasual?.isActive ? 'Deactivate' : 'Activate'}
                cancelText="Cancel"
                type="warning"
            />
        </div>
    );
};

export default Casuals;
