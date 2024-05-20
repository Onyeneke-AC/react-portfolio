import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #111;
  color: var(--clr-accent);
  text-align: center;
  padding: 1.5em 0;
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);

  & span {
    color: var(--clr-light);
    font-weight: var(--fw-reg);
    font-size: 20px;
    display: block;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0.5em 0 0;
  padding: 0;
  gap: 50px;
`;

const FooterLink = styled(Link)`
  color: var(--clr-accent);

  &:hover {
    color: var(--clr-light);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>
        <span>Email me at: </span>onyeneke.acs@gmail.com
      </p>
      <FooterList>
        <li>
          <FooterLink to="https://github.com/Onyeneke-AC">
            <FaGithub />
          </FooterLink>
        </li>
        <li>
          <FooterLink to="www.linkedin.com/in/anthony-onyeneke">
            <FaLinkedin />
          </FooterLink>
        </li>
        <li>
          <FooterLink to="anthonykhidblakeo@gmail.com">
            <FaTwitter />
          </FooterLink>
        </li>
      </FooterList>
    </StyledFooter>
  );
}

export default Footer;
