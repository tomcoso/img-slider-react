import { Dispatch } from "react";
import React from "react";
interface IndexBtnsProps {
    imageArray: string[];
    currentIndex: number;
    setIndex: Dispatch<React.SetStateAction<number>>;
}
declare const IndexBtns: ({ imageArray, currentIndex, setIndex }: IndexBtnsProps) => import("react/jsx-runtime").JSX.Element;
export default IndexBtns;
