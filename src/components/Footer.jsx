import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer">
      <Link to="onyeneke.acs@gmail.com" class="footer__link">
        onyeneke.acs@gmail.com
      </Link>
      <ul class="social-list">
        <li class="social-list__item">
          <Link to="https://github.com/Onyeneke-AC" class="social-list__link">
            <FaGithub />
          </Link>
        </li>
        <li class="social-list__item">
          <Link
            to="www.linkedin.com/in/anthony-onyeneke"
            class="social-list__link"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li class="social-list__item">
          <Link to="anthonykhidblakeo@gmail.com" class="social-list__link">
            <FaTwitter />
          </Link>
        </li>
        <li class="social-list__item">
          <Link to="anthonykhidblakeo@gmail.com" class="social-list__link">
            <FaWhatsapp />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
