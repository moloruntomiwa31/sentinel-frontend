export type AlertType = "VITAL_SIGN" | "MEDICATION" | "FALL";
export type AlertSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export interface Alert {
	id: number;
	patient: number;
	patient_id: string;
	patient_name: string;
	bed_number: string;
	type: AlertType;
	message: string;
	severity: AlertSeverity;
	ai_analysis?: string;
	is_active: boolean;
	created_at: string;
}

export interface AlertListResponse {
	results?: Alert[];
	count?: number;
}
