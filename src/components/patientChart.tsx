// components/PatientsChart.tsx
"use client"
import React, { useState } from 'react';

const generateRandomData = (length: number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

const PatientsChart: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState<'week' | 'month' | 'year'>('month');
  const [data, setData] = useState(generateRandomData(12));

  const updateChart = (period: 'week' | 'month' | 'year') => {
    setTimePeriod(period);
    setData(generateRandomData(period === 'week' ? 7 : period === 'month' ? 12 : 12));
  };

  const labels = {
    week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Patients Statistics</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => updateChart('week')} 
            className={`px-2 py-1 text-sm rounded ${timePeriod === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Week
          </button>
          <button 
            onClick={() => updateChart('month')} 
            className={`px-2 py-1 text-sm rounded ${timePeriod === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Month
          </button>
          <button 
            onClick={() => updateChart('year')} 
            className={`px-2 py-1 text-sm rounded ${timePeriod === 'year' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Year
          </button>
        </div>
      </div>
      <div className="h-64 bg-gray-100 flex items-end justify-between">
        {data.map((value, index) => (
          <div key={index} className="w-1/12 bg-green-200 mx-1" style={{height: `${value}%`}}>
            <div className="text-xs text-center mt-2">{labels[timePeriod][index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsChart;