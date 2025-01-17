import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ThumbsUp, Target, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import owner from '../assets/images/owner.jpg'

const About = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our clients are at the heart of everything we do.',
    },
    {
      icon: ThumbsUp,
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity and transparency.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace innovation to provide better solutions.',
    },
  ];

  return (
    <div className="pt-16 bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About SarpBricks</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            With over 15+ years of experience in real estate, SarpBricks has been
            helping people find their dream properties and make smart investment
            decisions.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the most trusted name in real estate, known for innovation,
              excellence, and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide exceptional real estate services while maintaining the highest
              standards of professionalism, integrity, and innovation.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Leadership Team
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src= '../assets/images/owner.jpg'
                  alt="Sajid Khan"
                  className="w-48 h-48 rounded-lg shadow-md mx-auto md:mx-0 object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sajid Khan</h3>
                <p className="text-gray-700 mb-4">
                  Sajid Khan, a seasoned entrepreneur with over 16 years of experience
                  in the real estate industry, has been instrumental in shaping
                  SarpBricks into a trusted name in the market. Based in Noida, Sajid
                  Khan has a deep understanding of the real estate landscape and a
                  passion for delivering value to clients.
                </p>
                <p className="text-gray-700">
                  Under his leadership, the company has grown exponentially,
                  establishing a strong reputation for integrity, professionalism, and
                  innovation. His vision and strategic insights have led to numerous
                  successful projects, earning the trust of countless satisfied
                  clients. Sajid believes in a customer-first approach and
                  consistently works towards exceeding expectations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Journey
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Our Team"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-6">
                From our humble beginnings in Noida to becoming a recognized leader in
                the real estate industry, SarpBricks has always prioritized
                innovation, customer satisfaction, and excellence. Join us as we
                continue to pave the way for the future of real estate.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
              >
                <Send className="w-5 h-5 mr-2" />
                Join Our Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;