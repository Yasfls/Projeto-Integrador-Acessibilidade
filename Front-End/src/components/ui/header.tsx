import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo_voluntarios.png";

// A interface de props e a própria prop 'isAuthenticated' foram removidas,
// pois o componente não precisa mais delas.
export default function Header() {
  const location = useLocation();

  // A lista de links públicos foi REMOVIDA.
  
  // Esta é a única lista de navegação que o Header conhecerá a partir de agora.
  const authenticatedNavItems = [
    { label: "Início", href: "/" },
    { label: "Sobre o Projeto", href: "/sobre-o-projeto" },
    { label: "Como Funciona?", href: "/como-funciona" },
    { label: "ONGs Parceiras", href: "/ongs-parceiras" },
    // { label: "Contato", href: "/contato" },
  ];

  // A lógica condicional foi substituída. 
  // 'navItems' agora sempre recebe os links de usuário autenticado.
  const navItems = authenticatedNavItems;

  return (
    <header className="bg-background border-b border-border py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold text-primary hover:text-primary-hover transition-colors"
          >
            <img
                src={logoImage} width={50}
                alt="Logo Voluntários do Conhecimento" // Adicionado alt text para acessibilidade
              />
          </Link>
          
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "text-foreground hover:text-primary transition-colors relative",
                    location.pathname === item.href && "text-primary"
                  )}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}