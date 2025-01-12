import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Property } from '../types';
import { Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard: React.FC<PropertyCardProps> = memo(({ property, index }) => {
  const formatPrice = (price: number) => {
    const croreValue = price / 10000000;
    return `₹${croreValue.toFixed(2)} Cr`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <Link to={`/properties/${property.id}`}>
        <div className="relative h-48">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded">
            {property.status === 'for-sale' ? 'For Sale' : property.status}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{property.title}</h3>
          <p className="text-gray-600 mb-2 line-clamp-1">{property.location}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-blue-600">
              {formatPrice(property.price)}
            </span>
            <span className="text-sm text-gray-500 capitalize">{property.type}</span>
          </div>
          <div className="flex justify-between text-gray-600 text-sm">
            {property.bedrooms && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{property.bedrooms} Beds</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span>{property.bathrooms} Baths</span>
              </div>
            )}
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area} sqft</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

PropertyCard.displayName = 'PropertyCard';

export default PropertyCard;