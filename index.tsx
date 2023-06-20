import Wrapper from "./components/Wrapper";
import Images from "./components/Images";
import React, { useRef, useState } from "react";
import IndexBtns from "./components/IndexBtns";
import { SliderProps, animFn } from "./interfaces";

const Slider = ({ images, options }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);

  const animate: animFn = (
    direction: "forwards" | "backwards",
    newIndex?: number
  ) => {
    const forwardsKeyframes = [
      { transform: "translateX(0%)", opacity: 1 },
      { transform: "translateX(-100%)", opacity: 1, offset: 1 },
      { opacity: 0 },
    ];

    const backwardsKeyframes = [
      { transform: "translateX(0%)", opacity: 1 },
      { transform: "translateX(100%)", opacity: 1, offset: 1 },
      { opacity: 0 },
    ];

    const keyframeOptions = {
      duration: 500,
      easing: "cubic-bezier(.41, .01, .25, 1)",
    };

    if (direction === "forwards" && nextRef.current !== null) {
      nextRef.current.setAttribute(
        "style",
        `background-image : url(${
          newIndex
            ? images[newIndex]
            : images[currentIndex < images.length - 1 ? currentIndex + 1 : 0]
        })`
      );
      (nextRef.current as Element).animate(forwardsKeyframes, keyframeOptions);
      return;
    } else if (direction === "backwards" && prevRef.current !== null) {
      prevRef.current.setAttribute(
        "style",
        `background-image : url(${
          newIndex
            ? images[newIndex]
            : images[currentIndex > 0 ? currentIndex - 1 : images.length - 1]
        })`
      );
      (prevRef.current as Element).animate(backwardsKeyframes, keyframeOptions);
    }
  };

  return (
    <Wrapper>
      <Images
        imageArray={images}
        currentIndex={currentIndex}
        setIndex={setCurrentIndex}
        anim={animate}
        nextRef={nextRef}
        prevRef={prevRef}
      ></Images>
      <IndexBtns
        imageArray={images}
        currentIndex={currentIndex}
        setIndex={setCurrentIndex}
        anim={animate}
      ></IndexBtns>
    </Wrapper>
  );
};

export default Slider;
