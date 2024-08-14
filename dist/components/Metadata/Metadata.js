"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataItem = void 0;
const react_1 = __importDefault(require("react"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {MetadataItemProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const MetadataItem = function MetadataItem({ label, value: rawValue, hideLabel, isLabel, }) {
    let value;
    if (rawValue instanceof Date) {
        value = (react_1.default.createElement("time", { dateTime: rawValue.toISOString() }, rawValue.toLocaleDateString('en-GB', {
            dateStyle: 'long',
        })));
    }
    else {
        value = (0, htmlToReact_1.default)(rawValue, false);
    }
    return (react_1.default.createElement("div", { className: "ds_metadata__item" },
        react_1.default.createElement("dt", { className: (0, classNames_1.default)('ds_metadata__key', hideLabel ? 'visually-hidden' : '') }, label),
        ' ',
        react_1.default.createElement("dd", { className: (0, classNames_1.default)('ds_metadata__value', isLabel ? 'ds_content-label' : '') },
            value,
            ' ')));
};
exports.MetadataItem = MetadataItem;
/**
 * @param {MetadataProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Metadata = function Metadata({ items, className, inline = false, attributes = {}, }) {
    return (react_1.default.createElement("dl", { className: (0, classNames_1.default)('ds_metadata', inline ? 'ds_metadata--inline' : '', className), ...attributes }, items && items.map((item, index) => {
        const itemKey = `meta-data-${index}`;
        return react_1.default.createElement(exports.MetadataItem, { key: itemKey, ...item });
    })));
};
exports.default = Metadata;
