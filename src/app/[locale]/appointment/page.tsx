import Appointment from "@/pages/appointment/appointment";
import Sidebar from "@/components/sidebar";

export default function PatientsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Appointment</h1>
        <Appointment />
      </main>
    </div>
  );
}