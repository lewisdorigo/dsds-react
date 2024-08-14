"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {Details} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Details = function Details({ id, label, content, children, className, attributes, }) {
    return (react_1.default.createElement("details", { className: (0, classNames_1.default)('ds_details', className), id: id, ...attributes },
        react_1.default.createElement("summary", { className: "ds_details__summary" }, (0, htmlToReact_1.default)(label, false)),
        react_1.default.createElement("div", { className: "ds_details__text" },
            content ? (0, htmlToReact_1.default)(content) : null,
            children)));
};
exports.default = Details;
