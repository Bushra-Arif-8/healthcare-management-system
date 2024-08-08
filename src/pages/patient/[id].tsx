//src/pages/patient/[id].tsx
"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PatientProfile from '../../components/patientprofile'; // Adjust the import path based on your project structure

const PatientPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [patientId, setPatientId] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      setPatientId(Number(id));
    }
  }, [id]);

  if (!patientId) {
    return <div>Loading...</div>;
  }

  return <PatientProfile patientId={patientId} />;
};

export default PatientPage;
