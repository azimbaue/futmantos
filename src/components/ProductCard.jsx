import React, { useState } from 'react';

export default function ProductCard({ produto }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
    const numeroWhatsApp = "5591986145120"; // Used the number from the project data
    const temporada = produto.temporada || "2024/25";
    const mensagem = `Olá! Gostaria de mais informações sobre o manto: *${produto.nome}* (${temporada}). Pode me informar o valor?`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  // Tratar fallback de propriedades opcionais
  const imagemPrincipal = produto.imagemFrente || produto.image;
  const imagemSecundaria = produto.imagemCostas || imagemPrincipal;
  const versao = produto.versao || produto.badge || "Torcedor";
  const liga = produto.liga || produto.team || "Futebol";
  const temporada = produto.temporada || "2024/25";
  
  // Tratar tamanhos (no data.js atual os tamanhos estão como string, ex: "P ao 5XL")
  // Aqui vamos simular que os principais estão disponíveis se não houver um array específico
  const tamanhosDisponiveis = produto.tamanhosDisponiveis || ['P', 'M', 'G', 'GG', 'XG'];

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative w-full h-64 bg-gray-50 overflow-hidden flex items-center justify-center cursor-pointer"
        onClick={handleWhatsAppClick}
      >
        <span className="absolute top-3 left-3 z-10 bg-black/75 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
          {versao}
        </span>

        <img 
          src={isHovered ? imagemSecundaria : imagemPrincipal} 
          alt={produto.nome}
          className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
            {liga} • {temporada}
          </span>
          <h3 className="text-gray-800 font-bold text-base mt-1 line-clamp-2" title={produto.nome}>
            {produto.nome}
          </h3>
        </div>

        <div className="mt-3 flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-gray-500 mr-1">Tam:</span>
          {['P', 'M', 'G', 'GG', 'XG'].map((tamanho) => {
            const disponivel = tamanhosDisponiveis.includes(tamanho);
            return (
              <span 
                key={tamanho} 
                className={`text-xs px-2 py-0.5 rounded font-medium border ${
                  disponivel 
                    ? 'border-gray-300 text-gray-700 bg-white' 
                    : 'border-gray-200 text-gray-300 bg-gray-50 line-through'
                }`}
              >
                {tamanho}
              </span>
            );
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 flex">
          <button 
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          >
            Consultar Valores
          </button>
        </div>
      </div>
    </div>
  );
}
