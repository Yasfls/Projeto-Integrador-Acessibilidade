import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ONG {
  id: number;
  name: string;
  description: string;
  tag: string;
  image: string;
  altText: string; 
}

const ongRaizes: ONG = {
  id: 3,
  name: "ONG Raízes",
  description: "Desenvolve projetos educacionais sustentáveis com foco na preservação ambiental e educação para a cidadania.",
  tag: "Sustentabilidade",
  image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
  altText: "Pessoas a debater ideias numa mesa de trabalho, representando o planeamento sustentável da ONG"
};

export default function OngsParceiras() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 container mx-auto px-4 py-16 focus:outline-none">

      <section aria-labelledby="titulo-ongs">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 id="titulo-ongs" className="text-4xl font-bold text-primary mb-4">
            Saiba mais sobre nossa ONG parceira
          </h1>
          <p className="text-lg text-muted-foreground">
            Conheça nossa organização parceira e descubra como seu conhecimento
            pode transformar vidas através da educação. A ONG Raízes tem sua especialidade
            e forma única de impactar positivamente a sociedade.
          </p>
        </div>

        <Card
          className="shadow-card hover:shadow-hover transition-shadow duration-300 max-w-lg mx-auto text-left"
          tabIndex={0}
          aria-label={`ONG Raízes — ${ongRaizes.tag}. ${ongRaizes.description}`}
        >
          <CardHeader className="space-y-4">
            <Badge className="w-fit bg-accent text-accent-foreground" aria-label={`Categoria: ${ongRaizes.tag}`}>
              {ongRaizes.tag}
            </Badge>
            <img
              src={ongRaizes.image}
              alt={ongRaizes.altText}
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
              onClick={() => navigate("/cadastro")}
              className="w-full bg-primary hover:bg-primary-hover"
              aria-label="Seja um voluntário na ONG Raízes"
            >
              Seja um voluntário
            </Button>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="titulo-contato" className="text-center mt-20">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <h2 id="titulo-contato" className="text-3xl font-bold mb-4">
            Dúvidas sobre o voluntariado?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Estamos sempre disponíveis para ajudar. Entre em contato
            conosco para saber mais sobre as oportunidades.
          </p>
          <a
            href="https://wa.me/5547999999999" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar em contato pelo WhatsApp (abre em nova aba)"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 border-transparent font-bold px-8"
            >
              Entrar em contato
            </Button>
          </a>
        </div>
      </section>

    </div>
  );
}