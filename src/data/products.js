// Automatically import all images from the public/times folder
const imageModules = import.meta.glob('/public/times/*/*.{png,jpg,jpeg,webp}', { query: '?url', import: 'default', eager: true });

// Import images from public/destaques folder
const destaqueModules = import.meta.glob('/public/destaques/*.{png,jpg,jpeg,webp}', { query: '?url', import: 'default', eager: true });

// Automatically import all videos from the public/videos folder
const videoModules = import.meta.glob('/public/videos/*.{mp4,webm}', { query: '?url', import: 'default', eager: true });
export const videos = Object.values(videoModules);

export const generateProducts = () => {
  const products = [];
  let id = 4; // Start after the first 3 demo items

  // Load Destaques
  for (const path in destaqueModules) {
    const publicUrl = destaqueModules[path];
    products.push({
      id: id++,
      name: `Manto em Destaque`,
      team: 'Destaques',
      image: publicUrl,
      sizes: "P ao 5XL",
      badge: "Destaque",
      link: "https://wa.me/5591986145120"
    });
  }

  // Load Times
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
      link: "https://wa.me/5591986145120"
    });
  }
  return products;
};

const dynamicProducts = generateProducts();

const initialProducts = [
  {
    id: 1,
    name: "Camisa Edição Limitada Black Gold",
    team: "Destaques",
    image: "/jersey1.jpg",
    sizes: "P ao 5XL",
    badge: "Mais Vendida",
    link: "https://wa.me/5591986145120"
  },
  {
    id: 2,
    name: "Camisa Principal Red White",
    team: "Destaques",
    image: "/jersey2.jpg",
    sizes: "P ao 5XL",
    badge: "1:1 Tailandesa",
    link: "https://wa.me/5591986145120"
  },
  {
    id: 3,
    name: "Camisa Alternativa Blue Neon",
    team: "Destaques",
    image: "/jersey3.jpg",
    sizes: "P ao 5XL",
    badge: "Exclusiva",
    link: "https://wa.me/5591986145120"
  }
];

export const allProducts = [...initialProducts, ...dynamicProducts];
