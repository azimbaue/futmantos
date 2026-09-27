// Automatically import all images from the public/times folder
const imageModules = import.meta.glob('/public/times/*/*.{png,jpg,jpeg,webp}', { query: '?url', import: 'default', eager: true });

// Automatically import all videos from the public/videos folder
const videoModules = import.meta.glob('/public/videos/*.{mp4,webm}', { query: '?url', import: 'default', eager: true });
export const videos = Object.values(videoModules);

export const generateProducts = () => {
  const products = [];
  let id = 4; // Start after the first 3 demo items
  for (const path in imageModules) {
    // path looks like: /public/times/Flamengo/camisa1.png
    const parts = path.split('/');
    const teamName = parts[3]; // "Flamengo"
    
    // Use the resolved URL from Vite directly
    const publicUrl = imageModules[path];

    products.push({
      id: id++,
      name: `Camisa ${teamName}`,
      team: teamName,
      image: publicUrl,
      sizes: "P ao 5XL",
      badge: "Novo",
      link: "https://wa.me/559181349126"
    });
  }
  return products;
};

const dynamicProducts = generateProducts();

const initialProducts = [
  {
    id: 1,
    name: "Camisa Edição Limitada Black Gold",
    team: "Exclusivas",
    image: "/jersey1.jpg",
    sizes: "P ao 5XL",
    badge: "Mais Vendida",
    link: "https://wa.me/559181349126"
  },
  {
    id: 2,
    name: "Camisa Principal Red White",
    team: "Exclusivas",
    image: "/jersey2.jpg",
    sizes: "P ao 5XL",
    badge: "1:1 Tailandesa",
    link: "https://wa.me/559181349126"
  },
  {
    id: 3,
    name: "Camisa Alternativa Blue Neon",
    team: "Exclusivas",
    image: "/jersey3.jpg",
    sizes: "P ao 5XL",
    badge: "Exclusiva",
    link: "https://wa.me/559181349126"
  }
];

export const allProducts = [...initialProducts, ...dynamicProducts];
