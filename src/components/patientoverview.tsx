// components/PatientOverview.tsx
import React from 'react';
import Image from 'next/image';

interface PatientOverviewProps {
  patient: {
    name: string;
    image: string;
    contacts: {
      phone: string;
      address: string;
      email: string;
    };
    overview: {
      gender: string;
      phone: string;
      address: string;
      dateOfBirth: string;
      city: string;
      registerDate: string;
    };
  };
}

const PatientOverview: React.FC<PatientOverviewProps> = ({ patient }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden  mb-6">
      <div className="bg-blue-500 p-4 text-white  h-50">
        <Image src={patient.image} alt={patient.name} width={100} height={150} className="rounded-full mb-2" />
        <h2 className="text-xl font-bold">{patient.name}</h2>
        <div className="mt-2">
          <p>📞 {patient.contacts.phone}</p>
          <p>📍 {patient.contacts.address}</p>
          <p>✉️ {patient.contacts.email}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-2">Overview:</h3>
        <div className="grid grid-cols-2 gap-2">
          <p><span className="font-semibold">Gender:</span> {patient.overview.gender}</p>
          <p><span className="font-semibold">Phone:</span> {patient.overview.phone}</p>
          <p><span className="font-semibold">Address:</span> {patient.overview.address}</p>
          <p><span className="font-semibold">Date of Birth:</span> {patient.overview.dateOfBirth}</p>
          <p><span className="font-semibold">City:</span> {patient.overview.city}</p>
          <p><span className="font-semibold">Register Date:</span> {patient.overview.registerDate}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientOverview;