export default interface Patient {
    id: number,
    patient_id: string,
    bed_number: number,
    ward: string,
    created_at: string
}

export default interface PatientSensorDetails extends Patient {
    heart_rate?: number,
    temperature?: number,
    updated_at?: string
}

export default interface PatientAlert extends Patient {
    type: string,
    alert_message: string,
    alert_time: string,
    severity: 'low' | 'medium' | 'high'
    created_at: string
}
export default interface PatientAIData extends Patient {
    confidence: number,
    response: string,
    risk_score: number,
    risk_level: 'low' | 'medium' | 'high',
    prediction_time: string,
    created_at: string
}