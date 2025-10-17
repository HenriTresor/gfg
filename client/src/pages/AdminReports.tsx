import React, { useState, useEffect } from 'react';
import { Download, FileText, Calendar, Filter, DollarSign, User } from 'lucide-react';
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
        farmName?: string;
    };
}

const AdminReports: React.FC = () => {
    const [report, setReport] = useState<PaymentReport | null>(null);
    const [loading, setLoading] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        startDate: '',
        endDate: '',
        farmName: '',
    });

    useEffect(() => {
        generateReport();
    }, []);

    const generateReport = async (customFilters?: any) => {
        try {
            setLoading(true);
            const reportFilters = customFilters || {};

            const response = await adminAPI.generateCustomPaymentReport(reportFilters);
            setReport(response.data.data);
        } catch (error) {
            console.error('Error generating report:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        generateReport(filters);
        setShowFilters(false);
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-RW', {
            style: 'currency',
            currency: 'RWF',
        }).format(amount);
    };

    const exportToExcel = () => {
        if (!report) return;

        // Create worksheet data
        const worksheetData = report.entries.map(entry => ({
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
        const filename = `casual-payment-report-${new Date().toISOString().split('T')[0]}.xlsx`;

        // Write file
        XLSX.writeFile(wb, filename);
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
                        onClick={() => setShowFilters(!showFilters)}
                        className="btn-secondary flex items-center"
                    >
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                    </button>
                    {report && (
                        <>
                            <button
                                onClick={exportToExcel}
                                className="btn-primary flex items-center"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Export Excel
                            </button>
                        </>
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
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Farm Name
                                </label>
                                <input
                                    type="text"
                                    value={filters.farmName}
                                    onChange={(e) => setFilters({ ...filters, farmName: e.target.value })}
                                    className="input-field"
                                    placeholder="e.g., Farm A"
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

            {/* Summary Cards */}
            {report && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="card">
                        <div className="flex items-center">
                            <div className="p-3 bg-primary-100 rounded-lg">
                                <User className="w-6 h-6 text-primary-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Casuals</p>
                                <p className="text-2xl font-bold text-gray-900">{report.summary.totalCasuals}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="flex items-center">
                            <div className="p-3 bg-accent-100 rounded-lg">
                                <FileText className="w-6 h-6 text-accent-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Work Entries</p>
                                <p className="text-2xl font-bold text-gray-900">{report.summary.totalWorkEntries}</p>
                            </div>
                        </div>
                    </div>
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
                        <p className="text-gray-500">No report generated yet</p>
                        <button
                            onClick={() => generateReport()}
                            className="btn-primary mt-4"
                        >
                            Generate Report
                        </button>
                    </div>
                )}
            </div>

            {/* Report Info */}
            {report && (
                <div className="card">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Report generated on {new Date(report.generatedAt).toLocaleString()}</span>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminReports;
