const LOGO =
  "https://www.shutterstock.com/shutterstock/photos/2040138269/display_1500/stock-vector-tech-store-logo-vector-store-with-tech-element-logo-design-template-2040138269.jpg";

function Footer() {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src={LOGO} className="imaget" alt="Tech etc logo" />
        <h4>Contact</h4>
        <p><strong>Address: </strong>562 hyd Road, street 12, San Francisco</p>
        <p><strong>Phone: </strong>+918919177245 / (+91)9603165664</p>
        <p><strong>Hours: </strong>10:00 - 7:00, Mon - Sat</p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign in</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <img
          src="https://img.freepik.com/premium-vector/download-app-store-get-it-google-play-button-icons-with-neumorphism-design_659151-351.jpg?w=1380"
          className="image1"
          alt="Download on App Store and Google Play"
        />
        <p>Secured Payment Gateways</p>
        <img
          src="https://bolofresh.com/cdn/shop/files/Screenshot_2022-10-01_at_2.22.09_PM.png?v=1664628354&width=750"
          className="image2"
          alt="Accepted payment methods"
        />
      </div>

      <div className="copyright">
        <p>2024, Tech etc - React Ecommerce Template</p>
      </div>
    </footer>
  );
}

export default Footer;
