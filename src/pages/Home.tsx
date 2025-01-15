import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Hero from '../components/Hero';
import PropertyTypes from '../components/PropertyTypes';
import ProjectStats from '../components/ProjectStats';
import LocationOverview from '../components/LocationOverview';
import CustomerReviews from '../components/CustomerReviews';
import PopularInventory from '../components/PopularInventory';

const Home = () => {
  return (
    <div>
      <Hero />
      <PropertyTypes />
      <ProjectStats />
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Find Your Dream Property in Noida?
            </h2>
            <p className="text-xl mb-8">
              Let our experts guide you through the best properties in Noida.
            </p>
            {/* Updated Button */}
            <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      <PopularInventory />
      <LocationOverview />
      <CustomerReviews />
    </div>
  );
};

export default Home;
