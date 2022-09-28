import React from "react";
import styled from "styled-components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import StampFull from "./img/StampFull.png";

const Size = styled.div`
  width: 323px;
`;

//css 퍼센트 내 맘대로 바꿈
function Zoom() {
  return (
    <TransformWrapper initialScale={1} minScale={1} maxScale={10}>
      <TransformComponent>
        <Size>
          <img
            src={StampFull}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3% 3% 0% 0%",
            }}
          />
        </Size>
      </TransformComponent>
    </TransformWrapper>
  );
}

export default Zoom;