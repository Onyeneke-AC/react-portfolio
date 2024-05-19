import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div class="logo">
        <img src="./img/my_logo.png" alt="" />
      </div>
      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>
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
    </header>
  );
}

export default Navbar;
