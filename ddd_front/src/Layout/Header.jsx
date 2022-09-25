import React, { useState } from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  /* max-width: 1280px; */
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: rgba(139, 40, 66, 1);
`;

// togle
const HamburgerToggle = styled.div`
  padding: 1rem 1rem;
  cursor: pointer;
`;

// logo
const MainLogo = styled.div`
  color: rgba(224, 200, 149, 1);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));

  position: absolute;
  left: 41%;

  font-size: 160%;
  font-weight: 540; ;
`;

const NavMenu = styled.ul`
  display: flex;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  list-style: none;
  color: rgba(255, 255, 255, 1);

  .show {
    width: 300px;
    position: absolute;
    height: 100%;
    top: 0px;
    left: 0px;
    margin-bottom: -100%;
    transition: 1s;
    background-color: rgba(139, 40, 66, 1);
  }

  .hide {
    width: 300px;
    position: absolute;
    left: -300px;
    transition: 1s;
  }
`;

const NavLogo = styled.div`
  color: rgba(224, 200, 149, 1);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
  float: left;
  margin: 15% 10% 20% 25%;
  font-size: 155%;
  font-weight: 540;
`;

const BackImgDiv = styled.div`
  float: left;
  margin-top: 15%;
`;

const BigsomImg = styled.img`
  position: absolute;
  margin-left: 3%;
  width: 95%;
`;

const ListDiv = styled.div`
  margin: 0 0 55% 20%;
  line-height: 65px;
`;
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <HeaderDiv isOpen={isOpen}>
        {/* // 햄버거 메뉴 로고 */}
        <HamburgerToggle onClick={() => setOpen(!isOpen)}>
          <img src="img/hamburger.png" />
        </HamburgerToggle>
        <MainLogo>同 動 烔</MainLogo>
        <NavMenu isOpen={isOpen}>
          <ul className={isOpen ? "show" : "hide"}>
            <NavLogo>同 動 烔 </NavLogo>
            <BackImgDiv>
              <img src="img/toggle_back.png" onClick={() => setOpen(!isOpen)} />
            </BackImgDiv>
            <ListDiv>
              <li>HOME</li>
              <li>INTRODUCE</li>
              <li>TIMETABLE</li>
              <li>BOOTH & EVENT</li>
              <li>SOM TALK</li>
            </ListDiv>
            <BigsomImg src="img/bigsomsom.png" />
          </ul>
        </NavMenu>
      </HeaderDiv>
    </>
  );
};

export default Header;
