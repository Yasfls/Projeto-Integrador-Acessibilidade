import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

interface ONG {
  id: number;
  name: string;
  description: string;
  tag: string;
  image: string;
}

const ongRaizes: ONG = {
  id: 3,
  name: "ONG Raízes",
  description: "Desenvolve projetos educacionais sustentáveis com foco na preservação ambiental e educação para a cidadania.",
  tag: "Sustentabilidade",
  image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop"
};

export default function OngsParceiras() {
  const navigate = useNavigate();
  const handleVolunteerClick = () => {
    navigate("/cadastro");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Saiba mais sobre nossa ONG parceira
            </h1>
            <p className="text-lg text-muted-foreground">
              Conheça nossa organização parceira e descubra como seu conhecimento
              pode transformar vidas através da educação. A ONG Raízes tem sua especialidade
              e forma única de impactar positivamente a sociedade.
            </p>
          </div>

          <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 max-w-lg mx-auto text-left">
            <CardHeader className="space-y-4">
              <Badge className="w-fit bg-accent text-accent-foreground">
                {ongRaizes.tag}
              </Badge>
              <img
                src={ongRaizes.image}
                alt={`Imagem representativa da ${ongRaizes.name}`}
                className="w-full h-48 object-cover rounded-md"
              />
            </CardHeader>

            <CardContent className="space-y-4">
              <CardTitle className="text-xl text-primary">
                {ongRaizes.name}
              </CardTitle>

              <p className="text-muted-foreground leading-relaxed">
                {ongRaizes.description}
              </p>

              <Button
                onClick={handleVolunteerClick}
                className="w-full bg-primary hover:bg-primary-hover"
              >
                Seja um voluntário
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <div className="bg-accent rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Dúvidas sobre o voluntariado?
            </h2>
            <p className="text-accent-foreground mb-6">
              Estamos sempre disponíveis para ajudar. Entre em contato
              conosco para saber mais sobre as oportunidades.
            </p>
            <a
              href="https://wa.me/5547999999999" // <-- Substitua pelo seu número de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Entrar em contato
              </Button>
            </a>
          </div>
        </div>
      </main>

      <Footer variant="complete" />
    </div>
  );
}