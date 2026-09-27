import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" onClick={() => window.open(product.link, '_blank')}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.team}</p>
        <div className="product-meta">
          <div className="product-sizes">Tamanhos: <span>{product.sizes}</span></div>
          <button className="btn-buy">Comprar</button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ products }) => {
  const [selectedTeam, setSelectedTeam] = useState('Todos');
  
  // Get unique teams
  const teams = ['Todos', ...new Set(products.map(p => p.team))];
  
  const filteredProducts = selectedTeam === 'Todos' 
    ? products 
    : products.filter(p => p.team === selectedTeam);

  return (
    <section id="produtos" className="products-section">
      <h2 className="section-title">Nosso Catálogo</h2>
      
      {/* Team Filter */}
      <div className="team-filter">
        {teams.map(team => (
          <button 
            key={team} 
            className={`filter-btn ${selectedTeam === team ? 'active' : ''}`}
            onClick={() => setSelectedTeam(team)}
          >
            {team}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
