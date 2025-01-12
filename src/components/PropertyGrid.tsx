import React from 'react';
import { Building2, MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  location: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  price: string;
}

const PropertyGrid: React.FC<PropertyCardProps> = ({
  title,
  location,
  image,
  bedrooms,
  bathrooms,
  squareFeet,
  status,
  price,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Upcoming':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
            status
          )}`}
        >
          {status}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Building2 className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{squareFeet} sqft</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyGrid;