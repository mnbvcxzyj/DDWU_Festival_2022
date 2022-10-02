import React from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

const Background = styled.div`
  background: #fffcf6;
  max-width: 1280px;
`;

const Nav = styled.div`
  width: 100%;
  text-align: center;
`;

const Navbtn = styled.button`
  background: #fffefa;
  border: 2px solid #8b2842;
  box-shadow: 4px 4px 4px rgba(139, 40, 66, 0.25);
  border-radius: 50px;
  color: #8b2842;
  padding: 1% 2%;
  margin: 3%;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.333333px;
`;

function InTro() {
  return (
    <Background>
      <Nav>
        <NavLink
          to="/intro/InfoDDD"
          children={({ isActive }) => {
            return (
              <Navbtn
                style={{
                  color: isActive ? "#fffefa" : "",
                  background: isActive ? "#8b2842" : "",
                }}
              >
                동.동.동
              </Navbtn>
            );
          }}
        ></NavLink>
        <NavLink
          to="/intro/InfoStaff"
          children={({ isActive }) => {
            return (
              <Navbtn
                style={{
                  color: isActive ? "#fffefa" : "#8b2842",
                  background: isActive ? "#8b2842" : "",
                }}
              >
                축.운.위
              </Navbtn>
            );
          }}
        ></NavLink>
        <NavLink
          to="/intro/InfoLikeLion"
          children={({ isActive }) => {
            return (
              <Navbtn
                style={{
                  color: isActive ? "#fffefa" : "#8b2842",
                  background: isActive ? "#8b2842" : "",
                }}
              >
                멋.사 10기
              </Navbtn>
            );
          }}
        ></NavLink>
      </Nav>
      <Outlet />
    </Background>
  );
}

export default InTro;
