import { Filter } from "lucide-react";
import Patient from "../../types/Patient";
import PatientCard from "./PatientCard";

interface PatientMonitoringProps {
  patients: Patient[];
}

export default function PatientMonitoring({ patients }: PatientMonitoringProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Real-time Patient Monitoring</h2>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm">
            <Filter size={16} />
            FILTERS
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm">GRID VIEW</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
}