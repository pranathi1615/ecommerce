# Gadget Store: React Cart Page

## Run it
```
npm install
npm run dev
```
Open the link shown in the terminal (usually http://localhost:5173).

## Structure
```
src/
  main.jsx                 entry point
  App.jsx                  cart STATE + handlers (useState)
  App.css                  all styles
  utils.js                 formatINR()
  data/products.js         starting cart + demo coupons
  components/
    Navbar.jsx             responsive menu (useState), cart count badge
    CartItem.jsx           one row: qty input + remove (props)
    CartSummary.jsx        coupon box + totals
    Footer.jsx
```

## What works
- Change quantity: row subtotal, cart total and navbar badge all update
- Remove item (cart becomes empty -> message + disabled checkout)
- Coupons: TECH10 (10% off), SAVE5000 (Rs 5,000 off)
- Mobile menu toggle, table scrolls sideways on small screens
