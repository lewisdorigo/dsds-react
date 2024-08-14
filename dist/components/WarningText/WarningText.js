"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {WarningText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const WarningText = function WarningText({ id, label, symbol = '!', content, children, className, attributes, }) {
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_warning-text', className), id: id, ...attributes },
        react_1.default.createElement("strong", { className: "ds_warning-text__icon", "aria-hidden": "true", "data-symbol": symbol }),
        react_1.default.createElement("strong", { className: "visually-hidden" }, (0, htmlToReact_1.default)(label, false)),
        react_1.default.createElement("div", { className: "ds_warning-text__text" },
            content ? (0, htmlToReact_1.default)(content) : null,
            children)));
};
exports.default = WarningText;
