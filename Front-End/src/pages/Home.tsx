import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import heroImage from "@/assets/maos_dadas.jpg";

export default function Home() {
  const [isAuthenticated] = useState(true);
  const navigate = useNavigate();

  const handleVolunteerClick = () => {
    // AJUSTADO: Atualizado de "/ongs-parceiras" para "/ongs"
    navigate("/ongs");
  };

  const handleOngClick = () => {
    navigate("/cadastro-ong");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main id="conteudo-principal" tabIndex={-1} className="flex-1 focus:outline-none">
        <section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Voluntários do Conhecimento: <br/>Conectando conhecimento a quem mais precisa.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Uma plataforma que une professores voluntários a ONGs educacionais,
                criando oportunidades de aprendizado e crescimento para comunidades
                que mais precisam de apoio educacional.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleVolunteerClick}
                      size="lg"
                      className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg"
                    >
                      Quero ser voluntário
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent 
                    className="bg-accent text-accent-foreground"
                    sideOffset={5}
                    side="top"
                  >
                    <p>para profissionais</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleOngClick}
                      size="lg"
                      variant="secondary"
                      className="px-8 py-3 text-lg"
                    >
                      Quero encontrar um voluntário
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent 
                    className="bg-accent text-accent-foreground"
                    sideOffset={5}
                    side="top"
                  >
                    <p>para instituições</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={heroImage}
                alt="Pessoas unindo as mãos em um fist bump, representando união e colaboração"
                className="max-w-full h-auto rounded-lg shadow-card"
              />
            </div>
          </div>
        </section>

        {/* ... restante do código acima ... */}

        {isAuthenticated && (
          // Removemos a cor do fundo da section e deixamos só o container
          <section className="container mx-auto px-4 py-16">
            
            {/* CRIAMOS A CAIXA AQUI: Fundo primary, texto foreground, cantos arredondados e sombra */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 shadow-lg text-center space-y-6 max-w-5xl mx-auto">
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Bem-vindo!
              </h2>
              
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Explore nossas ONGs parceiras e descubra como você pode fazer a diferença
                na vida de muitas pessoas através da educação.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button
                  onClick={() => navigate("/ongs")}
                  variant="outline"
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 border-transparent font-bold px-8"
                >
                  Ver ONGs Parceiras
                </Button>
                <Button
                  onClick={() => navigate("/como-funciona")}
                  variant="outline"
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 border-transparent font-bold px-8"
                >
                  Como Funciona?
                </Button>
              </div>
              
            </div>
          </section>
        )}
      </main>
    </div>
  );
}