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
  Phone,
  Grid,
  TreePine,
  Dumbbell,
  Users,
  Car,
  Sparkles
} from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeFloorPlan, setActiveFloorPlan] = useState(0);
  const [activeSitePlan, setActiveSitePlan] = useState(0);

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
    { id: 'specifications', label: 'Specifications', icon: <CheckCircle2 className="w-5 h-5" /> },
    { id: 'floorplans', label: 'Floor Plans', icon: <Grid className="w-5 h-5" /> },
    { id: 'siteplans', label: 'Site Plans', icon: <MapPinned className="w-5 h-5" /> },
    { id: 'amenities', label: 'Amenities', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'gallery', label: 'Gallery', icon: <ImageIcon className="w-5 h-5" /> },
    { id: 'location', label: 'Location', icon: <MapPin className="w-5 h-5" /> },
  ];

  const amenityCategories = [
    {
      title: "Leisure Amenities",
      items: [
        "Clubhouse",
        "Swimming Pool",
        "Kids' Pool",
        "Amphitheatre",
        "Indoor Games Room",
        "Multi-purpose Hall"
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Sports Facilities",
      items: [
        "Tennis Court",
        "Basketball Court",
        "Badminton Court",
        "Yoga/Meditation Area",
        "Gymnasium"
      ],
      icon: <Dumbbell className="w-6 h-6" />
    },
    {
      title: "Green Spaces",
      items: [
        "Central Garden",
        "Theme Gardens",
        "Kids' Play Area",
        "Jogging Track",
        "Senior Citizen Area"
      ],
      icon: <TreePine className="w-6 h-6" />
    },
    {
      title: "Convenience",
      items: [
        "24x7 Security",
        "Power Backup",
        "Covered Parking",
        "Visitor Parking",
        "EV Charging Points"
      ],
      icon: <Car className="w-6 h-6" />
    }
  ];

  const floorPlans = [
    {
      title: "2 BHK Premium",
      area: "1150 sq.ft.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      features: ["2 Bedrooms", "2 Bathrooms", "Living Room", "Kitchen", "Balcony"]
    },
    {
      title: "3 BHK Luxury",
      area: "1550 sq.ft.",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
      features: ["3 Bedrooms", "3 Bathrooms", "Living Room", "Kitchen", "2 Balconies"]
    }
  ];

  const sitePlans = [
    {
      title: "Master Plan",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      description: "Complete layout of the project including all towers and amenities"
    },
    {
      title: "Phase 1 Plan",
      image: "https://images.unsplash.com/photo-1600607687664-d7b57c8fe05b?w=800&q=80",
      description: "Detailed plan of Phase 1 including Tower A, B and central amenities"
    }
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
              <div className="mt-6">
                <span className="text-3xl font-bold text-blue-400">₹{(property.price / 10000000).toFixed(2)} Cr*</span>
                <span className="text-lg ml-2">onwards</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 py-6 gap-4">
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
            <div className="flex items-center justify-center border-r">
              <Building2 className="w-6 h-6 text-blue-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Total Towers</p>
                <p className="font-semibold">{property.specifications?.totalTowers}</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Total Units</p>
                <p className="font-semibold">{property.specifications?.totalUnits}</p>
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
              <p className="text-gray-600 mb-8 leading-relaxed">{property.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Project Highlights</h3>
                  <div className="space-y-3">
                    {property.highlights?.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {property.keyFeatures?.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Enquire Now</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name*</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email*</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone*</label>
                  <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Submit Enquiry
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

        {activeTab === 'specifications' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Structure</h3>
                <div className="space-y-4">
                  {property.specifications?.structure?.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Flooring</h3>
                <div className="space-y-4">
                  {property.specifications?.flooring?.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Doors & Windows</h3>
                <div className="space-y-4">
                  {property.specifications?.doorsWindows?.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Kitchen</h3>
                <div className="space-y-4">
                  {property.specifications?.kitchen?.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'floorplans' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Floor Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {floorPlans.map((plan, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-gray-600 mb-4">Super Area: {plan.area}</p>
                    <div className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'siteplans' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Site Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sitePlans.map((plan, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'amenities' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {amenityCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {property.images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`${property.title} - Image ${index + 1}`}
                    className="w-full h-72 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
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
                <h3 className="text-xl font-bold mb-4">Connectivity</h3>
                <div className="space-y-3">
                  {property.connectivity?.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Nearby Places</h3>
                <div className="space-y-3">
                  {property.nearbyPlaces?.map((place, index) => (
                    <div key={index} className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{place}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Location Map</h3>
                  <div className="bg-gray-200 h-96 rounded-lg">
                    {/* Add your map component here */}
                    <div className="h-full flex items-center justify-center text-gray-500">
                      Interactive Map Coming Soon
                    </div>
                  </div>
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