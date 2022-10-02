import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  padding: 10px 0;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: rgba(139, 40, 66, 1);
  position: absolute;
  left: 0;
  bottom: 0;
  hr {
    width: 60%;
    border: 0.1px solid #ffffff;
  }

  img {
    margin: 0 auto;
    width: 25px;
    cursor: pointer;
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
  color: #d9b0bb;
  text-align: center;
`;

const NameDiv = styled.div`
  text-align: center;
  margin-left: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  color: #d9b0bb;
`;

const MainLogo = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
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
          <br />[ 동.동.동 ]
        </MainLogo>
        <hr />
        <PartDiv>
          <TextDiv>축제 웹 제작</TextDiv>
          <NameDiv>동덕여자대학교 멋쟁이 사자처럼</NameDiv>
        </PartDiv>
        <img
          src={require("../img/img_yj/insta.png")}
          onClick={() =>
            window.open("https://www.instagram.com/dongduk_likelion", "_blank")
          }
          alt="인스타"
        />
      </FooterDiv>
    </>
  );
};

export default Footer;
