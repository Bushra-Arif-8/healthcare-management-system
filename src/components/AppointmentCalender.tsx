// components/AppointmentCalendar.tsx
import React from 'react';

const AppointmentCalendar: React.FC = () => {
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-bold mb-2">Appointments:</h3>
      <div className="flex justify-between items-center mb-2">
        <button>◀</button>
        <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button>▶</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-xs font-semibold">{day}</div>
        ))}
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div key={`empty-${i}`} className="text-center p-1"></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(date => (
          <div key={date} className="text-center p-1">
            <span className={`inline-block w-6 h-6 rounded-full ${date === currentDate.getDate() ? 'bg-blue-500 text-white' : ''}`}>
              {date}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          <span className="text-sm">Current Streak: 4 Days</span>
        </div>
        
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          <span className="text-sm">Completed Days: 5 Days</span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendar;