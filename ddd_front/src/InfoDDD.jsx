import React from "react";
import styled from "styled-components";
import Poster from "./img/poster.png";
import { Link } from "react-router-dom";

const Background = styled.div`
  background: #fffcf6;
  max-width: 1280px;
`;

const Title = styled.div`
  width: auto;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.333333px;
  color: #b0687b;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
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

const NavbtnHere = styled.button`
  background: #8b2842;
  border: 2px solid #8b2842;
  box-shadow: 4px 4px 4px rgba(139, 40, 66, 0.25);
  border-radius: 50px;
  color: #fffefa;
  padding: 1% 2%;
  margin: 3%;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.333333px;
`;

const PicDiv = styled.div`
  width: 327px;
  height: 460px;
  margin-left: auto;
  margin-right: auto;
`;

const TextDiv = styled.div`
  width: 375px;
  height: 208px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  color: #5f4637;
`;

const Color = styled.text`
  color: #8b2842;
`;

const Color2 = styled.text`
  color: #b0687b;
`;

function InfoDDD() {
  return (
    <Background>
      <Nav>
        <Link to="/InfoDDD">
          <NavbtnHere>동.동.동</NavbtnHere>
        </Link>
        <Link to="/InfoStaff">
          <Navbtn>축.운.위</Navbtn>
        </Link>
        <Link to="/InfoLikeLion">
          <Navbtn>멋.사 10기</Navbtn>
        </Link>
      </Nav>
      <Title>동덕여자대학교 2022 대동제 동.동.동</Title>
      <div data-aos="zoom-in">
        <PicDiv>
          <img
            src={Poster}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </PicDiv>
      </div>

      <div data-aos="zoom-in">
        <TextDiv>
          2022년 대동제 [<Color>동.동.동</Color>]은
          <br /> 한가지 <Color2>동</Color2> + 움직일 <Color2>동</Color2> +
          뜨거운 모양 <Color2>동</Color2> 을 합친 단어로
          <br />
          <br /> 축제로 인해 동덕 학우들이
          <br /> <Color2>함께 모여 움직여 열기가 대단함</Color2>
          <br /> 이라는 의미를 가지고 있습니다.
          <br />
          <br /> 축제의 이름처럼 동덕 학우 분들과 축제 운영 위원회가
          <br /> <Color2>함께 만들어 모두가 하나 되는</Color2>
          <br /> <Color2>즐거운 축제</Color2>가 되기를 바랍니다.
        </TextDiv>
      </div>
    </Background>
  );
}

export default InfoDDD;
