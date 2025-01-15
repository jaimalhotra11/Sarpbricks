import { Property } from '../types';
import ecovill1 from '../assets/images/ecovillage1.jpg';
import ecovill2 from '../assets/images/ecovillage2.jpg';
import ecovill3 from '../assets/images/ecovillage3.jpg';
import romano from '../assets/images/romano.jpg';
import capetown from '../assets/images/capetown.jpeg';
import ecociti from '../assets/images/ecociti.jpeg';

const properties: Property[] = [
  {
    id: '1',
    title: 'Supertech Eco-Village I',
    type: 'Residential Apartment',
    price: 45000000,
    location: 'Sector 16B, Greater Noida West',
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    description: 'Supertech Eco Village 1 is a premium residential project that offers spacious 2, 3 & 4 BHK apartments. The project is spread across 50 acres of land and offers world-class amenities to its residents. With excellent connectivity to Delhi-NCR and a well-developed social infrastructure, Eco Village 1 is an ideal choice for home buyers and investors alike.',
    highlights: [
      'Spread across 50 acres',
      'Premium 2, 3 & 4 BHK apartments',
      'World-class amenities',
      'Excellent connectivity',
      'IGBC Green Building certified',
      '80% open space'
    ],
    keyFeatures: [
      'Vastu compliant design',
      'Earthquake resistant structure',
      'High-speed elevators',
      'Round-the-clock security',
      '100% power backup',
      'Rainwater harvesting'
    ],
    features: [
      'Modular Kitchen',
      'Power Backup',
      'Club House',
      'Swimming Pool',
      'Gym',
      '24x7 Security'
    ],
    images: [
      '../assets/images/ecovillage1.jpg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f'
    ],
    status: 'Ready to Move',
    city: 'Greater Noida',
    specifications: {
      structure: [
        'RCC framed structure with earthquake resistant design',
        'External walls with premium quality bricks',
        'Internal walls with AAC blocks for better insulation',
        'High-quality waterproofing in bathrooms and terraces'
      ],
      flooring: [
        'Vitrified tiles in living, dining and bedrooms',
        'Anti-skid ceramic tiles in bathrooms',
        'Granite counter in kitchen',
        'Premium quality wooden flooring in master bedroom'
      ],
      doorsWindows: [
        'Hardwood frame with flush doors',
        'Premium quality hardware fittings',
        'Powder coated aluminum windows',
        'Safety grills in all windows'
      ],
      kitchen: [
        'Modular kitchen with granite counter',
        'Stainless steel sink',
        'Provision for water purifier',
        'Premium quality CP fittings'
      ],
      facing: 'East',
      floorNumber: 12,
      totalFloors: 25,
      possession: 'Ready to Move',
      ageOfProperty: 'New Construction',
      totalTowers: 12,
      totalUnits: 2500
    },
    connectivity: [
      'Connected to NH-24 via FNG expressway',
      '5 minutes from proposed Metro Station',
      '15 minutes from Noida City Center',
      '30 minutes from Delhi',
      'Close to proposed International Airport'
    ],
    nearbyPlaces: [
      'DPS School - 1.5 km',
      'Fortis Hospital - 2 km',
      'City Center Mall - 3 km',
      'Golf Course - 5 km',
      'Metro Station - 500m'
    ],
    amenities: [
      'Club House with Modern Facilities',
      'Swimming Pool with Kids Pool',
      'Fully Equipped Gymnasium',
      'Indoor Games Room',
      'Landscaped Gardens',
      'Children\'s Play Area',
      'Jogging Track',
      'Amphitheatre',
      'Badminton Court',
      'Basketball Court',
      'Tennis Court',
      'Cricket Practice Net'
    ]
  },
  {
    id: '2',
    title: 'Supertech Eco-Village II',
    type: 'Residential Apartment',
    price: 48000000,
    location: 'Sector 16C, Greater Noida West',
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    description: 'Supertech Eco Village 2 is a luxurious residential project offering premium 2, 3 & 4 BHK apartments. Set in a sprawling 50-acre township, the project features modern amenities and excellent connectivity. With its strategic location and world-class facilities, Eco Village 2 represents the perfect blend of comfort and convenience.',
    highlights: [
      'Part of 50-acre township',
      'Premium 2, 3 & 4 BHK options',
      'Modern amenities',
      'Strategic location',
      'IGBC Gold certified',
      '75% open space'
    ],
    keyFeatures: [
      'Contemporary architecture',
      'Seismic zone IV compliant',
      'Smart home features',
      'Multi-tier security',
      'Uninterrupted power supply',
      'Sustainable design'
    ],
    features: [
      'Modular Kitchen',
      'Power Backup',
      'Club House',
      'Swimming Pool',
      'Gym',
      '24x7 Security'
    ],
    images: [
      '../assets/images/ecovillage2.jpg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    ],
    status: 'Ready to Move',
    city: 'Greater Noida',
    specifications: {
      structure: [
        'RCC frame structure with seismic considerations',
        'Premium quality brick exterior walls',
        'AAC blocks for interior walls',
        'Advanced waterproofing treatment'
      ],
      flooring: [
        'Italian marble in living areas',
        'Anti-skid tiles in wet areas',
        'Imported granite in kitchen',
        'Laminated wooden flooring in bedrooms'
      ],
      doorsWindows: [
        'Engineered wood frame doors',
        'Designer hardware fittings',
        'UPVC windows with mosquito mesh',
        'Toughened glass balcony railings'
      ],
      kitchen: [
        'Imported modular kitchen',
        'Double bowl sink',
        'Piped gas connection',
        'Designer tiles backsplash'
      ],
      facing: 'North-East',
      floorNumber: 15,
      totalFloors: 28,
      possession: 'Ready to Move',
      ageOfProperty: 'New Construction',
      totalTowers: 14,
      totalUnits: 2800
    },
    connectivity: [
      'Direct access to Noida-Greater Noida Expressway',
      'Upcoming Metro station within walking distance',
      '20 minutes from Sector 18 Noida',
      '35 minutes from South Delhi',
      'Close to Eastern Peripheral Expressway'
    ],
    nearbyPlaces: [
      'Ryan International School - 1 km',
      'Max Hospital - 2.5 km',
      'Grand Venice Mall - 3.5 km',
      'Sports City - 4 km',
      'Proposed Metro Station - 400m'
    ],
    amenities: [
      'Signature Club House',
      'Temperature Controlled Pool',
      'Cross-Fit Gym',
      'Spa and Sauna',
      'Meditation Garden',
      'Adventure Park',
      'Mini Golf Course',
      'Open Air Theatre',
      'Squash Court',
      'Table Tennis Room',
      'Yoga Studio',
      'Senior Citizen Park'
    ]
  },
  {
    id: '3',
    title: 'Supertech Eco-Village III',
    type: 'Residential Apartment',
    price: 52000000,
    location: 'Sector 16D, Greater Noida West',
    bedrooms: 4,
    bathrooms: 4,
    area: 2100,
    description: 'Supertech Eco Village 3 represents the pinnacle of luxury living with premium 3 & 4 BHK apartments. This magnificent project spans 60 acres and introduces a new dimension of sophisticated living with its ultra-modern amenities and thoughtfully designed spaces.',
    highlights: [
      '60-acre luxury township',
      'Premium 3 & 4 BHK apartments',
      'Ultra-modern amenities',
      'Strategic location',
      'IGBC Platinum certified',
      '85% open space'
    ],
    keyFeatures: [
      'Smart home automation',
      'Double height lobby',
      'VRV air conditioning',
      'Advanced security systems',
      'Solar power integration',
      'Electric vehicle charging'
    ],
    features: [
      'Italian Modular Kitchen',
      'Premium Fixtures',
      'Designer Club House',
      'Infinity Pool',
      'High-end Gym',
      'Multi-level Security'
    ],
    images: [
      '../assets/images/ecovillage3.jpg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    ],
    status: 'Ready to Move',
    city: 'Greater Noida',
    specifications: {
      structure: [
        'Advanced RCC frame with seismic zone V compliance',
        'Double-wall technology for better insulation',
        'Green building materials',
        'German waterproofing technology'
      ],
      flooring: [
        'Imported marble in living areas',
        'Designer tiles in bathrooms',
        'Engineered wooden flooring',
        'Anti-static flooring in specific areas'
      ],
      doorsWindows: [
        'Solid core flush doors',
        'European hardware fittings',
        'Double glazed UPVC windows',
        'Motorized blinds provision'
      ],
      kitchen: [
        'Imported modular kitchen',
        'Premium countertops',
        'Built-in appliances',
        'Designer fittings'
      ],
      facing: 'South-East',
      floorNumber: 18,
      totalFloors: 32,
      possession: 'Ready to Move',
      ageOfProperty: 'New Construction',
      totalTowers: 16,
      totalUnits: 3200
    },
    connectivity: [
      'Connected to Noida-Greater Noida Expressway',
      'Metro station at doorstep',
      '25 minutes from Delhi',
      '15 minutes from Noida Sector 18',
      'Near upcoming International Airport'
    ],
    nearbyPlaces: [
      'Genesis Global School - 1 km',
      'Jaypee Hospital - 2 km',
      'Mall of India - 4 km',
      'Golf Course - 3 km',
      'Metro Station - 100m'
    ],
    amenities: [
      'Luxury Club House',
      'Infinity Edge Pool',
      'State-of-the-art Gym',
      'Spa & Wellness Center',
      'Multi-cuisine Restaurant',
      'Indoor Sports Complex',
      'Mini Theatre',
      'Business Center',
      'Tennis Courts',
      'Squash Courts',
      'Yoga Studio',
      'Kids Play Zone'
    ]
  },
  {
    id: '4',
    title: 'Supertech Romano',
    type: 'Luxury Apartment',
    price: 65000000,
    location: 'Sector 118, Noida',
    bedrooms: 4,
    bathrooms: 4,
    area: 2400,
    description: 'Supertech Romano is an architectural masterpiece inspired by Roman design philosophy. This ultra-luxury project offers spacious 3 & 4 BHK apartments with world-class amenities and breathtaking views of the Noida skyline.',
    highlights: [
      'Roman-inspired architecture',
      'Ultra-luxury apartments',
      'Panoramic city views',
      'Premium location',
      'IGBC Platinum certified',
      '70% open space'
    ],
    keyFeatures: [
      'Italian marble flooring',
      'Home automation',
      'Private elevators',
      'Concierge services',
      'Automated parking',
      'Helipad access'
    ],
    features: [
      'Designer Kitchen',
      'Premium Appliances',
      'Luxury Club House',
      'Rooftop Pool',
      'Premium Gym',
      'Concierge Services'
    ],
    images: [
      '../assets/images/romano.jpg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    ],
    status: 'Ready to Move',
    city: 'Noida',
    specifications: {
      structure: [
        'Ultra-luxury RCC frame structure',
        'Double glazed exterior walls',
        'Sound-proof interiors',
        'Advanced waterproofing'
      ],
      flooring: [
        'Italian marble throughout',
        'Designer bathroom tiles',
        'Wooden flooring in bedrooms',
        'Anti-skid pool deck'
      ],
      doorsWindows: [
        'Imported wooden doors',
        'Smart door locks',
        'Floor-to-ceiling windows',
        'Automated blinds'
      ],
      kitchen: [
        'European modular kitchen',
        'Built-in appliances',
        'Wine chiller',
        'Smart storage solutions'
      ],
      facing: 'North',
      floorNumber: 20,
      totalFloors: 40,
      possession: 'Ready to Move',
      ageOfProperty: 'New Construction',
      totalTowers: 8,
      totalUnits: 400
    },
    connectivity: [
      'Direct access to DND Flyway',
      'Metro station connectivity',
      '20 minutes from South Delhi',
      '30 minutes from IGI Airport',
      'Near Film City'
    ],
    nearbyPlaces: [
      'Amity University - 2 km',
      'Apollo Hospital - 3 km',
      'DLF Mall - 1.5 km',
      'Golf Course - 2 km',
      'Metro Station - 300m'
    ],
    amenities: [
      'Roman-style Club House',
      'Infinity Pool',
      'Premium Fitness Center',
      'Private Cinema',
      'Fine Dining Restaurant',
      'Wine Cellar',
      'Cigar Lounge',
      'Business Center',
      'Spa & Salon',
      'Indoor Games',
      'Meditation Center',
      'Private Garden'
    ]
  },
  {
    id: '5',
    title: 'Supertech Cape Town',
    type: 'Premium Apartment',
    price: 55000000,
    location: 'Sector 74, Noida',
    bedrooms: 3,
    bathrooms: 3,
    area: 1950,
    description: 'Supertech Cape Town brings Mediterranean luxury to Noida with its unique architecture and premium amenities. The project offers luxurious 2, 3 & 4 BHK apartments with stunning views and world-class facilities.',
    highlights: [
      'Mediterranean architecture',
      'Premium apartments',
      'Waterfront views',
      'Central location',
      'IGBC Gold certified',
      '75% open space'
    ],
    keyFeatures: [
      'Designer interiors',
      'Smart security',
      'High-speed elevators',
      'Power backup',
      'Rainwater harvesting',
      'Waste management'
    ],
    features: [
      'Modern Kitchen',
      'Premium Fittings',
      'Themed Club House',
      'Resort-style Pool',
      'Modern Gym',
      '24/7 Security'
    ],
    images: [
      '../assets/images/capetown.jpeg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    ],
    status: 'Ready to Move',
    city: 'Noida',
    specifications: {
      structure: [
        'RCC frame structure',
        'Earthquake resistant design',
        'Quality brick walls',
        'Premium waterproofing'
      ],
      flooring: [
        'Vitrified tiles',
        'Marble flooring',
        'Wooden flooring in master bedroom',
        'Anti-skid tiles in balconies'
      ],
      doorsWindows: [
        'Hardwood frame doors',
        'Security locks',
        'Aluminum windows',
        'Mosquito mesh'
      ],
      kitchen: [
        'Modular kitchen',
        'Granite counter',
        'Steel sink',
        'Premium fittings'
      ],
      facing: 'East',
      floorNumber: 15,
      totalFloors: 30,
      possession: 'Ready to Move',
      ageOfProperty: 'New Construction',
      totalTowers: 10,
      totalUnits: 1000
    },
    connectivity: [
      'Near Noida Expressway',
      'Metro connectivity',
      '25 minutes from Delhi',
      '35 minutes from Airport',
      'Near IT Hub'
    ],
    nearbyPlaces: [
      'Delhi Public School - 1 km',
      'Kailash Hospital - 2 km',
      'Great India Place - 3 km',
      'Golf Course - 4 km',
      'Metro Station - 800m'
    ],
    amenities: [
      'Mediterranean Club House',
      'Swimming Pool',
      'Fitness Center',
      'Indoor Games',
      'Party Lawn',
      'Kids Play Area',
      'Jogging Track',
      'Amphitheatre',
      'Sports Courts',
      'Yoga Center',
      'Library',
      'Community Hall'
    ]
  },
  {
    id: '6',
    title: 'Supertech Eco-Citi',
    type: 'Smart Apartment',
    price: 42000000,
    location: 'Sector 137, Noida',
    bedrooms: 3,
    bathrooms: 2,
    area: 1650,
    description: 'Supertech Eco-Citi is a smart township project offering modern 2 & 3 BHK apartments. The project focuses on sustainable living with eco-friendly features and smart home technology.',
    highlights: [
      'Smart township',
      'Eco-friendly design',
      'Modern amenities',
      'Green surroundings',
      'IGBC certified',
      '80% open space'
    ],
    keyFeatures: [
      'Smart home features',
      'Energy efficient',
      'Water recycling',
      'Solar integration',
      'Waste management',
      'EV charging'
    ],
    features: [
      'Smart Kitchen',
      'Energy Monitoring',
      'Modern Club House',
      'Eco Pool',
      'Green Gym',
      'Smart Security'
    ],
    images: [
      '../assets/images/ecociti.jpeg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    ],
    status: 'Ready to Move',
    city: 'Noida',
    specifications: {
      structure: [
        'Green building structure',
        'Solar reflective walls',
        'Eco-friendly materials',
        'Sustainable design'
      ],
      flooring: [
        'Eco-friendly tiles',
        'Recycled wood flooring',
        'Natural stone',
        'Low-maintenance surfaces'
      ],
      doorsWindows: [
        'Energy efficient doors',
        'Double glazed windows',
        'UV protection',
        'Natural ventilation'
      ],
      kitchen: [
        'Energy efficient appliances',
        'Eco-friendly materials',
        'Water saving fixtures',
        'Smart features'
      ],
      facing: 'North-East',
      floorNumber: 12,
      totalFloors: 24,
      possession: 'Ready to Move',
      ageOfProperty: 'New Construction',
      totalTowers: 15,
      totalUnits: 1800
    },
    connectivity: [
      'Connected to Expressway',
      'Upcoming Metro',
      '30 minutes from Delhi',
      '40 minutes from Airport',
      'IT Hub nearby'
    ],
    nearbyPlaces: [
      'Cambridge School - 2 km',
      'Yatharth Hospital - 1.5 km',
      'Logix Mall - 3 km',
      'Central Park - 1 km',
      'Metro Station - 1 km'
    ],
    amenities: [
      'Smart Club House',
      'Eco-friendly Pool',
      'Green Gym',
      'Organic Garden',
      'Butterfly Park',
      'Nature Trail',
      'Cycling Track',
      'Solar Plaza',
      'Rain Garden',
      'Herb Garden',
      'Fitness Station',
      'Meditation Zone'
    ]
  },
  {
    id: '7',
    title: 'Supertech Chandigarh',
    type: 'Premium Apartment',
    price: 58000000,
    location: 'Sector 17, Chandigarh',
    bedrooms: 4,
    bathrooms: 4,
    area: 2200,
    description: "Supertech Chandigarh brings luxury living to the city beautiful with its premium 3 & 4 BHK apartments. The project combines modern architecture with the city's planned layout to create a perfect living space.",
    highlights: [
      'Modern architecture',
      'Premium location',
      'Luxury amenities',
      'City center proximity',
      'Green certification',
      '70% open space'
    ],
    keyFeatures: [
      'Contemporary design',
      'Premium security',
      'Modern elevators',
      'Full backup',
      'Smart features',
      'Premium lobby'
    ],
    features: [
      'Luxury Kitchen',
      'Premium Fittings',
      'Modern Club',
      'Infinity Pool',
      'Premium Gym',
      'Concierge'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    ],
    status: 'Ready to Move',
    city: 'Chandigarh',
    specifications: {
      structure: [
        'Modern RCC structure',
        'Premium construction',
        'Quality materials',
        'Advanced techniques'
      ],
      flooring: [
        'Italian marble',
        'Wooden flooring',
        'Designer tiles',
        'Premium finish'
      ],
      doorsWindows: [
        'Hardwood doors',
        'Premium windows',
        'Quality hardware',
        'Sound insulation'
      ],
      kitchen: [
        'Modern modular kitchen',
        'Premium countertop',
        'Quality fixtures',
        'Smart storage'
      ],
      facing: 'North',
      floorNumber: 16,
      totalFloors: 35,
      possession: 'Ready to Move',
      ageOfProperty: 'New Construction',
      totalTowers: 6,
      totalUnits: 500
    },
    connectivity: [
      'City center location',
      'Transport hub nearby',
      'Airport connectivity',
      'Highway access',
      'Business district'
    ],
    nearbyPlaces: [
      'Top Schools - 1 km',
      'City Hospital - 2 km',
      'Central Mall - 1 km',
      'Rose Garden - 2 km',
      'Bus Terminal - 500m'
    ],
    amenities: [
      'Premium Club',
      'Rooftop Pool',
      'Modern Gym',
      'Party Hall',
      'Garden Area',
      'Kids Zone',
      'Sports Court',
      'Business Center',
      'Spa Center',
      'Game Room',
      'Library',
      'Guest Suites'
    ]
  },
  {
    id: '8',
    title: 'Supertech Mohali',
    type: 'Luxury Apartment',
    price: 62000000,
    location: 'Sector 82, Mohali',
    bedrooms: 4,
    bathrooms: 4,
    area: 2300,
    description: "Supertech Mohali represents luxury living in Punjab's most progressive city. This premium project offers spacious 3 & 4 BHK apartments with world-class amenities and modern lifestyle features.",
    highlights: [
      'Luxury project',
      'Premium location',
      'Modern amenities',
      'IT hub proximity',
      'Green certification',
      '75% open space'
    ],
    keyFeatures: [
      'Modern architecture',
      'Advanced security',
      'Smart features',
      'Power backup',
      'Water recycling',
      'Premium materials'
    ],
    features: [
      'Designer Kitchen',
      'Premium Fixtures',
      'Luxury Club',
      'Premium Pool',
      'Modern Gym',
      'Smart Security'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    ],
    status: 'Ready to Move',
    city: 'Mohali',
    specifications: {
      structure: [
        'Premium RCC structure',
        'Quality construction',
        'Modern techniques',
        'Advanced features'
      ],
      flooring: [
        'Premium marble',
        'Wooden flooring',
        'Quality tiles',
        'Designer finish'
      ],
      doorsWindows: [
        'Quality doors',
        'Modern windows',
        'Premium fittings',
        'Sound proof'
      ],
      kitchen: [
        'Designer kitchen',
        'Quality counter',
        'Modern fixtures',
        'Smart features'
      ],
      facing: 'South-East',
      floorNumber: 18,
      totalFloors: 32,
      possession: 'Ready to Move',
      ageOfProperty: 'New Construction',
      totalTowers: 8,
      totalUnits: 600
    },
    connectivity: [
      'Airport proximity',
      'Highway access',
      'IT hub nearby',
      'City center access',
      'Educational hub'
    ],
    nearbyPlaces: [
      'International School - 2 km',
      'Multi-Specialty Hospital - 1.5 km',
      'Shopping Mall - 1 km',
      'IT Park - 3 km',
      'Golf Course - 4 km'
    ],
    amenities: [
      'Luxury Club House',
      'Designer Pool',
      'Modern Gym',
      'Party Area',
      'Landscape Garden',
      'Kids Area',
      'Sports Complex',
      'Business Lounge',
      'Spa & Salon',
      'Indoor Games',
      'Reading Room',
      'Banquet Hall'
    ]
  },
  {
    id: '9',
    title: 'Supertech Bhiwadi',
    type: 'Residential Apartment',
    price: 35000000,
    location: 'Sector 68, Bhiwadi',
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    description: "Supertech Bhiwadi offers affordable luxury in NCR's fastest growing region. The project features modern 2 & 3 BHK apartments with quality amenities and excellent connectivity.",
    highlights: [
      'Affordable luxury',
      'Growing location',
      'Modern features',
      'Industrial proximity',
      'Green spaces',
      '80% open area'
    ],
    keyFeatures: [
      'Quality construction',
      'Basic automation',
      'Security system',
      'Power backup',
      'Water supply',
      'Car parking'
    ],
    features: [
      'Modern Kitchen',
      'Quality Fittings',
      'Community Club',
      'Swimming Pool',
      'Fitness Center',
      'Security'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    ],
    status: 'Ready to Move',
    city: 'Bhiwadi',
    specifications: {
      structure: [
        'RCC structure',
        'Quality walls',
        'Standard features',
        'Basic waterproofing'
      ],
      flooring: [
        'Vitrified tiles',
        'Ceramic tiles',
        'Standard finish',
        'Quality materials'
      ],
      doorsWindows: [
        'Standard doors',
        'Aluminum windows',
        'Basic fittings',
        'Security features'
      ],
      kitchen: [
        'Modular kitchen',
        'Granite top',
        'Standard fixtures',
        'Basic features'
      ],
      facing: 'East',
      floorNumber: 8,
      totalFloors: 14,
      possession: 'Ready to Move',
      ageOfProperty: 'New Construction',
      totalTowers: 10,
      totalUnits: 800
    },
    connectivity: [
      'Industrial area nearby',
      'Highway access',
      'Bus terminal',
      'Railway station',
      'Market area'
    ],
    nearbyPlaces: [
      'Local School - 1 km',
      'Government Hospital - 2 km',
      'Local Market - 500m',
      'Industrial Area - 3 km',
      'Bus Stand - 1 km'
    ],
    amenities: [
      'Community Club',
      'Swimming Pool',
      'Fitness Center',
      'Garden Area',
      'Play Area',
      'Walking Track',
      'Indoor Games',
      'Community Hall',
      'Security Office',
      'Parking Area',
      'Park',
      'Shop Space'
    ]
  },
  {
    id: '10',
    title: 'Supertech Green Valley',
    type: 'Residential Apartment',
    price: 38000000,
    location: 'Sector 22, Greater Noida',
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    description: 'Supertech Green Valley is a nature-inspired residential project offering comfortable 2 & 3 BHK apartments. The project emphasizes green living with extensive landscaping and eco-friendly features.',
    highlights: [
      'Green living concept',
      'Nature-inspired design',
      'Sustainable features',
      'Strategic location',
      'Eco-friendly',
      '85% open space'
    ],
    keyFeatures: [
      'Green architecture',
      'Natural ventilation',
      'Solar lighting',
      'Water conservation',
      'Waste management',
      'Garden views'
    ],
    features: [
      'Eco Kitchen',
      'Green Features',
      'Nature Club',
      'Bio Pool',
      'Open Gym',
      'Garden Security'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    ],
    status: 'Ready to Move',
    city: 'Greater Noida',
    specifications: {
      structure: [
        'Eco-friendly structure',
        'Natural materials',
        'Green technology',
        'Sustainable design'
      ],
      flooring: [
        'Natural stone',
        'Eco-friendly tiles',
        'Green materials',
        'Sustainable finish'
      ],
      doorsWindows: [
        'Wooden doors',
        'Large windows',
        'Natural ventilation',
        'Energy efficient'
      ],
      kitchen: [
        'Green kitchen',
        'Natural counter',
        'Eco fixtures',
        'Energy saving'
      ],
      facing: 'North-East',
      floorNumber: 10,
      totalFloors: 18,
      possession: 'Ready to Move',
      ageOfProperty: 'New Construction',
      totalTowers: 12,
      totalUnits: 1000
    },
    connectivity: [
      'Expressway access',
      'Public transport',
      'Educational hub',
      'Commercial center',
      'Healthcare facilities'
    ],
    nearbyPlaces: [
      'Green School - 2 km',
      'City Hospital - 3 km',
      'Nature Park - 1 km',
      'Market Complex - 2 km',
      'Transport Hub - 1.5 km'
    ],
    amenities: [
      'Green Club House',
      'Natural Pool',
      'Open Air Gym',
      'Herb Garden',
      'Nature Trail',
      'Eco Park',
      'Butterfly Garden',
      'Meditation Area',
      'Yoga Center',
      'Bird Sanctuary',
      'Organic Garden',
      'Nature Workshop'
    ]
  }
];

export { properties };