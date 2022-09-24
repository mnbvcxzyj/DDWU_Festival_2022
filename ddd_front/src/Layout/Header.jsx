import React, { useState } from "react";
import styled from "styled-components";
import { screen } from "@testing-library/react";

const HeaderDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(139, 40, 66, 1);
`;

const HamburgerToggle = styled.div``;
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <HeaderDiv>
        <HamburgerToggle>
          <img src="img/hamburger.png" />
        </HamburgerToggle>
      </HeaderDiv>
    </>
  );
};

export default Header;
