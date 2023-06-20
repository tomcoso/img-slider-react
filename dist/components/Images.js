"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Panel = styled_components_1.default.div `
  min-width: 100%;
  background-clip: border-box;
  background-size: cover;
  background-position: center;
`;
const MainPanel = (0, styled_components_1.default)(Panel) `
  background-image: url(${(p) => p.image});
  transition-property: background-image;
  transition-delay: 500ms;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const SlideBtn = styled_components_1.default.button `
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
const SliderPanel = (0, styled_components_1.default)(Panel) `
  box-shadow: 0px 0px 20px 10px #000;
  opacity: 0;
  position: relative;
  z-index: 1;
`;
const ImgWrap = styled_components_1.default.div `
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  right: 100%;
`;
const Images = ({ imageArray, currentIndex, setIndex, anim, prevRef, nextRef, }) => {
    let prevImage;
    let nextImage;
    // useEffect(() => {
    //   nextImage =
    //     imageArray[currentIndex < imageArray.length - 1 ? currentIndex + 1 : 0];
    //   prevImage =
    //     imageArray[currentIndex > 0 ? currentIndex - 1 : imageArray.length - 1];
    // }, [currentIndex]);
    const slideForward = () => {
        const length = imageArray.length;
        if (currentIndex + 1 === length) {
            setIndex(0);
            return;
        }
        setIndex((x) => x + 1);
        anim("forwards");
    };
    const slideBackwards = () => {
        const maxIndex = imageArray.length - 1;
        if (currentIndex - 1 < 0) {
            setIndex(maxIndex);
            return;
        }
        setIndex((x) => x - 1);
        anim("backwards");
    };
    return ((0, jsx_runtime_1.jsxs)(ImgWrap, Object.assign({ "data-testid": "images" }, { children: [(0, jsx_runtime_1.jsx)(SliderPanel, { "data-testid": "prev-slide", className: "prev", ref: prevRef }), (0, jsx_runtime_1.jsxs)(MainPanel, Object.assign({ role: "img", image: imageArray[currentIndex], className: "main" }, { children: [(0, jsx_runtime_1.jsx)(SlideBtn, { side: "left", onClick: slideBackwards }), (0, jsx_runtime_1.jsx)(SlideBtn, { side: "right", onClick: slideForward })] })), (0, jsx_runtime_1.jsx)(SliderPanel, { "data-testid": "next-slide", className: "next", ref: nextRef })] })));
};
exports.default = Images;
