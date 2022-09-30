import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
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

  img {
    width: 32px;
  }
`;

const MainLogo = styled.div`
  color: rgba(224, 200, 149, 1);
  width: 160px;
  margin: 0 auto;
  align-items: center;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
  font-size: 160%;
  padding: 1rem 1rem;
  font-weight: 550;
`;

const NavMenu = styled.ul`
  list-style: none;
  text-align: center;
  .show {
    position: fixed;
    width: 300px;
    top: 0px;
    left: 0px;
    height: 100%;
    transition: 1s;
    background-color: rgba(139, 40, 66, 1);
  }

  .hide {
    position: fixed;
    width: 300px;
    top: 0px;
    left: -300px;
    height: 100%;
    transition: 1.2s;
  }

  ul li {
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    display: inline-block;
    margin-left: 13%;
    margin-right: 19%;
    text-decoration: none;
  }

  ul li img {
    vertical-align: middle;
    width: 38px;
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
  margin-top: 48px;
  img {
    padding-left: 30px;
    width: 32px;
  }
`;

const GhostSomImg = styled.img`
  width: 100%;
  margin: auto;
`;

const ListDiv = styled.div`
  line-height: 70px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  display: inline-block;
  text-decoration: none;
  margin: 0 auto;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isClick, setClick] = useState(false);

  const activeStyle = {
    color: "rgba(224, 200, 149, 1)",
    textdecoration: "none",
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
            <img src="img/back_toggle.png" onClick={() => setOpen(!isOpen)} />
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
              <li>HOME</li>
            </NavLink>
            <NavLink
              to={"/introduce"}
              className="nav-2"
              style={({ isActive }) =>
                isActive ? activeStyle : nonActiveStyle
              }
              onClick={() => setOpen(!isOpen)}
            >
              {" "}
              <li> INTRODUCE</li>
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
                {" "}
                {/* <FontAwesomeIcon icon={faGhost} /> */}
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
                {/* <FontAwesomeIcon icon={faGhost} /> */}
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
                {/* <FontAwesomeIcon icon={faGhost} /> */}
                SOM TALK
              </li>
            </NavLink>
          </ListDiv>
          <GhostSomImg src="img/ghostsom.png" />
        </ul>
      </NavMenu>
    </>
  );
};

export default Header;
