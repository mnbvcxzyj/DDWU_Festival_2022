import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
const EventDetailBox = styled.div`
  padding: 24px;
`;

const EventImgDiv = styled.div`
  margin-bottom: 15px;
  width: 100%;
  height: 320px;
`;

const EventImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const EventInfoList = styled.ul``;
const EventInfo = styled.li``;
const EventInfoTitle = styled.div`
  background: rgba(224, 200, 149, 0.25);
  color: #8b2842;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  font-size: 22px;
  gap: 12px;
  text-shadow: 4px 4px 4px rgba(176, 104, 123, 0.25);
  font-weight: 400;
  @media only screen and (max-width: 700px) {
    font-size: 18px
    padding: 4px 8px;;
  }
`;

const EventListImg = styled.img`
  @media only screen and (max-width: 700px) {
    width: 28px;
    height: 28px;
  }
`;

const EventInfoDes = styled.div`
  padding: 24px;
  font-weight: 400;
  font-size: 20px;
  color: #5f4637;
  border-left: 3px solid #e0c895;
  margin: 16px 0 30px;
  @media only screen and (max-width: 700px) {
    margin: 8px 0 24px;
    font-size: 14px;
    padding: 12px;
  }
`;

const EventInfoChat = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 16px;
  border-left: 3px solid #e0c895;
  margin: 16px 0 50px;
  @media only screen and (max-width: 700px) {
    margin: 8px 0 30px;
    padding: 20px 12px;
  }
`;

const QRLink = styled.img`
  cursor: pointer;
  &:hover {
    color: #8b2842;
  }
  @media only screen and (max-width: 700px) {
    width: 33px;
    height: 33px;
  }
`;

function EventDetail() {
  const params = useParams();
  const [dt, setDt] = useState({});
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/post/${params.id}`).then((response) => {
      setDt(response.data);
    });
  }, []);

  return (
    <EventDetailBox>
      <EventImgDiv>
        <EventImg src={dt.eventImg} />
      </EventImgDiv>
      <EventInfoList>
        <EventInfo>
          <EventInfoTitle>
            <EventListImg src={require("../img/liststyle.png")} />
            <span>부스/이벤트 명</span>
          </EventInfoTitle>
          <EventInfoDes>{dt.eventTitle}</EventInfoDes>
        </EventInfo>
        <EventInfo>
          <EventInfoTitle>
            <EventListImg src={require("../img/liststyle.png")} />
            <span>한 줄 소개</span>
          </EventInfoTitle>
          <EventInfoDes>{dt.eventIntro}</EventInfoDes>
        </EventInfo>
        <EventInfo>
          <EventInfoTitle>
            <EventListImg src={require("../img/liststyle.png")} />
            <span>안내</span>
          </EventInfoTitle>
          <EventInfoDes>{dt.eventGuide}</EventInfoDes>
        </EventInfo>
        <EventInfo>
          <EventInfoTitle>
            <EventListImg src={require("../img/liststyle.png")} />
            <span>주의사항</span>
          </EventInfoTitle>
          <EventInfoDes>{dt.eventAttention}</EventInfoDes>
        </EventInfo>
        <EventInfo>
          <EventInfoTitle>
            <EventListImg src={require("../img/liststyle.png")} />
            <span>문의사항</span>
          </EventInfoTitle>
          <EventInfoChat>
            <QRLink
              onClick={() => {
                window.open("https://open.kakao.com/o/sRAKXZxe");
              }}
              src={require("../img/kakao.png")}
            />
            <QRLink
              onClick={() => {
                window.open(
                  "https://instagram.com/ddwu.festival2022?igshid=YmMyMTA2M2Y="
                );
              }}
              src={require("../img/insta.png")}
            />
          </EventInfoChat>
        </EventInfo>
      </EventInfoList>
    </EventDetailBox>
  );
}

export default EventDetail;
