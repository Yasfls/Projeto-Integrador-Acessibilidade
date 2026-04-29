import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo_voluntarios.png";

export default function Header() {
  const location = useLocation();

  const authenticatedNavItems = [
    { label: "Início", href: "/" },
    { label: "Sobre o Projeto", href: "/sobre" },
    { label: "Como Funciona?", href: "/como-funciona" },
    { label: "ONGs Parceiras", href: "/ongs" },
  ];

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
                alt="Logo Voluntários do Conhecimento"
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
