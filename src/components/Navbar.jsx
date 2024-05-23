import { Link } from "react-router-dom";
import MainNav from "./MainNav";

function Navbar() {
  return (
    <header>
      <div class="logo">
        <img src="./img/my_logo.png" alt="" />
      </div>
      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>
      <MainNav />
    </header>
  );
}

export default Navbar;
