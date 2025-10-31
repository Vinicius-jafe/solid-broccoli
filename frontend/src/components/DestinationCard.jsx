// src/components/DestinationCard.jsx

import React from 'react';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  // Assume que 'destination' é o nome da cidade/país e 'images' é um array de strings
  const imageUrl = destination.images && destination.images.length > 0
    ? destination.images[0]
    : 'https://images.unsplash.com/photo-1517400508543-4299b9c9f65d?w=800'; // Fallback

  const name = destination.destination || destination.title || 'Destino Desconhecido';
  const description = destination.shortDescription || 'Roteiro exclusivo para uma viagem inesquecível.';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={18} className="mr-2" />
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <Button className="w-full bg-[#1e3a5f] hover:bg-[#2a4d7f] text-white transition-colors duration-200">
          Ver detalhes
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;