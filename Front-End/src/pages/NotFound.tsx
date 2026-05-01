import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background" aria-labelledby="titulo-404">
      <div className="text-center" role="alert">
        <h1 id="titulo-404" className="text-4xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Página não encontrada</p>
        <p className="text-muted-foreground mb-6">
          A página <strong>{location.pathname}</strong> não existe ou foi removida.
        </p>
        <a
          href="/"
          className="text-primary hover:text-primary-hover underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
          aria-label="Voltar à página inicial"
        >
          Voltar ao Início
        </a>
      </div>
    </main>
  );
};

export default NotFound;