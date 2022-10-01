import React, { useState } from "react";
import styled from "styled-components";
import First_ds from "./First_ds";
import Second_ds from "./Second_ds";
import Third_ds from "./Third_ds";
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
  font-size: 15px;
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
const DS_Board = () => {
  const dayTabArr = [
    {
      dayTitle: "WED . 1부",
      dayContent: <First_ds />,
    },
    {
      dayTitle: "WED . 2부",
      dayContent: <Second_ds />,
    },
    {
      dayTitle: "WED . 3부",
      dayContent: <Third_ds />,
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

export default DS_Board;
