import axios from 'axios';
import { RegisterRequest, LoginRequest, AuthResponse } from '../types/auth';

const API_BASE_URL = 'https://063db69c-8000.uks1.devtunnels.ms/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authApi = {
  register: async (data: RegisterRequest): Promise<{ message: string }> => {
    const response = await api.post('/auth/register/', data);
    return response.data
  },

  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/login/', data);
    return response.data;
  },
};