import React, { useState } from 'react';
import ProductCard from './ProductCard';

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
          <ProductCard key={product.id} produto={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
