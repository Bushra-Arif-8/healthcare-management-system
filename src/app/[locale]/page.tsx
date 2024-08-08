"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page on component mount
    router.push('/en/auth/login');
  }, [router]);

  return null; // Since you don't want to show any content
}
