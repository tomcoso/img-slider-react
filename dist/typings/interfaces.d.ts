/// <reference types="node" />
import React, { Dispatch } from "react";
export interface SliderProps {
    images: string[];
    timerOptions?: number;
}
export type animFn = (direction: "forwards" | "backwards", newIndex?: number) => void;
export interface TimerI {
    callback: undefined | (() => void);
    time: number;
    current: NodeJS.Timeout | null;
    reset: Function;
    set: (callback: () => void) => void;
}
export interface ImagesProps {
    imageArray: string[];
    currentIndex: number;
    setIndex: Dispatch<React.SetStateAction<number>>;
    length?: number;
    anim: animFn;
    nextRef: React.MutableRefObject<HTMLDivElement | null>;
    prevRef: React.MutableRefObject<HTMLDivElement | null>;
    timer: TimerI;
}
export interface IndexBtnsProps {
    imageArray: string[];
    currentIndex: number;
    setIndex: Dispatch<React.SetStateAction<number>>;
    anim: animFn;
    timer: TimerI;
}
