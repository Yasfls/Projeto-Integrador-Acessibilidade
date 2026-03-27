import React, { createContext, useContext, useState, useEffect } from 'react';

type DaltonismMode = 'none' | 'grayscale' | 'high-contrast';

interface AccessibilityContextData {
  fontSizePercentage: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  daltonismMode: DaltonismMode;
  setDaltonismMode: (mode: DaltonismMode) => void;
}

const AccessibilityContext = createContext<AccessibilityContextData>({} as AccessibilityContextData);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSizePercentage, setFontSizePercentage] = useState(100);
  const [daltonismMode, setDaltonismMode] = useState<DaltonismMode>('none');

useEffect(() => {
  const root = window.document.documentElement;
  
  if (daltonismMode === 'high-contrast') {
    root.classList.add('high-contrast-mode');
  } else {
    root.classList.remove('high-contrast-mode');
  }
}, [daltonismMode]);

  // Funções para controle de zoom
  const increaseFontSize = () => setFontSizePercentage((prev) => Math.min(prev + 10, 150));
  const decreaseFontSize = () => setFontSizePercentage((prev) => Math.max(prev - 10, 80));
  const resetFontSize = () => setFontSizePercentage(100);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSizePercentage,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        daltonismMode,
        setDaltonismMode,
      }}
    >
      {children}
      {daltonismMode === 'grayscale' && (
        <div className="fixed inset-0 z-[10000] pointer-events-none backdrop-grayscale" />
      )}
      
      {daltonismMode === 'high-contrast' && (
        <div className="fixed inset-0 z-[10000] pointer-events-none backdrop-contrast-150 backdrop-saturate-200" />
      )}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);