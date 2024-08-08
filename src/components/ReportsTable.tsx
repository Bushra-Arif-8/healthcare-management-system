// components/ReportsTable.tsx
import React from 'react';

interface Report {
  name: string;
  date: string;
}

interface ReportsTableProps {
  reports: Report[];
}

const ReportsTable: React.FC<ReportsTableProps> = ({ reports }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 l-50">
      <h3 className="font-bold mb-2">Reports:</h3>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Report Name</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{report.name}</td>
              <td className="p-2">{report.date}</td>
              <td className="p-2">
                <button className="mr-2 text-gray-500">🗑️</button>
                <button className="text-gray-500">👁️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;