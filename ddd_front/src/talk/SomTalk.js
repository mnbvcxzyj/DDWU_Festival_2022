import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useTransition, animated, config } from "react-spring";

const SomTalkBox = styled.div``;

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
  margin: 0 24px 150px;
  background: #ffffff;
  border: 2px solid #e0c895;
  box-shadow: 4px 4px 4px rgba(224, 200, 149, 0.25);
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 0;
  height: calc(100vh - 350px);
  @media only screen and (min-width: 700px) {
    height: calc(100vh - 370px);
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
  width: 64%;
  box-sizing: border-box;
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
  const [newCmt, setNewCmt] = useState({});
  const { status, data } = useQuery("talk", () => {
    return axios
      .get("http://127.0.0.1:8000/posts/comments")
      .then((response) => {
        const i = response.data.length - 1;
        setNewCmt({
          ...response.data[i],
          idx: i,
          op: 0.4,
        });
        return response.data;
      });
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (comment) => {
      return axios.post("http://127.0.0.1:8000/posts/comments", { comment });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("talk");
      },
    }
  );
  useEffect(() => {
    talkRef.current.scrollTop = talkRef.current.scrollHeight;
  }, [data]);

  const tarns = useTransition(newCmt, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    update: { opacity: 1 },
    config: config.molasses,
    delay: 200,
  });

  return (
    <SomTalkBox>
      <SomTalkDes>
        <span>2022년 가을 ,</span>
        <span>
          하나로 &#40;<TextBold>동</TextBold>&#41; 뜨겁게 &#40;
          <TextBold>동</TextBold> &#41; 움직인 &#40;<TextBold>동</TextBold>&#41;
        </span>
        <span>솜솜이들의 기록</span>
      </SomTalkDes>
      <SomTalkMain ref={talkRef}>
        {status === "success"
          ? data.map((cm, index) =>
              index === newCmt.idx ? (
                tarns(({ opacity }, tlk) => (
                  <SomTalkContent bg={bgColor[tlk.idx % 5]} key={newCmt.idx}>
                    <animated.div
                      style={{
                        opacity: opacity.update(tlk.op),
                        backgroundColor: `${bgColor[tlk.idx % 5]}`,
                      }}
                    >
                      {tlk.comment}
                    </animated.div>
                  </SomTalkContent>
                ))
              ) : (
                <SomTalkContent bg={bgColor[index % 5]} key={index}>
                  {cm.comment}
                </SomTalkContent>
              )
            )
          : ""}
      </SomTalkMain>

      <SomTalkFormBox>
        <SomTalkForm
          onSubmit={(event) => {
            event.preventDefault();
            mutate(sendCmt);
            setSendCmt("");
            talkRef.current.scrollTop = talkRef.current.scrollHeight;
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
            <img src={require("../img/cmtBtn.png")} alt="댓글" />
          </SomTalkBtn>
        </SomTalkForm>
      </SomTalkFormBox>
    </SomTalkBox>
  );
}

export default SomTalk;
