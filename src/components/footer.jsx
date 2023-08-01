
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../styles/footer.css'

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
     <div className="footer-info">
      <p className="copywrite">&copy; {new Date().getFullYear()} Permissy. All rights reserved.</p>
     </div>
    </footer>
  );
}

export default Footer;
