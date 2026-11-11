import { useState } from "react";
import { formatINR } from "../utils";

function CartSummary({
  subtotal,
  discount,
  total,
  appliedCoupon,
  onApplyCoupon,
  onCheckout,
  isEmpty,
}) {
  // Local state: what the user is typing, and the message to show
  const [code, setCode] = useState("");
  const [message, setMessage] = useState(null); // { ok: boolean, text: string }

  const handleApply = () => {
    if (!code.trim()) {
      setMessage({ ok: false, text: "Enter a coupon code first." });
      return;
    }
    const result = onApplyCoupon(code);
    setMessage({ ok: result.ok, text: result.message });
    if (result.ok) setCode("");
  };

  return (
    <section id="cart-id">
      <div id="coupon">
        <h3>Apply Coupon</h3>
        <div>
          <input
            type="text"
            placeholder="Enter Your Coupon"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleApply()}
          />
          <button className="normal" onClick={handleApply}>
            Apply
          </button>
        </div>
        {message && (
          <p className={message.ok ? "msg ok" : "msg error"}>{message.text}</p>
        )}
        <p className="hint">Try TECH10 or SAVE5000</p>
      </div>

      <div id="subtotal">
        <h3>Cart Totals</h3>
        <table>
          <tbody>
            <tr>
              <td>Cart Subtotal</td>
              <td>{formatINR(subtotal)}</td>
            </tr>
            {appliedCoupon && (
              <tr>
                <td>Coupon ({appliedCoupon.code})</td>
                <td>- {formatINR(discount)}</td>
              </tr>
            )}
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>{formatINR(total)}</strong></td>
            </tr>
          </tbody>
        </table>
        <button className="normal" onClick={onCheckout} disabled={isEmpty}>
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}

export default CartSummary;
