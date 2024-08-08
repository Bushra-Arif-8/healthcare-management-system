// components/WaterIntakeTracker.tsx
import React from 'react';

interface WaterIntakeTrackerProps {
  data: {
    goal: number;
    tracked: number;
  };
}

const WaterIntakeTracker: React.FC<WaterIntakeTrackerProps> = ({ data }) => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const randomValues = days.map(() => Math.floor(Math.random() * 5));

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-bold mb-2">Water Intake:</h3>
      <div className="flex justify-between items-center mb-2">
        <span>Goal: {data.goal}/80</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
          Cups Tracked: {data.tracked}
        </span>
      </div>
      <div className="flex justify-between items-end h-20">
        {randomValues.map((value, index) => (
          <div key={index} className="w-1/7 bg-blue-200" style={{ height: `${value * 20}%` }}>
            <div className="text-xs text-center mt-1">{days[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterIntakeTracker;