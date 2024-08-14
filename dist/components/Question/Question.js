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
const character_count_1 = __importDefault(require("@scottish-government/design-system/src/forms/character-count/character-count"));
const WrapperTag_1 = __importDefault(require("../WrapperTag"));
const Label_1 = __importDefault(require("../Label"));
const HintText_1 = __importDefault(require("../HintText"));
const ErrorMessage_1 = require("../ErrorMessage");
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {Question} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Question = function Question({ className, children, field, }) {
    const ref = (0, react_1.useRef)(null);
    const { label: rawLabel, id, type, hintText, content, error, required, attributes: { maxLength = 0, } = {}, } = field;
    let label;
    let labelHidden = false;
    if (rawLabel
        && typeof rawLabel.label !== 'undefined') {
        label = (0, htmlToReact_1.default)(rawLabel.label, false);
        labelHidden = rawLabel.hidden || false;
    }
    else {
        label = (0, htmlToReact_1.default)(rawLabel, false);
    }
    label = (react_1.default.createElement(react_1.default.Fragment, null,
        label,
        !required && (react_1.default.createElement(react_1.default.Fragment, null,
            ' ',
            react_1.default.createElement("span", { className: "sss_optional-label" }, "(optional)")))));
    let tag = 'div';
    switch (type) {
        case 'radio':
        case 'checkbox':
            tag = 'fieldset';
            break;
        case 'date':
            tag = field.multiple ? 'fieldset' : 'div';
            break;
        default:
    }
    (0, react_1.useEffect)(() => {
        if (!!ref.current || typeof window === 'undefined') {
            return;
        }
        if (maxLength) {
            new character_count_1.default(ref.current).init();
        }
    }, [ref, maxLength]);
    return (react_1.default.createElement(WrapperTag_1.default, { tag: tag, id: `${id}-question`, className: (0, classNames_1.default)('ds_question', error ? 'ds_question--error' : '', className), "data-module": maxLength ? 'ds-character-count' : undefined, ref: ref },
        (tag === 'div'
            ? (react_1.default.createElement(Label_1.default, { className: labelHidden ? 'visually-hidden' : '', htmlFor: id }, label))
            : (react_1.default.createElement("legend", { className: (0, classNames_1.default)('ds_label', labelHidden ? 'visually-hidden' : '') }, label))),
        content && (0, htmlToReact_1.default)(content),
        hintText && react_1.default.createElement(HintText_1.default, { content: hintText, id: `${id}-hint-text` }),
        error && react_1.default.createElement(ErrorMessage_1.ErrorMessages, { items: error, id: `${id}-errors` }),
        children));
};
exports.default = Question;
