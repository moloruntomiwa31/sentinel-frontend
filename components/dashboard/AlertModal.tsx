"use client";

import { useEffect, useRef, useState } from "react";
import {
	X,
	Bell,
	User,
	BedDouble,
	AlertTriangle,
	CheckCircle2,
} from "lucide-react";
import { Alert } from "../../types/Alert";

/** How long the modal stays visible before auto-dismissing (ms). */
const DISPLAY_DURATION_MS = 30_000;

interface AlertModalProps {
	alert: Alert;
	onDismiss: () => void;
}

const severityMeta: Record<
	string,
	{ color: string; bg: string; border: string; icon: React.ReactNode }
> = {
	CRITICAL: {
		color: "text-red-400",
		bg: "bg-red-500/10",
		border: "border-red-500/50",
		icon: <AlertTriangle size={18} className="text-red-400" />,
	},
	HIGH: {
		color: "text-orange-400",
		bg: "bg-orange-500/10",
		border: "border-orange-500/50",
		icon: <AlertTriangle size={18} className="text-orange-400" />,
	},
	MEDIUM: {
		color: "text-yellow-400",
		bg: "bg-yellow-500/10",
		border: "border-yellow-500/50",
		icon: <AlertTriangle size={18} className="text-yellow-400" />,
	},
	LOW: {
		color: "text-blue-400",
		bg: "bg-blue-500/10",
		border: "border-blue-500/50",
		icon: <Bell size={18} className="text-blue-400" />,
	},
};

export default function AlertModal({ alert, onDismiss }: AlertModalProps) {
	const meta =
		severityMeta[alert.severity?.toUpperCase()] ?? severityMeta["LOW"];

	/** progress: 100 → 0 over DISPLAY_DURATION_MS */
	const [progress, setProgress] = useState(100);
	const startTimeRef = useRef<number>(0);
	const rafRef = useRef<number | null>(null);

	/** Animate the countdown bar and auto-dismiss when it reaches 0. */
	useEffect(() => {
		startTimeRef.current = Date.now();

		const tick = () => {
			const elapsed = Date.now() - startTimeRef.current;
			const remaining = Math.max(0, 1 - elapsed / DISPLAY_DURATION_MS);
			setProgress(remaining * 100);

			if (elapsed >= DISPLAY_DURATION_MS) {
				onDismiss();
				return;
			}
			rafRef.current = requestAnimationFrame(tick);
		};

		rafRef.current = requestAnimationFrame(tick);

		return () => {
			if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
		};
	}, [onDismiss]);

	/** Close on Escape key */
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") onDismiss();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [onDismiss]);

	const secondsLeft = Math.ceil(
		(progress / 100) * (DISPLAY_DURATION_MS / 1000),
	);

	return (
		/* Backdrop */
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
			onClick={onDismiss}
		>
			{/* Panel */}
			<div
				className={`relative w-full max-w-md rounded-2xl border ${meta.border} ${meta.bg} bg-gray-900 shadow-2xl flex flex-col overflow-hidden`}
				onClick={(e) => e.stopPropagation()}
			>
				{/* ── Countdown progress bar (top edge) ────────────── */}
				<div className="w-full h-1 bg-gray-800">
					<div
						className="h-full bg-red-500 transition-none"
						style={{ width: `${progress}%` }}
					/>
				</div>

				<div className="p-6 flex flex-col gap-5">
					{/* Close button */}
					<button
						onClick={onDismiss}
						className="absolute top-3 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
						aria-label="Dismiss alert"
					>
						<X size={16} />
					</button>

					{/* Header */}
					<div className="flex items-start gap-3">
						<div
							className={`p-2.5 rounded-xl ${meta.bg} border ${meta.border}`}
						>
							{meta.icon}
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
								{alert.type.replace("_", " ")} · {alert.severity}
							</p>
							<h2 className="text-lg font-bold text-white leading-snug">
								Alert Acknowledged
							</h2>
						</div>
					</div>

					{/* Response banner */}
					<div className="flex items-center gap-3 rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-3">
						<CheckCircle2 size={20} className="text-green-400 shrink-0" />
						<p className="text-sm font-semibold text-green-300">
							Medical personnel are on their way to attend to this patient.
						</p>
					</div>

					{/* Patient info */}
					<div className="grid grid-cols-2 gap-3">
						<div className="flex items-center gap-2 rounded-lg bg-gray-800/60 border border-gray-700 px-3 py-2">
							<User size={13} className="text-gray-400 shrink-0" />
							<div className="min-w-0">
								<p className="text-[10px] text-gray-500 uppercase tracking-wider">
									Patient
								</p>
								<p className="text-sm font-semibold text-white truncate">
									{alert.patient_name}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-2 rounded-lg bg-gray-800/60 border border-gray-700 px-3 py-2">
							<BedDouble size={13} className="text-gray-400 shrink-0" />
							<div className="min-w-0">
								<p className="text-[10px] text-gray-500 uppercase tracking-wider">
									Bed
								</p>
								<p className="text-sm font-semibold text-white truncate">
									{alert.bed_number}
								</p>
							</div>
						</div>
					</div>

					{/* Alert message */}
					<div className="rounded-xl bg-gray-800/60 border border-gray-700 px-4 py-3">
						<p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
							Alert Message
						</p>
						<p className="text-sm text-gray-200 leading-relaxed">
							{alert.message}
						</p>
					</div>

					{/* AI analysis (if present) */}
					{alert.ai_analysis && (
						<div className="rounded-xl bg-gray-800/60 border border-gray-700 px-4 py-3">
							<div className="flex items-center gap-2 mb-1">
								<span className="text-sm">🤖</span>
								<p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
									AI Analysis
								</p>
							</div>
							<p className="text-sm text-gray-300 leading-relaxed">
								{alert.ai_analysis}
							</p>
						</div>
					)}

					{/* Footer: timestamp + auto-dismiss countdown */}
					<div className="flex items-center justify-between">
						<p className="text-xs text-gray-600">
							Triggered at{" "}
							{new Date(alert.created_at).toLocaleString(undefined, {
								dateStyle: "medium",
								timeStyle: "short",
							})}
						</p>
						<p className="text-xs text-gray-500 tabular-nums">
							auto-dismiss in {secondsLeft}s
						</p>
					</div>

					{/* Dismiss button */}
					<button
						onClick={onDismiss}
						className="w-full py-2.5 rounded-xl bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold transition-colors"
					>
						Dismiss
					</button>
				</div>
			</div>
		</div>
	);
}
