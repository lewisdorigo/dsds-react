"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const CategoryItem_1 = __importDefault(require("../CategoryItem"));
const Image_1 = __importDefault(require("../Image"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const AspectBox_type_1 = require("../AspectBox/AspectBox.type");
/**
 * @param {Card} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Card = function Card({ tag = 'div', id, label, content, children, className, headingLevel = 2, link, image, attributes = {}, }) {
    return (react_1.default.createElement(WrapperTag_1.default, { tag: tag, id: id, className: (0, classNames_1.default)('ds_card', link ? 'ds_card--has-hover' : '', className), ...attributes },
        image && (react_1.default.createElement("div", { className: "ds_card__media" },
            react_1.default.createElement(Image_1.default, { ratio: AspectBox_type_1.AspectRatio.TwentyOneByNine, alt: "", ...image }))),
        react_1.default.createElement(CategoryItem_1.default, { tag: "article", headingLevel: headingLevel, label: label, link: link, content: content }, children)));
};
exports.default = Card;
