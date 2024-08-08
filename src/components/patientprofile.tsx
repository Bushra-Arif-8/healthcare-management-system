import React, { useEffect, useState } from 'react';
import PatientOverview from './patientoverview';
import PhysicalExam from './physicalexam';
import ReportsTable from './ReportsTable';
import WaterIntakeTracker from './waterIntakeTracker';
import AppointmentCalendar from './AppointmentCalender';
import HealthyHabitsChart from './healthyHabitsChart';
import Sidebar from './sidebar';
import '../app/globals.css';
import { useRouter } from 'next/router';


interface PatientProfileProps {
  patientId: number;
}

interface ContactInfo {
  phone: string;
  address: string;
  email: string;
}

interface Overview {
  gender: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  city: string;
  registerDate: string;
}

interface Exam {
  name: string;
  value: string;
}

interface PhysicalExam {
  heart: Exam;
  lungs: Exam;
  abdomen: Exam;
  volume: Exam;
}

interface Report {
  name: string;
  date: string;
}

interface WaterIntake {
  goal: number;
  tracked: number;
}

interface HealthyHabits {
  followingPlan: number;
  skipped: number;
  outsidePlan: number;
}

interface PatientData {
  name: string;
  image: string;
  contacts: ContactInfo;
  overview: Overview;
  physicalExam: PhysicalExam;
  reports: Report[];
  waterIntake: WaterIntake;
  healthyHabits: HealthyHabits;
}

const dummyPatients: { [key: number]: PatientData } = {
  1: {
    name: ' Iqbal Chowdhury',
    image: '/images/jpg/patient 1.jpg',
    contacts: {
      phone: '(907) 555-0101',
      address: 'Eastern crook Coolage area 457, New York',
      email: 'iqbalchowdhury@gmail.com',
    },
    overview: {
      gender: 'Male',
      phone: '(125)956644',
      address: 'St. Saint Street',
      dateOfBirth: '23/10/1985',
      city: 'Essexe',
      registerDate: '22/09/2020',
    },
    physicalExam: {
      heart: { name: 'Blockage in left artery', value: '120 min/Hg' },
      lungs: { name: 'Congestion in left side of chest', value: '72/min' },
      abdomen: { name: 'Pain on right side', value: '71.6 Kg' },
      volume: { name: 'S/P', value: '71.6 Kg' },
    },
    reports: [
      { name: 'Checkup Result', date: '12 Mon, 2022' },
      { name: 'Medicine Prescription', date: '17 Jan, 2022' },
      { name: 'Checkup Result', date: '21 Feb, 2022' },
      { name: 'Checkup Result', date: '13 Sep, 2022' },
      { name: 'Rock Cleaning Report', date: '20 May, 2022' },
    ],
    waterIntake: { goal: 56, tracked: 15 },
    healthyHabits: { followingPlan: 10, skipped: 5, outsidePlan: 25 },
  },
  2: {
    name: 'Sarah Johnson',
    image: '/images/webp/patient 2.webp',
    contacts: {
      phone: '(123) 456-7890',
      address: '123 Main St, Anytown, USA',
      email: 'sarahjohnson@gmail.com',
    },
    overview: {
      gender: 'Female',
      phone: '(123) 456-7890',
      address: '123 Main St',
      dateOfBirth: '15/05/1993',
      city: 'Anytown',
      registerDate: '10/01/2021',
    },
    physicalExam: {
      heart: { name: 'Normal', value: '110/70 mmHg' },
      lungs: { name: 'Clear', value: '68/min' },
      abdomen: { name: 'Soft, non-tender', value: '65.2 Kg' },
      volume: { name: 'Normal', value: '65.2 Kg' },
    },
    reports: [
      { name: 'Annual Checkup', date: '05 Jun, 2022' },
      { name: 'Blood Test Results', date: '20 Jul, 2022' },
      { name: 'X-Ray Report', date: '15 Aug, 2022' },
    ],
    waterIntake: { goal: 64, tracked: 20 },
    healthyHabits: { followingPlan: 15, skipped: 3, outsidePlan: 12 },
  },
  3: {
    name: 'Michael Lee',
    image:'/images/jpg/patient 10.jpg',
    contacts: {
      phone: '(456) 789-0123',
      address: '456 Oak Rd, Somewhere, USA',
      email: 'michaellee@gmail.com',
    },
    overview: {
      gender: 'Male',
      phone: '(456) 789-0123',
      address: '456 Oak Rd',
      dateOfBirth: '30/11/1978',
      city: 'Somewhere',
      registerDate: '05/03/2019',
    },
    physicalExam: {
      heart: { name: 'Slight murmur', value: '130/85 mmHg' },
      lungs: { name: 'Wheezing in left lung', value: '75/min' },
      abdomen: { name: 'Mild tenderness', value: '82.3 Kg' },
      volume: { name: 'Slightly overweight', value: '82.3 Kg' },
    },
    reports: [
      { name: 'Cardiac Stress Test', date: '10 Apr, 2022' },
      { name: 'Lung Function Test', date: '22 May, 2022' },
      { name: 'Abdominal Ultrasound', date: '18 Jun, 2022' },
      { name: 'Follow-up Consultation', date: '30 Jul, 2022' },
    ],
    waterIntake: { goal: 72, tracked: 18 },
    healthyHabits: { followingPlan: 8, skipped: 7, outsidePlan: 15 },
  },
  4: {
    name: 'Jane Doe',
    image: '/images/jpg/patient 4.jpg',
    contacts: {
      phone: '(456) 789-0123',
      address: '456 Oak Rd, Somewhere, USA',
      email: 'michaellee@gmail.com',
    },
    overview: {
      gender: 'Male',
      phone: '(456) 789-0123',
      address: '456 Oak Rd',
      dateOfBirth: '30/12/1991',
      city: 'Somewhere',
      registerDate: '05/03/2019',
    },
    physicalExam: {
      heart: { name: 'Slight murmur', value: '130/85 mmHg' },
      lungs: { name: 'Wheezing in left lung', value: '75/min' },
      abdomen: { name: 'Mild tenderness', value: '82.3 Kg' },
      volume: { name: 'Slightly overweight', value: '82.3 Kg' },
    },
    reports: [
      { name: 'Cardiac Stress Test', date: '10 Apr, 2022' },
      { name: 'Lung Function Test', date: '22 May, 2022' },
      { name: 'Abdominal Ultrasound', date: '18 Jun, 2022' },
      { name: 'Follow-up Consultation', date: '30 Jul, 2022' },
    ],
    waterIntake: { goal: 72, tracked: 18 },
    healthyHabits: { followingPlan: 8, skipped: 7, outsidePlan: 15 },
  },
  5:  {
    name: 'Christopher Wilson',
    image: '/images/jpg/patient 5.jpg',
    contacts: {
      phone: '(555) 666-7777',
      address: '555 Maple Rd, Springfield, USA',
      email: 'christopher.wilson@email.com',
    },
    overview: {
      gender: 'Male',
      phone: '(555) 666-7777',
      address: '555 Maple Rd',
      dateOfBirth: '18/09/1982',
      city: 'Springfield',
      registerDate: '18/09/2019',
    },
    physicalExam: {
      heart: { name: 'Normal', value: '120/80 mmHg' },
      lungs: { name: 'Clear', value: '68/min' },
      abdomen: { name: 'No issues', value: '78 Kg' },
      volume: { name: 'Normal weight', value: '78 Kg' },
    },
    reports: [
      { name: 'Dental Exam', date: '15 Sep, 2023' },
      { name: 'X-ray', date: '25 Oct, 2023' },
      { name: 'Physical Exam', date: '05 Nov, 2023' },
    ],
    waterIntake: { goal: 80, tracked: 75 },
    healthyHabits: { followingPlan: 18, skipped: 1, outsidePlan: 1 },
  },
6:  {
  name: 'Emily Brown',
  image: '/images/jpg/patient 6.jpg',
  contacts: {
    phone: '(333) 444-5555',
    address: '333 Oak Rd, Somewhere, USA',
    email: 'emily.brown@email.com',
  },
  overview: {
    gender: 'Female',
    phone: '(333) 444-5555',
    address: '333 Oak Rd',
    dateOfBirth: '20/12/1990',
    city: 'Somewhere',
    registerDate: '20/12/2020',
  },
  physicalExam: {
    heart: { name: 'Normal', value: '110/70 mmHg' },
    lungs: { name: 'Clear', value: '72/min' },
    abdomen: { name: 'No issues', value: '60 Kg' },
    volume: { name: 'Normal weight', value: '60 Kg' },
  },
  reports: [
    { name: 'Vision Test', date: '30 Jun, 2023' },
    { name: 'Hearing Test', date: '10 Jul, 2023' },
    { name: 'Physical Exam', date: '20 Aug, 2023' },
  ],
  waterIntake: { goal: 72, tracked: 55 },
  healthyHabits: { followingPlan: 12, skipped: 2, outsidePlan: 6 },
},
7:  {
  name: 'David Lee',
  image: '/images/jpg/patient 7.jpg',
  contacts: {
    phone: '(222) 333-4444',
    address: '222 Pine St, Anytown, USA',
    email: 'david.lee@email.com',
  },
  overview: {
    gender: 'Male',
    phone: '(222) 333-4444',
    address: '222 Pine St',
    dateOfBirth: '10/04/1985',
    city: 'Anytown',
    registerDate: '10/04/2020',
  },
  physicalExam: {
    heart: { name: 'Normal', value: '118/78 mmHg' },
    lungs: { name: 'Clear', value: '70/min' },
    abdomen: { name: 'No issues', value: '85 Kg' },
    volume: { name: 'Slightly overweight', value: '85 Kg' },
  },
  reports: [
    { name: 'Allergy Test', date: '25 Mar, 2023' },
    { name: 'Blood Test', date: '05 Apr, 2023' },
    { name: 'Physical Exam', date: '15 May, 2023' },
  ],
  waterIntake: { goal: 80, tracked: 65 },
  healthyHabits: { followingPlan: 10, skipped: 3, outsidePlan: 7 },
},
8:  {
  name: 'Sarah Jones',
  image: '/images/jpg/patient 8.jpg',
  contacts: {
    phone: '(101) 101-1010',
    address: '101 Maple Rd, Springfield, USA',
    email: 'sarah.jones@email.com',
  },
  overview: {
    gender: 'Female',
    phone: '(101) 101-1010',
    address: '101 Maple Rd',
    dateOfBirth: '05/07/1995',
    city: 'Springfield',
    registerDate: '05/07/2021',
  },
  physicalExam: {
    heart: { name: 'Slightly fast', value: '125/85 mmHg' },
    lungs: { name: 'Clear', value: '75/min' },
    abdomen: { name: 'No issues', value: '55 Kg' },
    volume: { name: 'Normal weight', value: '55 Kg' },
  },
  reports: [
    { name: 'Thyroid Test', date: '10 Dec, 2022' },
    { name: 'Iron Test', date: '20 Jan, 2023' },
    { name: 'Physical Exam', date: '30 Feb, 2023' },
  ],
  waterIntake: { goal: 60, tracked: 45 },
  healthyHabits: { followingPlan: 8, skipped: 4, outsidePlan: 8 },
},
9:  {
  name: 'David Wilson',
  image: '/images/jpg/patient 9.jpg',
  contacts: {
    phone: '(101) 101-1010',
    address: '101 Maple Rd, Springfield, USA',
    email: 'sarah.jones@email.com',
  },
  overview: {
    gender: 'Male',
    phone: '(101) 101-1010',
    address: '101 Maple Rd',
    dateOfBirth: '05/07/1995',
    city: 'Springfield',
    registerDate: '05/07/2021',
  },
  physicalExam: {
    heart: { name: 'Slightly fast', value: '125/85 mmHg' },
    lungs: { name: 'Clear', value: '75/min' },
    abdomen: { name: 'No issues', value: '55 Kg' },
    volume: { name: 'Normal weight', value: '55 Kg' },
  },
  reports: [
    { name: 'Thyroid Test', date: '10 Dec, 2022' },
    { name: 'Iron Test', date: '20 Jan, 2023' },
    { name: 'Physical Exam', date: '30 Feb, 2023' },
  ],
  waterIntake: { goal: 60, tracked: 45 },
  healthyHabits: { followingPlan: 8, skipped: 4, outsidePlan: 8 },
},
10:  {
  name: 'Emma Thompson',
  image: '/images/jpg/patient 10.jpg',
  contacts: {
    phone: '(101) 101-1010',
    address: '101 Maple Rd, Springfield, USA',
    email: 'sarah.jones@email.com',
  },
  overview: {
    gender: 'Female',
    phone: '(101) 101-1010',
    address: '101 Maple Rd',
    dateOfBirth: '05/07/1995',
    city: 'Springfield',
    registerDate: '05/07/2021',
  },
  physicalExam: {
    heart: { name: 'Slightly fast', value: '125/85 mmHg' },
    lungs: { name: 'Clear', value: '75/min' },
    abdomen: { name: 'No issues', value: '55 Kg' },
    volume: { name: 'Normal weight', value: '55 Kg' },
  },
  reports: [
    { name: 'Thyroid Test', date: '10 Dec, 2022' },
    { name: 'Iron Test', date: '20 Jan, 2023' },
    { name: 'Physical Exam', date: '30 Feb, 2023' },
  ],
  waterIntake: { goal: 60, tracked: 45 },
  healthyHabits: { followingPlan: 8, skipped: 4, outsidePlan: 8 },
}
};

const PatientProfile: React.FC<PatientProfileProps> = ({ patientId }) => {
  const router = useRouter();
  const [patientData, setPatientData] = useState<PatientData | null>(null);

  useEffect(() => {
    setPatientData(dummyPatients[patientId] || null);
  }, [patientId]);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  const { name, image, contacts, overview, physicalExam, reports, waterIntake, healthyHabits } = patientData;

  const handleBackClick = () => {
    router.push('/en/patient'); // Adjust this path as needed
  };


  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 pl-80">
        <div className="flex items-center mb-6">
          <button onClick={handleBackClick} className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">Patient Profile</h1>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 space-y-6">
            <PatientOverview patient={patientData} />
            <PhysicalExam data={patientData.physicalExam} />
            <WaterIntakeTracker data={patientData.waterIntake} />
          </div>
          <div className="col-span-2 space-y-6">
            <ReportsTable reports={patientData.reports} />
            <div className="grid grid-cols-2 gap-6">
              <AppointmentCalendar />
              <HealthyHabitsChart data={patientData.healthyHabits} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;


