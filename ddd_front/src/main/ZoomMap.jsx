import React from "react";
import styled from "styled-components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import MapFull from "../img/MapFull.png";

const Size = styled.div`
  width: 323px;
`;

function Zoom() {
  return (
    <TransformWrapper initialScale={1} minScale={1} maxScale={10}>
      <TransformComponent>
        <Size>
          <img
            src={MapFull}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "3% 3% 0% 0%",
            }}
            alt="지도"
          />
        </Size>
      </TransformComponent>
    </TransformWrapper>
  );
}

export default Zoom;
