import React, { useState } from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(139, 40, 66, 1);

  @media screen and (max-width: 300px) {
    .menu_list {
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: rgba(139, 40, 66, 1);
      transition: 1s;
    }
  }
`;

const HamburgerToggle = styled.div`
  padding: 1rem 1rem;
`;

const MainLogo = styled.div`
  color: rgba(224, 200, 149, 1);
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 1.7em;
`;

const MainLogoToggle = styled.div`
  color: rgba(224, 200, 149, 1);
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 1.7em;
  left: 30%;
  right: 30%;
  top: 5.91%;
  bottom: 87.68%;
`;

const HamburgurOpenul = styled.ul`
  display: flex;

  &.menu_list {
    list-style: none;
  }
`;

const Menuli = styled.li`
  padding: 0 1rem;
`;

const ToggleBackImg = styled.img``;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <HeaderDiv isOpen={isOpen}>
        <HamburgerToggle onClick={() => toggleMenu()}>
          <img src="img/hamburger.png" />
        </HamburgerToggle>
        <MainLogo>同動烔</MainLogo>

        <HamburgurOpenul className="menu_list">
          <MainLogoToggle>同動烔</MainLogoToggle>
          <ToggleBackImg src="img/toggle_back.png"></ToggleBackImg>
          <Menuli>HOME</Menuli>
          <Menuli>INTRODUCE</Menuli>
          <Menuli>TIME TABLE</Menuli>
          <Menuli>BOOTH & Event</Menuli>
          <Menuli>SOMTALK</Menuli>
        </HamburgurOpenul>
      </HeaderDiv>
    </>
  );
};

export default Header;
