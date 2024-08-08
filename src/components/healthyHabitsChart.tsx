// components/HealthyHabitsChart.tsx
import React from 'react';

interface HealthyHabitsChartProps {
  data: {
    followingPlan: number;
    skipped: number;
    outsidePlan: number;
  };
}

const HealthyHabitsChart: React.FC<HealthyHabitsChartProps> = ({ data }) => {
  const total = data.followingPlan + data.skipped + data.outsidePlan;
  const percentages = {
    followingPlan: (data.followingPlan / total) * 100,
    skipped: (data.skipped / total) * 100,
    outsidePlan: (data.outsidePlan / total) * 100,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-bold mb-2">Healthy Habits</h3>
      <div className="flex justify-center items-center mb-4">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="3"
              strokeDasharray={`${percentages.followingPlan}, 100`}
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#FFC107"
              strokeWidth="3"
              strokeDasharray={`${percentages.skipped}, 100`}
              strokeDashoffset={`-${percentages.followingPlan}`}
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#FF5722"
              strokeWidth="3"
              strokeDasharray={`${percentages.outsidePlan}, 100`}
              strokeDashoffset={`-${percentages.followingPlan + percentages.skipped}`}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-2xl font-bold">{total}</div>
            <div className="text-xs">Walk and Exercise</div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span>Following Plan</span>
          </div>
          <span>{data.followingPlan}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span>Skipped</span>
          </div>
          <span>{data.skipped}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
            <span>Outside plan</span>
          </div>
          <span>{data.outsidePlan}</span>
        </div>
      </div>
    </div>
  );
};

export default HealthyHabitsChart;