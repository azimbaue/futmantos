import React from 'react';

const VideoCarousel = ({ videos }) => {
  if (!videos || videos.length === 0) return null;

  return (
    <section id="qualidade" className="videos-section">
      <h2 className="section-title">Qualidade 1:1 em Detalhes</h2>
      <p className="videos-subtitle">Veja de perto o padrão original tailandês</p>
      <div className="videos-carousel">
        {videos.map((videoSrc, index) => (
          <div className="video-card" key={index}>
            <video 
              src={videoSrc} 
              className="quality-video"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoCarousel;
