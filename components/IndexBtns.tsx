import { Dispatch, useEffect, useState } from "react";
import styled from "styled-components";
import React from "react";
import { IndexBtnsProps } from "../interfaces";

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

const IndexBtns = ({
  imageArray,
  currentIndex,
  setIndex,
  anim,
  timer,
}: IndexBtnsProps) => {
  const handleNewIndex = (newIndex: number): void => {
    setIndex(newIndex);
    if (newIndex > currentIndex) {
      anim("forwards", newIndex);
    } else if (newIndex < currentIndex) {
      anim("backwards", newIndex);
    }
    timer.reset();
  };
  return (
    <Wrap data-testid="indexes">
      {imageArray.map((x, i) => (
        <Btn
          data-testid={"index-btn"}
          className={currentIndex === i ? "current" : ""}
          key={i * 1000 * Math.random()}
          onClick={() => handleNewIndex(i)}
        ></Btn>
      ))}
    </Wrap>
  );
};

export default IndexBtns;
