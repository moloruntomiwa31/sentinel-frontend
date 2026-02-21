import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { dashboardApi, patientsApi } from "../lib/api";
import { useDashboardStore } from "../store/dashboardStore";

export const useDashboardData = () => {
	const setDashboard = useDashboardStore((state) => state.setDashboard);

	const query = useQuery({
		queryKey: ["dashboard"],
		queryFn: async () => {
			try {
				return await dashboardApi.getDashboard();
			} catch (err) {
				console.error("[useDashboardData] fetch failed:", err);
				throw err; // let React Query set isError — does NOT crash the page
			}
		},
		refetchInterval: 30_000,
		throwOnError: false, // never throw into the React tree
		retry: 1,
	});

	useEffect(() => {
		if (query.data) {
			setDashboard(query.data);
		}
	}, [query.data, setDashboard]);

	return query;
};

export const usePatients = () => {
	const setAllPatients = useDashboardStore((state) => state.setAllPatients);

	const query = useQuery({
		queryKey: ["patients"],
		queryFn: async () => {
			try {
				return await patientsApi.getAll();
			} catch (err) {
				console.error("[usePatients] fetch failed:", err);
				throw err;
			}
		},
		throwOnError: false,
		retry: 1,
	});

	useEffect(() => {
		if (query.data) {
			setAllPatients(query.data);
		}
	}, [query.data, setAllPatients]);

	return query;
};
