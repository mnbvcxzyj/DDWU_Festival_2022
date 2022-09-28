import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
  padding: 1rem 1rem;
  font-size: 160%;

  align-items: center;
  font-weight: 540;
`;

const NavMenu = styled.ul`
  list-style: none;

  .show {
    width: 300px;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    margin-bottom: 10%;
    transition: 1s;
    background-color: rgba(139, 40, 66, 1);
  }

  .hide {
    width: 300px;
    position: fixed;
    left: -300px;
    transition: 1.2s;
  }

  ul li {
    display: inline-block;
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }

  ul li img {
    vertical-align: middle;
  }
`;

const NavLogo = styled.div`
  color: rgba(224, 200, 149, 1);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
  float: left;
  margin: 48px 0px 20px 90px;
  font-size: xx-large;
  font-weight: 540;
`;

const BackImgDiv = styled.div`
  float: left;
  position: relative;
  margin: 50px 0 0 30px;
`;

const BigsomImg = styled.img`
  margin-left: 2%;
  margin-top: 50px;
  max-width: 300px;
`;

const ListDiv = styled.div`
  margin: 0 0 30% 8%;
  line-height: 65px;
`;

const ListImg = styled.img`
  padding-right: 8px;
  width: 50px;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const activeStyle = {
    color: "rgba(224, 200, 149, 1)",
  };

  const nonActiveStyle = {
    color: "rgba(255, 255, 255, 1)",
  };
  return (
    <>
      <HeaderDiv>
        {/* // 햄버거 메뉴 로고 */}
        <HamburgerToggle onClick={() => setOpen(!isOpen)}>
          <img src="img/hamburger.png" />
        </HamburgerToggle>
        <MainLogo>同 動 烔</MainLogo>
        <NavMenu isOpen={isOpen}>
          <ul className={isOpen ? "show" : "hide"}>
            <NavLogo>同 動 烔</NavLogo>
            <BackImgDiv>
              <img src="img/toggle_back.png" onClick={() => setOpen(!isOpen)} />
            </BackImgDiv>
            <ListDiv>
              <NavLink
                to={"/"}
                className="nav-1"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActiveStyle
                }
                onClick={() => setOpen(!isOpen)}
              >
                <li>
                  <ListImg src="img/smallsomsom.png" />
                  HOME
                </li>
              </NavLink>
              <NavLink
                to={"/introduce"}
                className="nav-2"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActiveStyle
                }
                onClick={() => setOpen(!isOpen)}
              >
                <li>
                  <ListImg src="img/smallsomsom.png" />
                  INTRODUCE
                </li>
              </NavLink>
              <NavLink
                to={"/timetable"}
                className="nav-3"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActiveStyle
                }
                onClick={() => setOpen(!isOpen)}
              >
                <li>
                  <ListImg src="img/smallsomsom.png" />
                  TIMETABLE
                </li>
              </NavLink>
              <NavLink
                to={"/booth_event"}
                className="nav-4"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActiveStyle
                }
                onClick={() => setOpen(!isOpen)}
              >
                <li>
                  <ListImg src="img/smallsomsom.png" />
                  BOOTH & EVENT
                </li>
              </NavLink>
              <NavLink
                to={"/somtalk"}
                className="nav-5"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActiveStyle
                }
                onClick={() => setOpen(!isOpen)}
              >
                <li>
                  <ListImg src="img/smallsomsom.png" />
                  SOM TALK
                </li>
              </NavLink>
            </ListDiv>
            <BigsomImg src="img/bigsomsom.svg" />
          </ul>
        </NavMenu>
      </HeaderDiv>
    </>
  );
};

export default Header;
