import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <NavLink>Art Gallery</NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink>About Us</NavLink>
          </li>
          <li>
            <NavLink>Add a photo</NavLink>
          </li>
          <li>
            <NavLink>My favourites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
