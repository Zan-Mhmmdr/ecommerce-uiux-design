export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "TMA-2 Comfort Wireless",
    price: 270,
    rating: 4.6,
    reviews: 86,
    image: "/src/assets/images/pict/headphone-small.png",
  },
  {
    id: 2,
    name: "TMA-2 HD Wireless",
    price: 250,
    rating: 4.5,
    reviews: 71,
    image: "/src/assets/images/pict/earphone.png",
  },
];
