import axios from "axios";
import { RegisterRequest, LoginRequest, AuthResponse } from "../types/auth";
import { DashboardResponse } from "../types/dashboard";
import { LatestVitals } from "../types/LatestVitals";

const API_BASE_URL = "https://063db69c-8000.uks1.devtunnels.ms/api";

export const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const authApi = {
	register: async (data: RegisterRequest): Promise<{ message: string }> => {
		try {
			const response = await api.post("/auth/register/", data);
			return response.data;
		} catch (err) {
			console.error("[authApi.register]", err);
			throw err;
		}
	},

	login: async (data: LoginRequest): Promise<AuthResponse> => {
		try {
			const response = await api.post("/auth/login/", data);
			return response.data;
		} catch (err) {
			console.error("[authApi.login]", err);
			throw err;
		}
	},
};

export const dashboardApi = {
	getDashboard: async (): Promise<DashboardResponse> => {
		try {
			const response = await api.get("/monitoring/dashboard/");
			return response.data;
		} catch (err) {
			console.error("[dashboardApi.getDashboard]", err);
			throw err;
		}
	},
};

export const patientsApi = {
	getAll: async (): Promise<DashboardResponse> => {
		try {
			const response = await api.get("/patients/");
			return response.data;
		} catch (err) {
			console.error("[patientsApi.getAll]", err);
			throw err;
		}
	},
	getVitals: async (patientId: string): Promise<LatestVitals> => {
		try {
			const response = await api.get(
				`/monitoring/patients/${patientId}/vitals/`,
			);
			return response.data as LatestVitals;
		} catch (err) {
			console.error(`[patientsApi.getVitals] patientId=${patientId}`, err);
			throw err;
		}
	},
};
