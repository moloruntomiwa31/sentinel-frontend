"use client";

import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Bell,
  User,
  Heart,
  Wind,
  Thermometer,
  Activity,
  Clock,
} from "lucide-react";
import Link from "next/link";
import RouteGuard from "../../../../components/RouteGuard";
import { usePatientVitals } from "../../../../hooks/usePatientVitals";

function getRiskMeta(level: string | undefined) {
  const l = level?.toUpperCase() ?? "";
  if (l.includes("CRITICAL"))
    return { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/40", badge: "bg-red-500", dot: "bg-red-500" };
  if (l.includes("HIGH") || l.includes("ELEVATED"))
    return { color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/40", badge: "bg-orange-500", dot: "bg-orange-500" };
  if (l.includes("MEDIUM") || l.includes("MODERATE"))
    return { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/40", badge: "bg-yellow-500", dot: "bg-yellow-500" };
  return { color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/40", badge: "bg-green-600", dot: "bg-green-500" };
}

export default function PatientDetail() {
  const params = useParams();
  const patientId = params.patientId as string;

  const { patient } = usePatientVitals(patientId);
  const risk = getRiskMeta(patient?.risk_level);

  return (
    <RouteGuard>
      <div className="min-h-screen bg-gray-950 text-white flex flex-col">

        {/* ── Header ─────────────────────────────────────────────── */}
        <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center gap-4">
          <Link
            href="/dashboard"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft size={18} />
          </Link>

          <div className="flex items-center gap-3 flex-1">
            <div className="w-11 h-11 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center shrink-0">
              <User size={20} className="text-gray-300" />
            </div>
            <div>
              <h1 className="text-base font-semibold leading-tight">
                {patient?.patient_name ?? "Loading…"}
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Patient ID: {patient?.patient_id ?? "--"}
              </p>
            </div>
          </div>

          {patient?.risk_level && (
            <span className={`px-3 py-1.5 ${risk.badge} text-white text-xs font-semibold rounded-full tracking-wide`}>
              {patient.risk_level.toUpperCase()}
            </span>
          )}

          {patient?.updated_at && (
            <div className="hidden sm:flex items-center gap-1.5 text-gray-500 text-xs">
              <Clock size={12} />
              {new Date(patient.updated_at).toLocaleTimeString()}
            </div>
          )}
        </header>

        {/* ── Main ────────────────────────────────────────────────── */}
        <main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">

          {/* ── Left column: vitals (spans 2 cols on lg) ─────────── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Section label */}
            <div className="flex items-center gap-2">
              <Activity size={15} className="text-gray-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Live Vitals
              </span>
            </div>

            {/* Vital cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              {/* Heart Rate */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-medium">
                    <Heart size={13} className="text-rose-400" />
                    Heart Rate
                  </div>
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                </div>
                <div>
                  <span className="text-5xl font-bold text-white tabular-nums">
                    {patient?.heart_rate ?? "--"}
                  </span>
                  <span className="ml-2 text-sm text-gray-400">bpm</span>
                </div>
                <p className="text-xs text-gray-500">Normal: 60–100 bpm</p>
              </div>

              {/* SpO2 */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-medium">
                    <Wind size={13} className="text-sky-400" />
                    SpO₂
                  </div>
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                </div>
                <div>
                  <span className="text-5xl font-bold text-white tabular-nums">
                    {patient?.spo2 ?? "--"}
                  </span>
                  <span className="ml-2 text-sm text-gray-400">%</span>
                </div>
                <p className="text-xs text-gray-500">Normal: 95–100 %</p>
              </div>

              {/* Temperature */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-medium">
                    <Thermometer size={13} className="text-amber-400" />
                    Temperature
                  </div>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                </div>
                <div>
                  <span className="text-5xl font-bold text-white tabular-nums">
                    {patient?.temperature ?? "--"}
                  </span>
                  <span className="ml-2 text-sm text-gray-400">°C</span>
                </div>
                <p className="text-xs text-gray-500">Normal: 36.1–37.2 °C</p>
              </div>
            </div>

            {/* Notify action */}
            <div className="mt-auto">
              <button className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
                <Bell size={15} />
                Notify Nearby Physician
              </button>
            </div>
          </div>

          {/* ── Right column: AI analysis ─────────────────────────── */}
          <div className="flex flex-col gap-4">

            {/* Risk level card */}
            <div className={`rounded-xl border p-5 ${risk.bg} ${risk.border} flex items-center gap-4`}>
              <div className={`w-3 h-3 rounded-full shrink-0 ${risk.dot}`} />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-0.5">
                  Risk Level
                </p>
                <p className={`text-xl font-bold ${risk.color}`}>
                  {patient?.risk_level ?? "--"}
                </p>
              </div>
            </div>

            {/* AI analysis card */}
            <div className="flex-1 bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-base">🤖</span>
                <h2 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
                  AI Analysis
                </h2>
              </div>

              {patient?.ai_analysis ? (
                <p className="text-sm text-gray-300 leading-relaxed flex-1">
                  {patient.ai_analysis}
                </p>
              ) : (
                <p className="text-sm text-gray-500 italic">
                  No analysis available yet.
                </p>
              )}

              {patient?.updated_at && (
                <p className="text-xs text-gray-600 border-t border-gray-800 pt-3">
                  Last analyzed at{" "}
                  {new Date(patient.updated_at).toLocaleString()}
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    </RouteGuard>
  );
}