import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Futmantos Logo" className="logo-img" />
      </div>
      <nav className="nav-links flex items-center gap-6">
        <a href="#inicio">Início</a>
        <a href="#produtos">Produtos</a>
        <a href="#encomenda">Envio Personalizado</a>
        <a href="#contato">Contato</a>
        <button 
          onClick={() => window.print()}
          className="ml-4 bg-accent text-primary px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Gerar Catálogo PDF
        </button>
      </nav>
    </header>
  );
};

export default Header;
