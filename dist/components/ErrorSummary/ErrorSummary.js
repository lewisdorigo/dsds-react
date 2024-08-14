"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Link_1 = __importDefault(require("../Link"));
const Heading_1 = __importDefault(require("../Heading"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {ErrorSummary} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ErrorSummary = function ErrorSummary({ items = [], id = 'error-summary', label = 'There is a problem', className, headingLevel = 2, attributes: { autoFocus = true, ...attributes } = {}, }) {
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_error-summary', className), ...attributes, role: "alert", "aria-labelledby": `${id}-title`, id: id, tabIndex: -1, autoFocus: autoFocus },
        react_1.default.createElement(Heading_1.default, { level: headingLevel, className: (0, classNames_1.default)('ds_error-summary__title', headingLevel !== 2 ? 'beta' : '') }, (0, htmlToReact_1.default)(label, false)),
        react_1.default.createElement("ul", { className: "ds_error-summary__list" }, items.map((error, index) => {
            const key = `${id}-${index}`;
            let message;
            if (typeof error === 'string') {
                message = (0, htmlToReact_1.default)(error, false);
            }
            else if ((error.fieldId || error.href) && error.message) {
                message = (react_1.default.createElement(Link_1.default, { baseClass: "", href: error.href || `#${error.fieldId}` }, (0, htmlToReact_1.default)(error.message, false)));
            }
            else if (error.message) {
                message = (0, htmlToReact_1.default)(error.message, false);
            }
            else {
                return null;
            }
            return (react_1.default.createElement("li", { key: key }, message));
        }))));
};
exports.default = ErrorSummary;
