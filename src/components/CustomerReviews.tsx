import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh Kumar',
    location: 'Sector 128, Noida',
    rating: 5,
    review: 'Excellent service from SarpBricks. They helped me find my dream home in Noida. Very professional team!',
    project: 'Green Valley Heights'
  },
  {
    name: 'Priya Sharma',
    location: 'Sector 150, Noida',
    rating: 5,
    review: 'The team was very helpful throughout the buying process. They made everything smooth and hassle-free.',
    project: 'Blue Ridge Towers'
  },
  {
    name: 'Amit Singh',
    location: 'Sector 62, Noida',
    rating: 4,
    review: 'Great experience with SarpBricks. They have extensive knowledge of the Noida real estate market.',
    project: 'Tech Park Plaza'
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real experiences from our valued clients</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg shadow-md p-6"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.review}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-gray-600">{review.location}</p>
                <p className="text-blue-600 mt-1">{review.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;