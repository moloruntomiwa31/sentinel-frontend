export interface LatestVitals {
	patient: number;
	patient_id: string;
	patient_name: string;
	temperature?: string | null;
	heart_rate?: number | null;
	spo2?: number | null;
	risk_level: string;
	ai_analysis: string;
	updated_at: string;
}
