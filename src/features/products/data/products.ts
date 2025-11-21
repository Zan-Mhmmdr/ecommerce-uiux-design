export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "TMA-2 Comfort Wireless",
    price: 270,
    rating: 4.6,
    reviews: 86,
    image: "/src/assets/images/pict/headphone-small.png",
    category: "headphone",
  },
  {
    id: 2,
    name: "TMA-2 HD Wireless",
    price: 250,
    rating: 4.5,
    reviews: 71,
    image: "/src/assets/images/pict/earphone.png",
    category: "earphone",
  },
  {
    id: 3,
    name: "Sweatbands Sports Headband",
    price: 100,
    rating: 4.7,
    reviews: 34,
    image: "/src/assets/images/pict/headband1.jpg",
    category: "headband",
  },
  {
    id: 4,
    name: "Cute Leather Bow Headband",
    price: 25,
    rating: 4.7,
    reviews: 34,
    image: "/src/assets/images/pict/headband2.jpg",
    category: "headband",
  },
  {
    id: 5,
    name: "Sport Hairbands",
    price: 25,
    rating: 4.7,
    reviews: 12,
    image: "/src/assets/images/pict/headband3.jpg",
    category: "headband",
  },
];
