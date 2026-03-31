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

        {isAuthenticated && (
          <section className="bg-primary py-16"> {/* <- Mudei de bg-accent para bg-primary */}
            <div className="container mx-auto px-4">
              <div className="text-center space-y-6">
                
                {/* O título agora usa a cor de foreground (texto preto) */}
                <h2 className="text-3xl font-bold text-primary-foreground">
                  Bem-vindo!
                </h2>
                
                {/* O parágrafo também usa a cor de foreground */}
                <p className="text-lg text-primary-foreground max-w-2xl mx-auto">
                  Explore nossas ONGs parceiras e descubra como você pode fazer a diferença
                  na vida de muitas pessoas através da educação.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => navigate("/ongs")}
                    /* Os botões agora têm fundo preto e borda amarela (outline) */
                    variant="outline"
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90 border-transparent"
                  >
                    Ver ONGs Parceiras
                  </Button>
                  <Button
                    onClick={() => navigate("/como-funciona")}
                    variant="outline"
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90 border-transparent"
                  >
                    Como Funciona?
                  </Button>
                </div>
                
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}