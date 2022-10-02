import React, { useEffect } from "react";
import styled from "styled-components";
import Staff1 from "../img/staff1.png";
import Staff2 from "../img/staff2.png";
import Staff3 from "../img/staff3.png";
import Staff4 from "../img/staff4.png";
import AOS from "aos";
import "aos/dist/aos.css";

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

const Box = styled.div`
  width: 327px;
  height: 254px;
  border: 2px solid #e0c895;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #5f4637;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const Color = styled.span`
  color: #8b2842;
`;

function InfoStaff() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Title>동덕여자대학교 축제운영위원회</Title>
      {/*축운위 설명1*/}
      <div data-aos="zoom-in">
        <Box>
          <img
            src={Staff1}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3%",
            }}
            alt="축운위"
          />
        </Box>
      </div>
      <div data-aos="zoom-in">
        <Text>
          축제운영위원회는 동덕여자대학교 전 재학생을 위한
          <br /> <Color>문화사업 운영 업무를 총괄</Color>하는 특별기구이며
          <br /> 기획국, 무대국, 사무국, 홍보국, 행사국으로 구성됩니다.
        </Text>
      </div>
      {/*축운위 설명2*/}
      <div data-aos="zoom-in">
        <Box>
          <img
            src={Staff2}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3%",
            }}
            alt="축운위"
          />
        </Box>
      </div>
      <div data-aos="zoom-in">
        <Text>
          축제운영위원회는 총학생회 대학본부를 포함한
          <br /> <Color>학생 사회 전반의 학생 복지 증진과 단합을 목적</Color>
          으로
          <br /> 문화 사업을 운영하는 기구인 만큼,
        </Text>
      </div>
      {/*축운위 설명3*/}
      <div data-aos="zoom-in">
        <Box>
          <img
            src={Staff3}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3%",
            }}
            alt="축운위"
          />
        </Box>
      </div>
      <div data-aos="zoom-in">
        <Text>
          학생 참여를 기반으로 한 문화 행사 기획,
          <br /> 수평적인 조직 문화,
          <br /> 나아가 학우들의 복지를 책임지고 결속을 도모하기 위해
          <br /> <Color>많은 노력과 관심</Color>을 기울이겠습니다.
        </Text>
      </div>
      {/*축운위 설명4*/}
      <div data-aos="zoom-in">
        <Box>
          <img
            src={Staff4}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3%",
            }}
            alt="축운위"
          />
        </Box>
      </div>
      <div data-aos="zoom-in">
        <Text>
          축제운영위원회는 <Color>교내 구성원들이 함께</Color>
          <br /> 교내 문화 행사를 기획하는 기구라는 점에 의의가 있습니다.
        </Text>
      </div>
    </>
  );
}

export default InfoStaff;
