// src/styles/themes/ThemeProvider.tsx
"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme, createGlobalStyle } from 'styled-components';
import {  darkTheme } from '../themes/DarkTheme';
import {  lightTheme } from '../themes/LightTheme';


interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: all 0.3s ease;
  }
`;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme: DefaultTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle theme={currentTheme} />     
         {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
