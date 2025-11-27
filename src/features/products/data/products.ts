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
    image: "/public/images/pict/headphone-small.png",
    category: "headphone",
  },
  {
    id: 2,
    name: "TMA-2 HD Wireless",
    price: 250,
    rating: 4.5,
    reviews: 71,
    image: "/public/images/pict/earphone.png",
    category: "earphone",
  },
  {
    id: 3,
    name: "Sweatbands Sports Headband",
    price: 100,
    rating: 4.7,
    reviews: 34,
    image: "/public/images/pict/headband1.jpg",
    category: "headband",
  },
  {
    id: 4,
    name: "Cute Leather Bow Headband",
    price: 25,
    rating: 4.7,
    reviews: 34,
    image: "/public/images/pict/headband2.jpg",
    category: "headband",
  },
  {
    id: 5,
    name: "Sport Hairbands",
    price: 25,
    rating: 4.7,
    reviews: 12,
    image: "/public/images/pict/headband3.jpg",
    category: "headband",
  },
  {
    id: 6,
    name: "Earpad Tekstil Mesh AirPods Max",
    price: 40,
    rating: 4.5,
    reviews: 22,
    image: "/public/images/pict/earpads1.jpg",
    category: "earpads",
  },
  {
    id: 7,
    name: "Replacement Earpads Leather Ear Cushions Spare",
    price: 40,
    rating: 4.5,
    reviews: 22,
    image: "/public/images/pict/earpads2.jpg",
    category: "earpads",
  },
  {
    id: 8,
    name: "Earpad GVOEARS",
    price: 40,
    rating: 4.5,
    reviews: 22,
    image: "/public/images/pict/earpads3.jpg",
    category: "earpads",
  },
  {
    id: 9,
    name: "WH-CH720NC Wireless Headphones",
    price: 40,
    rating: 4.5,
    reviews: 22,
    image: "/public/images/pict/headphone-sony.webp",
    category: "headphone",
  },
  {
    id: 10,
    name: "WH-1000XM4 Wireless Noise-Cancelling Headphones",
    price: 40,
    rating: 4.5,
    reviews: 22,
    image: "/public/images/pict/headphone-sony2.webp",
    category: "headphone",
  },
  {
    id: 12,
    name: "Speaker Nirkabel SRS-XB23",
    price: 40,
    rating: 4.5,
    reviews: 22,
    image: "/public/images/pict/speaker3.webp",
    category: "speaker",
  },
  {
    id: 12,
    name: "Speaker Nirkabel SRS-XB23",
    price: 40,
    rating: 4.5,
    reviews: 22,
    image: "/public/images/pict/speaker.jpg",
    category: "speaker",
  },
  {
    id: 11,
    name: "Speaker Nirkabel Portabel SRS-XB12",
    price: 40,
    rating: 4.5,
    reviews: 22,
    image: "/public/images/pict/speaker2.jpg",
    category: "speaker",
  },
];
