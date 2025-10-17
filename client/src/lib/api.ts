import axios from 'axios';

const API_BASE_URL = 'https://gfg-bo84.onrender.com/api';

// Create axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        console.log('API Request - Token:', token ? 'Present' : 'Missing');
        console.log('API Request - URL:', config.url);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log('API Request - Authorization header set');
        } else {
            console.warn('API Request - No token found in localStorage');
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (refreshToken) {
                    const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
                        refreshToken,
                    });

                    const { accessToken } = response.data.data;
                    localStorage.setItem('accessToken', accessToken);

                    // Retry original request
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return api(originalRequest);
                }
            } catch (refreshError) {
                // Refresh failed, redirect to login
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('user');
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    }
);

// Auth API
export const authAPI = {
    login: (credentials: { email: string; password: string }) =>
        api.post('/auth/login', credentials),

    register: (userData: {
        email: string;
        password: string;
        firstName?: string;
        lastName?: string;
        role: 'FARM_SUPERVISOR' | 'SYSTEM_ADMIN';
    }) => api.post('/auth/register', userData),

    logout: () => api.post('/auth/logout'),

    refreshToken: (refreshToken: string) =>
        api.post('/auth/refresh', { refreshToken }),
};

// Casual API
export const casualAPI = {
    getAll: (params?: { page?: number; limit?: number; search?: string }) =>
        api.get('/casuals', { params }),

    getById: (id: string) => api.get(`/casuals/${id}`),

    create: (casualData: {
        name: string;
        nationalId: string;
        phoneNumber: string;
    }) => api.post('/casuals', casualData),

    update: (id: string, casualData: any) =>
        api.put(`/casuals/${id}`, casualData),

    delete: (id: string) => api.delete(`/casuals/${id}`),

    search: (search: string, params?: { page?: number; limit?: number }) =>
        api.get('/casuals/search', { params: { search, ...params } }),
};

// Work Entry API
export const workEntryAPI = {
    getAll: (params?: {
        page?: number;
        limit?: number;
        status?: string;
        farmName?: string;
        month?: string;
        crop?: string;
    }) => api.get('/casual-work-entries', { params }),

    getById: (id: string) => api.get(`/casual-work-entries/${id}`),

    create: (workEntryData: {
        casualId: string;
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
    }) => api.post('/casual-work-entries', workEntryData),

    update: (id: string, workEntryData: any) =>
        api.put(`/casual-work-entries/${id}`, workEntryData),

    delete: (id: string) => api.delete(`/casual-work-entries/${id}`),

    search: (search: string, params?: { page?: number; limit?: number }) =>
        api.get('/casual-work-entries/search', { params: { search, ...params } }),
};

// Admin API
export const adminAPI = {
    getAllWorkEntries: (params?: {
        page?: number;
        limit?: number;
        status?: string;
        farmName?: string;
        supervisorId?: string;
    }) => api.get('/admin/casual-work-entries', { params }),

    getPendingWorkEntries: (params?: {
        page?: number;
        limit?: number;
        farmName?: string;
        supervisorId?: string;
    }) => api.get('/admin/casual-work-entries/pending', { params }),

    getWorkEntryById: (id: string) =>
        api.get(`/admin/casual-work-entries/${id}`),

    approveWorkEntry: (id: string, data?: { signature?: string }) =>
        api.patch(`/admin/casual-work-entries/${id}/approve`, data),

    rejectWorkEntry: (id: string, data: { rejectionReason: string }) =>
        api.patch(`/admin/casual-work-entries/${id}/reject`, data),

    generatePaymentReport: (params?: {
        startDate?: string;
        endDate?: string;
        farmName?: string;
        status?: string;
    }) => api.get('/admin/payment-report', { params }),

    generateCustomPaymentReport: (data: {
        startDate?: string;
        endDate?: string;
        farmName?: string;
        status?: string;
    }) => api.post('/admin/payment-report', data),

    getLatestReport: () => api.get('/admin/payment-report/latest'),

    getAllReports: () => api.get('/admin/payment-reports'),

    getReportById: (id: string) => api.get(`/admin/payment-report/${id}`),

    getStatistics: () => api.get('/admin/statistics'),

    createSupervisor: (supervisorData: {
        email: string;
        password: string;
        firstName?: string;
        lastName?: string;
    }) => api.post('/admin/supervisors', supervisorData),
};

// Daily Casual Request API
export const dailyCasualRequestAPI = {
    create: (requestData: {
        casualsRequired: number;
        crop: string;
        cropStage: string;
        date: string;
        week: string;
        activity: string;
        farmName: string;
        adjustment?: number;
        units?: number;
        costPerUnit: number;
    }) => api.post('/daily-casual-requests', requestData),

    getMyRequests: (params?: {
        page?: number;
        limit?: number;
        status?: string;
        farmName?: string;
        crop?: string;
    }) => api.get('/daily-casual-requests/my-requests', { params }),

    getAllRequests: (params?: {
        page?: number;
        limit?: number;
        status?: string;
        farmName?: string;
        crop?: string;
        supervisorId?: string;
    }) => api.get('/daily-casual-requests/all', { params }),

    getPendingRequests: (params?: {
        page?: number;
        limit?: number;
        farmName?: string;
        supervisorId?: string;
    }) => api.get('/daily-casual-requests/pending', { params }),

    update: (id: string, requestData: any) =>
        api.put(`/daily-casual-requests/${id}`, requestData),

    delete: (id: string) => api.delete(`/daily-casual-requests/${id}`),

    approveRequest: (id: string) =>
        api.patch(`/daily-casual-requests/${id}/approve`),

    rejectRequest: (id: string, data: { rejectionReason: string }) =>
        api.patch(`/daily-casual-requests/${id}/reject`, data),
};

// Notification API
export const notificationAPI = {
    getMyNotifications: (params?: { limit?: number }) =>
        api.get('/notifications', { params }),

    getUnreadCount: () => api.get('/notifications/unread-count'),

    markAsRead: (id: string) => api.patch(`/notifications/${id}/read`),

    markAllAsRead: () => api.patch('/notifications/read-all'),

    delete: (id: string) => api.delete(`/notifications/${id}`),
};

export default api;
