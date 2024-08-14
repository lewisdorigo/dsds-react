'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Wrapper_1 = __importDefault(require("../Wrapper"));
const Heading_1 = __importDefault(require("../Heading"));
const Icon_1 = __importDefault(require("../Icon"));
const Icon_type_1 = require("../Icon/Icon.type");
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {NotificationBanner} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const NotificationBanner = function NotificationBanner({ id = 'notification-banner', label = 'Information', icon: hasIcon, content, children, hasClose = true, className, headingLevel, attributes: { 'aria-label': ariaLabel = 'Notification', ...attributes } = {}, }) {
    const [isVisible, setVisible] = (0, react_1.useState)(true);
    // const ref = useRef(null);
    const icon = (0, react_1.useMemo)(() => {
        if (typeof hasIcon === 'string') {
            return hasIcon;
        }
        return hasIcon ? 'priority_high' : false;
    }, [hasIcon]);
    if (!isVisible) {
        return false;
    }
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_notification', 'ds_reversed', className), id: id, "aria-label": ariaLabel, ...attributes },
        react_1.default.createElement(Wrapper_1.default, null,
            react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_notification__content', hasClose ? 'ds_notification__content--has-close' : '') },
                label && (react_1.default.createElement(Heading_1.default, { level: headingLevel, className: "visually-hidden" }, (0, htmlToReact_1.default)(label, false))),
                icon && (react_1.default.createElement("span", { className: (0, classNames_1.default)('ds_notification__icon', 'ds_notification__icon--inverse', 'ds_notification__icon--colour'), "aria-hidden": "true" },
                    react_1.default.createElement(Icon_1.default, { icon: icon, size: Icon_type_1.IconSize.Fill, accessible: false }))),
                react_1.default.createElement("div", { className: "ds_notification__text" },
                    content && (0, htmlToReact_1.default)(content),
                    children),
                hasClose && (react_1.default.createElement("button", { className: (0, classNames_1.default)('ds_notification__close', 'js-close-notification'), type: "button", "aria-controls": id, onClick: (e) => {
                        e.preventDefault();
                        setVisible(false);
                    } },
                    react_1.default.createElement("span", { className: "visually-hidden" }, "Close this notification"),
                    react_1.default.createElement(Icon_1.default, { icon: "close", size: Icon_type_1.IconSize.Fill, accessible: false })))))));
};
exports.default = NotificationBanner;
