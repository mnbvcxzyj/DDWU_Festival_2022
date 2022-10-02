import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GROUP from "../img/Group22.png";
import Ghost1 from "../img/ghost1.png";
import Ghost2 from "../img/ghost2.png";
import Ghost3 from "../img/ghost3.png";
import Ghost4 from "../img/ghost4.png";
import Ghost5 from "../img/ghost5.png";
import Web from "../img/web.png";
import STAMPIMG from "../img/stampIMG.png";
import MAPIMG from "../img/mapIMG.png";
import LOGO from "../img/logo.png";
import DDDtext from "../img/DDDtext.png";
import DDD from "../img/DDD.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Background = styled.div`
  background: #fffcf6;
  overflow: hidden;
  margin-bottom: 130px;
`;

const GroupIMG = styled.div`
  position: relative;
  width: 343.98px;
  height: 375.38px;
  margin: 0 auto 200px;
`;

const Slide = styled.div`
  width: 240px;
  height: 280px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 20px;
`;

const CenterDDD = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 400px;
`;

const BottomDDD = styled.div`
  position: absolute;
  margin: auto;
  width: 329px;
  height: 32px;
  top: 500px;
`;

const StampTour = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 327px;
  height: 260px;
  border-radius: 10px;
  margin: 0 auto;
`;

const CampusMap = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 327px;
  height: 260px;
  border-radius: 10px;
  margin: 0 auto;
`;

const WhiteFooter = styled.div`
  position: absolute;
  top: 188px;
  width: 321px;
  height: 66px;
  background: rgba(255, 255, 255, 0.8);
  border: 3px solid #e0c895;
  border-radius: 0px 0px 10px 10px;
`;

const Title = styled.div`
  position: absolute;
  width: 100px;
  height: 19px;
  left: 16px;
  top: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.333333px;
  color: #8b2842;
`;

const Contents = styled.div`
  position: absolute;
  width: 300px;
  height: 14px;
  left: 16px;
  top: 43px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #805e4a;
`;

const Title2 = styled.div`
  position: absolute;
  width: 70px;
  height: 19px;
  left: 240px;
  top: 16px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
  color: #8b2842;
`;

const Contents2 = styled.div`
  position: absolute;
  width: 200px;
  height: 14px;
  left: 112px;
  top: 43px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #805e4a;
`;

const Somsom = styled.div`
  width: 100px;
  height: 92px;
  margin-left: 65%;
`;

const Somsom2 = styled.div`
  width: 100px;
  height: 92px;
  margin-top: 10px;
  margin-left: 5%;
`;

const Somsom3 = styled.div`
  position: absolute;
  width: 95.51px;
  height: 99.27px;
  margin-left: 37.3%;
  margin-top: 5%;
`;

const Somsom4 = styled.div`
  position: absolute;
  width: 180px;
  height: 184.19px;
  margin-left: 50%;
  margin-top: 85%;
`;

const Somsom5 = styled.div`
  position: absolute;
  width: 227.36px;
  height: 236px;
  margin-top: 170%;
`;

const Web1 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
`;

const Web2 = styled.div`
  position: absolute;
  width: 240px;
  height: 240px;
  top: -85px;
  right: -100px;
`;

const Web3 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
`;

const Text = styled.div`
  width: 350px;
  height: 28px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #5f4637;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5%;
  text-shadow: 4px 4px 4px rgba(128, 94, 74, 0.25);
`;

const Logo = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 160px;
  height: 45px;
  padding-top: 5%;
`;

const ColorText = styled.span`
  color: #8b2842;
  font-weight: 700;
`;

const ColorText2 = styled.span`
  color: #5f4637;
  font-weight: 700;
`;

const Divv = styled.div`
  width: 330px;
  margin: 0 auto;
  position: relative;
`;

function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Background>
        <GroupIMG>
          <Web1>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <img
                src={Web}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  marginLeft: "-55%",
                  marginTop: "-35%",
                }}
                alt="거미줄1"
              />
            </div>
          </Web1>

          <div data-aos="fade-up" data-aos-duration="1000">
            <Somsom3>
              <img
                src={Ghost1}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="우령솜솜1"
              />
            </Somsom3>
          </div>

          <div
            data-aos="fade-up-left"
            data-aos-duration="1000"
            style={{ position: "relative", zIndex: 5 }}
          >
            <Somsom4>
              <img
                src={Ghost4}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="유령솜솜4"
              />
            </Somsom4>
          </div>

          <img
            src={GROUP}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "relative",
              marginTop: "50px",
            }}
            alt="학교"
          />

          <Slide>
            <div data-aos="fade-up-right" data-aos-duration="1000">
              <Somsom5>
                <img
                  src={Ghost5}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="유령솜솜5"
                />
              </Somsom5>
            </div>
          </Slide>

          <CenterDDD>
            <img
              src={DDDtext}
              style={{
                width: "33%",
                objectFit: "cover",
                marginLeft: "32%",
              }}
              alt="학교글씨"
            />
          </CenterDDD>

          <BottomDDD>
            <img
              src={DDD}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="동동동"
            />
          </BottomDDD>
        </GroupIMG>

        <Divv>
          <div data-aos="fade-up">
            <Somsom>
              <img
                src={Ghost2}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  marginTop: "30px",
                }}
                alt="유령솜솜2"
              />
            </Somsom>
          </div>
        </Divv>

        <Link to="/Stamp">
          <StampTour>
            <img
              src={STAMPIMG}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="도장"
            />
            <WhiteFooter>
              <Title>스탬프 투어</Title>
              <Contents>
                프로그램 부스에 참여하고 나면 도장을 찍어드려요
              </Contents>
            </WhiteFooter>
          </StampTour>
        </Link>

        <Link to="/CampusMap">
          <Divv>
            <Web2>
              <div data-aos="zoom-in" data-aos-duration="1000">
                <img
                  src={Web}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  alt="거미줄1"
                />
              </div>
            </Web2>

            <div data-aos="fade-up">
              <Somsom2>
                <img
                  src={Ghost3}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    marginTop: "30px",
                  }}
                  alt="우령솜솜3"
                />
              </Somsom2>
            </div>

            <CampusMap>
              <img
                src={MAPIMG}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="지도"
              />
              <WhiteFooter>
                <Title2>캠퍼스 맵</Title2>
                <Contents2>학교 건물들의 위치와 구조를 한번에</Contents2>
              </WhiteFooter>
            </CampusMap>
          </Divv>
        </Link>

        <Text>
          한가지 <ColorText>동</ColorText> + 움직일 <ColorText>동</ColorText> +
          뜨거운 모양 <ColorText>동</ColorText> 을 합친 단어
          <br /> 축제로 인해 동덕 학우들이{" "}
          <ColorText2>함께 모여 움직여 열기가 대단함</ColorText2>
        </Text>
        <Logo>
          <img
            src={LOGO}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="로고"
          ></img>
          <Web3>
            <div data-aos="zoom-in" data-aos-duration="1000">
              <img
                src={Web}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  marginLeft: "-80%",
                  marginTop: "-50%",
                }}
                alt="거미줄"
              />
            </div>
          </Web3>
        </Logo>
      </Background>
    </>
  );
}

export default Home;
