import { create } from "zustand";
import { LatestVitals } from "../types/LatestVitals";

interface PatientStore {
	patient: LatestVitals | null;
	setPatient: (patient: LatestVitals) => void;
	updatePatient: (updates: Partial<LatestVitals>) => void;
}

export const usePatientStore = create<PatientStore>((set) => ({
	patient: null,
	setPatient: (patient) => set({ patient }),
	updatePatient: (updates) =>
		set((state) => ({
			patient: state.patient ? { ...state.patient, ...updates } : null,
		})),
}));
