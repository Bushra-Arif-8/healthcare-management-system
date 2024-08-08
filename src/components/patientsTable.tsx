"use client";
import React, { useState } from 'react';

interface Patient {
  id: number;
  name: string;
  gender: string;
  age: number;
  admittedDate: string;
  type: string;
  status: string;
}

const initialPatients: Patient[] = [
  { id: 1, name: 'Guy Hawkins', gender: 'Male', age: 27, admittedDate: '07/05/2023', type: 'ECG', status: 'Confirmed' },
  { id: 2, name: 'Robert Fox', gender: 'Female', age: 25, admittedDate: '18/09/2023', type: 'Sugar Test', status: 'Pending' },
  { id: 3, name: 'Kathryn', gender: 'Male', age: 32, admittedDate: '16/08/2023', type: 'Checkup', status: 'Cancel' },
];

const PatientsTable: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [showAll, setShowAll] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedPatient, setEditedPatient] = useState<Patient | null>(null);

  const deletePatient = (id: number) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  const startEditing = (patient: Patient) => {
    setEditingId(patient.id);
    setEditedPatient({ ...patient });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (editedPatient) {
      setEditedPatient({
        ...editedPatient,
        [e.target.name]: e.target.value
      });
    }
  };

  const saveEdit = () => {
    if (editedPatient) {
      setPatients(patients.map(patient => patient.id === editedPatient.id ? editedPatient : patient));
      setEditingId(null);
      setEditedPatient(null);
    }
  };

  const addNewPatient = () => {
    const newPatient: Patient = {
      id: patients.length + 1,
      name: 'New Patient',
      gender: 'Other',
      age: 30,
      admittedDate: new Date().toLocaleDateString(),
      type: 'Checkup',
      status: 'Pending'
    };
    setPatients([...patients, newPatient]);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <h3 className="text-lg font-semibold">All Patients</h3>
        <button onClick={() => setShowAll(!showAll)} className="text-blue-500">
          {showAll ? 'Show Less' : 'See All'}
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Patient Name</th>
            <th className="p-2 text-left">Gender</th>
            <th className="p-2 text-left">Age</th>
            <th className="p-2 text-left">Admitted Date</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {(showAll ? patients : patients.slice(0, 3)).map((patient) => (
            <tr key={patient.id} className="border-b">
              <td className="p-2">
                {editingId === patient.id ? (
                  <input 
                    name="name"
                    value={editedPatient?.name || ''}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                ) : (
                  patient.name
                )}
              </td>
              <td className="p-2">
                {editingId === patient.id ? (
                  <select
                    name="gender"
                    value={editedPatient?.gender || ''}
                    onChange={handleInputChange}
                    className="border p-1"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  patient.gender
                )}
              </td>
              <td className="p-2">
                {editingId === patient.id ? (
                  <input
                    name="age"
                    type="number"
                    value={editedPatient?.age || ''}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                ) : (
                  patient.age
                )}
              </td>
              <td className="p-2">
                {editingId === patient.id ? (
                  <input
                    name="admittedDate"
                    type="date"
                    value={editedPatient?.admittedDate || ''}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                ) : (
                  patient.admittedDate
                )}
              </td>
              <td className="p-2">
                {editingId === patient.id ? (
                  <input
                    name="type"
                    value={editedPatient?.type || ''}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                ) : (
                  patient.type
                )}
              </td>
              <td className="p-2">
                {editingId === patient.id ? (
                  <select
                    name="status"
                    value={editedPatient?.status || ''}
                    onChange={handleInputChange}
                    className="border p-1"
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancel">Cancel</option>
                  </select>
                ) : (
                  <span className={`px-2 py-1 rounded ${
                    patient.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                    patient.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {patient.status}
                  </span>
                )}
              </td>
              <td className="p-2">
                {editingId === patient.id ? (
                  <button onClick={saveEdit} className="bg-green-500 text-white px-2 py-1 rounded">
                    Save
                  </button>
                ) : (
                  <>
                    <button onClick={() => startEditing(patient)} className="mr-2">✏️</button>
                    <button onClick={() => deletePatient(patient.id)} className="text-red-500">🗑️</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4">
        <button onClick={addNewPatient} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Patient
        </button>
      </div>
    </div>
  );
};

export default PatientsTable;
