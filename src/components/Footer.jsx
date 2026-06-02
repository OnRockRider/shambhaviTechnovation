import "../css/Footer.css";
// import "../css/Underline"
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">

          <h2>SHAMBHAVI</h2>

          <p>
            Architecting the future of software
            development with precision and innovation.
          </p>

          <div className="social-icons">
            <a href="#">in</a>
            <a href="#">ig</a>
            <a href="#">gh</a>
          </div>

        </div>

        {/* Links */}
        <div className="footer-column">
          <h4>Explore</h4>

          <a href="# " className="link-underline">Services</a>
          <a href="#" className="link-underline">Portfolio</a>
          <a href="#" className="link-underline">Projects</a>
          <a href="#" className="link-underline">Contact</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>

          <a href="#" className="link-underline">About</a>
          <a href="#" className="link-underline">Careers</a>
          <a href="#" className="link-underline">Privacy</a>
          <a href="#" className="link-underline">Terms</a>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h4>Newsletter</h4>

          <p className="newsletter-text">
            Stay updated with our latest innovations.
          </p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter email"
            />

            <button>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 SHAMBHAVI TECHNOVATION.
      </div>

    </footer>
  );
}

export default Footer;