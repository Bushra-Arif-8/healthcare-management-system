// components/PhysicalExam.tsx
import React from 'react';

interface PhysicalExamProps {
  data: {
    heart: { name: string; value: string };
    lungs: { name: string; value: string };
    abdomen: { name: string; value: string };
    volume: { name: string; value: string };
  };
}

const PhysicalExam: React.FC<PhysicalExamProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="font-bold mb-2">Physical Exam:</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Heart</span>
          <span className="font-semibold">{data.heart.value}</span>
        </div>
        <p className="text-sm">{data.heart.name}</p>
        <div className="flex justify-between">
          <span className="text-gray-600">Lungs</span>
          <span className="font-semibold">{data.lungs.value}</span>
        </div>
        <p className="text-sm">{data.lungs.name}</p>
        <div className="flex justify-between">
          <span className="text-gray-600">Abdomen</span>
          <span className="font-semibold">{data.abdomen.value}</span>
        </div>
        <p className="text-sm">{data.abdomen.name}</p>
        <div className="flex justify-between">
          <span className="text-gray-600">Volume status</span>
          <span className="font-semibold">{data.volume.value}</span>
        </div>
        <p className="text-sm">{data.volume.name}</p>
      </div>
    </div>
  );
};

export default PhysicalExam;