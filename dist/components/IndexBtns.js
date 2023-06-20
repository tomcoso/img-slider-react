"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Wrap = styled_components_1.default.div `
  height: min-content;
  display: flex;
  align-items: flex-end;
  gap: min(10px, 0.5vw);
  padding: 10px;
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, -100%);

  > .current {
    border: 1px solid white !important;
  }
`;
const Btn = styled_components_1.default.div `
  width: 12px;
  height: 12px;
  transition-delay: 150ms;
  border-radius: 50%;

  border: 1px solid rgba(255, 255, 255, 0.5);
`;
const IndexBtns = ({ imageArray, currentIndex, setIndex, anim, timer, }) => {
    const handleNewIndex = (newIndex) => {
        timer.clear();
        setIndex(newIndex);
        if (newIndex > currentIndex) {
            anim("forwards", newIndex);
        }
        else if (newIndex < currentIndex) {
            anim("backwards", newIndex);
        }
    };
    return ((0, jsx_runtime_1.jsx)(Wrap, Object.assign({ "data-testid": "indexes" }, { children: imageArray.map((x, i) => ((0, jsx_runtime_1.jsx)(Btn, { "data-testid": "index-btn", className: currentIndex === i ? "current" : "", onClick: () => handleNewIndex(i) }, i * 1000 * Math.random()))) })));
};
exports.default = IndexBtns;
