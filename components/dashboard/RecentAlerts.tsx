export default function RecentAlerts() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Recent Critical Alerts</h2>
        <button className="text-blue-400 text-sm">VIEW ALL HISTORY</button>
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        <p className="text-gray-400 text-sm">No recent critical alerts</p>
      </div>
    </div>
  );
}