import React from 'react';
import { Link } from 'react-router-dom';
import { destinations, benefits } from '../mock';
import DestinationCard from '../components/DestinationCard';
import { Button } from '../components/ui/button';
import { Heart, Shield, Globe, Settings } from 'lucide-react';

const Home = () => {
  const getIcon = (iconName) => {
    const icons = {
      heart: Heart,
      shield: Shield,
      globe: Globe,
      settings: Settings
    };
    const Icon = icons[iconName];
    return <Icon size={40} className="text-white" />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Viajar não é apenas um destino, é um{' '}
                <span className="text-[#C85A8E]">encontro com você!</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Com a Bella Renda e Viagens, mulheres que sonham em explorar o mundo ganham um roteiro feito para se sentirem livres, seguras e inspiradas.
              </p>
              <Link to="/roteiros">
                <Button className="bg-[#C85A8E] hover:bg-[#a04670] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                  Ver roteiros
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="transform rotate-3 transition-transform hover:rotate-6 duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800"
                    alt="França"
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                  />
                  <div className="bg-white p-3 mt-2 rounded-lg shadow-md text-center">
                    <span className="text-gray-700 font-semibold">FRANÇA</span>
                  </div>
                </div>
                <div className="transform -rotate-3 transition-transform hover:-rotate-6 duration-300 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800"
                    alt="França"
                    className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                  />
                  <div className="bg-white p-3 mt-2 rounded-lg shadow-md text-center">
                    <span className="text-gray-700 font-semibold">FRANÇA</span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <svg className="absolute -top-10 -right-10 w-32 h-32 text-[#C85A8E] opacity-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C10.34 2 9 3.34 9 5c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3zm-6 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 18c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute left-0 right-0 bottom-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#C85A8E" fillOpacity="0.1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Destinos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Por Mulheres */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-[#C85A8E] font-semibold mb-2">Roteiros mais procurados</p>
                <h2 className="text-3xl md:text-4xl font-bold">Por mulheres</h2>
              </div>
              <Link to="/roteiros">
                <Button className="bg-[#7d2d5e] hover:bg-[#5f1f45] text-white px-6 py-3 rounded-full transition-colors duration-200">
                  Ver todos
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.slice(0, 3).map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
            <p className="text-center text-gray-600 text-sm mt-6">
              Cada pacote inclui suporte especializado, opções de customização e um ambiente seguro para mulheres que decidem dizer "eu vou".
            </p>
          </div>

          {/* Internacionais */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-[#C85A8E] font-semibold mb-2">Roteiros mais procurados</p>
                <h2 className="text-3xl md:text-4xl font-bold">Internacionais</h2>
              </div>
              <Link to="/roteiros">
                <Button className="bg-[#1e3a5f] hover:bg-[#2a4d7f] text-white px-6 py-3 rounded-full transition-colors duration-200">
                  Ver todos
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.filter(d => d.category === 'internacional').map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>

          {/* Pelo Brasil */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-[#C85A8E] font-semibold mb-2">Roteiros mais procurados</p>
                <h2 className="text-3xl md:text-4xl font-bold">pelo Brasil</h2>
              </div>
              <Link to="/roteiros">
                <Button className="bg-[#C85A8E] hover:bg-[#a04670] text-white px-6 py-3 rounded-full transition-colors duration-200">
                  Ver todos
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.filter(d => d.category === 'nacional').map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
            <p className="text-center text-gray-600 text-sm mt-6">
              Cada pacote inclui suporte especializado, opções de customização e um ambiente seguro para mulheres que decidem dizer "eu vou".
            </p>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-gradient-to-r from-pink-100 to-pink-50 py-16 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-4xl font-bold text-[#C85A8E] font-serif">Bella</span>
              <svg className="w-10 h-10 text-[#C85A8E]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C10.34 2 9 3.34 9 5c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3zm-6 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 18c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Na <span className="text-[#C85A8E]">Bella Renda e Viagens</span>, transformamos sonhos em
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            passaportes.
          </h3>
        </div>
        {/* Decorative elements */}
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-[#C85A8E] opacity-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C10.34 2 9 3.34 9 5c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3zm-6 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 18c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que viajar com a Bella Renda?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative">
                <div className="bg-[#C85A8E] rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="mb-6">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{benefit.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{benefit.description}</p>
                  <div className="absolute bottom-4 right-4">
                    <svg className="w-8 h-8 text-white opacity-30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C10.34 2 9 3.34 9 5c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3zm-6 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Porque viajar é autocuidado, é liberdade, é reencontrar quem você é
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-[#C85A8E] mb-8">
            e o mundo espera.
          </p>
          <Link to="/contatos">
            <Button className="bg-[#C85A8E] hover:bg-[#a04670] text-white px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Fale conosco
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;