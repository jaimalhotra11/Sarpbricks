import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyCard from './PropertyCard';

const PopularInventory = () => {
  // Get first 3 properties for showcase
  const popularProperties = properties;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Inventory</h2>
          <p className="text-xl text-gray-600">Featured properties in prime locations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {popularProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default PopularInventory;