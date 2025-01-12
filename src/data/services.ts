import { Service } from '../types';
import { Home, Building2, Key, Briefcase } from 'lucide-react';

export const services: Service[] = [
  {
    id: '1',
    title: 'Residential Sales',
    description: 'Find your dream home with our expert guidance...',
    icon: 'Home',
    features: [
      'Personalized Property Search',
      'Home Valuation',
      'Negotiation Support'
    ]
  },
  {
    id: '2',
    title: 'Rent',
    description: 'Find the perfect rental property tailored to your needs...',
    icon: 'Building2',
    features: [
      'Wide Range of Rental Properties',
      'Flexible Lease Options',
      'Tenant Assistance'
    ]
  },
  {
    id: '3',
    title: 'Investment',
    description: 'Discover lucrative real estate investment opportunities...',
    icon: 'Briefcase',
    features: [
      'Market Analysis',
      'Portfolio Diversification',
      'High ROI Projects'
    ]
  },
  
];