import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-split">
        <div>
          <Link to="/contact" className="text">
            Contact me
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;