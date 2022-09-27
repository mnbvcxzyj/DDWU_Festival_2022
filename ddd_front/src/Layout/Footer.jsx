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

const NameDiv = styled.div`
  flex-direction: column;
  padding: 24px 0 0 24px;
`;

const PartText = styled.div`
  float: left;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.333333px;
  color: #ffffff;
`;

const NameText = styled.div`
  float: left;
  padding-left: 30px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.333333px;
  color: #d9b0bb;
`;

const LogoImg = styled.img`
  margin: auto;
  padding-top: 23px;
  padding-bottom: 10px;
`;
const Footer = () => {
  return (
    <>
      <FooterDiv>
        <FestivalName>2022 동덕여자대학교 대동제 [ 동.동.동 ]</FestivalName>
        <div>
          <NameDiv>
            <PartText>기획</PartText>
            <NameText>
              &nbsp;&nbsp;&nbsp; 동덕여자대학교 축제 운영 위원회
            </NameText>
          </NameDiv>
          <NameDiv>
            <PartText>개발</PartText>
            <NameText>
              &nbsp;&nbsp;&nbsp; 동덕여자대학교 멋쟁이 사자처럼
            </NameText>
          </NameDiv>
          <NameDiv>
            <PartText>UX / UI</PartText>
            <NameText>동덕여자대학교 멋쟁이 사자처럼</NameText>
          </NameDiv>
        </div>
        <LogoImg src="img/FooterLogo_1.svg" />
      </FooterDiv>
    </>
  );
};

export default Footer;
