import React from "react";
import styled from "styled-components";

const MapImgDiv = styled.div`
  border-radius: 3% 3% 0px 0px;
  margin: 26px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const MapInfo = styled.div`
  width: 80%;
  border: 2px solid #e0c895;
  border-radius: 0px 0px 10px 10px;
  border-top: 0;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const MapInfoRow = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 1.5em;
  justify-content: center;
  padding: 20px;
  &:first-child {
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 600px) {
    padding: 12px;
    font-size: 16px;
    &:first-child {
      padding-bottom: 10px;
    }
  }
`;
const MapInfoRowTitle = styled.div`
  color: #8b2842;
  width: 20%;
  @media only screen and (max-width: 700px) {
    width: 30%;
  }
`;
const MapInfoRowcontent = styled.div`
  color: #805e4a;
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 70%;
  }
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
      <MapImgDiv>
        <MapImg src={require("../img/eventmap.png")} />
        <MapInfo>
          <MapInfoRow>
            <MapInfoRowTitle>주소</MapInfoRowTitle>
            <MapInfoRowcontent>
              서울특별시 성북구 화랑로 13길 60{" "}
            </MapInfoRowcontent>
          </MapInfoRow>
          <MapInfoRow>
            <MapInfoRowTitle>전화번호</MapInfoRowTitle>
            <MapInfoRowcontent>02&#41; 940 - 4000</MapInfoRowcontent>
          </MapInfoRow>
        </MapInfo>
      </MapImgDiv>
    </>
  );
}

export default EventMap;
