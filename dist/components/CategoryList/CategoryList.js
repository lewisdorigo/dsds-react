"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const CategoryItem_1 = __importDefault(require("../CategoryItem"));
const Card_1 = __importDefault(require("../Card"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
/**
 * @param {CategoryList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const CategoryList = function CategoryList({ tag = 'ul', id, layout, spacing, items = [], className, attributes = {}, }) {
    return (react_1.default.createElement(WrapperTag_1.default, { tag: tag, id: id, className: (0, classNames_1.default)('ds_category-list', layout ? `ds_category-list--${layout}` : '', spacing ? `ds_category-list--${spacing}` : '', className), ...attributes }, items.map((item, index) => {
        const key = `${id}-${index}`;
        switch (item.type) {
            case 'card':
                return (react_1.default.createElement(Card_1.default, { key: key, ...item, tag: "li" }));
            default:
                return (react_1.default.createElement(CategoryItem_1.default, { key: key, ...item, tag: "li" }));
        }
    })));
};
exports.default = CategoryList;
