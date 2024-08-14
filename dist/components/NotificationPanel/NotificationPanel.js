"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Heading_1 = __importDefault(require("../Heading"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {NotificationPanel} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const NotificationPanel = function NotificationPanel({ label = 'Thank you', content, children, success = true, className, headingLevel = 2, attributes = {}, }) {
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_notification-panel', success ? 'ds_notification-panel--success' : '', className), ...attributes },
        label && (react_1.default.createElement(Heading_1.default, { level: headingLevel, className: "ds_notification-panel__title" }, (0, htmlToReact_1.default)(label, false))),
        react_1.default.createElement("div", { className: "ds_notification-panel__content" },
            content && (0, htmlToReact_1.default)(content),
            children)));
};
exports.default = NotificationPanel;
