"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Image_1 = __importDefault(require("../Image"));
const Heading_1 = __importDefault(require("../Heading"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {FeatureHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FeatureHeader = function FeatureHeader({ title, className, content, hasBackground = false, style, children, image, headingLevel = 1, attributes: { 'aria-label': ariaLabel = 'Page Header', ...attributes } = {}, }) {
    return (react_1.default.createElement("header", { className: (0, classNames_1.default)('ds_feature-header', hasBackground ? 'ds_feature-header--background' : '', style ? `ds_feature-header--${style}` : '', className), "aria-label": ariaLabel, ...attributes },
        react_1.default.createElement("div", { className: "ds_feature-header__primary" },
            react_1.default.createElement(Heading_1.default, { level: headingLevel, className: "ds_feature-header__title" }, (0, htmlToReact_1.default)(title, false)),
            content && (0, htmlToReact_1.default)(content),
            children),
        react_1.default.createElement("div", { className: "ds_feature-header__secondary" }, image && (react_1.default.createElement(Image_1.default, { alt: "", ...image, className: "ds_feature-header__image" })))));
};
exports.default = FeatureHeader;
