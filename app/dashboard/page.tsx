"use client";

import { Grid, Siren } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Patient from "../../types/Patient";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCards from "../../components/dashboard/StatsCards";
import PatientMonitoring from "../../components/dashboard/PatientMonitoring";
import RecentAlerts from "../../components/dashboard/RecentAlerts";

export default function Dashboard() {
	const pathname = usePathname();

	const navItems = [
		{ name: "Dashboard", href: "/dashboard", icon: Grid },
		{
			name: "Alerts",
			href: "#",
			color: "red",
			icon: Siren,
		},
	];

	const patients: Patient[] = [
		{
			id: 1,
			name: "Robert Miller",
			bed_id: "B-405",
			room: "ICU ROOM 4 • BED 5",
			heart_rate: 118,
			spo2: 88,
			temp: 38.4,
			risk_level: "CRITICAL RISK",
			status: "CRITICAL RISK",
			alert_message:
				"AI Alert: Rapid respiratory decline detected over last 15 mins. High intervention risk.",
			trend_data: [115, 120, 118, 122, 118, 116, 118],
		},
		{
			id: 2,
			name: "Elena Rodriguez",
			bed_id: "B-312",
			room: "ICU ROOM 3 • BED 12",
			heart_rate: 72,
			spo2: 98,
			temp: 36.8,
			risk_level: "STABLE",
			status: "STABLE",
			alert_message:
				"Normal baseline vitals. Patient recovery on track for discharge assessment.",
			trend_data: [70, 72, 74, 72, 71, 72, 73],
		},
		{
			id: 3,
			name: "Thomas Wright",
			bed_id: "B-409",
			room: "ICU ROOM 4 • BED 9",
			heart_rate: 94,
			spo2: 93,
			temp: 37.2,
			risk_level: "ELEVATED RISK",
			status: "ELEVATED RISK",
			alert_message:
				"Upward trend in Heart Rate noted. Suggest hourly monitoring.",
			trend_data: [88, 90, 92, 94, 96, 94, 93],
		},
		{
			id: 4,
			name: "Sarah Jenkins",
			bed_id: "B-317",
			room: "ICU ROOM 3 • BED 17",
			heart_rate: 68,
			spo2: 96,
			temp: 36.5,
			risk_level: "STABLE",
			status: "STABLE",
			alert_message: "Routine pulmonary rehabilitation...",
			trend_data: [66, 68, 70, 68, 67, 68, 69],
		},
	];

	return (
		<div className="flex h-screen">
			<aside className="w-64 border-r bg-gray-50/50 p-4 flex flex-col h-full">
				<div className="flex items-center gap-2 mb-8">
					<Image
						src="/images/app-logo.png"
						width={60}
						height={60}
						alt="App Logo"
					/>
					<h2 className="font-extrabold uppercase text-2xl text-blue-500 tracking-tight">
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
												2
											</div>
										)}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				<footer className="mt-auto pt-6 border-t border-gray-200 text-xs text-gray-500">
					<h2 className="font-semibold text-gray-700 text-lg">
						Dr, Akorode Bakare
					</h2>
					<h3 className="font-semibold text-gray-700">
						General Hospital, Gbagada Lagos
					</h3>
					<p>Surgical department/Unit</p>
				</footer>
			</aside>

			<main className="flex-1 p-8 bg-gray-900 text-white overflow-y-auto">
				<DashboardHeader />
				<StatsCards />
				<PatientMonitoring patients={patients} />
				<RecentAlerts />
			</main>
		</div>
	);
}
