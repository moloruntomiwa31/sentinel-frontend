export interface RegisterRequest {
  hospital_name: string;
  full_name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
  hospital: string;
}

export interface AuthResponse {
  message: string;
  access: string;
  refresh: string;
  user: User;
}