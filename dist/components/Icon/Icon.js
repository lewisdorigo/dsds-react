"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {Icon} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Icon = function Icon({ icon, accessible = true, className, label = '', size, pathToSvg = '/design-system/images/icons/icons.stack.svg', ...props }) {
    return (react_1.default.createElement("svg", { className: (0, classNames_1.default)('ds_icon', `ds_icon--${icon}`, size ? `ds_icon--${size}` : '', className), role: "img", "aria-hidden": accessible ? 'false' : 'true', "aria-label": label, ...props },
        react_1.default.createElement("use", { xlinkHref: `${pathToSvg}#${icon}` })));
};
exports.default = Icon;
