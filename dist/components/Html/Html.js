"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Heading_1 = __importDefault(require("../Heading"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {Html} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Html = function Html({ label, headingLevel, content, children, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        label && react_1.default.createElement(Heading_1.default, { level: headingLevel }, label),
        content && (0, htmlToReact_1.default)(content),
        children));
};
exports.default = Html;
