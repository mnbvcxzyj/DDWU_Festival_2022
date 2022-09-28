import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

const SearchPreview = styled.div`
  border: 2px solid #d09b2c;
  border-radius: 5px;
`;

function EventHome() {
  const [eData, setEData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/").then((response) => {
      setEData(response.data);
      setShowSearch(response.data);
    });
  }, []);

  return (
    <EventHomeBox>
      <SearchForm
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .get(`http://127.0.0.1:8000/?search=${inputSearch}`)
            .then((response) => {
              setEData(response.data);
              setShowSearchBox(false);
            });
        }}
      >
        <Input
          placeholder="| 솜솜이들을 위한 다양한 이벤트"
          value={inputSearch}
          onChange={(event) => {
            setInputSearch(event.target.value);
            axios
              .get(`http://127.0.0.1:8000/?search=${event.target.value}`)
              .then((response) => {
                setShowSearch(response.data);
              });
          }}
          onFocus={() => setShowSearchBox(true)}
          onBlur={() => setShowSearchBox(false)}
        />
        <InputBtn>
          <BtnImg src={require("../img/searchIcon.png")} />
        </InputBtn>
      </SearchForm>
      {showSearchBox ? (
        <SearchPreview>
          {showSearch.map((result) => (
            <div key={`${result.eventTitle}`}>{result.eventTitle}</div>
          ))}
        </SearchPreview>
      ) : (
        ""
      )}

      <EventText>총 {eData.length}개의 이벤트</EventText>
      <EventList>
        {eData.map((list, index) => (
          <EventBox key={index}>
            <EventImgDiv>
              <EventImg src={list.eventImg} />
            </EventImgDiv>
            <EventInfo>
              <EventTitle
                onClick={() => {
                  navigate(`/event/detail${index + 1}`);
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
