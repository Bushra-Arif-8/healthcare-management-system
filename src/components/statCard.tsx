// components/StatCard.tsx
"use client"
import React, { useState } from 'react';

interface StatCardProps {
  title: string;
  currentValue: string;
  lastMonthValue: string;
  change: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, currentValue, lastMonthValue, change, color }) => {
  const [showLastMonth, setShowLastMonth] = useState(false);

  return (
    <div className={`p-4 rounded-lg ${color === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500">{title}</span>
        {color === 'dark' && <span className="text-blue-400">👤</span>}
      </div>
      <div className="text-2xl font-bold mb-2">{showLastMonth ? lastMonthValue : currentValue}</div>
      <div className="text-sm text-gray-500 flex items-center justify-between">
        <span>{change} Last Month</span>
        <button onClick={() => setShowLastMonth(!showLastMonth)} className="ml-2">
          {showLastMonth ? '▲' : '▼'}
        </button>
      </div>
    </div>
  );
};

export default StatCard;