import React from 'react';
import { Heart, Shield, Users, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transformamos sonhos em{' '}
                <span className="text-[#C85A8E]">passaportes</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A Bella Renda & Viagens nasceu com um propósito especial: criar experiências de viagem únicas para mulheres que desejam explorar o mundo com segurança, liberdade e companhia de outras mulheres inspiradoras.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Acreditamos que viajar é mais do que conhecer novos lugares - é um ato de autocuidado, autoconhecimento e empoderamento feminino.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800"
                alt="Mulheres viajando"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C85A8E] text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm">Mulheres viajantes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa missão</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Proporcionar viagens transformadoras onde mulheres se sentem seguras, livres e inspiradas a explorar o mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#C85A8E]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Empoderamento</h3>
              <p className="text-gray-600 text-sm">
                Fortalecemos mulheres através de experiências transformadoras
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-[#C85A8E]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Segurança</h3>
              <p className="text-gray-600 text-sm">
                Suporte 24h e ambientes exclusivos para seu conforto
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#C85A8E]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Comunidade</h3>
              <p className="text-gray-600 text-sm">
                Conexões autênticas com mulheres inspiradoras
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#C85A8E]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Experiências</h3>
              <p className="text-gray-600 text-sm">
                Vivências autênticas e culturalmente ricas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#C85A8E] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Liberdade</h3>
              <p className="text-gray-600">
                Viajar no seu ritmo, fazer suas escolhas e descobrir quem você realmente é
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#C85A8E] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Autenticidade</h3>
              <p className="text-gray-600">
                Experiências reais, culturas locais e conexões genuínas
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#C85A8E] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Sororidade</h3>
              <p className="text-gray-600">
                Apoio mútuo, respeito e celebração das diferenças
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para sua próxima aventura?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Junte-se a centenas de mulheres que já transformaram seus sonhos em realidade
          </p>
          <Link to="/contatos">
            <Button className="bg-[#C85A8E] hover:bg-[#a04670] text-white px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Entre em contato
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sobre;