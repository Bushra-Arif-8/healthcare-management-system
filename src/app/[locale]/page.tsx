"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { useGetTodoQuery } from '../../redux/slices/api'; // Adjust path if needed

export default function Home() {
  const t = useTranslations('IndexPage');
  
  // Use the RTK Query hook to fetch data
  const { data, error, isLoading } = useGetTodoQuery();

  return (
    <div>
      <h1 className='text-4xl mb-4 font-semibold'>{t('title')}</h1>

      {/* Render data or loading/error states */}
      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {(error as any).message}</p>}

      {data && (
        <div>
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
