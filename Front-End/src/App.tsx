import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import { SkipLink } from "./components/SkipLink";
import { AccessibilityMenu } from "./components/AccessibilityMenu";

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
      <TooltipProvider delayDuration={200}>
        <BrowserRouter>
          
          <SkipLink />
          
          <Header />

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

          <AccessibilityMenu />
          
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </AccessibilityProvider>
  );
}

export default App;
