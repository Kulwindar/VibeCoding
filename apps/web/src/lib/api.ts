import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add JWT token
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, clear storage and redirect
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

// Auth API calls
export const authAPI = {
  register: async (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    department: string;
  }) => {
    const response = await apiClient.post('/api/v1/auth/register', data);
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await apiClient.post('/api/v1/auth/login', { email, password });
    return response.data;
  },

  getProfile: async () => {
    const response = await apiClient.get('/api/v1/auth/profile');
    return response.data;
  },

  logout: async () => {
    const response = await apiClient.post('/api/v1/auth/logout');
    return response.data;
  },
};

// Trip API calls
export const tripAPI = {
  createTrip: async (data: any) => {
    const response = await apiClient.post('/api/v1/trips', data);
    return response.data;
  },

  getTrips: async () => {
    const response = await apiClient.get('/api/v1/trips');
    return response.data;
  },

  getTrip: async (id: string) => {
    const response = await apiClient.get(`/api/v1/trips/${id}`);
    return response.data;
  },
};

// Expense API calls
export const expenseAPI = {
  createReport: async (data: any) => {
    const response = await apiClient.post('/api/v1/expenses', data);
    return response.data;
  },

  getReports: async () => {
    const response = await apiClient.get('/api/v1/expenses');
    return response.data;
  },

  getReport: async (id: string) => {
    const response = await apiClient.get(`/api/v1/expenses/${id}`);
    return response.data;
  },

  addLineItem: async (reportId: string, data: any) => {
    const response = await apiClient.post(`/api/v1/expenses/${reportId}/items`, data);
    return response.data;
  },
};

// Approval API calls
export const approvalAPI = {
  getApprovals: async () => {
    const response = await apiClient.get('/api/v1/approvals');
    return response.data;
  },

  approveReport: async (reportId: string) => {
    const response = await apiClient.post(`/api/v1/approvals/${reportId}/approve`);
    return response.data;
  },

  rejectReport: async (reportId: string) => {
    const response = await apiClient.post(`/api/v1/approvals/${reportId}/reject`);
    return response.data;
  },
};

export default apiClient;
