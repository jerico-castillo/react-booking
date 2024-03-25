export type HotelCountByType = {
  type: string;
  count: number;
};

export type Hotel = {
  _id: string;
  name: string;
  type: string;
  city: string;
  address: string;
  distance: string;
  photos?: string[];
  title: string;
  desc: string;
  rating?: number;
  rooms?: string[];
  cheapestPirce: number;
  featured: boolean;
};
