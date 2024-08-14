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
const side_navigation_1 = __importDefault(require("@scottish-government/design-system/src/components/side-navigation/side-navigation"));
const Link_1 = __importDefault(require("../Link"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {SideNavigationList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SideNavigationList = function SideNavigationList({ id = 'side-navigation', level = 0, items, }) {
    const idName = `${id}-${level}`;
    return (react_1.default.createElement("ul", { className: "ds_side-navigation__list", id: idName }, items.map(({ items: children, className, current, ...link }, index) => {
        const key = `${id}-${index}`;
        return (react_1.default.createElement("li", { key: key, className: (0, classNames_1.default)('ds_side-navigation__item', (children && children.length
                ? 'ds_side-navigation__item--has-children'
                : ''), (children && children.length
                ? 'ds_side-navigation__item--has-children--expanded'
                : '')) },
            react_1.default.createElement(Link_1.default, { tabText: false, ...link, className: (0, classNames_1.default)(current ? 'ds_current' : '', className), baseClass: "ds_side-navigation__link", "aria-current": current ? 'page' : undefined }),
            children && children.length > 0 && (react_1.default.createElement(SideNavigationList, { id: key, level: level + 1, items: children }))));
    })));
};
/**
 * @param {SideNavigation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SideNavigation = function SideNavigation({ items = [], id = 'side-navigation', label = 'Pages in this section', className, attributes: { 'aria-label': ariaLabel = 'Sections', ...attributes } = {}, }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!ref.current || !window) {
            return;
        }
        new side_navigation_1.default(ref.current).init();
    }, [ref]);
    return (react_1.default.createElement("nav", { className: (0, classNames_1.default)('ds_side-navigation', className), "aria-label": ariaLabel, id: id, ...attributes, ref: ref },
        react_1.default.createElement("input", { type: "checkbox", className: "fully-hidden js-toggle-side-navigation", id: `show-${id}`, "aria-controls": `${id}-0` }),
        react_1.default.createElement("label", { className: "ds_side-navigation__expand ds_link", htmlFor: `show-${id}` },
            react_1.default.createElement("span", { className: "visually-hidden" }, "Show all"),
            (0, htmlToReact_1.default)(label),
            react_1.default.createElement("span", { className: "ds_side-navigation__expand-indicator" })),
        react_1.default.createElement(SideNavigationList, { id: id, level: 0, items: items })));
};
exports.default = SideNavigation;
