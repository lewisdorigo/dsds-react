"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {HintText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const HintText = function HintText({ className, content, children, ...props }) {
    return (react_1.default.createElement(WrapperTag_1.default, { className: (0, classNames_1.default)('ds_hint-text', className), ...props },
        content && (0, htmlToReact_1.default)(content),
        children));
};
exports.default = HintText;
