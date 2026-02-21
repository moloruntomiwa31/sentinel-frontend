import { create } from "zustand";
import Patient from "../types/Patient";
import { Alert, DashboardStats } from "../types/dashboard";

interface DashboardState {
	// /monitoring/dashboard/ data
	patients: Patient[];
	alerts: Alert[];
	stats: DashboardStats | null;

	// /patients/ data (full patient list)
	allPatients: Patient[];
	allAlerts: Alert[];
	allStats: DashboardStats | null;

	setDashboard: (data: {
		patients: Patient[];
		alerts: Alert[];
		stats: DashboardStats;
	}) => void;
	setAllPatients: (data: {
		patients: Patient[];
		alerts: Alert[];
		stats: DashboardStats;
	}) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
	patients: [],
	alerts: [],
	stats: null,

	allPatients: [],
	allAlerts: [],
	allStats: null,

	setDashboard: (data) =>
		set({
			patients: data.patients || [],
			alerts: data.alerts || [],
			stats: data.stats || null,
		}),

	setAllPatients: (data) =>
		set({
			allPatients: data.patients || [],
			allAlerts: data.alerts || [],
			allStats: data.stats || null,
		}),
}));
