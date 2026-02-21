import Patient from "../../types/Patient";

interface PatientCardProps {
  patient: Patient;
}

export default function PatientCard({ patient }: PatientCardProps) {
  return (
    <div className={`rounded-lg p-6 ${
      patient.risk_level === 'CRITICAL RISK' ? 'bg-red-900/20 border-2 border-red-500' :
      patient.risk_level === 'ELEVATED RISK' ? 'bg-yellow-900/20 border-2 border-yellow-500' :
      'bg-green-900/20 border-2 border-green-500'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg">{patient.name}</h3>
          <p className="text-gray-400 text-sm">{patient.room}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            patient.risk_level === 'CRITICAL RISK' ? 'bg-red-500 text-white' :
            patient.risk_level === 'ELEVATED RISK' ? 'bg-yellow-500 text-black' :
            'bg-green-500 text-white'
          }`}>
            {patient.risk_level === 'STABLE' ? 'STABLE' : patient.risk_level}
          </span>
          <span className="text-gray-400 text-sm">{patient.bed_id}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-gray-400 text-xs mb-1">HEART RATE</p>
          <p className={`text-2xl font-bold ${
            patient.heart_rate > 100 ? 'text-red-400' :
            patient.heart_rate > 80 ? 'text-yellow-400' : 'text-green-400'
          }`}>
            {patient.heart_rate}<span className="text-sm"> BPM</span>
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-xs mb-1">SPO2</p>
          <p className={`text-2xl font-bold ${
            patient.spo2 < 90 ? 'text-red-400' :
            patient.spo2 < 95 ? 'text-yellow-400' : 'text-green-400'
          }`}>
            {patient.spo2}<span className="text-sm"> %</span>
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-xs mb-1">TEMP</p>
          <p className={`text-2xl font-bold ${
            patient.temp > 38 ? 'text-red-400' :
            patient.temp > 37.5 ? 'text-yellow-400' : 'text-blue-400'
          }`}>
            {patient.temp}<span className="text-sm"> °C</span>
          </p>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="h-16 mb-4 flex items-end gap-1">
        {patient.trend_data.map((value, index) => (
          <div 
            key={index}
            className={`flex-1 rounded-t ${
              patient.risk_level === 'CRITICAL RISK' ? 'bg-red-500' :
              patient.risk_level === 'ELEVATED RISK' ? 'bg-yellow-500' :
              'bg-green-500'
            }`}
            style={{ height: `${(value / Math.max(...patient.trend_data)) * 100}%` }}
          />
        ))}
      </div>

      <div className={`p-3 rounded-lg mb-4 ${
        patient.risk_level === 'CRITICAL RISK' ? 'bg-red-900/30' :
        patient.risk_level === 'ELEVATED RISK' ? 'bg-yellow-900/30' :
        'bg-green-900/30'
      }`}>
        <div className="flex items-center gap-2 mb-2">
          {patient.risk_level === 'CRITICAL RISK' ? 
            <span className="text-red-400">🚨</span> :
            patient.risk_level === 'ELEVATED RISK' ?
            <span className="text-yellow-400">⚠</span> :
            <span className="text-green-400">✓</span>
          }
          <span className="text-sm">
            {patient.risk_level === 'STABLE' ? 'Normal baseline vitals.' : 
             patient.risk_level === 'ELEVATED RISK' ? 'Upward trend in Heart Rate noted.' :
             'AI Alert: Rapid respiratory decline detected over last 15 mins.'}
          </span>
        </div>
        <p className="text-xs text-gray-400">{patient.alert_message}</p>
      </div>

      <div className="flex gap-2">
        <button className={`flex-1 py-2 px-4 rounded-lg font-medium ${
          patient.risk_level === 'CRITICAL RISK' ? 'bg-red-500 text-white' :
          patient.risk_level === 'ELEVATED RISK' ? 'bg-yellow-500 text-black' :
          'bg-gray-700 text-white'
        }`}>
          {patient.risk_level === 'CRITICAL RISK' ? 'RESPOND' :
           patient.risk_level === 'ELEVATED RISK' ? 'REVIEW' : 'DETAILS'}
        </button>
      </div>
    </div>
  );
}