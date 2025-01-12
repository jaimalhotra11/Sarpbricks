import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { Property } from '../types';

const Properties = () => {
  const [filters, setFilters] = useState({
    type: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    location: '',
    status: ''
  });

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  }, []);

  const locations = useMemo(() => 
    [...new Set(properties.map(p => p.location))].sort(), 
    []
  );

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      if (filters.type && property.type !== filters.type) return false;
      if (filters.priceMin && property.price < parseInt(filters.priceMin)) return false;
      if (filters.priceMax && property.price > parseInt(filters.priceMax)) return false;
      if (filters.bedrooms && property.bedrooms !== parseInt(filters.bedrooms)) return false;
      if (filters.location && property.location !== filters.location) return false;
      if (filters.status && property.status !== filters.status) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Properties</h1>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Property Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>

              <input
                type="number"
                name="priceMin"
                placeholder="Min Price (₹)"
                value={filters.priceMin}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
              />

              <input
                type="number"
                name="priceMax"
                placeholder="Max Price (₹)"
                value={filters.priceMax}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
              />

              <select
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Bedrooms</option>
                {[2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Bedroom' : 'Bedrooms'}
                  </option>
                ))}
              </select>

              <select
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Status</option>
                <option value="ready-to-move">Ready to Move</option>
                <option value="under-construction">Under Construction</option>
              </select>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                index={index}
              />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No properties found matching your criteria. Please try adjusting your filters.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Properties;