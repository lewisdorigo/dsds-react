"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../../components/WrapperTag"));
const HidePage_1 = __importDefault(require("../../components/HidePage"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const Layout_type_1 = require("./Layout.type");
/**
 * @param {Layout} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Layout = function Layout({ tag = 'main', id = 'main-content', layout = Layout_type_1.LayoutTypes.Article, className, children, header, partner, navigation, content, list, grid, footer, sidebar, feedback, hasHidePage = false, }) {
    return (react_1.default.createElement(WrapperTag_1.default, { tag: tag, id: id, className: (0, classNames_1.default)('ds_layout', layout ? `ds_layout--${layout}` : '', className) },
        header && react_1.default.createElement("div", { className: "ds_layout__header" }, header),
        partner && react_1.default.createElement("div", { className: "ds_layout__partner" }, partner),
        navigation && react_1.default.createElement("div", { className: "ds_layout__navigation" }, navigation),
        (content || children) && (react_1.default.createElement("div", { className: "ds_layout__content" },
            content,
            children)),
        list && react_1.default.createElement("div", { className: "ds_layout__list" }, list),
        grid && react_1.default.createElement("div", { className: "ds_layout__grid" }, grid),
        footer && react_1.default.createElement("div", { className: "ds_layout__footer" }, footer),
        (sidebar || hasHidePage) && (react_1.default.createElement("div", { className: "ds_layout__sidebar" },
            hasHidePage && react_1.default.createElement(HidePage_1.default, null),
            sidebar)),
        feedback && react_1.default.createElement("div", { className: "ds_layout__feedback" }, feedback)));
};
exports.default = Layout;
