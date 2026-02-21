import {
	Users,
	AlertTriangle,
	CheckCircle,
	ShieldAlert,
	Activity,
	Wifi,
} from "lucide-react";
import { DashboardStats } from "../../types/dashboard";

interface StatsCardsProps {
	stats: DashboardStats | null;
}

export default function StatsCards({ stats }: StatsCardsProps) {
	return (
		<div className="grid grid-cols-4 gap-6 mb-8">
			<div className="bg-gray-800 rounded-lg p-6">
				<div className="flex items-center gap-3 mb-2">
					<Users className="text-blue-400" size={20} />
					<span className="text-gray-400 text-sm">TOTAL PATIENTS</span>
				</div>
				<div className="text-3xl font-bold">{stats?.total_patients ?? "—"}</div>
			</div>
			<div className="bg-gray-800 rounded-lg p-6">
				<div className="flex items-center gap-3 mb-2">
					<AlertTriangle className="text-red-400" size={20} />
					<span className="text-gray-400 text-sm">CRITICAL</span>
				</div>
				<div className="text-3xl font-bold text-red-400">
					{stats?.critical_count ?? "—"}
				</div>
			</div>
			<div className="bg-gray-800 rounded-lg p-6">
				<div className="flex items-center gap-3 mb-2">
					<Activity className="text-orange-400" size={20} />
					<span className="text-gray-400 text-sm">HIGH RISK</span>
				</div>
				<div className="text-3xl font-bold text-orange-400">
					{stats?.high_risk_count ?? "—"}
				</div>
			</div>
			<div className="bg-gray-800 rounded-lg p-6">
				<div className="flex items-center gap-3 mb-2">
					<ShieldAlert className="text-yellow-400" size={20} />
					<span className="text-gray-400 text-sm">MEDIUM RISK</span>
				</div>
				<div className="text-3xl font-bold text-yellow-400">
					{stats?.medium_risk_count ?? "—"}
				</div>
			</div>
			<div className="bg-gray-800 rounded-lg p-6">
				<div className="flex items-center gap-3 mb-2">
					<CheckCircle className="text-green-400" size={20} />
					<span className="text-gray-400 text-sm">LOW RISK</span>
				</div>
				<div className="text-3xl font-bold text-green-400">
					{stats?.low_risk_count ?? "—"}
				</div>
			</div>
			<div className="bg-gray-800 rounded-lg p-6">
				<div className="flex items-center gap-3 mb-2">
					<AlertTriangle className="text-purple-400" size={20} />
					<span className="text-gray-400 text-sm">ACTIVE ALERTS</span>
				</div>
				<div className="text-3xl font-bold text-purple-400">
					{stats?.active_alerts_count ?? "—"}
				</div>
			</div>
			<div className="bg-gray-800 rounded-lg p-6">
				<div className="flex items-center gap-3 mb-2">
					<Wifi className="text-cyan-400" size={20} />
					<span className="text-gray-400 text-sm">ONLINE DEVICES</span>
				</div>
				<div className="text-3xl font-bold text-cyan-400">
					{stats?.online_devices_count ?? "—"}
				</div>
			</div>
		</div>
	);
}
