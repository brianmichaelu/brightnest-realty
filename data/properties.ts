export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  type: "House" | "Apartment" | "Villa" | "Land" | "Commercial";
  status: "For Sale" | "For Rent";
  image: string;
  beds: number;
  baths: number;
  size: string;
  featured?: boolean;
  description: string;
};

export const properties: Property[] = [
  {
    id: "masaki-family-villa",
    title: "Modern Family Villa in Masaki",
    location: "Masaki, Dar es Salaam",
    price: "TSh 950,000,000",
    type: "Villa",
    status: "For Sale",
    image: "/images/property-1.png",
    beds: 5,
    baths: 4,
    size: "450 m²",
    featured: true,
    description:
      "A premium family villa in Masaki with elegant living spaces, modern finishes, a private outdoor area, secure parking and easy access to schools, restaurants, offices and main roads.",
  },
  {
    id: "kunduchi-beach-apartment",
    title: "Luxury Apartment Near the Beach",
    location: "Kunduchi, Dar es Salaam",
    price: "TSh 2,500,000 / month",
    type: "Apartment",
    status: "For Rent",
    image: "/images/property-2.png",
    beds: 3,
    baths: 2,
    size: "120 m²",
    featured: true,
    description:
      "A bright coastal apartment with ocean views, open living space, modern finishes, balcony access and secure parking. Ideal for families, professionals or long-term tenants looking for comfort near the beach.",
  },
  {
    id: "mbezi-modern-standalone-house",
    title: "Modern Standalone House",
    location: "Mbezi Beach, Dar es Salaam",
    price: "TSh 620,000,000",
    type: "House",
    status: "For Sale",
    image: "/images/property-3.png",
    beds: 4,
    baths: 3,
    size: "300 m²",
    featured: true,
    description:
      "A well-designed standalone house with spacious rooms, a modern kitchen, secure compound and a peaceful residential setting close to shops, schools and main road access.",
  },
  {
    id: "tegeta-family-home",
    title: "Comfortable Family Home",
    location: "Tegeta, Dar es Salaam",
    price: "TSh 1,200,000 / month",
    type: "House",
    status: "For Rent",
    image: "/images/property-4.png",
    beds: 3,
    baths: 2,
    size: "220 m²",
    description:
      "A practical family home in a calm residential area with comfortable bedrooms, parking space and convenient access to schools, shops and public transport.",
  },
  {
    id: "bagamoyo-development-land",
    title: "Prime Development Land",
    location: "Bagamoyo, Pwani",
    price: "TSh 85,000,000",
    type: "Land",
    status: "For Sale",
    image: "/images/property-5.png",
    beds: 0,
    baths: 0,
    size: "1,200 m²",
    description:
      "A promising land opportunity suitable for residential or commercial development in a growing area with strong future potential.",
  },
  {
    id: "city-centre-commercial-space",
    title: "Commercial Space for Office or Shop",
    location: "City Centre, Dar es Salaam",
    price: "TSh 3,000,000 / month",
    type: "Commercial",
    status: "For Rent",
    image: "/images/property-6.png",
    beds: 0,
    baths: 2,
    size: "250 m²",
    description:
      "A well-positioned commercial space suitable for offices, retail, consultancy or professional services with strong visibility and easy customer access.",
  },
];
