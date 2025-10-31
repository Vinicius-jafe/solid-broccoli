import React, { useState } from 'react';
import { submitContactForm } from '../mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from '../hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cidadeOrigem: '',
    destinos: '',
    periodo: '',
    quantidadePessoas: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      toast({
        title: 'Sucesso!',
        description: result.message,
      });
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        cidadeOrigem: '',
        destinos: '',
        periodo: '',
        quantidadePessoas: ''
      });
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao enviar o formulário. Tente novamente.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#C85A8E] rounded-lg shadow-xl p-8 md:p-10">
      <h3 className="text-white text-xl md:text-2xl font-semibold mb-6 text-center">
        Entraremos em contato com os dados informados abaixo:
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-white text-sm md:text-base mb-2 block">Nome</label>
          <Input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full bg-white border-0 h-12"
          />
        </div>

        <div>
          <label className="text-white text-sm md:text-base mb-2 block">Telefone</label>
          <Input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            className="w-full bg-white border-0 h-12"
          />
        </div>

        <div>
          <label className="text-white text-sm md:text-base mb-2 block">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white border-0 h-12"
          />
        </div>

        <div>
          <label className="text-white text-sm md:text-base mb-2 block">Qual sua cidade origem?</label>
          <Input
            type="text"
            name="cidadeOrigem"
            value={formData.cidadeOrigem}
            onChange={handleChange}
            required
            className="w-full bg-white border-0 h-12"
          />
        </div>

        <div>
          <label className="text-white text-sm md:text-base mb-2 block">Quais destinos gostaria de conhecer?</label>
          <Input
            type="text"
            name="destinos"
            value={formData.destinos}
            onChange={handleChange}
            required
            className="w-full bg-white border-0 h-12"
          />
        </div>

        <div>
          <label className="text-white text-sm md:text-base mb-2 block">Qual período deseja viajar?</label>
          <Input
            type="text"
            name="periodo"
            value={formData.periodo}
            onChange={handleChange}
            required
            className="w-full bg-white border-0 h-12"
          />
        </div>

        <div>
          <label className="text-white text-sm md:text-base mb-2 block">Quantidade de pessoas</label>
          <Input
            type="number"
            name="quantidadePessoas"
            value={formData.quantidadePessoas}
            onChange={handleChange}
            required
            min="1"
            className="w-full bg-white border-0 h-12"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1e3a5f] hover:bg-[#2a4d7f] text-white h-12 text-base font-semibold mt-6 transition-colors duration-200"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;