import React from 'react';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={18} className="mr-2" />
          <h3 className="text-lg font-semibold">{destination.name}</h3>
        </div>
        <Button className="w-full bg-[#1e3a5f] hover:bg-[#2a4d7f] text-white transition-colors duration-200">
          Ver todos
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;