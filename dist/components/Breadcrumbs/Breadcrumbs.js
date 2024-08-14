"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Link_1 = __importDefault(require("../Link"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {Breadcrumbs} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Breadcrumbs = function Breadcrumbs({ items = [], id = 'breadcrumbs', hideCurrent = false, className, attributes: { 'aria-label': ariaLabel = 'Breadcrumbs', ...attributes } = {}, }) {
    return (react_1.default.createElement("nav", { className: className, id: id, ...attributes, "aria-label": ariaLabel },
        react_1.default.createElement("ol", { className: "ds_breadcrumbs" }, items.map((item, index) => {
            const key = `${id}-${index}`;
            const current = index === items.length - 1;
            return (react_1.default.createElement("li", { key: key, className: (0, classNames_1.default)('ds_breadcrumbs__item', current && hideCurrent ? 'visually-hidden' : undefined) }, (current
                ? (react_1.default.createElement(react_1.default.Fragment, null,
                    item.content && (0, htmlToReact_1.default)(item.content, false),
                    item.children))
                : (react_1.default.createElement(Link_1.default, { ...item, baseClass: "ds_breadcrumbs__link", tabText: false, "aria-current": current ? 'page' : undefined })))));
        }))));
};
exports.default = Breadcrumbs;
