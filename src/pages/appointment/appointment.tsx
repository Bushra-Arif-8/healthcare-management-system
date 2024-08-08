"use client"
import React, { useState } from 'react';
import AppointmentStats from '../../components/appointmentStats';
import AppointmentCalendar from '../../components/AppointmentCalender';
import PatientStatistics from '../../components/patientStatistics';
import AppointmentsList from '../../components/appointmentsList';

const AppointmentsPage: React.FC = () => {
  const [isAddingAppointment, setIsAddingAppointment] = useState(false);

  const handleAddAppointment = () => {
    setIsAddingAppointment(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Appointments</h1>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddAppointment}
          >
            + Add Appointments
          </button>
        </div>
        <AppointmentStats />
        <div className="grid grid-cols-2 gap-6">
          <AppointmentCalendar />
          <PatientStatistics />
        </div>
        <AppointmentsList isAddingAppointment={isAddingAppointment} setIsAddingAppointment={setIsAddingAppointment} />
      </div>
    </div>
  );
};

export default AppointmentsPage;