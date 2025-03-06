import React from "react";
import { dashboard } from "../data/dashboard";

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="flex gap-5">
        {dashboard.map((inform=>(
          <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
            <div className={`p-1 rounded-xl ${inform.color}`}>
              <img src={inform.icon} alt="file icon" className="w-10 h-10"/>
            </div>
            <div>
              <p className="text-xl font-semibold">{inform.totalTasks}</p>
              <p className="text-gray-400">{inform.label}</p>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}
