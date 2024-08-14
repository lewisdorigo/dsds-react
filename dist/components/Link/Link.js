"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {Link} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Link = function Link({ content, href, type, target, className, baseClass = 'ds_link', rel, children, tabText = true, ...props }) {
    const linkRel = (href
        && (target === '_blank'
            || target === '_new')
        ? 'noreferrer noopener'
        : '');
    const newTabText = (typeof tabText === 'string'
        ? tabText
        : '(opens in a new tab)');
    const linkContent = (react_1.default.createElement(react_1.default.Fragment, null,
        content && (0, htmlToReact_1.default)(content, false),
        children,
        (target === '_blank' || target === '_new') && (react_1.default.createElement(react_1.default.Fragment, null,
            tabText && ` ${newTabText}`,
            !tabText && react_1.default.createElement("span", { className: "visually-hidden" }, newTabText)))));
    if (href) {
        return (react_1.default.createElement("a", { ...props, className: (0, classNames_1.default)(baseClass, className), href: href, target: target, rel: rel || linkRel }, linkContent));
    }
    return (react_1.default.createElement("button", { ...props, type: type, className: (0, classNames_1.default)(baseClass, className) }, linkContent));
};
exports.default = Link;
