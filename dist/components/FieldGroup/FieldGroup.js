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
const Heading_1 = __importDefault(require("../Heading"));
const HintText_1 = __importDefault(require("../HintText"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const ComponentHelper_1 = __importDefault(require("../ComponentHelper/ComponentHelper")); // eslint-disable-line import/no-cycle
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * Wraps any given children in a given `tag`.
 *
 * @param {FieldGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
// eslint-disable-next-line prefer-arrow-callback
const FieldGroup = (0, react_1.forwardRef)(function FieldGroup({ type = 'group', tag: rawTag, className, children, content, id, label = '', headingLevel = 2, inline = false, hintText, items, attributes = {}, }, ref) {
    let tag;
    if (rawTag) {
        tag = rawTag;
    }
    else {
        tag = type === 'group' ? 'div' : 'fieldset';
    }
    return (react_1.default.createElement(WrapperTag_1.default, { ...attributes, id: id, tag: tag, className: (0, classNames_1.default)('ds_field-group', inline ? 'ds_field-group--inline' : '', className), ref: ref },
        label && (react_1.default.createElement(Heading_1.default, { level: headingLevel, isLegend: type === 'fieldset' }, label)),
        content && (0, htmlToReact_1.default)(content),
        hintText && react_1.default.createElement(HintText_1.default, { content: hintText }),
        children,
        items && react_1.default.createElement(ComponentHelper_1.default, { components: items, headingLevel: headingLevel })));
});
exports.default = FieldGroup;
