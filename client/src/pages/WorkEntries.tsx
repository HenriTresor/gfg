import React, { useState, useEffect } from 'react';
import { Plus, Search, Calendar, MapPin, DollarSign } from 'lucide-react';
import { workEntryAPI, casualAPI } from '../lib/api';
import { useNotification } from '../components/ErrorNotification';

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

interface WorkEntry {
    id: string;
    activityDone: string;
    unit: number;
    costPerUnit: number;
    date: string;
    farmName: string;
    period: string;
    month: string;
    crop: string;
    cropStage?: string;
    adjustment?: number;
    amount: number;
    amountInclMomoCharges: number;
    casual: {
        id: string;
        name: string;
        phoneNumber: string;
    };
    createdAt: string;
}

interface Casual {
    id: string;
    name: string;
    nationalId: string;
    phoneNumber: string;
    farmName: string;
}

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

const WorkEntries: React.FC = () => {
    const { showError, showSuccess } = useNotification();
    const [workEntries, setWorkEntries] = useState<WorkEntry[]>([]);
    const [casuals, setCasuals] = useState<Casual[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingEntry, setEditingEntry] = useState<WorkEntry | null>(null);
    const [casualSearchTerm, setCasualSearchTerm] = useState('');
    const [filteredCasuals, setFilteredCasuals] = useState<Casual[]>([]);
    const [selectedCasual, setSelectedCasual] = useState<Casual | null>(null);
    const [searchTimeout, setSearchTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [formData, setFormData] = useState({
        casualId: '',
        activityDone: '',
        unit: 0,
        costPerUnit: 2000,
        date: '',
        farmName: 'Kamabuye',
        period: '',
        month: '',
        crop: '',
        cropStage: '',
        adjustment: 0,
    });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (casualSearchTerm) {
            const filtered = casuals.filter(casual =>
                casual.isActive && ( // Only show active casuals
                    casual.name.toLowerCase().includes(casualSearchTerm.toLowerCase()) ||
                    casual.phoneNumber.includes(casualSearchTerm) ||
                    casual.nationalId.includes(casualSearchTerm)
                )
            );
            setFilteredCasuals(filtered);
        } else {
            setFilteredCasuals([]);
        }
    }, [casualSearchTerm, casuals]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [entriesResponse, casualsResponse] = await Promise.all([
                workEntryAPI.getAll({ limit: 1000 }),
                casualAPI.getAll({ limit: 1000 })
            ]);

            setWorkEntries(entriesResponse.data.data.data || []);
            setCasuals(casualsResponse.data.data.data || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            fetchData();
            return;
        }

        try {
            setLoading(true);
            const response = await workEntryAPI.search(searchTerm);
            setWorkEntries(response.data.data.data || []);
        } catch (error) {
            console.error('Error searching work entries:', error);
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
            const data = {
                ...formData,
                unit: Number(formData.unit),
                costPerUnit: Number(formData.costPerUnit),
                adjustment: Number(formData.adjustment) || 0,
            };

            if (editingEntry) {
                await workEntryAPI.update(editingEntry.id, data);
                showSuccess('Work entry updated successfully!');
            } else {
                await workEntryAPI.create(data);
                showSuccess('Work entry created successfully!');
            }

            setShowModal(false);
            setEditingEntry(null);
            setFormData({
                casualId: '',
                activityDone: '',
                unit: 0,
                costPerUnit: 0,
                date: '',
                farmName: '',
                period: '',
                month: '',
                crop: '',
                cropStage: '',
                adjustment: 0,
            });
            fetchData();
        } catch (error: any) {
            console.error('Error saving work entry:', error);
            const errorMessage = extractErrorMessage(error);
            showError(errorMessage);
        } finally {
            setSubmitting(false);
        }
    };

    const handleEdit = (entry: WorkEntry) => {
        setEditingEntry(entry);
        setSelectedCasual({
            id: entry.casual.id,
            name: entry.casual.name,
            nationalId: '',
            phoneNumber: entry.casual.phoneNumber,
            farmName: entry.farmName
        });
        setCasualSearchTerm(entry.casual.name);
        setFormData({
            casualId: entry.casual.id,
            activityDone: entry.activityDone,
            unit: entry.unit,
            costPerUnit: entry.costPerUnit,
            date: entry.date.split('T')[0], // Format date for input
            farmName: entry.farmName,
            period: entry.period,
            month: entry.month,
            crop: entry.crop,
            cropStage: entry.cropStage || '',
            adjustment: entry.adjustment || 0,
        });
        setShowModal(true);
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-RW', {
            style: 'currency',
            currency: 'RWF',
        }).format(amount);
    };

    const handleCasualSelect = (casual: Casual) => {
        setSelectedCasual(casual);
        setCasualSearchTerm(casual.name);
        setFilteredCasuals([]);

        // Auto-fill casual data
        setFormData({
            ...formData,
            casualId: casual.id,
            farmName: casual.farmName || '',
            costPerUnit: 2000, // Default rate
        });
    };

    const handleActivityChange = (activity: string) => {
        const rate = ACTIVITY_RATES[activity] || 2000;
        setFormData({
            ...formData,
            activityDone: activity,
            costPerUnit: rate,
        });
    };

    const openModal = () => {
        setEditingEntry(null);
        setSelectedCasual(null);
        setCasualSearchTerm('');
        setFormData({
            casualId: '',
            activityDone: '',
            unit: 0,
            costPerUnit: 2000,
            date: '',
            farmName: 'Kamabuye',
            period: '',
            month: '',
            crop: '',
            cropStage: '',
            adjustment: 0,
        });
        setShowModal(true);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Cost Report</h1>
                    <p className="text-gray-600 mt-1">
                        Create work entries for casual workers to generate payment reports
                    </p>
                </div>
                <button onClick={openModal} className="btn-primary flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Entry
                </button>
            </div>

            {/* Search */}
            <div className="card">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search by activity, farm, crop, or casual name..."
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
                                        Casual
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Activity
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Farm
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Unit
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Rate (RWF)
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Adjustment
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Total Amount
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {workEntries.length === 0 ? (
                                    <tr>
                                        <td colSpan={9} className="px-6 py-12 text-center">
                                            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-500">No work entries found</p>
                                        </td>
                                    </tr>
                                ) : (
                                    workEntries.map((entry) => (
                                        <tr key={entry.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                                                        <span className="text-sm font-medium text-primary-600">
                                                            {entry.casual.name.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-medium text-gray-900">
                                                            {entry.casual.name}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {entry.casual.phoneNumber}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <p className="text-sm text-gray-900">{entry.activityDone}</p>
                                                <p className="text-sm text-gray-500">{entry.crop}</p>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {new Date(entry.date).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <MapPin className="w-4 h-4 mr-1" />
                                                    {entry.farmName}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {entry.unit}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {formatCurrency(entry.costPerUnit)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {entry.adjustment && entry.adjustment > 0 ? (
                                                    <span className="text-red-600">-{formatCurrency(entry.adjustment)}</span>
                                                ) : (
                                                    <span className="text-gray-400">-</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div className="flex items-center font-semibold">
                                                    <DollarSign className="w-4 h-4 mr-1" />
                                                    {formatCurrency(entry.amountInclMomoCharges)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button
                                                    onClick={() => handleEdit(entry)}
                                                    className="text-accent-600 hover:text-accent-900"
                                                >
                                                    Edit
                                                </button>
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
                            {editingEntry ? 'Edit Entry' : 'Add New Entry'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Search Casual Worker *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            value={casualSearchTerm}
                                            onChange={(e) => {
                                                setCasualSearchTerm(e.target.value);
                                                setSelectedCasual(null);
                                                setFormData({ ...formData, casualId: '' });
                                            }}
                                            className="input-field"
                                            placeholder="Search by name, phone, or ID..."
                                        />
                                        {filteredCasuals.length > 0 && (
                                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                                {filteredCasuals.map((casual) => (
                                                    <div
                                                        key={casual.id}
                                                        onClick={() => handleCasualSelect(casual)}
                                                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0"
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <p className="font-medium text-gray-900">{casual.name}</p>
                                                                <p className="text-sm text-gray-500">{casual.phoneNumber}</p>
                                                            </div>
                                                            <div className="text-xs text-gray-400">
                                                                ID: {casual.nationalId}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {selectedCasual && (
                                        <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                                            <p className="text-sm text-green-800">
                                                <strong>Selected:</strong> {selectedCasual.name} - {selectedCasual.phoneNumber}
                                            </p>
                                        </div>
                                    )}
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
                                        Activity Done *
                                    </label>
                                    <select
                                        required
                                        value={formData.activityDone}
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
                                        Unit (Days/Imibyizi) *
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        min="0"
                                        step="0.1"
                                        value={formData.unit}
                                        onChange={(e) => setFormData({ ...formData, unit: Number(e.target.value) })}
                                        className="input-field"
                                        placeholder="e.g., 1.5"
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
                                        placeholder="e.g., 5000"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Period *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.period}
                                        onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                                        className="input-field"
                                        placeholder="e.g., Week 31-6"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Month *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.month}
                                        onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                                        className="input-field"
                                        placeholder="e.g., January 2024"
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
                                        Adjustment (Cut Amount)
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData.adjustment}
                                        onChange={(e) => setFormData({ ...formData, adjustment: Number(e.target.value) })}
                                        className="input-field"
                                        placeholder="e.g., 1000"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-700">Total Amount:</span>
                                            <span className="text-lg font-bold text-blue-600">
                                                {formatCurrency((formData.unit * formData.costPerUnit) - formData.adjustment)}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            (Unit: {formData.unit} × Rate: {formatCurrency(formData.costPerUnit)} {formData.adjustment > 0 ? `- Adjustment: ${formatCurrency(formData.adjustment)}` : ''})
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-3 pt-4">
                                <button
                                    type="submit"
                                    className="btn-primary flex-1"
                                    disabled={submitting}
                                >
                                    {submitting ? 'Submitting...' : (editingEntry ? 'Update' : 'Create')}
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

export default WorkEntries;

