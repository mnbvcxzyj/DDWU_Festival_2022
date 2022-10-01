import React, { useState } from "react";
import styled from "styled-components";
import First_ddd from "./First_ddd";
import Second_ddd from "./Second_ddd";
import Third_ddd from "./Third_ddd";

const ProgramDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DayUl = styled.ul`
  display: flex;
  justify-items: center;
  align-items: center;
  list-style: none;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #eed8de;
  cursor: pointer;

  li {
    padding: 1rem 2rem 1rem 2rem;
    cursor: pointer;
  }

  .nonfocus {
    display: flex;
    justify-content: space-between;
  }

  .focus {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.333333px;
    color: #b0687b;
    border-bottom: 3px solid #b0687b;
  }
`;

const ContentDiv = styled.div`
  padding: 1rem;
`;
const Program_Board = () => {
  // getDate() : 바로 날짜로
  // getDay()는 요일에 해당하는 숫자 (수-3 목-4 금-5)
  // const selectDay = new Date();
  // const pickDay = selectDay.getDay();
  // const [isToday, setIsToday] = useState(pickDay);

  const dayTabArr = [
    {
      id: 3,
      dayTitle: "05 . WED",
      dayContent: <First_ddd />,
    },
    {
      id: 4,
      dayTitle: "06 . THU",
      dayContent: <Second_ddd />,
    },
    {
      id: 5,
      dayTitle: "07 . FRI",
      dayContent: <Third_ddd />,
    },
  ];

  const [menuIndex, setmenuIndex] = useState(0);
  const menuClickHandler = (index) => {
    setmenuIndex(index);
  };

  return (
    <>
      <ProgramDiv>
        <DayUl>
          {dayTabArr.map((menu, index) => {
            return (
              <li
                key={index}
                className={menuIndex === index ? "focus" : "nonfocus"}
                onClick={() => menuClickHandler(index)}
              >
                {menu.dayTitle}
              </li>
            );
          })}
        </DayUl>
        <ContentDiv>{dayTabArr[menuIndex].dayContent}</ContentDiv>
      </ProgramDiv>
    </>
  );
};

export default Program_Board;
