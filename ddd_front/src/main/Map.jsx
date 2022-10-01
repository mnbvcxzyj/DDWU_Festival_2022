import React from "react";
import styled from "styled-components";
import TOPIMG from "../img/TopImg.png";
import ZoomMap from "./ZoomMap";

const Background = styled.div`
  background: #fffcf6;
  padding-bottom: 5%;
  max-width: 1280px;
`;
//Footer달고 padding 퍼센트 조절

//동그란 학교 + 목화 이미지
const TopImg = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 120px;
`;

//스탬프투어, 캠퍼스맵 들어가는 박스
const ImageBox = styled.div`
  box-sizing: border-box;
  width: 327px;
  border: 2px solid #e0c895;
  border-radius: 10px 10px 0px 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
`;
//over-flow: hidden

//흰색 div
const WhiteBox = styled.div`
  box-sizing: border-box;
  width: 327px;
  height: 64px;
  background: #fffefa;
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: #e0c895;
  border-radius: 0px 0px 10px 10px;
  margin-left: auto;
  margin-right: auto;
`;

const Adress = styled.div`
  position: relative;
  width: 300px;
  height: 16px;
  left: 12px;
  top: 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #8b2842;
`;

const Phone = styled.div`
  position: relative;
  width: 300px;
  height: 16px;
  left: 12px;
  top: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #8b2842;
`;

const AdressContent = styled.text`
  color: #805e4a;
`;
//스타일을 text로 안주고 계속 헤메고있었삼~~ 똥멍충이~~

const TextContents = styled.text`
  color: #805e4a;
`;
//width 조정
const Title = styled.div`
  position: absolute;
  width: 130px;
  height: 23px;
  top: 24px;
  margin-left: 5%;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.333333px;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`;

const Contents = styled.text`
  position: absolute;
  width: 350px;
  height: 32px;
  top: 71px;
  margin-left: 5%;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.333333px;
  color: #fffcf6;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  text-align: left;
`;
//margin-left: 수정 여부 물어보기

const Text = styled.div`
  width: 200px;
  height: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #5f4637;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 5%;
  margin-bottom: -5%;
`;

function Stamp() {
  return (
    <Background>
      <TopImg>
        <Title>캠퍼스 맵</Title>
        <Contents>
          학교 건물들의 상대적인 위치와 구조를 확인하세요
          <br />
          여기저기 솜솜이들의 발자국을 솜쿵솜쿵
        </Contents>
        <img
          src={TOPIMG}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></img>
      </TopImg>
      <Text>*지도를 확대하세요</Text>
      <ImageBox>
        <ZoomMap></ZoomMap>
      </ImageBox>
      <WhiteBox>
        <Adress>
          주소
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <AdressContent>서울특별시 성북구 화랑로 13길 60</AdressContent>
        </Adress>
        <Phone>
          전화번호 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextContents>02 - 940 - 4000</TextContents>
        </Phone>
      </WhiteBox>
    </Background>
  );
}

export default Stamp;
