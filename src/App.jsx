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
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <VideoCarousel videos={videos} />
      <ProductGrid products={allProducts} />
      <CustomOrder />
      <Footer />
    </div>
  );
}

export default App;
