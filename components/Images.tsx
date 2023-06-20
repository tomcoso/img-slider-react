import styled from "styled-components";
import { useEffect, useRef } from "react";
import { ImagesProps } from "../interfaces";
import React from "react";

const Panel = styled.div<{ image?: string }>`
  min-width: 100%;
  background-clip: border-box;
  background-size: cover;
  background-position: center;
  background-image: url(${(p) => p.image});
`;

const MainPanel = styled(Panel)`
  transition-property: background-image;
  transition-delay: 500ms;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SlideBtn = styled.button<{ side?: string }>`
  background-color: transparent;
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border: none;

  &:hover,
  &:focus {
    box-shadow: inset ${(p) => (p.side === "right" ? "-10px" : "10px")} 0px 10px -8px;
    outline: none;
  }
`;

const SliderPanel = styled(Panel)`
  box-shadow: 0px 0px 20px 10px #000;
  opacity: 0;
  position: relative;
  z-index: 1;
`;

const ImgWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  right: 100%;
`;

const Images = ({
  imageArray,
  currentIndex,
  setIndex,
  anim,
  prevRef,
  nextRef,
}: ImagesProps) => {
  let prevImage: string | undefined;
  let nextImage: string | undefined;

  useEffect(() => {
    prevImage =
      imageArray[currentIndex < imageArray.length - 1 ? currentIndex + 1 : 0];
    nextImage =
      imageArray[currentIndex > 0 ? currentIndex - 1 : imageArray.length - 1];
  }, [currentIndex]);

  const slideForward = (): void => {
    const length = imageArray.length;
    if (currentIndex + 1 === length) {
      setIndex(0);
      return;
    }
    setIndex((x) => x + 1);
    anim("forwards");
  };

  const slideBackwards = (): void => {
    const maxIndex = imageArray.length - 1;
    if (currentIndex - 1 < 0) {
      setIndex(maxIndex);
      return;
    }
    setIndex((x) => x - 1);
    anim("backwards");
  };

  return (
    <ImgWrap data-testid="images">
      <SliderPanel
        data-testid="prev-slide"
        image={prevImage}
        className="prev"
        ref={prevRef}
      />
      <MainPanel role="img" image={imageArray[currentIndex]} className="main">
        <SlideBtn side="left" onClick={slideBackwards}></SlideBtn>
        <SlideBtn side="right" onClick={slideForward}></SlideBtn>
      </MainPanel>
      <SliderPanel
        data-testid="next-slide"
        image={nextImage}
        className="next"
        ref={nextRef}
      />
    </ImgWrap>
  );
};

export default Images;
