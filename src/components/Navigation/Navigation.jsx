import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbarlist">
          <Link className="Link" to="/">Home</Link>
        </li>
        <li className="navbarlist">
          <Link className="Link" to="/github">GitHub</Link>
        </li>
      </ul>
    </nav>
  );
};