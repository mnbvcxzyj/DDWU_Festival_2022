import React, { useState } from "react";
import styled from "styled-components";
import DS_Board from "./DataScience/DS_Board";
import Program_Board from "./Program/Program_Board";

const TimeTableDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MenuBarDiv = styled.div`
  max-width: 1280px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
`;

const TabUl = styled.ul`
  display: inline-block;
  text-align: center;
  border: 2px solid #8b2842;
  box-shadow: 4px 4px 4px rgba(139, 40, 66, 0.25);
  border-radius: 50px;
  cursor: pointer;

  .active {
    background: #8b2842;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
  }

  .nonactive {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #8b2842;
  }
`;

const MenuLi = styled.li`
  list-style: none;
  width: 100px;
  padding: 7px;
  border-radius: 50px;
  display: inline-block;
  justify-content: space-between;
`;

const BoardDiv = styled.div``;
const TimeTable = () => {
  const [index, setIndex] = useState(true);

  return (
    <>
      <TimeTableDiv>
        <MenuBarDiv>
          <TabUl>
            <MenuLi
              className={index === true ? "active" : "nonactive"}
              onClick={() => setIndex(true)}
            >
              프로그램
            </MenuLi>
            <MenuLi
              className={index === false ? "active" : "nonactive"}
              onClick={() => setIndex(false)}
            >
              데사데이
            </MenuLi>
          </TabUl>
        </MenuBarDiv>
        <BoardDiv>{index ? <Program_Board /> : <DS_Board />}</BoardDiv>
      </TimeTableDiv>
    </>
  );
};

export default TimeTable;
