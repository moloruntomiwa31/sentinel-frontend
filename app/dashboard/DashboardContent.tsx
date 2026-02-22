"use client";

import { Grid, Siren } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCards from "../../components/dashboard/StatsCards";
import PatientMonitoring from "../../components/dashboard/PatientMonitoring";
import RecentAlerts from "../../components/dashboard/RecentAlerts";
import RouteGuard from "../../components/RouteGuard";
import LogoutButton from "../../components/dashboard/LogoutButton";
import { useAuthStore } from "../../store/authStore";
import { useDashboardStore } from "../../store/dashboardStore";
import { useDashboardData, usePatients } from "../../hooks/useDashboard";
import AlertModal from "../../components/dashboard/AlertModal";
import { useGlobalAlertPolling } from "../../hooks/useGlobalAlertPolling";

export default function DashboardContent() {
	const pathname = usePathname();
	const user = useAuthStore((state) => state.user);

	const { isLoading: dashboardLoading, isError, error } = useDashboardData();
	usePatients();

	const patients = useDashboardStore((state) => state.patients);
	const alerts = useDashboardStore((state) => state.alerts);
	const stats = useDashboardStore((state) => state.stats);

	const { activeAlert, dismissActiveAlert } = useGlobalAlertPolling();

	const navItems = [
		{ name: "Dashboard", href: "/dashboard", icon: Grid },
		{
			name: "Alerts",
			href: "#",
			color: "red",
			icon: Siren,
		},
	];

	return (
		<RouteGuard>
			{activeAlert && (
				<AlertModal alert={activeAlert} onDismiss={dismissActiveAlert} />
			)}
			<div className="flex h-screen font-raleway">
				<aside className="w-64 border-r bg-gray-50/50 p-4 flex flex-col h-full font-raleway">
					<div className="flex items-center gap-2 mb-8">
						<Image
							src="/images/app-logo.png"
							width={60}
							height={60}
							alt="App Logo"
						/>
						<h2 className="font-extrabold uppercase text-2xl text-blue-500 tracking-tight font-raleway">
							Sentinel
						</h2>
					</div>

					<nav className="flex-1">
						<ul className="space-y-2">
							{navItems.map((item) => {
								const isActive = pathname === item.href;

								return (
									<li key={item.href}>
										<Link
											href={item.href}
											className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
												isActive
													? "bg-blue-100 text-blue-500 font-bold"
													: "text-gray-600 hover:bg-gray-100"
											}`}
										>
											<item.icon color={item.color} size={20} />
											<span>{item.name}</span>
											{item.name === "Alerts" && (
												<div className="flex items-center justify-center bg-red-500 w-8 h-8 rounded-full text-white ml-auto">
													{stats?.active_alerts_count ?? 0}
												</div>
											)}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>

					<footer className="mt-auto grid gap-1 pt-3 border-t border-gray-200 text-xs text-gray-500">
						<div>
							<h2 className="font-semibold text-gray-700 text-lg">
								{user?.full_name || "Dr. User"}
							</h2>
							<h3 className="font-semibold text-gray-700">
								{user?.hospital || "Hospital"}
							</h3>
							<p>Medical Department</p>
						</div>
						<LogoutButton />
					</footer>
				</aside>

				<main className="flex-1 p-8 bg-gray-900 text-white overflow-y-auto font-raleway">
					<DashboardHeader />
					{isError ? (
						<div className="flex flex-col items-center justify-center h-64 gap-3 text-center">
							<p className="text-red-400 font-semibold">
								Failed to load dashboard data
							</p>
							<p className="text-gray-500 text-sm">
								{(error as Error)?.message ?? "Unknown error"}
							</p>
						</div>
					) : dashboardLoading && (!patients || patients.length === 0) ? (
						<p className="text-gray-400 text-sm mb-8">
							Loading dashboard data…
						</p>
					) : (
						<>
							<StatsCards stats={stats} />
							<PatientMonitoring patients={patients} />
							<RecentAlerts alerts={alerts} />
						</>
					)}
				</main>
			</div>
		</RouteGuard>
	);
}
