import { Card, CardContent } from "@/components/ui/card";

export default function SobreOProjeto() {
  return (
    <div className="min-h-screen flex flex-col">
      <main id="conteudo-principal" tabIndex={-1} className="flex-1 container mx-auto px-4 py-16 focus:outline-none">
        
        <section aria-labelledby="titulo-sobre">
          <div className="text-center mb-16">
            <h1 id="titulo-sobre" className="text-4xl font-bold text-primary mb-4">
              Sobre o Projeto
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Um projeto com propósito: conectar conhecimento através da educação 
              e transformar vidas em comunidades que mais precisam.
            </p>
          </div>
        </section>

        <section aria-label="Pilares do projeto">
          <div className="relative max-w-6xl mx-auto">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/30 transform -translate-y-1/2 z-0" aria-hidden="true"></div>
            
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              
              <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card h-full flex flex-col" tabIndex={0} aria-label="Pilar 1: Carência de Profissionais nas ONGs">
                <CardContent className="p-8 text-center flex flex-col flex-1 gap-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-primary min-h-[3.5rem] flex items-center justify-center">
                    Carência de Profissionais nas ONGs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Muitas organizações não-governamentais enfrentam dificuldades 
                    para encontrar profissionais qualificados, especialmente na 
                    área educacional, limitando seu impacto social.
                  </p>
                  <img 
                    src="https://observatorio3setor.org.br/wp-content/uploads/2019/08/voluntariado.jpg" 
                    alt="Várias mãos sobrepostas no centro de uma roda, simbolizando união e trabalho em equipe"
                    className="w-full h-32 object-cover rounded-md mt-auto shrink-0"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card h-full flex flex-col" tabIndex={0} aria-label="Pilar 2: Impacto Social pela Educação">
                <CardContent className="p-8 text-center flex flex-col flex-1 gap-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-primary min-h-[3.5rem] flex items-center justify-center">
                    Impacto Social pela Educação
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    A educação é a ferramenta mais poderosa para transformar 
                    comunidades. Professores voluntários podem multiplicar 
                    conhecimento e criar oportunidades de crescimento.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop" 
                    alt="Grupo de crianças atentas a estudar sentadas numa sala de aula"
                    className="w-full h-32 object-cover rounded-md mt-auto shrink-0"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card h-full flex flex-col" tabIndex={0} aria-label="Pilar 3: Um Projeto com Propósito">
                <CardContent className="p-8 text-center flex flex-col flex-1 gap-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-primary min-h-[3.5rem] flex items-center justify-center">
                    Um Projeto com Propósito
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    Nossa plataforma conecta essas duas necessidades: 
                    professores que querem fazer a diferença e ONGs que 
                    precisam de apoio educacional especializado.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop" 
                    alt="Equipe de pessoas a trabalhar e a conversar em redor de uma mesa de escritório com notebooks e papéis"
                    className="w-full h-32 object-cover rounded-md mt-auto shrink-0"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section aria-labelledby="titulo-resultados" className="mt-20">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 max-w-6xl mx-auto shadow-lg">
            <div className="text-center space-y-6">
              <h2 id="titulo-resultados" className="text-3xl font-bold">
                Resultados Esperados
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center" tabIndex={0} aria-label="500 ou mais professores voluntários">
                  <div className="text-4xl font-bold mb-2" aria-hidden="true">500+</div>
                  <p className="text-lg opacity-90">Professores voluntários</p>
                </div>
                <div className="text-center" tabIndex={0} aria-label="50 ou mais ONGs parceiras">
                  <div className="text-4xl font-bold mb-2" aria-hidden="true">50+</div>
                  <p className="text-lg opacity-90">ONGs parceiras</p>
                </div>
                <div className="text-center" tabIndex={0} aria-label="10 mil ou mais vidas impactadas">
                  <div className="text-4xl font-bold mb-2" aria-hidden="true">10.000+</div>
                  <p className="text-lg opacity-90">Vidas impactadas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}