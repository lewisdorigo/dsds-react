"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Metadata_1 = __importDefault(require("../Metadata"));
const Heading_1 = __importDefault(require("../Heading"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {PageHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const PageHeader = function PageHeader({ id = 'page-header', label, title, metadata, className, headingLevel = 1, attributes: { 'aria-label': ariaLabel = 'Page Header', ...attributes } = {}, }) {
    return (react_1.default.createElement("header", { id: id, className: (0, classNames_1.default)('ds_page-header', className), "aria-label": ariaLabel, ...attributes },
        label && (react_1.default.createElement("span", { className: "ds_page-header__label ds_content-label" }, (0, htmlToReact_1.default)(label, false))),
        react_1.default.createElement(Heading_1.default, { level: headingLevel, id: `${id}-title`, className: (0, classNames_1.default)('ds_page-header__title', headingLevel > 1 ? 'alpha' : '') }, (0, htmlToReact_1.default)(title, false)),
        metadata && (react_1.default.createElement(Metadata_1.default, { id: `${id}-metadata`, items: metadata }))));
};
exports.default = PageHeader;
