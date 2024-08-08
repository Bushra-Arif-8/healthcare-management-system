import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, percentage, color }) => (
  <div className={`p-4 rounded-lg ${color === 'blue' ? 'bg-black text-white' : 'bg-white'}`}>
    <div className="flex items-center justify-between mb-2">
      <span className={`text-${color}-500`}>{title}</span>
      <span className="text-gray-400"></span>
    </div>
    <div className="text-2xl font-bold mb-2">{value}</div>
    <div className="flex items-center">
      <div className={`w-full bg-gray-200 rounded-full h-1.5`}>
        <div className={`bg-${color}-500 h-1.5 rounded-full`} style={{width: percentage}}></div>
      </div>
      <span className={`ml-2 text-${color}-500`}>{percentage}</span>
    </div>
  </div>
);

const AppointmentStats: React.FC = () => (
  <div className="grid grid-cols-4 gap-4 mb-6">
    <StatCard title="Total appointment" value="1,500k" percentage="15%" color="blue" />
    <StatCard title="Upcoming appointment" value="400k" percentage="4%" color="orange" />
    <StatCard title="Completed appointment" value="1,200k" percentage="12%" color="green" />
    <StatCard title="Cancelled appointment" value="300k" percentage="3%" color="red" />
  </div>
);

export default AppointmentStats;