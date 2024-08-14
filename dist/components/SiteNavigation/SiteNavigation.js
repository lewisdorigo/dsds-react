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
const site_navigation_1 = __importDefault(require("@scottish-government/design-system/src/components/site-navigation/site-navigation"));
const Link_1 = __importDefault(require("../Link"));
const Icon_1 = __importDefault(require("../Icon"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {SiteNavigation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteNavigation = function SiteNavigation({ id = 'site-navigation', className, 'aria-label': ariaLabel = 'Site Navigation', menuItems, mobile = false, ...props }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (mobile && typeof window !== 'undefined') {
            new site_navigation_1.default(ref.current).init();
        }
    }, [mobile, ref]);
    if (!menuItems || menuItems.length < 1) {
        return null;
    }
    const navigation = (react_1.default.createElement("nav", { id: id, className: (0, classNames_1.default)('ds_site-navigation', mobile ? 'ds_site-navigation--mobile' : '', className), "aria-label": ariaLabel, ref: ref, ...props },
        react_1.default.createElement("ul", { className: "ds_site-navigation__list" }, menuItems.map((item, index) => {
            const key = `${id}-${index}`;
            return (react_1.default.createElement("li", { key: key, className: "ds_site-navigation__item" },
                react_1.default.createElement(Link_1.default, { ...item, baseClass: "ds_site-navigation__link", tabText: false, className: (0, classNames_1.default)(item.className, item['aria-current'] === 'page'
                        ? 'ds_current'
                        : undefined) })));
        }))));
    if (!mobile) {
        return navigation;
    }
    const menuToggleId = `${id}-toggle`;
    const menuLabelId = `${id}-label`;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "ds_site-header__controls" },
            react_1.default.createElement("label", { id: menuLabelId, "aria-controls": id, className: "ds_site-header__control js-toggle-menu", htmlFor: menuToggleId },
                react_1.default.createElement("span", { className: "ds_site-header__control-text" }, "Menu"),
                react_1.default.createElement(Icon_1.default, { icon: "menu", className: "ds_site-header__control-icon" }),
                react_1.default.createElement(Icon_1.default, { icon: "close", className: "ds_site-header__control-icon ds_site-header__control-icon--active-icon" }))),
        react_1.default.createElement("input", { className: "ds_site-navigation__toggle", id: menuToggleId, type: "checkbox", "aria-labelledby": menuLabelId }),
        navigation));
};
exports.default = SiteNavigation;
