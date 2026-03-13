import { useState } from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Eye, Type, ZoomIn, ZoomOut, RefreshCcw, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    increaseFontSize, 
    decreaseFontSize, 
    resetFontSize, 
    daltonismMode, 
    setDaltonismMode 
  } = useAccessibility();

  return (
    // A classe "fixed" junto com "bottom-6 right-6" é o que prende o botão na tela!
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-background border shadow-lg rounded-xl p-4 mb-2 animate-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between mb-4 border-b pb-2">
            <h3 className="font-bold flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Acessibilidade
            </h3>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>X</Button>
          </div>

          {/* Controle de Fonte */}
          <div className="space-y-2 mb-6">
            <span className="text-sm font-semibold flex items-center gap-2">
              <Type className="w-4 h-4" /> Tamanho da Letra
            </span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={decreaseFontSize} title="Diminuir texto">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={resetFontSize} title="Tamanho original">
                <RefreshCcw className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={increaseFontSize} title="Aumentar texto">
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Controle de Contraste e Daltonismo */}
          <div className="space-y-2">
            <span className="text-sm font-semibold flex items-center gap-2">
              <Palette className="w-4 h-4" /> Contraste e Cores
            </span>
            <div className="flex flex-col gap-2">
              <Button 
                variant={daltonismMode === 'none' ? 'default' : 'outline'} 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setDaltonismMode('none')}
              >
                Cores Padrão
              </Button>
              <Button 
                variant={daltonismMode === 'grayscale' ? 'default' : 'outline'} 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setDaltonismMode('grayscale')}
              >
                Modo Escala de Cinza
              </Button>
              <Button 
                variant={daltonismMode === 'high-contrast' ? 'default' : 'outline'} 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setDaltonismMode('high-contrast')}
              >
                Alto Contraste
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* BOTÃO PRINCIPAL COM ÍCONE DE OLHO */}
      <Button 
        onClick={() => setIsOpen(!isOpen)} 
        size="icon"
        className="h-14 w-14 rounded-full shadow-xl hover:scale-105 transition-transform bg-primary"
        aria-label="Abrir menu de acessibilidade"
      >
        <Eye className="h-7 w-7 text-primary-foreground" />
      </Button>
    </div>
  );
}