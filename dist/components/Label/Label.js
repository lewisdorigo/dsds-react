"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {Label} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Label = function Label({ className, content, children, htmlFor, ...props }) {
    return (react_1.default.createElement("label", { className: (0, classNames_1.default)('ds_label', className), htmlFor: htmlFor, ...props },
        content && (0, htmlToReact_1.default)(content, false),
        children));
};
exports.default = Label;
