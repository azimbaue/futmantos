import React, { useState } from 'react';

export default function ProductCard({ produto }) {
  const [isHovered, setIsHovered] = useState(false);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  // Tratar fallback de propriedades opcionais
  const imagemPrincipal = produto.imagemFrente || produto.image;
  const imagemSecundaria = produto.imagemCostas || imagemPrincipal;
  const versao = produto.versao || produto.badge || "Torcedor";
  const liga = produto.liga || produto.team || "Futebol";
  const temporada = produto.temporada || "2024/25";
  const tamanhosDisponiveis = produto.tamanhosDisponiveis || ['P', 'M', 'G', 'GG', 'XG'];

  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
    
    if (!tamanhoSelecionado) {
      alert("Por favor, selecione um tamanho antes de consultar os valores.");
      return;
    }

    const numeroWhatsApp = "5591986145120"; // Número real do projeto
    const linkProduto = `${window.location.origin}${imagemPrincipal}`;
    const mensagem = `Olá! Gostaria de consultar os valores do seguinte manto:

*Produto:* ${produto.nome} (${temporada})
*Tamanho:* ${tamanhoSelecionado}
*Quantidade:* ${quantidade}
*CEP:* ${cep || 'Não informado'}
*Endereço:* ${endereco || 'Não informado'}
*Imagem:* ${linkProduto}

Pode me repassar os valores, disponibilidade e o custo do frete?`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

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

        {/* Seleção de Tamanho e Quantidade */}
        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 flex-wrap flex-1">
            <span className="text-xs text-gray-500 mr-0.5">Tam:</span>
            {['P', 'M', 'G', 'GG', 'XG'].map((tamanho) => {
              const disponivel = tamanhosDisponiveis.includes(tamanho);
              const isSelected = tamanhoSelecionado === tamanho;
              return (
                <button 
                  key={tamanho}
                  onClick={(e) => { e.stopPropagation(); if (disponivel) setTamanhoSelecionado(tamanho); }}
                  disabled={!disponivel}
                  className={`text-xs px-2 py-0.5 rounded font-medium border transition-colors cursor-pointer ${
                    !disponivel 
                      ? 'border-gray-200 text-gray-300 bg-gray-50 line-through cursor-not-allowed'
                      : isSelected
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm'
                        : 'border-gray-300 text-gray-700 bg-white hover:border-indigo-400'
                  }`}
                >
                  {tamanho}
                </button>
              );
            })}
          </div>
          
          <div className="flex items-center border border-gray-200 rounded flex-shrink-0 bg-white">
            <button 
              onClick={(e) => { e.stopPropagation(); setQuantidade(Math.max(1, quantidade - 1)) }}
              className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold border-r border-gray-200"
            >-</button>
            <span className="px-2 py-0.5 text-xs font-medium text-gray-800 w-6 text-center">{quantidade}</span>
            <button 
              onClick={(e) => { e.stopPropagation(); setQuantidade(quantidade + 1) }}
              className="px-2 py-0.5 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold border-l border-gray-200"
            >+</button>
          </div>
        </div>

        {/* Informações de Frete */}
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide ml-1">CEP (Para Cálculo do Frete)</label>
            <input 
              type="text" 
              placeholder="Ex: 00000-000" 
              className="w-full text-sm px-3 py-2 border border-gray-200 rounded-md outline-none focus:border-indigo-500 focus:bg-white bg-gray-50 transition-colors"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide ml-1">Endereço de Entrega</label>
            <input 
              type="text" 
              placeholder="Rua, Número, Bairro" 
              className="w-full text-sm px-3 py-2 border border-gray-200 rounded-md outline-none focus:border-indigo-500 focus:bg-white bg-gray-50 transition-colors"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 flex">
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
