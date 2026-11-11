import { useState } from "react";

const LOGO =
  "https://www.shutterstock.com/shutterstock/photos/2040138269/display_1500/stock-vector-tech-store-logo-vector-store-with-tech-element-logo-design-template-2040138269.jpg";

function Navbar({ cartCount }) {
  // State for the mobile menu: true = open, false = closed
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        <img src={LOGO} className="logo" alt="Tech etc logo" />
      </a>

      <button
        className="navbar-toggler"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a className="nav-link" href="https://homewebin.ccbp.tech/">Home</a>
        <a className="nav-link" href="https://website1210.ccbp.tech/">Products</a>
        <a className="nav-link" href="https://contact1210.ccbp.tech/">Contact</a>
        <a className="nav-link" href="https://about1210.ccbp.tech/">About Us</a>
        <a className="nav-link active" href="#" aria-label={`Cart, ${cartCount} items`}>
          <i className="fa fa-shopping-bag"></i>
          <span className="cart-badge">{cartCount}</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
