import PatientProfile from '@/components/patientprofile';

export default function PatientPage({ params }: { params: { id: string } }) {
  return <PatientProfile patientId={Number(params.id)} />;
}