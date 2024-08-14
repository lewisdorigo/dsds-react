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
const TextInput_type_1 = require("./TextInput.type");
/**
 * @param {TextInput} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TextInput = function TextInput({ type: rawType = TextInput_type_1.InputTypes.Text, id, name, className, hintText, value, error, width = TextInput_type_1.InputWidth.Fixed20, attributes = {}, }) {
    const { setField } = (0, react_1.useContext)(FormContext_1.default);
    let type = rawType;
    if (!Object.values(TextInput_type_1.InputTypes).includes(type)) {
        type = TextInput_type_1.InputTypes.Text;
    }
    if (type === TextInput_type_1.InputTypes.Number && !attributes?.inputMode) {
        type = TextInput_type_1.InputTypes.Text;
        attributes.inputMode = TextInput_type_1.InputModes.Numeric; // eslint-disable-line no-param-reassign
    }
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
    return (react_1.default.createElement("input", { ...attributes, type: type, id: id, name: name, defaultValue: value, "data-1p-ignore": true, className: (0, classNames_1.default)('ds_input', width ? `ds_input--${width}` : '', error ? 'ds_input--error' : '', className), onBlur: handleBlur, onChange: handleChange, "aria-describedby": (0, classNames_1.default)(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : '') }));
};
exports.default = TextInput;
