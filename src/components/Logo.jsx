import styled from "styled-components";

const StyledLogo = styled.div`
  max-width: 150px;
`;

function Logo() {
  return (
    <StyledLogo>
      <img src="./img/my_logo.png" alt="" />
    </StyledLogo>
  );
}

export default Logo;
