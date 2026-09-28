import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  const [selectedTeam, setSelectedTeam] = useState('Destaques');
  
  // Get unique teams, ensure Destaques is first if it exists
  const uniqueTeams = [...new Set(products.map(p => p.team))];
  const teams = uniqueTeams.includes('Destaques') 
    ? ['Destaques', ...uniqueTeams.filter(t => t !== 'Destaques')]
    : uniqueTeams;
  
  const filteredProducts = products.filter(p => p.team === selectedTeam);

  return (
    <section id="produtos" className="products-section">
      <h2 className="section-title">Nosso Catálogo</h2>
      
      {/* Team Filter */}
      <div className="team-filter print:hidden">
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

      <div className="products-grid print:grid-cols-3 print:gap-4 print:w-full">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} produto={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
