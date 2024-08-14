"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {InsetText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const InsetText = function InsetText({ id, tag = 'div', content, children, className, attributes, }) {
    return (react_1.default.createElement(WrapperTag_1.default, { tag: tag, className: (0, classNames_1.default)('ds_inset-text', className), id: id, ...attributes },
        react_1.default.createElement("div", { className: "ds_inset-text__text" },
            content ? (0, htmlToReact_1.default)(content) : null,
            children)));
};
exports.default = InsetText;
