import React, { useState } from 'react';

const CustomOrder = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [size, setSize] = useState('G');
  const [quantity, setQuantity] = useState(1);
  const [details, setDetails] = useState('');

  const handleOrder = (e) => {
    e.preventDefault();
    const phoneNumber = "559181349126";
    
    let message = `Olá, gostaria de fazer uma encomenda personalizada! 🚀\n\n`;
    if (imageUrl) message += `*Referência (Link/Imagem)*: ${imageUrl}\n`;
    message += `*Tamanho*: ${size}\n`;
    message += `*Quantidade*: ${quantity}\n`;
    if (details) message += `*Detalhes*: ${details}\n`;
    message += `\n(Vou te enviar a foto da camisa que quero logo a seguir, caso não tenha colocado o link!)`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="encomenda" className="custom-order-section">
      <h2 className="section-title">Não achou o que procura?</h2>
      <p className="videos-subtitle" style={{ marginBottom: '2rem' }}>Encomende qualquer camisa! Cole o link da imagem, escolha o tamanho e fale conosco.</p>
      
      <div className="custom-order-container">
        <form onSubmit={handleOrder} className="custom-order-form">
          <div className="form-group">
            <label>Link da Imagem da Camisa (Opcional)</label>
            <input 
              type="text" 
              placeholder="Ex: https://google.com/imagem-da-camisa.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <small>Dica: Pesquise no Google, copie o link da imagem e cole aqui. Ou apenas nos envie a foto no WhatsApp depois!</small>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Tamanho</label>
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
                <option value="4XL">4XL</option>
                <option value="5XL">5XL</option>
              </select>
            </div>

            <div className="form-group">
              <label>Quantidade</label>
              <input 
                type="number" 
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Detalhes Adicionais (Nome, Número, etc.)</label>
            <textarea 
              rows="3"
              placeholder="Ex: Quero com o nome do Messi e número 10."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="cta-button submit-btn">Enviar Encomenda pelo WhatsApp</button>
        </form>
      </div>
    </section>
  );
};

export default CustomOrder;
