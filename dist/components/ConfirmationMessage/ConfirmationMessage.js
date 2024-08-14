"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const Icon_1 = __importDefault(require("../Icon"));
const Icon_type_1 = require("../Icon/Icon.type");
const Heading_1 = __importDefault(require("../Heading"));
/**
 * @param {ConfirmationMessage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ConfirmationMessage = function ConfirmationMessage({ label, className, content, attributes = {}, headingLevel = 2, }) {
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_confirmation-message', className), "aria-live": "polite", ...attributes },
        react_1.default.createElement(Icon_1.default, { className: "ds_confirmation-message__icon", icon: "check_circle", size: Icon_type_1.IconSize.TwentyFour }),
        react_1.default.createElement(Heading_1.default, { level: headingLevel, className: "ds_confirmation-message__title" }, (0, htmlToReact_1.default)(label, false)),
        content && (react_1.default.createElement("div", { className: "ds_confirmation-message__body" }, (0, htmlToReact_1.default)(content)))));
};
exports.default = ConfirmationMessage;
