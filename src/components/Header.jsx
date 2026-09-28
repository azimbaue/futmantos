import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Futmantos Logo" className="logo-img" />
      </div>
      <nav className="nav-links">
        <a href="#inicio">Início</a>
        <a href="#produtos">Produtos</a>
        <a href="#encomenda">Envio Personalizado</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
