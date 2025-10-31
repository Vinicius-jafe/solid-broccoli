// src/pages/Roteiros.jsx

import React, { useState, useEffect } from 'react';
import { fetchDestinations } from '../services/api'; // <--- Importado da API
import DestinationCard from '../components/DestinationCard';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Roteiros = () => {
  const [filter, setFilter] = useState('todos');
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDestinations() {
      setIsLoading(true);
      try {
        const data = await fetchDestinations(); // <--- Chamada à API real
        setDestinations(data);
      } catch (err) {
        console.error("Falha ao carregar os destinos", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadDestinations();
  }, []);

  // Ajusta a lógica de filtro para usar a propriedade 'type' da sua API ('nacional' ou 'internacional')
  const filteredDestinations = filter === 'todos' 
    ? destinations 
    : destinations.filter(d => d.type === filter);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#C85A8E] text-xl font-semibold">Carregando roteiros...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Descubra seu próximo destino
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Roteiros exclusivos pensados para mulheres que buscam aventura, autoconhecimento e experiências autênticas.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setFilter('todos')}
              className={`px-6 py-3 rounded-full transition-all duration-200 ${
                filter === 'todos'
                  ? 'bg-[#C85A8E] text-white hover:bg-[#a04670]'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#C85A8E] hover:text-[#C85A8E]'
              }`}
            >
              Todos os destinos
            </Button>
            <Button
              onClick={() => setFilter('nacional')}
              className={`px-6 py-3 rounded-full transition-all duration-200 ${
                filter === 'nacional'
                  ? 'bg-[#C85A8E] text-white hover:bg-[#a04670]'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#C85A8E] hover:text-[#C85A8E]'
              }`}
            >
              Brasil
            </Button>
            <Button
              onClick={() => setFilter('internacional')}
              className={`px-6 py-3 rounded-full transition-all duration-200 ${
                filter === 'internacional'
                  ? 'bg-[#C85A8E] text-white hover:bg-[#a04670]'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#C85A8E] hover:text-[#C85A8E]'
              }`}
            >
              Internacional
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">Nenhum roteiro encontrado para o filtro selecionado.</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não encontrou o destino dos seus sonhos?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Entre em contato conosco e criaremos um roteiro personalizado especialmente para você!
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

export default Roteiros;