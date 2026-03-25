import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="Link" to="/">Home</Link>
        </li>
        <li>
          <Link className="Link" to="/github">GitHub</Link>
        </li>
      </ul>
    </nav>
  );
};