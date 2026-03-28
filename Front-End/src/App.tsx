import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner"; // Adicionado para notificações
import { TooltipProvider } from "@/components/ui/tooltip"; // NECESSÁRIO para corrigir o erro da tela branca
import { AccessibilityProvider } from "./contexts/AccessibilityContext";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import { SkipLink } from "./components/SkipLink";
import { AccessibilityMenu } from "./components/AccessibilityMenu"; // Adicionado menu flutuante

// Páginas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import CadastroOng from "./pages/CadastroOng";
import SobreOProjeto from "./pages/SobreOProjeto";
import ComoFunciona from "./pages/ComoFunciona";
import OngsParceiras from "./pages/OngsParceiras";
import RecuperarSenha from "./pages/RecuperarSenha";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AccessibilityProvider>
      {/* O TooltipProvider deve envolver tudo para evitar o erro de contexto do Shadcn */}
      <TooltipProvider delayDuration={200}>
        <BrowserRouter>
          {/* O SkipLink deve ser o primeiro para ser capturado pelo 'Tab' */}
          <SkipLink />
          
          <Header />

          {/* O id="conteudo-principal" é o alvo do SkipLink */}
          <main id="conteudo-principal" tabIndex={-1} className="outline-none min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/cadastro-ong" element={<CadastroOng />} />
              <Route path="/sobre" element={<SobreOProjeto />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/ongs" element={<OngsParceiras />} />
              <Route path="/recuperar-senha" element={<RecuperarSenha />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />

          {/* Menu de acessibilidade fixo no canto da tela */}
          <AccessibilityMenu />
          
          {/* Componentes de Notificação */}
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
      </AccessibilityProvider>
  );
}

export default App;