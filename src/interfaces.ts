import React, { Dispatch } from "react";

export interface SliderProps {
  images: string[];
  options?: Object;
}

export interface Context {
  imageArray: string[];
  currentIndex: number;
  setIndex: Dispatch<React.SetStateAction<number>>;
  length?: number;
}
