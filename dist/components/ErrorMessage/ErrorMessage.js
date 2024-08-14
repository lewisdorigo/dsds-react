"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = void 0;
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {ErrorMessage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ErrorMessage = function ErrorMessage({ tag = 'div', children, className, ...props }) {
    return (react_1.default.createElement(WrapperTag_1.default, { tag: tag, className: (0, classNames_1.default)('ds_question__error-message', className), ...props }, children));
};
/**
 * @param {ErrorMessages} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ErrorMessages = function ErrorMessages({ items: rawErrors = [], id = '', }) {
    const errors = Array.isArray(rawErrors) ? rawErrors : [rawErrors];
    if (errors.length < 1) {
        return null;
    }
    return (react_1.default.createElement("ul", { className: "ds_no-bullets", id: id }, errors.map((error, index) => {
        const key = `${id}-${index}`;
        return (react_1.default.createElement(ErrorMessage, { tag: "li", key: key }, (0, htmlToReact_1.default)(typeof error === 'string'
            ? error
            : error.fieldMessage || error.message, false)));
    })));
};
exports.ErrorMessages = ErrorMessages;
exports.default = ErrorMessage;
