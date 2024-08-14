"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {AspectBox} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const AspectBox = function AspectBox({ tag = 'div', ratio, children, content, attributes = {}, }) {
    const addClass = (item) => (item && typeof item === 'object' && (0, react_1.isValidElement)(item)
        ? react_1.default.cloneElement(item, {
            className: (0, classNames_1.default)('ds_aspect-box__inner', item.props.className ? item.props.className : null),
        })
        : item);
    return (react_1.default.createElement(WrapperTag_1.default, { tag: tag, className: (0, classNames_1.default)('ds_aspect-box', ratio ? `ds_aspect-box--${ratio}` : ''), ...attributes },
        content && react_1.default.Children.map((0, htmlToReact_1.default)(content), addClass),
        react_1.default.Children.map(children, addClass)));
};
exports.default = AspectBox;
