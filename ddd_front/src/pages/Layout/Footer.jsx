import React, { useState } from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  /* max-width: 1280px; */
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  bottom: 0;
  background-color: rgba(139, 40, 66, 1);
`;

const FestivalName = styled.div`
  padding: 24px 0 0 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.333333px;
  color: #ffffff;
`;

const PartDiv = styled.div`
  flex-direction: column;
  width: fit-content;
`;

const PartName = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.333333px;
  color: #ffffff;
  padding: 24px 0 0 24px;
`;

const NameDiv = styled.div`
  flex-direction: column;
  width: fit-content;
`;

const NameText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.333333px;
  color: #d9b0bb;
  padding: 24px 0 0 36px;
`;

const LogoImg = styled.img`
  margin: auto;
  padding-top: 23px;
  padding-bottom: 10px;
`;

const TextDiv = styled.div`
  display: flex;
`;
const Footer = () => {
  return (
    <>
      <FooterDiv>
        <FestivalName>2022 동덕여자대학교 대동제 [ 동.동.동 ]</FestivalName>
        <TextDiv>
          <PartDiv>
            <PartName>기획</PartName>
            <PartName>개발</PartName>
            <PartName>UX / UI</PartName>
          </PartDiv>
          <NameDiv>
            <NameText>동덕여자대학교 축제 운영 위원회 </NameText>
            <NameText>동덕여자대학교 멋쟁이 사자처럼</NameText>
            <NameText>동덕여자대학교 멋쟁이 사자처럼</NameText>
          </NameDiv>
        </TextDiv>
        <LogoImg src="img/FooterLogo_1.svg" />
      </FooterDiv>
    </>
  );
};

export default Footer;
