import React, { useState } from "react";
import styled from "styled-components";

const SomTalkBox = styled.div`
  padding: 24px;
`;

const SomTalkHeader = styled.div`
  font-weight: 700;
`;

const SomTalkTitle = styled.h2`
  text-transform: uppercase;
  color: #8b2842;
  font-size: 28px;
  text-shadow: 4px 4px 4px rgba(139, 40, 66, 0.25);
  padding-bottom: 10px;
  @media only screen and (max-width: 700px) {
    padding-bottom: 4px;
  }
`;

const SomTalkDes = styled.p`
  color: #b0687b;
  text-shadow: 4px 4px 4px rgba(176, 104, 123, 0.25);
`;

const SomTalkForm = styled.form`
  display: flex;
  align-items: flex-end;
  margin: 30px 0;
  background: #ffffff;
  border: 2px solid #e0c895;
  box-shadow: 4px 4px 4px rgba(224, 200, 149, 0.25);
  padding: 15px 20px;
  border-radius: 10px;
  box-sizing: border-box;
  height: 120px;
  line-height: 120%;
  @media only screen and (min-width: 700px) {
    height: 180px;
    line-height: 180%;
  }
`;

const SomTalkBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

const SomTalkTextArea = styled.textarea`
  all: unset;
  resize: none;
  width: 100%;
  height: 100%;
  padding-right: 5px;
`;

const SomTalkMain = styled.ul`
  overflow: auto;
  height: calc(100vh - 280px);
  @media only screen and (min-width: 700px) {
    height: calc(100vh - 350px);
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
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

function SomTalk() {
  const [comment, setComment] = useState([
    "그대 아무런 말도 하지 마요이 맘은 여전히 그대로예요따가운 햇살 그 아래 우리이 분위기 난 좋아어떡해 나 숨이 가빠져요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져줄게요에오 에오열이 올라요에오 에오여름 밤 열긴 밤새 식지 않고나는 자꾸 위험한 춤을 춰요따가운 햇살 적당한 전에 한번만 더열이 올라요 에오안녕하세요안녕하세요안녕하세요안녕하겨요뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져 줄게요에오 에오열이 올라요에오 에오바람이 분위기 난 좋아요어떡해 나 이제 못 참아요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져 줄게요올라 올라 라라라 요올라 올라 라라 라요 라요올라 올라 라라 라올라 올라 라라잔뜩 취한 듯한 기분좀 더 높이 날 데려다 줘잠에 든 도시 타오른 밤이식기",
    "그대 아무런 말도 하지 마요이 맘은 여전히 그대로예요따가운 햇살 그 아래 우리이 분위기 난 좋아어떡해 나 숨이 가빠져요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져줄게요에오 에오열이 올라요에오 에오여름 밤 열긴 밤새 식지 않고나는 자꾸 위험한 춤을 춰요따가운 햇살 적당한 바람이 분위기 난 좋아요어떡해 나 이제 못 참아요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져 줄게요올라 올라 라라라 요올라 올라 라라 라요 라요올라 올라 라라 라올라 올라 라라잔뜩 취한 듯한 기분좀 더 높이 날 데려다 줘잠에 든 도시 타오른 밤이식기전에 한번만 더열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져 줄게요에오 에오열이 올라요에오 에오",
    "그대 아무런 말도 하지 마요이 맘은 여전히 그대로예요따가운 햇살 그 아래 우리이 분위기 난 좋아어떡해 나 숨이 가빠져요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져줄게요에오 에오열이 올라요에오 에오여름 밤 열긴 밤새 식지 않고나는 자꾸 위험한 춤을 춰요따가운 햇살 적당한 바람이 분위기 난 좋아요어떡해 나 이제 못 참아요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져 줄게요올라 올라 라라라 요올라 올라 라라 라요 라요올라 올라 라라 라올라 올라 라라잔뜩 취한 듯한 기분좀 더 높이 날 데려다 줘잠에 든 도시 타오",
    "그대 아무런 말도 하지 마요이 맘은 여전히 그대로예요따가운 햇살 그 아래 우리이 분위기 난 좋아어떡해 나 숨이 가빠져요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져줄게요에오 에오열이 올라요에오 에오여름 밤 열긴 밤새 식지 않고나는 자꾸 위험한 춤을 춰요따가운 햇살 적당한 바람이 분위기 난 좋아요어떡해 나 이제 못 참아요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져 줄기분좀 더 높이 날 데려다 줘잠에 든 도시 타오",
    "그대 아무런 말도 하지 마요이 맘은 여전히 그대로예요따가운 햇살 그 아래 우리이 분위기 난 좋아어떡해 나 숨이 가빠져요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져줄게요에오 에오열이 올라요에오 에오여름 밤 열긴 밤새 식지 않고나는 자꾸 위험한 춤을 춰요따가운 햇살 적당한 바람이 분위기 난 좋아요어떡해 나 이제 못 참아요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져 줄게요올라 올라 라라라 요올라 올라 라라 라요 라요올라 올라 라라 라올라 올라 라라잔뜩 취한 듯한 기분좀 더 높이 날 데려다 줘잠에 든 도시 타오",
    "그대 아무런 말도 하지 마요이 맘은 여전히 그대로예요따가운 햇살 그 아래 우리이 분위기 난 좋아어떡해 나 숨이 가빠져요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져줄게요에오 에오열이 올라요에오 에오여름 밤 열긴 밤새 식지 않고나는 자꾸 위험한 춤을 춰요따가운 햇살 적당한 바람이 분위기 난 좋아요어떡해 나 이제 못 참아요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져 줄게요올라 올라 라라라 요올라 올",
    "그대 아무런 말도 하지 마요이 맘은 여전히 그대로예요따가운 햇살 그 아래 우리이 분위기 난 좋아어떡해 나 숨이 가빠져요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져줄게요에오 에오열이 올라요에오 에오여름 밤 열긴 밤새 식지 않고나는 자꾸 위험한 춤을 춰요따가운 햇살 적당한 바람이 분위기 난 좋아요어떡해 나",
    "그대 아무런 말도 하지 마요이 맘은 여전히 그대로예요따가운 햇살 그 아래 우리이 분위기 난 좋아어떡해 나 숨이 가빠져요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져줄게요에오 에오열이 올라요에오 에오여름 밤 열긴 밤새 식지 않고나는 자꾸 위험한 춤을 춰요따가운 햇살 적당한 바람이 분위기 난 좋아요어떡해 나 이제 못 참아요그렇게 쳐다보면열이 올라요 에오뜨거워진",
    "그대 아무런 말도 하지 마요이 맘은 여전히 그대로예요따가운 햇살 그 아래 우리이 분위기 난 좋아어떡해 나 숨이 가빠져요그렇게 쳐다보면열이 올라요 에오뜨거워진 온도 탓일까요약이 올라요 에오한번쯤은 무너져줄게요에오 에오열이 올라요에오 에오여름 밤 열긴 밤새 식지 않고나는 자꾸 위험한 춤을 춰요따가운 햇살 적당한 바람이 분위기 난 좋아요어떡해 나 이제 못 참아요그렇게 쳐다보면열이 올라요 에오뜨거워진",
  ]);
  const bgColor = [
    "linear-gradient(0deg, #D9B0BB, #D9B0BB), linear-gradient(0deg, #EED8DE, #EED8DE), linear-gradient(0deg, #D09B2C, #D09B2C), linear-gradient(0deg, #D09B2C, #D09B2C), #D09B2C",
    "#E0C895",
    "#E7E0D1",
    "#DADADA",
    "linear-gradient(0deg, #B0687B, #B0687B), linear-gradient(0deg, #EED8DE, #EED8DE), linear-gradient(0deg, #D09B2C, #D09B2C), linear-gradient(0deg, #D09B2C, #D09B2C), #D09B2C",
  ];
  const [sendCmt, setSendCmt] = useState();
  console.log(sendCmt);
  return (
    <SomTalkBox>
      <SomTalkHeader>
        <SomTalkTitle>som talk</SomTalkTitle>
        <SomTalkDes>
          2022년 가을 , 하나로 (동) 뜨겁게 (동) 움직인 (동) 솜솜이들의 기록
        </SomTalkDes>
        <SomTalkForm
          onSubmit={(event) => {
            event.preventDefault();
            setComment([sendCmt, ...comment]);
            setSendCmt("");
          }}
        >
          <SomTalkTextArea
            placeholder="| 솜솜이들에게 정하고 싶은 한 줄(400자 이내)"
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
      </SomTalkHeader>
      <SomTalkMain>
        {comment.map((cm, index) => (
          <SomTalkContent bg={bgColor[index % 5]}>{cm}</SomTalkContent>
        ))}
      </SomTalkMain>
    </SomTalkBox>
  );
}

export default SomTalk;