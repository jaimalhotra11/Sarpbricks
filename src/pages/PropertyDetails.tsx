import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { properties } from '../data/properties';
import { 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Building2, 
  Compass, 
  Calendar,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  MapPinned,
  Phone
} from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeTab, setActiveTab] = useState('overview');

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919717130098', '_blank');
  };

  if (!property) {
    return (
      <div className="pt-20 text-center">
        <h2 className="text-2xl">Property not found</h2>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FileText className="w-5 h-5" /> },
    { id: 'gallery', label: 'Gallery', icon: <ImageIcon className="w-5 h-5" /> },
    { id: 'specifications', label: 'Specifications', icon: <CheckCircle2 className="w-5 h-5" /> },
    { id: 'location', label: 'Location', icon: <MapPinned className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h1 className="text-5xl font-bold mb-4">{property.title}</h1>
              <div className="flex items-center text-xl">
                <MapPin className="w-6 h-6 mr-2" />
                {property.location}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 py-6 gap-4">
            <div className="flex items-center justify-center border-r">
              <Building2 className="w-6 h-6 text-blue-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Project Type</p>
                <p className="font-semibold">{property.type}</p>
              </div>
            </div>
            <div className="flex items-center justify-center border-r">
              <Square className="w-6 h-6 text-blue-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Area</p>
                <p className="font-semibold">{property.area} sqft</p>
              </div>
            </div>
            <div className="flex items-center justify-center border-r">
              <Calendar className="w-6 h-6 text-blue-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Possession</p>
                <p className="font-semibold">{property.specifications?.possession}</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div>
                <p className="text-sm text-gray-600">Price</p>
                <p className="font-semibold text-blue-600">₹{(property.price / 10000000).toFixed(2)} Cr</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-8">{property.description}</p>
              
              <h3 className="text-2xl font-bold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {property.amenities?.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Submit
                </button>
              </form>

              <div className="mt-6 space-y-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  Chat on WhatsApp
                </button>
                <a
                  href="tel:+919643930098"
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'gallery' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${property.title} - Image ${index + 1}`}
                  className="w-full h-72 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                />
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'specifications' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Building Specifications</h3>
                <div className="space-y-4">
                  {property.specifications && Object.entries(property.specifications).map(([key, value]) => (
                    <div key={key} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                      <span className="ml-2 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Unit Details</h3>
                <div className="space-y-4">
                  {property.bedrooms && (
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 text-blue-600 mr-2" />
                      <span>Bedrooms: {property.bedrooms}</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 text-blue-600 mr-2" />
                      <span>Bathrooms: {property.bathrooms}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Square className="w-5 h-5 text-blue-600 mr-2" />
                    <span>Area: {property.area} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'location' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Location Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Nearby Facilities</h3>
                <div className="grid grid-cols-1 gap-4">
                  {property.nearbyFacilities && Object.entries(property.nearbyFacilities).map(([key, value]) => (
                    <div key={key} className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="capitalize">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Location Map</h3>
                {/* Add your map component here */}
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  Map will be displayed here
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;