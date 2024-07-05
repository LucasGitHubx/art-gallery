import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <NavLink to="/">Art Gallery</NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add a photo</NavLink>
          </li>
          <li>
            <NavLink>My favourites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
