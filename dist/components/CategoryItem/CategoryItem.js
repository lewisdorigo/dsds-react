"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const Link_1 = __importDefault(require("../Link"));
/**
 * @param {CategoryItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const CategoryItem = function CategoryItem({ tag = 'div', id, label, content, children, className, headingLevel = 2, link, attributes = {}, }) {
    return (react_1.default.createElement(WrapperTag_1.default, { tag: tag, id: id, className: (0, classNames_1.default)('ds_category-item', className), ...attributes },
        react_1.default.createElement(WrapperTag_1.default, { tag: `h${headingLevel}`, className: "ds_category-item__title" }, (link
            ? (react_1.default.createElement(Link_1.default, { ...link, baseClass: "ds_category-item__link", tabText: false }, (0, htmlToReact_1.default)(label, false)))
            : (0, htmlToReact_1.default)(label, false))),
        react_1.default.createElement("div", { className: "ds_category-item__summary" },
            content && (0, htmlToReact_1.default)(content),
            children)));
};
exports.default = CategoryItem;
