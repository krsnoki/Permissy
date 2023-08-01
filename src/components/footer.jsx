
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p className="contact-info">Contact us at: contact@permissy.com</p>
      <p className="thanksgiving-line">Thank you for choosing Permissy!</p>
      <p className="copywrite">&copy; {new Date().getFullYear()} Permissy. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
