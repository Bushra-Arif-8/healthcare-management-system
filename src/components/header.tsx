// components/Header.tsx
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center fixed top-0 right-0 left-64 z-10">
      <div>
        <h2 className="text-2xl font-bold">Hello, Bushra Arif 👋</h2>
        <p className="text-gray-500">Good morning ☀️</p>
      </div>
      <div className="flex items-center">
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="Search for anything"
            className="pl-10 pr-4 py-2 border rounded-full w-64"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
        
      </div>
    </header>
  );
};

export default Header;