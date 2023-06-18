import { Dispatch } from "react";
import React from "react";
interface IndexBtnsProps {
    currentIndex: number;
    setIndex: Dispatch<React.SetStateAction<number>>;
    length: number;
}
declare const IndexBtns: ({ currentIndex, setIndex, length }: IndexBtnsProps) => import("react/jsx-runtime").JSX.Element;
export default IndexBtns;
