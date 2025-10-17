import React, { useState } from 'react';
import { UserPlus, Mail, Lock, User } from 'lucide-react';
import { adminAPI } from '../lib/api';
import { useNotification } from '../components/ErrorNotification';

const AdminSupervisors: React.FC = () => {
    const { showSuccess, showError } = useNotification();
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await adminAPI.createSupervisor(formData);
            showSuccess('Supervisor created successfully!');
            setShowModal(false);
            setFormData({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
            });
        } catch (error: any) {
            const errorMessage = error.response?.data?.error || 'Failed to create supervisor';
            showError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-primary-600">Add Supervisor</h1>
                    <p className="text-accent-600 mt-1">
                        Create a new farm supervisor account
                    </p>
                </div>
                <button onClick={() => setShowModal(true)} className="btn-primary flex items-center">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add Supervisor
                </button>
            </div>

            {/* Info Card */}
            <div className="card bg-blue-50 border-blue-200">
                <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-lg">
                        <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-sm font-medium text-blue-900">About Farm Supervisors</h3>
                        <p className="text-sm text-blue-700 mt-1">
                            Farm supervisors can add casual workers to the system and create daily work entries.
                            They cannot edit or delete casual workers, approve/reject requests, or access admin functions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className="card">
                <h2 className="text-lg font-semibold text-accent-600 mb-4">Instructions</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Enter the supervisor's email address</li>
                    <li>Create a secure password (minimum 8 characters)</li>
                    <li>Optionally add their first and last name</li>
                    <li>Click "Create Supervisor" to add them to the system</li>
                    <li>Share the login credentials with the supervisor</li>
                </ol>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4 text-primary-600">Add New Supervisor</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="input-field pl-10"
                                        placeholder="supervisor@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        minLength={8}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="input-field pl-10"
                                        placeholder="Minimum 8 characters"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    Must be at least 8 characters long
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="input-field pl-10"
                                        placeholder="John"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className="input-field pl-10"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="flex space-x-3 pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-primary flex-1"
                                >
                                    {loading ? 'Creating...' : 'Create Supervisor'}
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

export default AdminSupervisors;

