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
const classNames_1 = __importDefault(require("../../lib/classNames"));
const FormContext_1 = __importDefault(require("../../context/FormContext"));
const TextArea_type_1 = require("./TextArea.type");
/**
 * @param {TextArea} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TextArea = function TextArea({ id, name, className, value, hintText, error, size = TextArea_type_1.TextAreaSize.Normal, attributes = {}, }) {
    const { setField } = (0, react_1.useContext)(FormContext_1.default);
    const handleBlur = (event) => {
        const { target } = event;
        target.value = target.value.trim();
        if (typeof attributes?.onBlur === 'function') {
            attributes.onBlur(event);
        }
    };
    const handleChange = (event) => {
        const { target: { value: fieldValue, }, } = event;
        setField(name, fieldValue);
        if (typeof attributes?.onChange === 'function') {
            attributes.onChange(event);
        }
    };
    let rows;
    switch (size) {
        case TextArea_type_1.TextAreaSize.Small:
            rows = 2;
            break;
        case TextArea_type_1.TextAreaSize.Large:
            rows = 5;
            break;
        default:
            rows = attributes.rows || 3;
            break;
    }
    return (react_1.default.createElement("textarea", { ...attributes, className: (0, classNames_1.default)('ds_input', error ? 'ds_input--error' : '', className), rows: rows, id: id, name: name, defaultValue: value, onBlur: handleBlur, onChange: handleChange, "aria-describedby": (0, classNames_1.default)(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : '') }));
};
exports.default = TextArea;
