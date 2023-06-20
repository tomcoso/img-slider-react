import { Dispatch, useEffect, useState } from "react";
import styled from "styled-components";
import React from "react";

const Wrap = styled.div`
  height: min-content;
  display: flex;
  align-items: flex-end;
  gap: min(10px, 0.5vw);
  padding: 10px;
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, -100%);

  > .current {
    border: 1px solid white !important;
  }
`;

const Btn = styled.div`
  width: 12px;
  height: 12px;
  transition-delay: 150ms;
  border-radius: 50%;

  border: 1px solid rgba(255, 255, 255, 0.5);
`;

interface IndexBtnsProps {
  imageArray: string[];
  currentIndex: number;
  setIndex: Dispatch<React.SetStateAction<number>>;
}

const IndexBtns = ({ imageArray, currentIndex, setIndex }: IndexBtnsProps) => {
  return (
    <Wrap data-testid="indexes">
      {imageArray.map((x, i) => (
        <Btn
          data-testid={"index-btn"}
          className={currentIndex === i ? "current" : ""}
          key={i * 1000 * Math.random()}
          onClick={() => setIndex(i)}
        ></Btn>
      ))}
    </Wrap>
  );
};

export default IndexBtns;
