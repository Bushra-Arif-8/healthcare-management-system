// pages/admin/dashboard.tsx
import React from 'react';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import StatCard from '../../components/statCard';
import PatientsChart from '../../components/patientChart';
import AppointmentsCalendar from '../../components/apointmentCalender';
import PatientsTable from '../../components/patientsTable';

const Dashboard: React.FC = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-6 mt-20">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <StatCard title="Total Doctors" currentValue="300k" lastMonthValue="250k" change="30%" color="dark" />
            <StatCard title="Total Patients" currentValue="1,200k" lastMonthValue="1,000k" change="25%" color="light" />
            <StatCard title="Total Appointments" currentValue="1,500K" lastMonthValue="1,300K" change="20%" color="light" />
            <StatCard title="Total Earnings" currentValue="$1,000" lastMonthValue="$800" change="40%" color="light" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-2">
              <PatientsChart />
            </div>
            <AppointmentsCalendar />
          </div>
          
          <PatientsTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;