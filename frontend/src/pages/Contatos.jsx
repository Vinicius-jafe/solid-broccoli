// src/pages/Contatos.jsx

import React from 'react';
import ContactForm from '../components/ContactForm';

const Contatos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Está preparada para dizer sim para você?
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Fale com a nossa equipe e descubra o roteiro que vai fazer seu coração vibrar.
          </p>
          <p className="text-gray-600 text-base md:text-lg mt-4">
            Além de parcelamento facilitado, oferecemos atendimento personalizado para que sua viagem seja leve, segura e inesquecível.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Bottom Message */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
            Porque viajar é autocuidado, é liberdade, é reencontrar quem você é
          </p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
            e o mundo espera.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-[#f8e8f0] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="flex items-center space-x-3">
                <span className="text-5xl font-bold text-[#C85A8E] font-serif">Bella</span>
                <svg className="w-12 h-12 text-[#C85A8E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C10.34 2 9 3.34 9 5c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3zm-6 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 18c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
            </div>
            <div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#C85A8E] mr-2">•</span>
                  <span>Documentação, políticas de pagamento, suporte 24h,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C85A8E] mr-2">•</span>
                  <span>grupos exclusivos para mulheres.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C85A8E] mr-2">•</span>
                  <span>Vagas limitadas por formato de viagem — garanta sua presença.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contatos;