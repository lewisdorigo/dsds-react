"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
// const classes = [
//     null,
//     'alpha',
//     'beta',
//     'gamma',
//     'delta',
//     'epsilon',
//     'zeta',
// ];
/**
 * @param {Heading} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Heading = function Heading({ level = 2, isLegend = false, className, children, ...props }) {
    let tag = `h${level}`;
    // let levelClass:string|null = '';
    if (isLegend) {
        tag = 'legend';
        // levelClass = classes[level];
    }
    return (react_1.default.createElement(WrapperTag_1.default, { tag: tag, className: (0, classNames_1.default)(className), ...props }, children));
};
exports.default = Heading;
