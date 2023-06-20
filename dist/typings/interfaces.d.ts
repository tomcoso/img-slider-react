import React, { Dispatch } from "react";
export interface SliderProps {
    images: string[];
    options?: Object;
}
export type animFn = (direction: "forwards" | "backwards", newIndex?: number) => void;
export interface ImagesProps {
    imageArray: string[];
    currentIndex: number;
    setIndex: Dispatch<React.SetStateAction<number>>;
    length?: number;
    anim: animFn;
    nextRef: React.MutableRefObject<HTMLDivElement | null>;
    prevRef: React.MutableRefObject<HTMLDivElement | null>;
}
export interface IndexBtnsProps {
    imageArray: string[];
    currentIndex: number;
    setIndex: Dispatch<React.SetStateAction<number>>;
    anim: animFn;
}
