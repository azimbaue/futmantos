import React from 'react';

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <h2>Fale Conosco</h2>
      <div className="footer-contact">
        <a href="https://wa.me/559181349126" className="footer-link" target="_blank" rel="noopener noreferrer">
          WhatsApp: (91) 8134-9126
        </a>
      </div>
      <p className="product-sizes">Siga-nos no Instagram para mais novidades!</p>
      <p style={{ marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Futmantos. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
