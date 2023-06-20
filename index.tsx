import Wrapper from "./components/Wrapper";
import Images from "./components/Images";
import React, { useState } from "react";
import IndexBtns from "./components/IndexBtns";
import { SliderProps, Context } from "./interfaces";

const Slider = ({ images, options }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Wrapper>
      <Images
        imageArray={images}
        currentIndex={currentIndex}
        setIndex={setCurrentIndex}
      ></Images>
      <IndexBtns
        imageArray={images}
        currentIndex={currentIndex}
        setIndex={setCurrentIndex}
      ></IndexBtns>
    </Wrapper>
  );
};

export default Slider;
