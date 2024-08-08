// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const menuItems = [
  { name: 'Overview', icon: '📊',path: '/en/admin' },
  { name: 'Patients', icon: '👥',path: '/en/patient' },
  { name: 'Appointments', icon: '📅', path:'/en/appointment'},
  { name: 'Doctors', icon: '👨‍⚕️', path: '/en/patients' },
  { name: 'Employees', icon: '👷' ,path: '/en/patients'},
  { name: 'Products & stock', icon: '📦' ,path: '/en/patients'},
  { name: 'Earnings', icon: '💰', path: '/en/patients' },
  
  { name: 'Settings', icon: '⚙️',path:'/en/patients' },
  { name: 'Help & support', icon: '❓',path:'/en/patients' },
];

const Sidebar: React.FC = () => {
    return (
      <aside className="w-64 bg-white h-screen fixed left-0 top-0 overflow-y-auto">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="text-green-500 mr-2">🔄</span> CureSync
          </h1>
        </div>
        <nav className="mt-4">
        {menuItems.map((item) => (
          <Link href={item.path} key={item.name}>
            <div className="flex items-center p-4 hover:bg-gray-100 text-gray-700 cursor-pointer">
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </div>
          </Link>
        ))}
      </nav>
      </aside>
  );
};

export default Sidebar;