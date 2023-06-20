"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Wrapper_1 = __importDefault(require("./components/Wrapper"));
const Images_1 = __importDefault(require("./components/Images"));
const react_1 = require("react");
const IndexBtns_1 = __importDefault(require("./components/IndexBtns"));
const Slider = ({ images, timer }) => {
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    let currentTimeout = setTimeout(() => {
        setCurrentIndex((x) => (x < images.length - 1 ? x + 1 : 0));
        animate("forwards");
    }, timer ? timer : 5000);
    const nextRef = (0, react_1.useRef)(null);
    const prevRef = (0, react_1.useRef)(null);
    const animate = (direction, newIndex) => {
        clearTimeout(currentTimeout);
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
            nextRef.current.setAttribute("style", `background-image : url(${newIndex !== undefined
                ? images[newIndex]
                : images[currentIndex < images.length - 1 ? currentIndex + 1 : 0]})`);
            nextRef.current.animate(forwardsKeyframes, keyframeOptions);
        }
        else if (direction === "backwards" && prevRef.current !== null) {
            prevRef.current.setAttribute("style", `background-image : url(${newIndex !== undefined
                ? images[newIndex]
                : images[currentIndex > 0 ? currentIndex - 1 : images.length - 1]})`);
            prevRef.current.animate(backwardsKeyframes, keyframeOptions);
        }
        currentTimeout = setTimeout(() => {
            setCurrentIndex((x) => (x < images.length - 1 ? x + 1 : 0));
            animate("forwards");
        }, timer ? timer : 5000);
    };
    return ((0, jsx_runtime_1.jsxs)(Wrapper_1.default, { children: [(0, jsx_runtime_1.jsx)(Images_1.default, { imageArray: images, currentIndex: currentIndex, setIndex: setCurrentIndex, anim: animate, nextRef: nextRef, prevRef: prevRef }), (0, jsx_runtime_1.jsx)(IndexBtns_1.default, { imageArray: images, currentIndex: currentIndex, setIndex: setCurrentIndex, anim: animate })] }));
};
exports.default = Slider;
