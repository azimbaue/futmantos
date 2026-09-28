import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoCarousel from './components/VideoCarousel';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CustomOrder from './components/CustomOrder';
import { videos, allProducts } from './data/products';
import './index.css';

function App() {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="app-container">
      {/* Cabeçalho de Impressão (Apenas PDF) */}
      <div className="hidden print:flex flex-col items-center justify-center border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-black">Futmantos - Catálogo Oficial de Mantos</h1>
        <p className="text-gray-600 mt-1">Atualizado em: {currentDate}</p>
        <p className="text-indigo-600 mt-1 font-medium">https://futmantos-azure.vercel.app/</p>
      </div>

      <div className="print:hidden">
        <Header />
        <Hero />
        <VideoCarousel videos={videos} />
      </div>

      <ProductGrid products={allProducts} />

      <div className="print:hidden">
        <CustomOrder />
        <Footer />
      </div>

      {/* Rodapé de Impressão (Apenas PDF) */}
      <div className="hidden print:flex flex-col items-center justify-center pt-6 mt-8 border-t-2 border-gray-300 page-break-inside-avoid">
        <p className="font-bold text-lg text-black">Gostou de algum manto? Faça seu pedido!</p>
        <p className="text-gray-800 mt-1">WhatsApp: (91) 98614-5120</p>
        <p className="text-gray-800">Instagram: @futmantos</p>
      </div>
    </div>
  );
}

export default App;
