import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DefaultIcon from "./img/menu_none.png";
import ClickIcon from "./img/menu_click.png";

const HeaderDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  background-color: rgba(139, 40, 66, 1);
  align-items: center;
  justify-content: center;
`;

// togle
const HamburgerToggle = styled.div`
  padding: 1rem 1rem;
  cursor: pointer;
`;

// 가운데 정렬이 코드로 안 먹음
// logo
const MainLogo = styled.div`
  color: rgba(224, 200, 149, 1);
  width: 160px;
  margin: 0 auto;
  align-items: center;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
  font-size: 160%;
  padding: 1rem 1rem;
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
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    display: inline-block;
    margin-right: 3%;
    /* line-height: 50px; */
  }

  ul li img {
    vertical-align: middle;
    width: 36px;
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
  /* position: relative; */
  margin: 50px 0 0 30px;
`;

const GhostSomImg = styled.img`
  width: 100%;
  margin: auto;
`;

const ListDiv = styled.div`
  text-align: center;
  line-height: 70px;
  justify-content: space-between;
`;

const ListImg = styled.img`
  padding-right: 10px;
  width: 50px;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isClick, setClick] = useState(false);

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
      </HeaderDiv>
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
              onClick={() => {
                setOpen(!isOpen);
                setClick(!isClick);
              }}
            >
              <li>
                <ListImg src={isClick ? ClickIcon : DefaultIcon} />
                HOME
              </li>
            </NavLink>
            <NavLink
              to={"/introduce"}
              className="nav-2"
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              onClick={() => {
                setOpen(!isOpen);
                setClick(!isClick);
              }}
            >
              <li>
                <ListImg src={isClick ? ClickIcon : DefaultIcon} />
                INTRODUCE
              </li>
            </NavLink>
            <NavLink
              to={"/timetable"}
              className="nav-3"
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              onClick={() => {
                setOpen(!isOpen);
                setClick(!isClick);
              }}
            >
              <li>
                <ListImg src={isClick ? ClickIcon : DefaultIcon} />
                TIMETABLE
              </li>
            </NavLink>
            <NavLink
              to={"/booth_event"}
              className="nav-4"
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              onClick={() => {
                setOpen(!isOpen);
                setClick(!isClick);
              }}
            >
              <ListImg src={isClick ? ClickIcon : DefaultIcon} />
              BOOTH & EVENT
            </NavLink>
            <NavLink
              to={"/somtalk"}
              className="nav-5"
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              onClick={() => {
                setOpen(!isOpen);
                setClick(!isClick);
              }}
            >
              <li>
                <ListImg src={isClick ? ClickIcon : DefaultIcon} />
                SOM TALK
              </li>
            </NavLink>
          </ListDiv>
          <GhostSomImg src="img/ghostSomSom.svg" />
        </ul>
      </NavMenu>
    </>
  );
};

export default Header;
