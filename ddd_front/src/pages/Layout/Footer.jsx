import React, { useState } from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  bottom: 0;
  background-color: rgba(139, 40, 66, 1);

  hr {
    width: 60%;
    border: 0.1px solid #ffffff;
  }

  img {
    margin: 0 auto;
    width: 25px;
  }
`;

const PartDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TextDiv = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: -0.333333px;
  color: #d9b0bb;
  text-align: center;
`;

const NameDiv = styled.div`
  text-align: center;
  margin-left: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: -0.333333px;
  color: #d9b0bb;
`;

const MainLogo = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.333333px;
  color: #ffffff;
`;

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <PartDiv>
          <TextDiv>축제 총 기획</TextDiv>
          <NameDiv>동덕여자대학교 축제 운영 위원회</NameDiv>
        </PartDiv>
        <hr />
        <MainLogo>
          2022 동덕여자대학교 대동제
          <br />[ 동.동.동]
        </MainLogo>
        <hr />
        <PartDiv>
          <TextDiv>축제 웹 제작</TextDiv>
          <NameDiv>동덕여자대학교 멋쟁이 사자처럼</NameDiv>
        </PartDiv>
        <img
          src="img/insta.png"
          onClick={() =>
            window.open("https://www.instagram.com/dongduk_likelion", "_blank")
          }
        />
      </FooterDiv>
    </>
  );
};

export default Footer;
