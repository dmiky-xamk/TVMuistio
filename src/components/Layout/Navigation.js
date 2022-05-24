import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const getLinkStyle = ({ isActive }) => {
    const activeClassName = classes["nav-link--active"];
    const inactiveClassName = classes["nav-link"];

    if (isActive) {
      return activeClassName;
    }

    return inactiveClassName;
  };

  return (
    <nav>
      <ul className={classes["nav-list"]}>
        <li>
          <NavLink className={getLinkStyle} to="/" end>
            Etusivu
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkStyle} to="suosikit">
            Suosikit
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
