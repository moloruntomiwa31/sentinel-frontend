import { Users, AlertTriangle, CheckCircle, ShieldAlert } from "lucide-react";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-2">
          <Users className="text-blue-400" size={20} />
          <span className="text-gray-400 text-sm">TOTAL PATIENTS</span>
        </div>
        <div className="text-3xl font-bold">124</div>
      </div>
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-2">
          <AlertTriangle className="text-red-400" size={20} />
          <span className="text-gray-400 text-sm">HIGH RISK</span>
        </div>
        <div className="text-3xl font-bold text-red-400">08</div>
      </div>
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="text-yellow-400" size={20} />
          <span className="text-gray-400 text-sm">MEDIUM RISK</span>
        </div>
        <div className="text-3xl font-bold text-yellow-400">14</div>
      </div>
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="text-green-400" size={20} />
          <span className="text-gray-400 text-sm">STABLE</span>
        </div>
        <div className="text-3xl font-bold text-green-400">102</div>
      </div>
    </div>
  );
}