import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f8e8f0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl font-bold text-[#C85A8E] font-serif">Bella</span>
              <svg className="w-8 h-8 text-[#C85A8E]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C10.34 2 9 3.34 9 5c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3zm-6 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 18c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm12 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Transformamos sonhos em passaportes. Viagens exclusivas para mulheres que buscam liberdade, segurança e autoconhecimento.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-[#C85A8E] mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Mail size={18} className="mr-3 text-[#C85A8E]" />
                <span className="text-sm">contato@bellarenda.com.br</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone size={18} className="mr-3 text-[#C85A8E]" />
                <span className="text-sm">+55 (11) 99999-9999</span>
              </div>
            </div>
          </div>

          {/* Informações */}
          <div>
            <h4 className="text-lg font-semibold text-[#C85A8E] mb-4">Informações</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Documentação completa</li>
              <li>• Políticas de pagamento</li>
              <li>• Suporte 24h durante viagem</li>
              <li>• Grupos exclusivos para mulheres</li>
              <li>• Vagas limitadas por formato</li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-10 pt-8 border-t border-pink-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2025 Bella Renda & Viagens. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#C85A8E] hover:text-[#a04670] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#C85A8E] hover:text-[#a04670] transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;