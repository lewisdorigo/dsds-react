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
const TextInput_type_1 = require("../TextInput/TextInput.type");
/**
 * @param {Select} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Select = function Select({ id, name, className, value, error, attributes = {}, width = TextInput_type_1.InputWidth.Fixed20, allowNull = true, hintText, items = [], }) {
    const { setField } = (0, react_1.useContext)(FormContext_1.default);
    const handleChange = (event) => {
        const { target: { value: fieldValue, }, } = event;
        setField(name, fieldValue);
        if (typeof attributes?.onChange === 'function') {
            attributes.onChange(event);
        }
    };
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_select-wrapper', width ? `ds_input--${width}` : '', error ? 'ds_input--error' : ''), id: `${id}-wrapper` },
        react_1.default.createElement("select", { ...attributes, className: (0, classNames_1.default)('ds_select', className), id: id, name: name, defaultValue: value, onChange: handleChange, "aria-describedby": (0, classNames_1.default)(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : '') },
            allowNull && (react_1.default.createElement("option", { key: `${id}-null`, value: "", "aria-label": "Please select an option" })),
            items.map((item, index) => {
                const key = item.id || `${id}-${index}`;
                return (react_1.default.createElement("option", { ...item.attributes, key: key, id: item.id, value: item.value }, item.label));
            })),
        react_1.default.createElement("span", { className: "ds_select-arrow", "aria-hidden": "true" })));
};
exports.default = Select;
