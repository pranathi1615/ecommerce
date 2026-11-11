// Starting cart. Prices are numbers (not strings) so we can do maths on them.
export const initialCart = [
  {
    id: 1,
    name: "Dell Inspiron 3525",
    image:
      "https://sathya.in/media/92863/catalog/Dell%20Inspiron%203525%20-%20Ryzen%205%20Hexa%20Core%20R5-5500U%2015.6%20Laptop_01.jpg",
    price: 47990,
    qty: 1,
  },
  {
    id: 2,
    name: "Dell Laptop",
    image: "https://m.media-amazon.com/images/I/616gUvx+8NL._SL1080_.jpg",
    price: 103499,
    qty: 1,
  },
  {
    id: 3,
    name: "HP Victus",
    image: "https://m.media-amazon.com/images/I/71Bl2rjsN8L._SX679_.jpg",
    price: 99490,
    qty: 1,
  },
];

// Demo coupon codes.
export const COUPONS = {
  TECH10: { type: "percent", value: 10, label: "10% off" },
  SAVE5000: { type: "flat", value: 5000, label: "₹5,000 off" },
};
