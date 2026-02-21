"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, Bell, User } from "lucide-react";
import Link from "next/link";
import RouteGuard from "../../../../components/RouteGuard";

export default function PatientDetail() {
  const params = useParams();
  const patientId = params.patientId;

  const patient = {
    id: patientId,
    name: "John Doe",
    age: 65,
    gender: "Male",
    patientId: "BB2951-2023-002-B",
    attendingPhysician: "Dr. Sarah Mitchell",
    room: "ICU ROOM 4 • BED 5",
    vitals: {
      heartRate: 102,
      spo2: 91,
      respRate: 24,
      bloodPressure: "138/88"
    },
    riskScore: 78,
    status: "CRITICAL ALERT"
  };

  const aiInsights = [
    {
      title: "Tachycardia Detected",
      description: "Sustained heart rate >100 BPM for 35 mins.",
      time: "2 mins ago",
      severity: "high"
    },
    {
      title: "Oxygen Desaturation Dip",
      description: "SpO2 dropped below 90% threshold for 3 mins.",
      time: "12:45 PM",
      severity: "medium"
    },
    {
      title: "Frequent PVCs Noted",
      description: "Irregular heartbeat occurring 10 per minute.",
      time: "12:30 PM",
      severity: "low"
    }
  ];

  return (
    <RouteGuard>
      <div className="h-screen bg-gray-900 text-white">
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
                  <h1 className="text-xl font-bold">{patient.name}</h1>
                  <p className="text-gray-400 text-sm">
                    {patient.gender} • Age {patient.age} • ID: {patient.patientId}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                {patient.status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100vh-80px)]">
          <div className="flex-1 p-6">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">HEART RATE</span>
                </div>
                <div className="text-2xl font-bold text-green-400">{patient.vitals.heartRate}</div>
                <div className="text-xs text-gray-400">BPM</div>
                <div className="text-xs text-red-400 mt-1">↗ TACHYCARDIA</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">SPO2</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">{patient.vitals.spo2}</div>
                <div className="text-xs text-gray-400">%</div>
                <div className="text-xs text-yellow-400 mt-1">↓ MARGINAL</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">RESP RATE</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">{patient.vitals.respRate}</div>
                <div className="text-xs text-gray-400">BRPM</div>
                <div className="text-xs text-green-400 mt-1">● STABLE</div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">BP (SYS/DIA)</span>
                </div>
                <div className="text-2xl font-bold text-yellow-400">{patient.vitals.bloodPressure}</div>
                <div className="text-xs text-gray-400">mmHg</div>
                <div className="text-xs text-gray-400 mt-1">MEAN: 104</div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
                ⚡ TRIGGER RAPID RESPONSE
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Bell size={16} />
                Notify Nearby Physician
              </button>
            </div>
          </div>

          <div className="w-80 bg-gray-800 border-l border-gray-700 p-6 overflow-y-auto">
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">🤖 AI Risk Analysis</h2>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full border-8 border-gray-600"></div>
                <div className="absolute inset-0 rounded-full border-8 border-red-500 border-t-transparent transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400">{patient.riskScore}</div>
                    <div className="text-xs text-gray-400">HIGH RISK</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 text-center">
                14% increase in deterioration probability over the last 2 hours
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3">24H DETERIORATION TREND</h3>
              <div className="h-20 bg-gray-700 rounded-lg flex items-end justify-center gap-1 p-2">
                {[20, 25, 30, 35, 45, 55, 65, 78].map((height, i) => (
                  <div
                    key={i}
                    className={`w-6 rounded-t ${i >= 6 ? 'bg-red-500' : i >= 4 ? 'bg-blue-500' : 'bg-gray-500'}`}
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>24H AGO</span>
                <span>NOW</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">AI INSIGHT FEED</h3>
              <div className="space-y-3">
                {aiInsights.map((insight, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${
                        insight.severity === 'high' ? 'bg-red-500' :
                        insight.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <span className="text-sm font-medium">{insight.title}</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{insight.description}</p>
                    <span className="text-xs text-gray-500">{insight.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouteGuard>
  );
}