"use client";

import { Activity, Search } from "lucide-react";

export default function DashboardHeader() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search patients..."
            className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm w-80"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-gray-400">WARD 4A: SURIGICAL CARE</span>
        <span className="text-green-400">● Live Stream Active</span>
        <span className="text-gray-400">{currentDate}</span>
      </div>
    </div>
  );
}