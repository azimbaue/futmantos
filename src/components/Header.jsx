import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header print:hidden">
      <div className="logo flex-shrink-0">
        <img src="/logo.png" alt="Futmantos Logo" className="logo-img" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <button 
        className="md:hidden text-white focus:outline-none p-2 ml-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${
        isMenuOpen 
          ? 'grid grid-cols-2 absolute top-[85px] left-0 w-full bg-[#050a15] p-6 border-b border-gray-700 shadow-xl gap-4 text-center z-50' 
          : 'hidden md:flex md:flex-wrap md:justify-end md:items-center gap-4 lg:gap-6'
      }`}>
        <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="py-2">Início</a>
        <a href="#produtos" onClick={() => setIsMenuOpen(false)} className="py-2">Produtos</a>
        <a href="#encomenda" onClick={() => setIsMenuOpen(false)} className="py-2">Personalizado</a>
        <a href="#contato" onClick={() => setIsMenuOpen(false)} className="py-2">Contato</a>
        <button 
          onClick={() => { window.print(); setIsMenuOpen(false); }}
          className="col-span-2 mt-2 md:mt-0 md:ml-2 bg-accent text-primary px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg w-full md:w-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Gerar PDF
        </button>
      </nav>
    </header>
  );
};

export default Header;
