import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { patientsApi } from "../lib/api";
import { Alert } from "../types/Alert";

const MONITORED_PATIENT_ID = "PAT004";
const POLL_INTERVAL_MS = 5000;

export function useGlobalAlertPolling() {
	const dismissedIds = useRef<Set<number>>(new Set());
	const [activeAlert, setActiveAlert] = useState<Alert | null>(null);

	const { data: alerts = [], refetch } = useQuery<Alert[]>({
		queryKey: ["patientAlerts", MONITORED_PATIENT_ID],
		queryFn: () => patientsApi.getPatientAlert(MONITORED_PATIENT_ID),
		refetchInterval: (query) => {
			const data = (query.state.data as Alert[] | undefined) ?? [];
			const hasUndismissedCritical = data.some(
				(a) =>
					a.is_active &&
					a.severity?.toUpperCase() === "CRITICAL" &&
					!dismissedIds.current.has(a.id),
			);
			return hasUndismissedCritical ? false : POLL_INTERVAL_MS;
		},
		staleTime: 0,
		throwOnError: false,
	});

	useEffect(() => {
		const critical =
			alerts.find(
				(a) =>
					a.is_active &&
					a.severity?.toUpperCase() === "CRITICAL" &&
					!dismissedIds.current.has(a.id),
			) ?? null;
		setActiveAlert(critical);
	}, [alerts]);

	const dismissActiveAlert = () => {
		if (activeAlert) {
			dismissedIds.current.add(activeAlert.id);
		}
		setActiveAlert(null);
		refetch();
	};

	return { alerts, activeAlert, dismissActiveAlert };
}
