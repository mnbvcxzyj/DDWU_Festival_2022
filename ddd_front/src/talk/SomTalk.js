import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const SomTalkBox = styled.div`
  // padding: 24px 24px 0;
`;

const SomTalkDes = styled.p`
  background: #8b2842;
  color: white;
  font-weight: bold;
  margin: 16px 24px;
  padding: 16px 22.5px;
  line-height: 1.6;
  border-radius: 10px;
  @media only screen and (min-width: 700px) {
    font-size: 18px;
    width: 350px;
  }
  width: 65%;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SomTalkFormBox = styled.div`
  position: fixed;
  max-width: 1280px;
  box-sizing: border-box;
  padding: 16px 24px;
  background: #8b2842;
  width: 100%;
  bottom: 0;
  @media only screen and (min-width: 700px) {
    padding: 20px 28px;
    font-size: 18px;
  }
`;

const SomTalkForm = styled.form`
  display: flex;
  align-items: center;
  border-radius: 10px;
  line-height: 120%;
  @media only screen and (min-width: 700px) {
    line-height: 180%;
  }
  background: #ffffff;
  border-radius: 10px;
  padding: 12px;
`;

const SomTalkBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

const SomTalkTextArea = styled.textarea`
  all: unset;
  resize: none;
  width: 100%;
  height: 40px;
  &::placeholder {
    color: #e5ddcc;
  }
`;

const SomTalkMain = styled.ul`
  margin: 0 24px;
  background: #ffffff;
  border: 2px solid #e0c895;
  box-shadow: 4px 4px 4px rgba(224, 200, 149, 0.25);
  border-radius: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;
  height: calc(100vh - 280px);
  @media only screen and (min-width: 700px) {
    height: calc(100vh - 300px);
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    border: 3px solid #e0c895;
  }
  position: relative;
  align-items: flex-end;
`;

const SomTalkContent = styled.li`
  background: ${(props) => props.bg};
  color: #ffffff;
  padding: 12px 20px 16px;
  border-radius: 10px;
  margin-bottom: 30px;
  font-weight: 700;
  line-height: 20px;
  font-size: 17px;
  @media only screen and (max-width: 700px) {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 20px;
  }
`;

const TextBold = styled.span`
  color: #e0c895;
  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

function SomTalk() {
  const bgColor = [
    "linear-gradient(0deg, #D9B0BB, #D9B0BB), linear-gradient(0deg, #EED8DE, #EED8DE), linear-gradient(0deg, #D09B2C, #D09B2C), linear-gradient(0deg, #D09B2C, #D09B2C), #D09B2C",
    "#E0C895",
    "#E7E0D1",
    "#DADADA",
    "linear-gradient(0deg, #B0687B, #B0687B), linear-gradient(0deg, #EED8DE, #EED8DE), linear-gradient(0deg, #D09B2C, #D09B2C), linear-gradient(0deg, #D09B2C, #D09B2C), #D09B2C",
  ];
  const [sendCmt, setSendCmt] = useState("");
  const talkRef = useRef();
  const { status, data, error } = useQuery(
    "talk",
    () => {
      return axios
        .get("http://127.0.0.1:8000/posts/comments")
        .then((response) => {
          return response.data;
        });
    },
    {
      // refetchOnWindowFocus: false, // 창을 새로 펼칠 때
      // refetchInterval: 1000, // 1초마다 갱신 - 폴링; 실시간처럼 보이게 하는 것. 일정한 주기를 가지고 응답ㅇ르 주고받는 방식을 폴링 방식이라고 한다.
    }
  );
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, errors, isSuccess } = useMutation(
    (comment) => {
      return axios.post("http://127.0.0.1:8000/posts/comments", { comment });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("talk"); //보통 새로운 데이터가 생겼어도 정해진 시간에 도달하지 않으면 화면에 보여지지 않는데 이를 해결하기 위함
      },
    }
  );
  useEffect(() => {
    talkRef.current.scrollTop = talkRef.current.scrollHeight;
  }, [data]);

  return (
    <SomTalkBox>
      <SomTalkDes>
        <span>2022년 가을 ,</span>
        <span>
          하나로 (<TextBold>동</TextBold>) 뜨겁게 (<TextBold>동</TextBold>)
          움직인 (<TextBold>동</TextBold>)
        </span>
        <span>솜솜이들의 기록</span>
      </SomTalkDes>
      <SomTalkMain ref={talkRef}>
        {status === "success"
          ? data.map((cm, index) => (
              <SomTalkContent bg={bgColor[index % 5]} key={index}>
                {cm.comment}
              </SomTalkContent>
            ))
          : ""}
      </SomTalkMain>

      <SomTalkFormBox>
        <SomTalkForm
          onSubmit={(event) => {
            event.preventDefault();
            mutate(sendCmt);
            setSendCmt("");
            talkRef.current.scrollTop = talkRef.current.scrollHeight;
            console.dir(talkRef.current.scrollHeight, talkRef.current);
          }}
        >
          <SomTalkTextArea
            placeholder="| 솜솜이들에게 정하고 싶은 한 줄(400자)"
            maxLength="400"
            value={sendCmt}
            onChange={(event) => {
              setSendCmt(event.target.value);
            }}
          />
          <SomTalkBtn>
            <img src={require("../img/cmtBtn.png")} />
          </SomTalkBtn>
        </SomTalkForm>
      </SomTalkFormBox>
    </SomTalkBox>
  );
}

export default SomTalk;
