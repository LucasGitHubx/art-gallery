import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <NavLink to="/art-gallery/">Art Gallery</NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/art-gallery/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/art-gallery/add">Add a photo</NavLink>
          </li>
          <li>
            <NavLink>My favourites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
