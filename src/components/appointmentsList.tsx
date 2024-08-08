import React, { useState, useEffect } from 'react';


interface Appointment {
  code: string;
  patientName: string;
  patientImage: string;
  date: string;
  status: 'Confirmed' | 'Cancel' | 'Pending';
}

const AppointmentItem: React.FC<{
  appointment: Appointment;
  onEdit: (appointment: Appointment) => void;
  onDelete: (code: string) => void;
}> = ({ appointment, onEdit, onDelete }) => (
  <tr className="border-b">
    <td className="py-2"><input type="checkbox" /></td>
    <td>{appointment.code}</td>
    <td className="flex items-center">
      {appointment.patientName}
    </td>
    <td>{appointment.date}</td>
    <td>
      <span className={`px-2 py-1 rounded ${
        appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
        appointment.status === 'Cancel' ? 'bg-red-100 text-red-800' :
        'bg-yellow-100 text-yellow-800'
      }`}>
        {appointment.status}
      </span>
    </td>
    <td>
      <button onClick={() => onEdit(appointment)} className="mr-2">🖊️</button>
      <button onClick={() => onDelete(appointment.code)}>🗑️</button>
    </td>
  </tr>
);

interface AppointmentsListProps {
  isAddingAppointment: boolean;
  setIsAddingAppointment: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ isAddingAppointment, setIsAddingAppointment }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { code: '#527727', patientName: 'Cameron', patientImage: '/path-to-image', date: '5/7/24', status: 'Confirmed' },
    { code: '#565327', patientName: 'Randall', patientImage: '/path-to-image', date: '6/21/24', status: 'Cancel' },
    { code: '#894123', patientName: 'Olivia', patientImage: '/path-to-image', date: '8/14/24', status: 'Confirmed' },
    { code: '#234567', patientName: 'Ethan', patientImage: '/path-to-image', date: '7/9/24', status: 'Pending' },
    { code: '#678912', patientName: 'Sophia', patientImage: '/path-to-image', date: '8/5/24', status: 'Confirmed' },
    { code: '#345678', patientName: 'Liam', patientImage: '/path-to-image', date: '1/22/24', status: 'Cancel' },
    { code: '#789123', patientName: 'Ava', patientImage: '/path-to-image', date: '8/16/24', status: 'Confirmed' },
    { code: '#456789', patientName: 'Mason', patientImage: '/path-to-image', date: '8/30/24', status: 'Pending' },
    { code: '#891234', patientName: 'Isabella', patientImage: '/path-to-image', date: '2/10/24', status: 'Confirmed' },
    { code: '#567890', patientName: 'Lucas', patientImage: '/path-to-image', date: '8/25/24', status: 'Cancel' },
  ]);

  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);
  const [newAppointment, setNewAppointment] = useState<Appointment>({
    code: '',
    patientName: '',
    patientImage: '/path-to-default-image',
    date: '',
    status: 'Pending'
  });

  useEffect(() => {
    if (isAddingAppointment) {
      setEditingAppointment(newAppointment);
    }
  }, [isAddingAppointment]);

  const handleEdit = (appointment: Appointment) => {
    setEditingAppointment(appointment);
  };

  const handleDelete = (code: string) => {
    setAppointments(appointments.filter(appointment => appointment.code !== code));
  };

  const handleSave = (editedAppointment: Appointment) => {
    if (isAddingAppointment) {
      const newCode = `#${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
      const appointmentToAdd = { ...editedAppointment, code: newCode };
      setAppointments([...appointments, appointmentToAdd]);
      setIsAddingAppointment(false);
    } else {
      setAppointments(appointments.map(appointment =>
        appointment.code === editedAppointment.code ? editedAppointment : appointment
      ));
    }
    setEditingAppointment(null);
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Appointments Lists</h2>
        <button className="text-blue-500">See All</button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th></th>
            <th>Code</th>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <AppointmentItem
              key={index}
              appointment={appointment}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      {(editingAppointment || isAddingAppointment) && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">
            {isAddingAppointment ? 'Add New Appointment' : 'Edit Appointment'}
          </h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSave(editingAppointment!);
          }} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-medium">Code</label>
              <input
                type="text"
                value={editingAppointment?.code}
                onChange={(e) => setEditingAppointment({ ...editingAppointment!, code: e.target.value })}
                className="p-2 border rounded"
                disabled={isAddingAppointment}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Patient Name</label>
              <input
                type="text"
                value={editingAppointment?.patientName}
                onChange={(e) => setEditingAppointment({ ...editingAppointment!, patientName: e.target.value })}
                className="p-2 border rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Date</label>
              <input
                type="text"
                value={editingAppointment?.date}
                onChange={(e) => setEditingAppointment({ ...editingAppointment!, date: e.target.value })}
                className="p-2 border rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Status</label>
              <select
                value={editingAppointment?.status}
                onChange={(e) => setEditingAppointment({ ...editingAppointment!, status: e.target.value as 'Confirmed' | 'Cancel' | 'Pending' })}
                className="p-2 border rounded"
              >
                <option value="Confirmed">Confirmed</option>
                <option value="Cancel">Cancel</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                {isAddingAppointment ? 'Add' : 'Save'}
              </button>
              <button 
                type="button" 
                onClick={() => {
                  setEditingAppointment(null);
                  setIsAddingAppointment(false);
                }} 
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AppointmentsList;