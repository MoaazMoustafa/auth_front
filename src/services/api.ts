import axios from 'axios';

const API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export interface SignupData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export interface ResetPasswordData {
  password: string;
  passwordConfirmation: string;
}

export const authService = {
  signup: async (data: SignupData) => {
    try {
      const response = await api.post('/users/signup', data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Signup failed');
      }
      throw error;
    }
  },
  login: async (data: LoginData) => {
    try {
      const response = await api.post('/users/login', data);
      
      if (response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
      }
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Login failed');
      }
      throw error;
    }
  },
  getProfile: async (): Promise<UserProfile> => {
    try {
      const response = await api.get('/users/profile');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch profile');
      }
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem('accessToken');
  },
  forgetPassword: async (email: string) => {
    try {
      const response = await api.post('/users/forget-password', { 
        email
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to send reset password email');
      }
      throw error;
    }
  },
  resetPassword: async (token: string, data: ResetPasswordData) => {
    try {
      const response = await api.post(`/users/reset-password/${token}`, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to reset password');
      }
      throw error;
    }
  },
}; 