import React from "react";
import styled from "styled-components";
import Zoom from "./ZoomBooth";

const MapHeaderImg = styled.div`
  height: 120px;
  position: relative;
  font-weight: 700;
`;

const Title = styled.div`
  position: absolute;
  top: 20px;
  margin-left: 5%;
  font-size: 20px;
  color: #ffffff;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`;

const Contents = styled.div`
  position: absolute;
  top: 58px;
  font-size: 14px;
  margin-left: 5%;
  color: #fffcf6;
  line-height: 16px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`;

const MapImg = styled.img`
  border: 2px solid #e0c895;
  border-radius: 3% 3% 0px 0px;
  width: 80%;
  height: 80%;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

const ImageBox = styled.div`
  box-sizing: border-box;
  width: 327px;
  border: 2px solid #e0c895;
  border-radius: 10px 10px 0px 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
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

const TextContents = styled.span`
  color: #805e4a;
`;

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

const AdressContent = styled.span`
  color: #805e4a;
`;

function EventMap() {
  return (
    <>
      <MapHeaderImg>
        <Title>캠퍼스 맵</Title>
        <Contents>
          학교 건물들의 상대적인 위치와 구조를 확인하세요
          <br />
          여기저기 솜솜이들의 발자국을 솜쿵솜쿵
        </Contents>
        <img
          src={require("../img/TopImg.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="우리학교"
        />
      </MapHeaderImg>
      <Text>*지도를 확대하세요</Text>
      <ImageBox>
        <Zoom></Zoom>
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
    </>
  );
}

export default EventMap;
