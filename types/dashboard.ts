import Patient from "./Patient";

export interface Alert {
	id: number;
	patient_id: number;
	patient_name: string;
	message: string;
	severity: "critical" | "high" | "medium" | "low";
	created_at: string;
	is_read: boolean;
}

export interface DashboardStats {
	total_patients: number;
	critical_count: number;
	high_risk_count: number;
	medium_risk_count: number;
	low_risk_count: number;
	active_alerts_count: number;
	online_devices_count: number;
}

export interface DashboardResponse {
	patients: Patient[];
	alerts: Alert[];
	stats: DashboardStats;
}
