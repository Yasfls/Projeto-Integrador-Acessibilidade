import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Cog, Heart } from "lucide-react";

export default function ComoFunciona() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: Search,
      title: "Diagnóstico com as ONGs",
      description: "Realizamos um mapeamento detalhado das necessidades educacionais de cada ONG parceira, identificando áreas de conhecimento prioritárias e perfil ideal de voluntários."
    },
    {
      icon: Cog,
      title: "Desenvolvimento da Solução",
      description: "Nossa plataforma conecta professores voluntários às ONGs com base em suas especialidades, disponibilidade e localização, criando matches perfeitos para maximizar o impacto."
    },
    {
      icon: Heart,
      title: "Aplicação e Impacto Social",
      description: "Acompanhamos todo o processo de voluntariado, desde o primeiro contato até a implementação dos projetos educacionais, medindo e celebrando os resultados alcançados."
    }
  ];

  return (
    <div className="flex-1 container mx-auto px-4 py-16 focus:outline-none">

      <section aria-labelledby="titulo-como-funciona">
        <div className="text-center mb-16">
          <h1 id="titulo-como-funciona" className="text-4xl font-bold text-primary mb-4">
            Como Funciona?
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nosso processo é simples e eficaz: conectamos conhecimento a quem mais precisa 
            através de uma metodologia testada e orientada por resultados.
          </p>
        </div>
      </section>

      <section aria-label="Etapas do processo">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-shadow duration-300 relative"
                tabIndex={0}
                aria-label={`Etapa ${index + 1}: ${step.title}. ${step.description}`}
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold" aria-hidden="true">
                    {index + 1}
                  </div>
                  <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center mt-4" aria-hidden="true">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="titulo-processo" className="mt-20 bg-gradient-card rounded-lg p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 id="titulo-processo" className="text-3xl font-bold text-primary">
              Um processo pensado para gerar resultados
            </h2>
            <ul className="space-y-4 list-none">
              <li className="flex items-start gap-3" tabIndex={0}>
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" aria-hidden="true"></div>
                <p className="text-muted-foreground">
                  <strong>Cadastro simples:</strong> Voluntários se registram informando suas especialidades e disponibilidade.
                </p>
              </li>
              <li className="flex items-start gap-3" tabIndex={0}>
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" aria-hidden="true"></div>
                <p className="text-muted-foreground">
                  <strong>Matching inteligente:</strong> Nossa plataforma sugere as melhores oportunidades baseadas no perfil.
                </p>
              </li>
              <li className="flex items-start gap-3" tabIndex={0}>
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" aria-hidden="true"></div>
                <p className="text-muted-foreground">
                  <strong>Acompanhamento contínuo:</strong> Suporte durante todo o processo de voluntariado.
                </p>
              </li>
              <li className="flex items-start gap-3" tabIndex={0}>
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" aria-hidden="true"></div>
                <p className="text-muted-foreground">
                  <strong>Impacto mensurável:</strong> Relatórios de progresso e feedback constante.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop" 
              alt="Grupo de estudantes ou profissionais a sorrir e a cumprimentarem-se enquanto trabalham num computador portátil"
              className="max-w-full h-auto rounded-lg shadow-card"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-cta" className="text-center mt-16">
        <div className="bg-primary text-primary-foreground rounded-lg p-8">
          <h2 id="titulo-cta" className="text-2xl font-bold mb-4">
            Pronto para fazer a diferença?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Junte-se a centenas de professores que já estão transformando vidas através da educação.
          </p>
          <button 
            onClick={() => navigate("/ongs")}
            className="bg-background text-foreground px-8 py-3 rounded-md font-semibold hover:bg-background/90 transition-colors"
            aria-label="Ver oportunidades de voluntariado nas ONGs parceiras"
          >
            Ver Oportunidades
          </button>
        </div>
      </section>

    </div>
  );
}