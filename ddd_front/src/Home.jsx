import React from "react";
import styled from "styled-components";
import SOMSOM from "./img/somsom.png";
import STAMPIMG from "./img/stampIMG.png";
import MAPIMG from "./img/mapIMG.png";
import LOGO from "./img/logo.png";
import GROUP from "./img/Group.png";

const Background = styled.div`
  background: #fffcf6;
`;

//학교 + 목화 이미지
const CircleIMG = styled.div`
  width: 342.89px;
  height: 579.27px;
  margin-left: auto;
  margin-right: auto;
`;

//스탬프투어 div
//제일 바깥쪽 테두리
const StampTour = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 327px;
  height: 260px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const CampusMap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 327px;
  height: 260px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

//반투명 div
//margin-auto 없앰
const WhiteFooter = styled.div`
  position: absolute;
  top: 188px;
  width: 321px;
  height: 66px;
  background: rgba(255, 255, 255, 0.8);
  border: 3px solid #e0c895;
  border-radius: 0px 0px 10px 10px;
`;

//자주색 제목
const Title = styled.div`
  position: absolute;
  width: 100px;
  height: 19px;
  left: 16px;
  top: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.333333px;
  color: #8b2842;
`;

//갈색 내용 글씨
const Contents = styled.div`
  position: absolute;
  width: 300px;
  height: 14px;
  left: 16px;
  top: 43px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #805e4a;
`;

const Title2 = styled.div`
  position: absolute;
  width: 70px;
  height: 19px;
  left: 240px;
  top: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8b2842;
`;

const Contents2 = styled.div`
  position: absolute;
  width: 200px;
  height: 14px;
  left: 112px;
  top: 43px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #805e4a;
`;

//위쪽 솜솜이
const Somsom = styled.div`
  width: 100px;
  height: 92px;
  margin-left: 50%;
`;

const Somsom2 = styled.div`
  display: fix;
  margin-left: 35%;
  width: 100px;
  height: 92px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
//margin-top: 5 / 10 물어보고 결정하기

const Text = styled.div`
  width: 350px;
  height: 28px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #5f4637;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5%;
  text-shadow: 4px 4px 4px rgba(128, 94, 74, 0.25);
`;

//맨 아래 동덕 로고
const Logo = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 160px;
  height: 45px;
  padding-top: 5%;
`;

const ColorText = styled.text`
  color: #8b2842;
  font-weight: 700;
`;

const ColorText2 = styled.text`
  color: #5f4637;
  font-weight: 700;
`;

function Home() {
  return (
    <>
      <Background>
        <CircleIMG>
          <img
            src={GROUP}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
        </CircleIMG>
        <Somsom>
          <img
            src={SOMSOM}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
        </Somsom>
        <StampTour>
          <img
            src={STAMPIMG}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
          <WhiteFooter>
            <Title>스탬프 투어</Title>
            <Contents>프로그램 부스에 참여하고 나면 도장을 찍어드려요</Contents>
          </WhiteFooter>
        </StampTour>
        <Somsom2>
          <img
            src={SOMSOM}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
        </Somsom2>
        <CampusMap>
          <img
            src={MAPIMG}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
          <WhiteFooter>
            <Title2>캠퍼스 맵</Title2>
            <Contents2>학교 건물들의 위치와 구조를 한번에</Contents2>
          </WhiteFooter>
        </CampusMap>
        <Text>
          한가지 <ColorText>동</ColorText> + 움직일 <ColorText>동</ColorText> +
          뜨거운 모양 <ColorText>동</ColorText> 을 합친 단어
          <br /> 축제로 인해 동덕 학우들이{" "}
          <ColorText2>함께 모여 움직여 열기가 대단함</ColorText2>
        </Text>
        <Logo>
          <img
            src={LOGO}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
        </Logo>
      </Background>
    </>
  );
}

export default Home;
