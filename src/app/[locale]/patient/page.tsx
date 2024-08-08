import PatientList from "@/components/patientlist";
import Sidebar from "@/components/sidebar";

export default function PatientsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Patients</h1>
        <PatientList />
      </main>
    </div>
  );
}