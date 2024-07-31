import React from "react";
import styled from "styled-components";

const Image = styled.img`
  transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;
  width: 100%;
  height: 300px;
  object-fit: cover;

  &:hover,
  &:focus {
    transform: scale(1.2);
    opacity: 0.5;
  }
`;

function Work({ work }) {
  const { mainImg, title } = work;

  return <Image src={mainImg} alt={title} />;
}

export default Work;
