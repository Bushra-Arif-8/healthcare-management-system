// src/app/auth/AuthLayout.tsx
"use client";

import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="auth-layout">
      <header>
        <h1>Healthcare Management System</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
