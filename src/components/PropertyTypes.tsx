import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Key, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyTypes = () => {
  const types = [
    {
      icon: Home,
      label: 'Buy',
      description: 'Find your dream property',
      path: '/properties?type=buy'
    },
    {
      icon: Building2,
      label: 'Sell',
      description: 'List your property',
      path: '/properties?type=sell'
    },
    {
      icon: Key,
      label: 'Rent',
      description: 'Rental properties',
      path: '/properties?type=rent'
    },
    {
      icon: TrendingUp,
      label: 'Invest',
      description: 'Investment opportunities',
      path: '/properties?type=invest'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={type.path}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <type.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.label}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;