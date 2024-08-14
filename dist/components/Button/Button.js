"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("../Icon"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const Button_type_1 = require("./Button.type");
/**
 * @param {Button} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Button = function Button({ type = Button_type_1.Type.Button, href, size, width, style, icon, iconPosition: rawIconPosition, className: rawClassName, children, label, ...props }) {
    const iconPosition = icon ? rawIconPosition || Button_type_1.IconPosition.Right : undefined;
    const className = (0, classNames_1.default)('ds_button', rawClassName, size ? `ds_button--${size}` : '', width ? `ds_button--${width}` : '', style ? `ds_button--${style}` : '', (icon
        && iconPosition !== Button_type_1.IconPosition.IconOnly
        ? 'ds_button--has-icon'
        : ''), (iconPosition === Button_type_1.IconPosition.Left
        || iconPosition === Button_type_1.IconPosition.Right
        ? `ds_button--has-icon--${iconPosition}`
        : ''));
    const buttonContent = (react_1.default.createElement(react_1.default.Fragment, null,
        icon
            && iconPosition === Button_type_1.IconPosition.Left
            && react_1.default.createElement(Icon_1.default, { icon: icon }),
        (icon
            && iconPosition === Button_type_1.IconPosition.IconOnly
            ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", { className: "visually-hidden" },
                    label && (0, htmlToReact_1.default)(label, false),
                    children),
                "\u00A0"))
            : [
                label && (0, htmlToReact_1.default)(label, false),
                children,
            ]),
        icon
            && (iconPosition === Button_type_1.IconPosition.Right
                || iconPosition === Button_type_1.IconPosition.IconOnly)
            && react_1.default.createElement(Icon_1.default, { icon: icon })));
    if (href) {
        return (react_1.default.createElement("a", { href: href, ...props, className: className }, buttonContent));
    }
    return (react_1.default.createElement("button", { ...props, type: type, className: className }, buttonContent));
};
exports.default = Button;
