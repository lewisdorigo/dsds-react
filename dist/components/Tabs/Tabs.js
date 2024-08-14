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
const tabs_1 = __importDefault(require("@scottish-government/design-system/src/components/tabs/tabs"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const Heading_1 = __importDefault(require("../Heading"));
/**
 * @param {Tabs} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Tabs = function Tabs({ items = [], label, bordered = true, id: rawId, attributes = {}, headingLevel = 2, }) {
    const ref = (0, react_1.useRef)(null);
    const id = rawId || 'tabs';
    (0, react_1.useEffect)(() => {
        if (ref.current) {
            new tabs_1.default(ref.current).init();
        }
    }, [ref]);
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_tabs'), id: id, ...attributes, ref: ref },
        label && (react_1.default.createElement(Heading_1.default, { level: headingLevel, className: "ds_tabs__title", id: `${id}-title` }, (0, htmlToReact_1.default)(label, false))),
        react_1.default.createElement("nav", { className: "ds_tabs__navigation" },
            react_1.default.createElement("ul", { className: "ds_tabs__list", id: `${id}-tablist`, role: "tablist", "aria-labelledby": `${id}-title` }, items.map(({ id: itemId, label: tabLabel }) => (react_1.default.createElement("li", { className: "ds_tabs__tab", key: `${id}-tablist-${itemId}` },
                react_1.default.createElement("a", { className: "ds_tabs__tab-link", href: `#${id}-${itemId}`, "aria-controls": `${id}-${itemId}`, id: `#${id}-${itemId}-link` }, (0, htmlToReact_1.default)(tabLabel, false))))))),
        items.map(({ id: itemId, content }) => (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_tabs__content', bordered ? 'ds_tabs__content--bordered' : ''), id: `${id}-${itemId}`, key: `${id}-${itemId}`, "aria-labelledby": `#${id}-${itemId}-link`, role: "tabpanel" }, (0, htmlToReact_1.default)(content))))));
};
exports.default = Tabs;
