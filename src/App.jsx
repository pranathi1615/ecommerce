import { useState } from "react";
import Navbar from "./components/Navbar";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import Footer from "./components/Footer";
import { initialCart, COUPONS } from "./data/products";

function App() {
  // ---- STATE: the single source of truth for the cart ----
  const [cartItems, setCartItems] = useState(initialCart);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // ---- DERIVED VALUES: calculated from state on every render ----
  // (no separate state needed, so they can never go out of sync)
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  let discount = 0;
  if (appliedCoupon) {
    discount =
      appliedCoupon.type === "percent"
        ? Math.round((subtotal * appliedCoupon.value) / 100)
        : Math.min(appliedCoupon.value, subtotal);
  }
  const total = subtotal - discount;

  // ---- HANDLERS ----
  const handleQtyChange = (id, qty) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = (rawCode) => {
    const code = rawCode.trim().toUpperCase();
    const coupon = COUPONS[code];
    if (!coupon) {
      return { ok: false, message: "Invalid coupon code." };
    }
    setAppliedCoupon({ code, ...coupon });
    return { ok: true, message: `Coupon ${code} applied: ${coupon.label}.` };
  };

  const handleCheckout = () => {
    alert("Demo only: checkout would go to a payment page.");
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <div className="bg-image">
        <h2 className="spr">#CART_PAGE</h2>
        <p className="spr2">cart page details</p>
      </div>

      <section id="cart" className="section-p1">
        {cartItems.length === 0 ? (
          <p className="empty">Your cart is empty. Add a laptop from Products to get started.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <td>Remove</td>
                  <td>Image</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onQtyChange={handleQtyChange}
                    onRemove={handleRemove}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <CartSummary
        subtotal={subtotal}
        discount={discount}
        total={total}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={handleApplyCoupon}
        onCheckout={handleCheckout}
        isEmpty={cartItems.length === 0}
      />

      <Footer />
    </>
  );
}

export default App;
