import React, { createContext, useContext, useState, useEffect } from 'react';

type DaltonismMode = 'none' | 'grayscale' | 'high-contrast' | 'protanopia' | 'deuteranopia' | 'tritanopia';

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
    document.documentElement.style.fontSize = `${fontSizePercentage}%`;
  }, [fontSizePercentage]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(
      'high-contrast-mode',
      'grayscale-mode',
      'protanopia-mode',
      'deuteranopia-mode',
      'tritanopia-mode'
    );

    if (daltonismMode === 'high-contrast') {
      root.classList.add('high-contrast-mode');
    } else if (daltonismMode === 'grayscale') {
      root.classList.add('grayscale-mode');
    } else if (daltonismMode === 'protanopia') {
      root.classList.add('protanopia-mode');
    } else if (daltonismMode === 'deuteranopia') {
      root.classList.add('deuteranopia-mode');
    } else if (daltonismMode === 'tritanopia') {
      root.classList.add('tritanopia-mode');
    }
  }, [daltonismMode]);

  const increaseFontSize = () => setFontSizePercentage((prev) => Math.min(prev + 10, 200));
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
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);