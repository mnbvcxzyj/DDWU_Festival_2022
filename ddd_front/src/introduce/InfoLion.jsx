import React from "react";
import styled from "styled-components";
import Lion1 from "../img/lion1.png";
import Lion2 from "../img/lion2.png";
import Lion3 from "../img/lion3.png";
import Lion4 from "../img/lion4.png";
import Lion5 from "../img/lion5.png";
import LikeLionDWU from "../img/LikeLionDWU.png";
import BackJM from "../img/BackJM.png";
import BackSE from "../img/BackSE.png";
import BackHR from "../img/BackHR.png";
import BackHA from "../img/BackHA.png";
import BackDJ from "../img/BackDJ.png";
import FrontYJ from "../img/FrontYJ.png";
import FrontYeji from "../img/FrontYeji.png";
import FrontSH from "../img/FrontSH.png";
import FrontYK from "../img/FrontYK.png";
import FrontHS from "../img/FrontHS.png";
import DesignHY from "../img/DesignHY.png";
import DesignYI from "../img/DesignYI.png";

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

const MainText = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8b2842;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

const Color = styled.span`
  color: #8b2842;
`;

const Color2 = styled.span`
  color: #b0687b;
`;

const Color3 = styled.span`
  color: #d9b0bb;
`;

const Line = styled.div`
  height: 36px;
  background: #8b2842;
  text-algin: center;
  margin-bottom: 26px;
`;

const LLdwu = styled.div`
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
`;

const Flower = styled.div`
  width: 84px;
  height: 78.31px;
  margin-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const Low = styled.div`
  width: 185px;
  margin-left: auto;
  margin-right: auto;
`;
const Front = styled.div`
  width: 284px;
  height: 176.63px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

const Back = styled.div`
  width: 284px;
  height: 176.63px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

const Design = styled.div`
  width: 185px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 36px;
`;

const MemText = styled.div`
  padding-top: 8.5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #fffcf6;
`;

const Deco1 = styled.div`
  width: 120px;
  height: 0px;
  border: 2px solid #fffcf6;
  margin-left: 0;
  margin-right: auto;
  margin-top: 18px;
`;

const Deco2 = styled.div`
  width: 120px;
  height: 0px;
  border: 2px solid #fffcf6;
  margin-left: auto;
  margin-right: 0;
  margin-top: 18px;
`;

const Deco3 = styled.div`
  margin-bottom: 34px;
`;

function InfoStaff() {
  return (
    <>
      <Title>동덕여자대학교 멋쟁이사자처럼 10기</Title>
      <Line>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Deco1></Deco1>
          <MemText>10th Members</MemText>
          <Deco2></Deco2>
        </div>
      </Line>
      <LLdwu>
        <img
          src={LikeLionDWU}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt="멋사"
        />
      </LLdwu>

      {/*프론트엔드*/}
      <MainText>
        <Color>개발</Color>
      </MainText>
      <MainText>
        <Color3>FRONT - END</Color3>
      </MainText>
      <div data-aos="zoom-in">
        <Front>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Flower>
              <img
                src={FrontYJ}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="체육학과 김연재"
              />
            </Flower>
            <Flower>
              <img
                src={FrontYeji}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="컴퓨터학과 김예지"
              />
            </Flower>
            <Flower>
              <img
                src={FrontSH}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="컴퓨터학과 김예지"
              />
            </Flower>
          </div>
          <Low>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Flower>
                <img
                  src={FrontYK}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="국어국문 박신형"
                />
              </Flower>
              <Flower>
                <img
                  src={FrontHS}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="컴퓨터학과 한현서"
                />
              </Flower>
            </div>
          </Low>
        </Front>
      </div>

      {/*백엔드*/}
      <MainText>
        <Color3>BACK - END</Color3>
      </MainText>
      <div data-aos="zoom-in">
        <Back>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Flower>
              <img
                src={BackJM}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="컴퓨터학과 김지민"
              />
            </Flower>
            <Flower>
              <img
                src={BackSE}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="컴퓨터학과 박세은"
              />
            </Flower>
            <Flower>
              <img
                src={BackHR}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="컴퓨터학과 이하린"
              />
            </Flower>
          </div>
          <Low>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Flower>
                <img
                  src={BackHA}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="컴퓨터학과 장현아"
                />
              </Flower>
              <Flower>
                <img
                  src={BackDJ}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="컴퓨터학과 최다정"
                />
              </Flower>
            </div>
          </Low>
        </Back>
      </div>

      {/*기디 */}
      <MainText>
        <Color>기획 / 디자인</Color>
      </MainText>
      <MainText>
        <Color3>UI / UX</Color3>
      </MainText>
      <div data-aos="zoom-in">
        <Design>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Flower>
              <img
                src={DesignHY}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="hci 고혜연"
              />
            </Flower>
            <Flower>
              <img
                src={DesignYI}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="국사 안영인"
              />
            </Flower>
          </div>
        </Design>
      </div>
      <div data-aos="zoom-in">
        <Box>
          <img
            src={Lion5}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3%",
            }}
            alt="멋사사진"
          />
        </Box>
      </div>
      <Deco3 />
      <Line>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Deco1></Deco1>
          <MemText>About us</MemText>
          <Deco2></Deco2>
        </div>
      </Line>
      {/*멋사 설명1*/}
      <div data-aos="zoom-in">
        <Box>
          <img
            src={Lion1}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3%",
            }}
            alt="멋사사진"
          />
        </Box>
      </div>
      <div data-aos="zoom-in">
        <Text>
          연합 동아리 <Color>멋쟁이 사자처럼</Color>은 현재 국내에서 가장 많은
          <br /> 학생들이 활동하고 있는 <Color2>프로그래밍 교육 동아리</Color2>
          입니다.
          <br /> 전국의 대학이 함께하는 연합 코딩 동아리로
          <br /> 각종 스터디를 통해 <Color2>여러 아이디어의 실현에 도전</Color2>
          합니다.
        </Text>
      </div>
      {/*멋사 설명2*/}
      <div data-aos="zoom-in">
        <Box>
          <img
            src={Lion2}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3%",
            }}
            alt="멋사 사진"
          />
        </Box>
      </div>
      <div data-aos="zoom-in">
        <Text>
          <Color>“내 아이디어를 내 손으로 실현한다.”</Color> 라는 가치 아래
          <br /> 창업과 서비스 개발 등 아이디어를 내 손으로 실현할 수 있는
          <br /> <Color2>다양한 교육과 기회를 제공</Color2>합니다.
        </Text>
      </div>
      <div data-aos="zoom-in">
        <Box>
          <img
            src={Lion3}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3%",
            }}
            alt="멋사 시진"
          />
        </Box>
      </div>
      <div data-aos="zoom-in">
        <MainText>여기톤</MainText>
        <Text>
          서울권 6개의 여자대학교 학생 약 120명이 무박 2일로
          <br /> 참가한 행사로{" "}
          <Color2>여성 예비 개발자 간의 커넥션 형성</Color2>
          과
          <br /> 팀 프로젝트를 통해 개인의 <Color2>개발 역량 강화</Color2>를
          목적으로 합니다.
        </Text>
      </div>
      {/*멋사설명4*/}
      <div data-aos="zoom-in">
        <Box>
          <img
            src={Lion4}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3%",
            }}
            alt="멋사 사진"
          />
        </Box>
      </div>
      <div data-aos="zoom-in">
        <MainText>중앙 해커톤</MainText>
        <Text>
          전국 42개의 대학교 학생 약 1000여 명이
          <br /> 무박 2일로 진행하는 행사로 10기는
          <br /> 10주년 기념 <Color2>기업연계 대규모 해커톤</Color2>을
          진행했습니다.
          <br /> 아이디어톤의 결과물을 토대로
          <br /> <Color2>실제 개발 및 배포를 목적</Color2>으로 합니다.
        </Text>
      </div>
    </>
  );
}

export default InfoStaff;
