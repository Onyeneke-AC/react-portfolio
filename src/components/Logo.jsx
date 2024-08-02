import styled from "styled-components";

const StyledLogo = styled.div`
  max-width: 150px;
`;

const LogoImage = styled.img`
  background-color: var(--clr-light);
`;

function Logo() {
  return (
    <StyledLogo>
      <LogoImage src="./img/my_logo.png" alt="dev logo" />
    </StyledLogo>
  );
}

export default Logo;
