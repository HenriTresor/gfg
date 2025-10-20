import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, FileText, Calendar, Filter, DollarSign, Trash2 } from 'lucide-react';
import { adminAPI } from '../lib/api';
import * as XLSX from 'xlsx';

interface PaymentReportEntry {
    casualId: string;
    casual: {
        name: string;
        phoneNumber: string;
        nationalId: string;
    };
    workEntries: Array<{
        id: string;
        activityDone: string;
        date: string;
        farmName: string;
        amount: number;
        amountInclMomoCharges: number;
        adjustment: number;
    }>;
    totalAmount: number;
    totalAmountInclMomoCharges: number;
}

interface PaymentReport {
    entries: PaymentReportEntry[];
    summary: {
        totalCasuals: number;
        totalAmount: number;
        totalAmountInclMomoCharges: number;
        totalWorkEntries: number;
    };
    generatedAt: string;
    filters: {
        startDate?: string;
        endDate?: string;
    };
}

const AdminReports: React.FC = () => {
    const { reportId } = useParams<{ reportId?: string }>();
    const navigate = useNavigate();

    const [report, setReport] = useState<PaymentReport | null>(null);
    const [loading, setLoading] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [allReports, setAllReports] = useState<any[]>([]);
    const [filters, setFilters] = useState({
        startDate: '',
        endDate: '',
    });

    useEffect(() => {
        if (!reportId) {
            loadLatestReport();
        } else if (reportId === 'all') {
            loadAllReports();
        } else {
            loadReportById(reportId);
        }
    }, [reportId]);

    const loadLatestReport = async () => {
        try {
            setLoading(true);
            const response = await adminAPI.getLatestReport();
            if (response.data.data) {
                setReport(response.data.data);
            }
        } catch (error) {
            console.error('Error loading latest report:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadReportById = async (id: string) => {
        try {
            setLoading(true);
            const response = await adminAPI.getReportById(id);
            setReport(response.data.data);
        } catch (error) {
            console.error('Error loading report:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadAllReports = async () => {
        try {
            setLoading(true);
            const response = await adminAPI.getAllReports();
            setAllReports(response.data.data || []);
        } catch (error) {
            console.error('Error loading all reports:', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteReport = async (id: string) => {
        if (!confirm('Are you sure you want to delete this report? This action cannot be undone.')) {
            return;
        }

        try {
            await adminAPI.deleteReport(id);
            // If we're viewing the deleted report, go back to latest
            if (reportId === id) {
                navigate('/admin/reports');
            } else {
                // Reload the all reports list
                loadAllReports();
            }
        } catch (error) {
            console.error('Error deleting report:', error);
            alert('Failed to delete report');
        }
    };

    const generateReport = async (customFilters?: any) => {
        try {
            setLoading(true);
            const reportFilters = customFilters || {};

            const response = await adminAPI.generateCustomPaymentReport(reportFilters);
            setReport(response.data.data);
            navigate('/admin/reports'); // Navigate to latest report view
        } catch (error) {
            console.error('Error generating report:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleViewAllReports = () => {
        navigate('/admin/reports/all');
    };

    const handleViewLatestReport = () => {
        navigate('/admin/reports');
    };

    const handleFilterSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate that at least date range is provided
        if (!filters.startDate || !filters.endDate) {
            alert('Please select both start date and end date to generate the report.');
            return;
        }

        // Validate that end date is after start date
        if (new Date(filters.endDate) < new Date(filters.startDate)) {
            alert('End date must be after start date.');
            return;
        }

        generateReport(filters);
        setShowFilters(false);
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-RW', {
            style: 'currency',
            currency: 'RWF',
        }).format(amount);
    };

    const exportToExcel = (reportData?: PaymentReport) => {
        const dataToExport = reportData || report;
        if (!dataToExport) return;

        // Create worksheet data
        const worksheetData = dataToExport.entries.map(entry => ({
            'Row Labels': entry.casual.name,
            'Amount': entry.totalAmount,
            'Amount incl momo charges': entry.totalAmountInclMomoCharges,
            'Signature': '', // Empty signature column
            'Telephone': entry.casual.phoneNumber,
        }));

        // Create workbook and worksheet
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(worksheetData);

        // Set column widths
        ws['!cols'] = [
            { wch: 25 }, // Casual Name
            { wch: 15 }, // Telephone
            { wch: 18 }, // National ID
            { wch: 15 }, // Amount
            { wch: 25 }, // Amount incl momo charges
            { wch: 15 }, // Signature
            { wch: 15 }, // Work Entries
        ];

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, 'Payment Report');

        // Generate filename with date
        const dateStr = dataToExport.filters.startDate
            ? new Date(dataToExport.filters.startDate).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0];
        const filename = `casual-payment-report-${dateStr}.xlsx`;

        // Write file
        XLSX.writeFile(wb, filename);
    };

    const exportReportById = async (reportId: string) => {
        try {
            const response = await adminAPI.getReportById(reportId);
            if (response.data.data) {
                exportToExcel(response.data.data);
            }
        } catch (error) {
            console.error('Error exporting report:', error);
            alert('Failed to export report');
        }
    };



    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Payment Reports</h1>
                    <p className="text-gray-600 mt-1">
                        Generate and download payment reports for casual workers
                    </p>
                </div>
                <div className="flex space-x-3">
                    <button
                        onClick={reportId === 'all' ? handleViewLatestReport : handleViewAllReports}
                        className="btn-secondary flex items-center"
                    >
                        <FileText className="w-4 h-4 mr-2" />
                        {reportId === 'all' ? 'View Latest Report' : 'View All Reports'}
                    </button>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="btn-secondary flex items-center"
                    >
                        <Filter className="w-4 h-4 mr-2" />
                        Generate Report
                    </button>
                    {report && reportId !== 'all' && (
                        <button
                            onClick={() => exportToExcel()}
                            className="btn-primary flex items-center"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Export Excel
                        </button>
                    )}
                </div>
            </div>

            {/* Filters */}
            {showFilters && (
                <div className="card">
                    <form onSubmit={handleFilterSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    value={filters.startDate}
                                    onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                                    className="input-field"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    value={filters.endDate}
                                    onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                                    className="input-field"
                                />
                            </div>
                           
                        </div>
                        <div className="flex space-x-3">
                            <button type="submit" className="btn-primary">
                                Generate Report
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowFilters(false)}
                                className="btn-secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Latest Report Banner */}
            {report && reportId !== 'all' && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center mb-2">
                                <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                                <h3 className="text-lg font-semibold text-blue-900">
                                    {reportId ? 'Report Details' : 'Latest Report Generated'}
                                </h3>
                            </div>
                            <p className="text-sm text-blue-700">
                                Generated on: <span className="font-semibold">{new Date(report.generatedAt).toLocaleString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}</span>
                            </p>
                            <div className="mt-2 flex flex-wrap gap-4 text-xs text-blue-600">
                                {report.filters.startDate && (
                                    <span className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        From: {new Date(report.filters.startDate).toLocaleDateString()}
                                    </span>
                                )}
                                {report.filters.endDate && (
                                    <span className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        To: {new Date(report.filters.endDate).toLocaleDateString()}
                                    </span>
                                )}
                               
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-blue-600 mb-1">Total Entries</p>
                            <p className="text-3xl font-bold text-blue-900">{report.summary.totalWorkEntries}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Summary Cards */}
            {report && reportId !== 'all' && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">


                    <div className="card">
                        <div className="flex items-center">
                            <div className="p-3 bg-secondary-100 rounded-lg">
                                <DollarSign className="w-6 h-6 text-secondary-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Amount</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {formatCurrency(report.summary.totalAmount)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">With Momo Charges</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {formatCurrency(report.summary.totalAmountInclMomoCharges)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Report Table */}
            {reportId !== 'all' && (
                <div className="card">
                    {loading ? (
                        <div className="flex items-center justify-center h-32">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                        </div>
                    ) : report ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Casual Worker
                                        </th>

                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Amount
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Amount incl momo charges
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Signature
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Telephone
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {report.entries.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center">
                                                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                                <p className="text-gray-500">No data found for the selected filters</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        report.entries.map((entry) => (
                                            <tr key={entry.casualId} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">

                                                        <div className="ml-4">
                                                            <p className="text-sm font-medium text-gray-900">
                                                                {entry.casual.name}
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {entry.casual.phoneNumber}
                                                            </p>
                                                            <p className="text-xs text-gray-500">
                                                                ID: {entry.casual.nationalId}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <div className="flex items-center">
                                                        <DollarSign className="w-4 h-4 mr-1" />
                                                        {formatCurrency(entry.totalAmount)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <div className="flex items-center">
                                                        <DollarSign className="w-4 h-4 mr-1" />
                                                        {formatCurrency(entry.totalAmountInclMomoCharges)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <div className="w-32 h-12 border border-gray-300 rounded bg-gray-50"></div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {entry.casual.phoneNumber}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500 mb-2">No report generated yet</p>
                            <p className="text-sm text-gray-400">Click the "Filters" button above to generate a report</p>
                        </div>
                    )}
                </div>
            )}

            {/* All Reports Table */}
            {reportId === 'all' && (
                <div className="card">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900">All Generated Reports</h3>
                        <p className="text-sm text-gray-600">View all payment reports generated in the system</p>
                    </div>
                    {loading ? (
                        <div className="flex items-center justify-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Generated Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Generated By
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date Range
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total Casuals
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
                                    {allReports.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="px-6 py-12 text-center">
                                                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                                <p className="text-gray-500">No reports found</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        allReports.map((reportItem) => (
                                            <tr key={reportItem.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                                        <div>
                                                            <p className="text-sm font-medium text-gray-900">
                                                                {new Date(reportItem.generatedAt).toLocaleDateString()}
                                                            </p>
                                                            <p className="text-xs text-gray-500">
                                                                {new Date(reportItem.generatedAt).toLocaleTimeString()}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <p className="text-sm text-gray-900">
                                                        {reportItem.generatedBy.firstName
                                                            ? `${reportItem.generatedBy.firstName} ${reportItem.generatedBy.lastName || ''}`
                                                            : reportItem.generatedBy.email}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {reportItem.generatedBy.email}
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {reportItem.filters.startDate && (
                                                            <p>From: {new Date(reportItem.filters.startDate).toLocaleDateString()}</p>
                                                        )}
                                                        {reportItem.filters.endDate && (
                                                            <p>To: {new Date(reportItem.filters.endDate).toLocaleDateString()}</p>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {reportItem.summary.totalCasuals}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <div className="flex items-center">
                                                        <DollarSign className="w-4 h-4 mr-1" />
                                                        {formatCurrency(reportItem.summary.totalAmountInclMomoCharges)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <div className="flex items-center space-x-3">
                                                        <button
                                                            onClick={() => navigate(`/admin/reports/${reportItem.id}`)}
                                                            className="text-primary-600 hover:text-primary-900"
                                                        >
                                                            View Details
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                exportReportById(reportItem.id);
                                                            }}
                                                            className="text-green-600 hover:text-green-900 flex items-center"
                                                        >
                                                            <Download className="w-4 h-4 mr-1" />
                                                            Export
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                deleteReport(reportItem.id);
                                                            }}
                                                            className="text-red-600 hover:text-red-900 flex items-center"
                                                        >
                                                            <Trash2 className="w-4 h-4 mr-1" />
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}


        </div>
    );
};

export default AdminReports;
