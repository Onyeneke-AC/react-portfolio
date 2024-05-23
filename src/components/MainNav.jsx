import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <Link to="#home" class="nav__link">
            Home
          </Link>
        </li>
        <li class="nav__item">
          <Link to="#services" class="nav__link">
            My Services
          </Link>
        </li>
        <li class="nav__item">
          <Link to="#about" class="nav__link">
            About Me
          </Link>
        </li>
        <li class="nav__item">
          <Link to="#work" class="nav__link">
            My Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
