export interface Property {
  id: string;
  title: string;
  type: 'residential' | 'commercial' | 'industrial';
  price: number;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  description: string;
  features: string[];
  images: string[];
  status: 'for-sale' | 'for-rent' | 'sold';
  city: string;
  specifications?: {
    facing: string;
    floorNumber: number;
    totalFloors: number;
    possession: string;
    ageOfProperty: string;
  };
  nearbyFacilities?: {
    hospital: string;
    school: string;
    metro: string;
    highway: string;
    market: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}