import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EventHomeBox = styled.div`
  padding: 24px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid #d09b2c;
  border-radius: 5px;
  &:focus-within {
    box-shadow: 4px 4px 4px rgba(224, 200, 149, 0.25);
  }
`;

const Input = styled.input`
  padding: 0 12px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  height: 50px;
  outline: none;
  @media only screen and (max-width: 400px) {
    height: 40px;
    font-size: 14px;
  }
  &::placeholder {
    color: #e7e0d1;
  }
`;
const InputBtn = styled.button`
  all: unset;
  cursor: pointer;
`;
const BtnImg = styled.img`
  width: 20px;
  padding-right: 12px;
  @media only screen and (max-width: 400px) {
    width: 15px;
  }
`;

const EventText = styled.div`
  padding: 56px 0 24px;
  font-weight: 400;
  color: #8b2842;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const EventList = styled.ul``;

const EventBox = styled.li`
  background: #ffffff;
  border: 1px solid #e0c895;
  box-shadow: 4px 4px 4px rgba(224, 200, 149, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const EventImgDiv = styled.div`
  width: 160px;
  height: 160px;
  @media only screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;
const EventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
`;
const EventInfo = styled.div`
  width: calc(100% - 200px);
  padding: 0 16px;
  @media only screen and (max-width: 500px) {
    width: calc(100% - 135px);
  }
`;

const EventTitle = styled.div`
  font-size: 20px;
  cursor: pointer;
  padding: 12px 0;
  color: #8b2842;
  font-weight: 700;
  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const EventIntro = styled.p`
  color: #5f4637;
  font-weight: 400;
  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

function EventHome() {
  const [eData, setEData] = useState([
    {
      id: 1,
      eventImg:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5xq2/image/0lp8RLaJ2IgctTWVl2nEa-JRCSc.jpg",
      eventTitle: "할로 WIN 가요제",
      eventIntro:
        "축제의 즐거움을 학우들 그리고 노래와 함께 나누고 싶다면? 가요제 필수 관람!",
    },
    {
      id: 2,
      eventImg:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5xq2/image/0lp8RLaJ2IgctTWVl2nEa-JRCSc.jpg",
      eventTitle: "할로 WIN 가요제",
      eventIntro:
        "축제의 즐거움을 학우들 그리고 노래와 함께 나누고 싶다면? 가요제 필수 관람!",
    },
    {
      id: 3,
      eventImg:
        "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5xq2/image/0lp8RLaJ2IgctTWVl2nEa-JRCSc.jpg",
      eventTitle: "할로 WIN 가요제",
      eventIntro:
        "축제의 즐거움을 학우들 그리고 노래와 함께 나누고 싶다면? 가요제 필수 관람!",
    },
  ]);
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  return (
    <EventHomeBox>
      <SearchForm
        onSubmit={(event) => {
          event.preventDefault();
          // axios
          //   .get(

          //   )
          //   .then((response) => {
          // setEData(response.data);
          //   });
        }}
      >
        <Input
          placeholder="| 솜솜이들을 위한 다양한 이벤트"
          value={inputSearch}
          onChange={(event) => {
            setInputSearch(event.target.value);
          }}
        />
        <InputBtn>
          <BtnImg src={require("../img/searchIcon.png")} />
        </InputBtn>
      </SearchForm>
      <EventText>총 {eData.length}개의 이벤트</EventText>
      <EventList>
        {eData.map((list) => (
          <EventBox key={list.id}>
            <EventImgDiv>
              <EventImg src={list.eventImg} />
            </EventImgDiv>
            <EventInfo>
              <EventTitle
                onClick={() => {
                  navigate(`/event/detail${list.id}`);
                }}
              >
                {list.eventTitle}
              </EventTitle>
              <EventIntro>{list.eventIntro}</EventIntro>
            </EventInfo>
          </EventBox>
        ))}
      </EventList>
    </EventHomeBox>
  );
}

export default EventHome;
