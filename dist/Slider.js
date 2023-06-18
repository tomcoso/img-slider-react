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
const Slider = ({ images, options }) => {
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)(Wrapper_1.default, { children: [(0, jsx_runtime_1.jsx)(Images_1.default, { imageArray: images, currentIndex: currentIndex, setIndex: setCurrentIndex }), (0, jsx_runtime_1.jsx)(IndexBtns_1.default, { currentIndex: currentIndex, setIndex: setCurrentIndex, length: images.length })] }));
};
exports.default = Slider;
