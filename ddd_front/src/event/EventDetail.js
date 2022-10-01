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

const EventTitle = styled.h2`
  color: #8b2842;
  font-weight: 400;
  font-size: 24px;
  text-shadow: 4px 4px 4px rgba(139, 40, 66, 0.25);
  padding: 20px 16px 40px;
  @media only screen and (max-width: 500px) {
    padding: 24px 0 12px;
    font-size: 20px;
  }
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
  padding: 20px 16px 40px;
  font-weight: 400;
  font-size: 18px;
  @media only screen and (max-width: 700px) {
    font-size: 14px;
    padding: 12px 8px 40px;
  }
`;

const EventInfoChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 12px;
  padding: 20px 16px;
  @media only screen and (max-width: 700px) {
    padding: 12px 8px;
  }
`;

const QRImg = styled.img`
  @media only screen and (min-width: 700px) {
    width: 100px;
    height: 100px;
  }
`;

const QRLink = styled.div`
  word-break: break-all;
  cursor: pointer;
  &:hover {
    color: #8b2842;
  }
`;

function EventDetail() {
  const params = useParams();
  const [dt, setDt] = useState({});
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/${params.id}`).then((response) => {
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
          <EventTitle>{dt.eventTitle}</EventTitle>
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
            >
              https://open.kakao.com/o/sRAKXZxe
            </QRLink>

            <QRImg src={require("../img/openchat.png")} />
          </EventInfoChat>
        </EventInfo>
      </EventInfoList>
    </EventDetailBox>
  );
}

export default EventDetail;
