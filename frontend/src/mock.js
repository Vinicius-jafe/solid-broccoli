// Mock data for Bella Renda & Viagens

export const destinations = [
  {
    id: 1,
    name: 'Salvador - BA',
    category: 'nacional',
    image: 'https://images.unsplash.com/photo-1612437411585-a3cc20d2e5e3?w=800',
    description: 'Explore a cultura baiana com segurança e liberdade',
    highlights: ['Praias paradisíacas', 'Cultura afro-brasileira', 'Gastronomia local']
  },
  {
    id: 2,
    name: 'Paris - França',
    category: 'internacional',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    description: 'A cidade luz espera por você',
    highlights: ['Torre Eiffel', 'Museus', 'Gastronomia francesa']
  },
  {
    id: 3,
    name: 'Fernando de Noronha - PE',
    category: 'nacional',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800',
    description: 'Paraíso natural brasileiro',
    highlights: ['Mergulho', 'Praias exclusivas', 'Natureza preservada']
  },
  {
    id: 4,
    name: 'Lisboa - Portugal',
    category: 'internacional',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    description: 'História e modernidade em harmonia',
    highlights: ['Belém', 'Alfama', 'Gastronomia portuguesa']
  },
  {
    id: 5,
    name: 'Rio de Janeiro - RJ',
    category: 'nacional',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800',
    description: 'Cidade maravilhosa te espera',
    highlights: ['Cristo Redentor', 'Praias cariocas', 'Vida noturna']
  },
  {
    id: 6,
    name: 'Roma - Itália',
    category: 'internacional',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
    description: 'A cidade eterna',
    highlights: ['Coliseu', 'Vaticano', 'História milenar']
  }
];

export const benefits = [
  {
    title: 'Momento só seu',
    description: 'longe da rotina, das cobranças, das expectativas alheias.',
    icon: 'heart'
  },
  {
    title: 'Suporte desde a reserva até o retorno',
    description: 'para que você tenha liberdade com segurança.',
    icon: 'shield'
  },
  {
    title: 'Vivências reais',
    description: 'gastronomia local, cultura autêntica e conexões',
    icon: 'globe'
  },
  {
    title: 'Flexibilidade',
    description: 'Roteiros sugeridos + opções de personalização',
    icon: 'settings'
  }
];

export const submitContactForm = async (formData) => {
  // Mock API call - will be replaced with real backend
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted:', formData);
      resolve({ success: true, message: 'Entraremos em contato em breve!' });
    }, 1000);
  });
};