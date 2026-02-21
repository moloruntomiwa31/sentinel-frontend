export default interface Patient {
	id: number;
    patient_id: string;
	name: string;
	bed_id: string;
	room: string;
	heart_rate: number;
	spo2: number;
	temp: number;
	risk_level: "CRITICAL RISK" | "ELEVATED RISK" | "STABLE";
	status: string;
	alert_message?: string;
	trend_data: number[];
}
