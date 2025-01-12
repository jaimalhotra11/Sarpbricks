import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
  {
    area: 'Sector 128',
    priceRange: '₹7,800/sqft',
    highlights: ['Premium Location', 'Metro Connectivity', 'Green Surroundings']
  },
  {
    area: 'Sector 150',
    priceRange: '₹6,800/sqft',
    highlights: ['Sports City', 'Golf Course', 'Premium Schools']
  },
  {
    area: 'Sector 62',
    priceRange: '₹9,000/sqft',
    highlights: ['IT Hub', 'Metro Station', 'Educational Institutes']
  },
  {
    area: 'Sector 74',
    priceRange: '₹7,200/sqft',
    highlights: ['Residential Hub', 'Parks', 'Shopping Centers']
  }
];

const LocationOverview = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Locations We Are Operating</h2>
          <p className="text-xl text-gray-600">Strategic locations with excellent connectivity</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">{location.area}</h3>
              </div>
              <p className="text-lg font-semibold text-blue-600 mb-4">{location.priceRange}</p>
              <ul className="space-y-2">
                {location.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationOverview;