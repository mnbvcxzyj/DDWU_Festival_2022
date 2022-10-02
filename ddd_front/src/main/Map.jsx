import React from "react";
import styled from "styled-components";
import TOPIMG from "../img/TopImg.png";
import ZoomMap from "./ZoomMap";

const Background = styled.div`
  background: #fffcf6;
  padding-bottom: 5%;
  max-width: 1280px;
`;

const TopImg = styled.div`
  height: 120px;
  position: relative;
  font-weight: 700;
`;

const ImageBox = styled.div`
  box-sizing: border-box;
  width: 327px;
  border: 2px solid #e0c895;
  border-radius: 10px 10px 0px 0px;
  margin: 5% auto 0;
`;

const WhiteBox = styled.div`
  box-sizing: border-box;
  width: 327px;
  height: 64px;
  background: #fffefa;
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: #e0c895;
  border-radius: 0px 0px 10px 10px;
  margin: 0 auto;
`;

const Adress = styled.div`
  position: relative;
  width: 300px;
  height: 16px;
  left: 12px;
  top: 12px;
  font-weight: 700;
  font-size: 14px;
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
  color: #8b2842;
`;

const AdressContent = styled.text`
  color: #805e4a;
`;

const TextContents = styled.text`
  color: #805e4a;
`;

const Title = styled.div`
  position: absolute;
  top: 20px;
  margin-left: 5%;
  font-size: 20px;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`;

const Contents = styled.text`
  line-height: 16px;
  position: absolute;
  top: 58px;
  font-size: 14px;
  margin-left: 5%;
  color: #fffcf6;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`;

const Text = styled.div`
  width: 200px;
  height: 16px;
  font-size: 14px;
  color: #5f4637;
  margin: 5% auto -5%;
  text-align: center;
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
          alt="우리학교"
        />
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
