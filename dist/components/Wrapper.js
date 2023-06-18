"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.div `
  grid-column: 2/4;
  grid-row: 2;
  box-shadow: 0px 0px 15px #000;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;
exports.default = Wrapper;
