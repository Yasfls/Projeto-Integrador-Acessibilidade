# Projeto Integrador: Acessibilidade Digital e Inclusão na Web

Este projeto consiste numa plataforma Web desenvolvida para demonstrar e aplicar práticas essenciais de acessibilidade digital. O objetivo central é eliminar barreiras de navegação para pessoas com deficiências visuais e auditivas, garantindo autonomia e conformidade com as diretrizes internacionais (WCAG) e a legislação brasileira.

## 📑 Sobre o Projeto

A iniciativa surge da necessidade de tornar o ambiente digital mais democrático. Segundo dados de 2025, embora 93,6% da população brasileira utilize a internet, apenas 39% das pessoas com deficiência sentem que os sites atendem às suas necessidades de navegação.

Este sistema serve como prova de conceito para a implementação de:
* **Código Semântico**: Estruturação que permite a interpretação correta por tecnologias assistivas como NVDA, JAWS e TalkBack.
* **Design Inclusivo**: Foco em alto contraste, tipografia legível e alternativas para daltonismo.
* **Navegação Facilitada**: Interface operável via teclado e componentes de UI acessíveis.

## 🛠️ Tecnologias Utilizadas

### Front-End
* **Framework**: [React](https://reactjs.org/) (v18.3.1) com [TypeScript](https://www.typescriptlang.org/).
* **Build Tool**: [Vite](https://vitejs.dev/).
* **Estilização**: [Tailwind CSS](https://tailwindcss.com/) e [Radix UI](https://www.radix-ui.com/) (primitivos focados em acessibilidade).
* **Componentes**: [Shadcn/UI](https://ui.shadcn.com/).
* **Gerenciamento de Estado/Rotas**: React Router Dom e TanStack Query.

### Back-End
* **Ambiente**: [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/) (v5.1.0).
* **ORM**: [Sequelize](https://sequelize.org/).
* **Bancos de Dados Suportados**: PostgreSQL, MySQL e MongoDB (Mongoose).
* **Segurança**: Autenticação via JWT (JSON Web Tokens) e criptografia de senhas com BCrypt.

## 🚀 Funcionalidades Principais

* **Páginas Institucionais**: Informações sobre o projeto e guias de "Como Funciona".
* **Módulo de ONGs**: Cadastro e visualização de ONGs parceiras focadas em acessibilidade.
* **Sistema de Usuários**: Fluxo completo de login, cadastro e recuperação de senha.
* **Acessibilidade Nativa**: Implementação de `TooltipProvider` e componentes Radix otimizados para leitores de tela.

## 📁 Estrutura do Repositório

```text
├── Back-End/
│   ├── src/
│   │   ├── config/database.js  # Configuração de conexão com o banco
│   │   ├── controllers/        # Lógica de negócio (Usuários e ONGs)
│   │   ├── models/             # Definição das tabelas (Sequelize/Mongoose)
│   │   ├── routes/             # Endpoints da API
│   │   └── server.js           # Inicialização do servidor Express
│   └── package.json            # Dependências do servidor
│
├── Front-End/
│   ├── src/
│   │   ├── components/ui/      # Componentes de interface acessíveis
│   │   ├── pages/              # Páginas da aplicação
│   │   └── App.tsx             # Roteamento e provedores globais
│   └── package.json            # Dependências do cliente
```

## 🔧 Como Executar o Projeto

### Pré-requisitos
* Node.js instalado.
* Banco de dados (PostgreSQL, MySQL ou MongoDB) configurado.

### Passo a Passo

1. **Clonar o repositório**:
   ```bash
   git clone [url-do-seu-repositorio]
   ```

2. **Configurar o Back-End**:
   ```bash
   cd Back-End
   npm install
   # Configure as variáveis de ambiente (DB_HOST, DB_USER, etc.) no arquivo .env
   node src/server.js
   ```
* O servidor iniciará na porta `3001`.

3. **Configurar o Front-End**:
   ```bash
   cd ../Front-End
   npm install
   npm run dev
   ```

## ⚖️ Conformidade Técnica
O projeto busca atender aos critérios de sucesso da **WCAG 2.1**, focando nos quatro princípios fundamentais:

* **Perceptibilidade**: Informações e componentes da interface devem ser apresentáveis aos usuários de formas que eles possam perceber.
* **Operabilidade**: Os componentes de interface e a navegação devem ser operáveis (ex: navegação total via teclado).
* **Compreensibilidade**: A operação e a informação da interface devem ser compreensíveis.
* **Robustez**: O conteúdo deve ser robusto o suficiente para ser interpretado por uma ampla variedade de agentes de usuário, incluindo tecnologias assistivas.
