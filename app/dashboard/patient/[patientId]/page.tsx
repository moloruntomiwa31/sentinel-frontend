"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, Bell, User } from "lucide-react";
import Link from "next/link";
import RouteGuard from "../../../../components/RouteGuard";
import { usePatientVitals } from "../../../../hooks/usePatientVitals";

export default function PatientDetail() {
  const params = useParams();
  const patientId = params.patientId as string;

  const { patient } = usePatientVitals(patientId);

  const riskColor =
    patient?.risk_level === "HIGH" || patient?.risk_level === "CRITICAL"
      ? "bg-red-500"
      : patient?.risk_level === "MEDIUM"
      ? "bg-yellow-500"
      : "bg-green-500";

  const aiInsights = patient?.ai_analysis
    ? [
        {
          title: "AI Analysis",
          description: patient.ai_analysis,
          time: new Date(patient.updated_at).toLocaleTimeString(),
          severity: patient.risk_level?.toLowerCase() ?? "low",
        },
      ]
    : [];
  return (
    <RouteGuard>
      <div className="h-screen bg-gray-900 text-white">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-gray-400 hover:text-white">
                <ArrowLeft size={20} />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold">
                    {patient?.patient_name ?? "Loading..."}
                  </h1>
                  <p className="text-gray-400 text-sm">
                    ID: {patient?.patient_id ?? "--"}
                  </p>
                </div>
              </div>
              {patient?.risk_level && (
                <span
                  className={`px-3 py-1 ${riskColor} text-white text-xs font-medium rounded-full`}
                >
                  {patient.risk_level}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100vh-80px)]">
          {/* Vitals */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">HEART RATE</span>
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {patient?.heart_rate ?? "--"}
                </div>
                <div className="text-xs text-gray-400">BPM</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">SPO2</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {patient?.spo2 ?? "--"}
                </div>
                <div className="text-xs text-gray-400">%</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">TEMPERATURE</span>
                </div>
                <div className="text-2xl font-bold text-orange-400">
                  {patient?.temperature ?? "--"}
                </div>
                <div className="text-xs text-gray-400">°C</div>
              </div>
            </div>

            {patient?.updated_at && (
              <p className="text-xs text-gray-500 mb-6">
                Last updated: {new Date(patient.updated_at).toLocaleString()}
              </p>
            )}

            <div className="flex gap-4 mt-6">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Bell size={16} />
                Notify Nearby Physician
              </button>
            </div>
          </div>

          {/* AI Sidebar */}
          <div className="w-80 bg-gray-800 border-l border-gray-700 p-6 overflow-y-auto">
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">🤖 AI Risk Analysis</h2>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full border-8 border-gray-600"></div>
                <div
                  className={`absolute inset-0 rounded-full border-8 border-t-transparent transform rotate-45 ${
                    patient?.risk_level === "HIGH" || patient?.risk_level === "CRITICAL"
                      ? "border-red-500"
                      : patient?.risk_level === "MEDIUM"
                      ? "border-yellow-500"
                      : "border-green-500"
                  }`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className={`text-2xl font-bold ${
                        patient?.risk_level === "HIGH" || patient?.risk_level === "CRITICAL"
                          ? "text-red-400"
                          : patient?.risk_level === "MEDIUM"
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >
                      {patient?.risk_level ?? "--"}
                    </div>
                    <div className="text-xs text-gray-400">RISK LEVEL</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">AI INSIGHT FEED</h3>
              {aiInsights.length === 0 ? (
                <p className="text-xs text-gray-500">No insights available.</p>
              ) : (
                <div className="space-y-3">
                  {aiInsights.map((insight, i) => (
                    <div key={i} className="bg-gray-700 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            insight.severity === "high" || insight.severity === "critical"
                              ? "bg-red-500"
                              : insight.severity === "medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        ></div>
                        <span className="text-sm font-medium">{insight.title}</span>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">{insight.description}</p>
                      <span className="text-xs text-gray-500">{insight.time}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </RouteGuard>
  );
}