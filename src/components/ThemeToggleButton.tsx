// src/components/ThemeToggleButton.tsx
"use client";

import React from 'react';
import { useTheme } from '../utils/ThemeProvider';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} >
       {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

export default ThemeToggleButton;
