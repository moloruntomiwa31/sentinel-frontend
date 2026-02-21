import { useEffect } from "react";
import { patientsApi } from "../lib/api";
import { usePatientStore } from "../store/patientStore";

export function usePatientVitals(patientId: string) {
	const { patient, setPatient } = usePatientStore();

	useEffect(() => {
		if (!patientId) return;

		let cancelled = false;

		patientsApi
			.getVitals(patientId)
			.then((data) => {
				if (!cancelled) setPatient(data);
			})
			.catch((err) => {
				console.error("[usePatientVitals]", err);
			});

		return () => {
			cancelled = true;
		};
	}, [patientId, setPatient]);

	return { patient };
}
