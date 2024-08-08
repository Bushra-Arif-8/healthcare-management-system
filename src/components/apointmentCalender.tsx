// components/AppointmentsCalendar.tsx
"use client"
import React, { useState } from 'react';

const AppointmentsCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Appointments</h3>
        <span>⋯</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth}>◀</button>
        <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={nextMonth}>▶</button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-xs">{day}</div>
        ))}
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div key={`empty-${i}`} className="text-sm"></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(date => (
          <div 
            key={date} 
            className={`text-sm cursor-pointer ${date === currentDate.getDate() ? 'bg-blue-500 rounded-full' : ''}`}
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), date))}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsCalendar;