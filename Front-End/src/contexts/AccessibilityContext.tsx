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

  // 1. Efeito para gerenciar o tamanho da fonte global
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSizePercentage}%`;
  }, [fontSizePercentage]);

  // 2. Efeito para gerenciar as classes de acessibilidade no HTML
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Limpa classes anteriores para evitar conflitos
    root.classList.remove('high-contrast-mode', 'grayscale-mode');

    if (daltonismMode === 'high-contrast') {
      root.classList.add('high-contrast-mode');
    } else if (daltonismMode === 'grayscale') {
      root.classList.add('grayscale-mode');
    }
  }, [daltonismMode]);

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
      {/* Não precisamos mais das divs fixas aqui! 
        As cores e filtros agora são controlados pelas classes 
        '.high-contrast-mode' e '.grayscale-mode' no seu index.css.
      */}
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);