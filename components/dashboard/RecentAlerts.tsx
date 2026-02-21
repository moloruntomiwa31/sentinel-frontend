import { Alert } from "../../types/dashboard";

interface RecentAlertsProps {
	alerts: Alert[];
}

const severityStyles: Record<
	Alert["severity"],
	{ badge: string; dot: string }
> = {
	critical: {
		badge: "bg-red-500/20 text-red-400 border border-red-500/30",
		dot: "bg-red-500",
	},
	high: {
		badge: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
		dot: "bg-orange-500",
	},
	medium: {
		badge: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
		dot: "bg-yellow-500",
	},
	low: {
		badge: "bg-green-500/20 text-green-400 border border-green-500/30",
		dot: "bg-green-500",
	},
};

function formatTime(iso: string) {
	return new Date(iso).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
}

export default function RecentAlerts({ alerts = [] }: RecentAlertsProps) {
	return (
		<div>
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-xl font-bold">Recent Critical Alerts</h2>
				<button className="text-blue-400 text-sm">VIEW ALL HISTORY</button>
			</div>
			<div className="bg-gray-800 rounded-lg divide-y divide-gray-700">
				{alerts.length === 0 ? (
					<p className="text-gray-400 text-sm p-4">No recent critical alerts</p>
				) : (
					alerts.map((alert) => {
						const styles = severityStyles[alert.severity] ?? severityStyles.low;
						return (
							<div key={alert.id} className="flex items-start gap-4 p-4">
								<div
									className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${styles.dot}`}
								/>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium truncate">
										{alert.patient_name}
									</p>
									<p className="text-xs text-gray-400 mt-0.5">
										{alert.message}
									</p>
								</div>
								<div className="flex flex-col items-end gap-1 shrink-0">
									<span
										className={`px-2 py-0.5 rounded text-xs font-medium uppercase ${styles.badge}`}
									>
										{alert.severity}
									</span>
									<span className="text-xs text-gray-500">
										{formatTime(alert.created_at)}
									</span>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}
