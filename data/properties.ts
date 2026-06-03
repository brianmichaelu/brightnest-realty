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
    price: "TZS 850,000,000",
    type: "Villa",
    status: "For Sale",
    image: "/images/property-1.png",
    beds: 5,
    baths: 4,
    size: "650 sqm",
    featured: true,
    description:
      "A bright and spacious family villa with modern finishes, private parking, outdoor space and easy access to restaurants, schools and main roads.",
  },
  {
    id: "mbezi-beach-apartment",
    title: "Luxury Apartment Near the Beach",
    location: "Mbezi Beach, Dar es Salaam",
    price: "TZS 1,500,000 / month",
    type: "Apartment",
    status: "For Rent",
    image: "/images/property-2.png",
    beds: 3,
    baths: 2,
    size: "180 sqm",
    featured: true,
    description:
      "A clean apartment with bright interiors, balcony space, secure parking and a comfortable layout for families or professionals.",
  },
  {
    id: "kigamboni-modern-house",
    title: "Modern Standalone House",
    location: "Kigamboni, Dar es Salaam",
    price: "TZS 280,000,000",
    type: "House",
    status: "For Sale",
    image: "/images/property-3.png",
    beds: 4,
    baths: 3,
    size: "420 sqm",
    featured: true,
    description:
      "A newly built home with spacious rooms, a modern kitchen, secure compound and a peaceful residential environment.",
  },
  {
    id: "tegeta-family-home",
    title: "Affordable Family Home",
    location: "Tegeta, Dar es Salaam",
    price: "TZS 900,000 / month",
    type: "House",
    status: "For Rent",
    image: "/images/property-4.png",
    beds: 3,
    baths: 2,
    size: "300 sqm",
    description:
      "A practical family home located near shops, schools and transport. Good option for long-term tenants.",
  },
  {
    id: "bagamoyo-land-plot",
    title: "Prime Land for Development",
    location: "Bagamoyo, Pwani",
    price: "TZS 65,000,000",
    type: "Land",
    status: "For Sale",
    image: "/images/property-5.png",
    beds: 0,
    baths: 0,
    size: "1,200 sqm",
    description:
      "A good land opportunity for residential or commercial development in a growing area.",
  },
  {
    id: "city-commercial-space",
    title: "Commercial Space for Office or Shop",
    location: "City Centre, Dar es Salaam",
    price: "TZS 2,800,000 / month",
    type: "Commercial",
    status: "For Rent",
    image: "/images/property-6.png",
    beds: 0,
    baths: 2,
    size: "250 sqm",
    description:
      "A well-positioned commercial space suitable for offices, retail, consultancy or professional services.",
  },
];