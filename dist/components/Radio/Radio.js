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
exports.Radio = void 0;
const react_1 = __importStar(require("react"));
const HintText_1 = __importDefault(require("../HintText"));
const FieldGroup_1 = __importDefault(require("../FieldGroup")); // eslint-disable-line import/no-cycle
const ComponentHelper_1 = __importDefault(require("../ComponentHelper/ComponentHelper")); // eslint-disable-line import/no-cycle
const classNames_1 = __importDefault(require("../../lib/classNames"));
const FormContext_1 = __importDefault(require("../../context/FormContext"));
/**
 * @param {RadioItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Radio = function Radio({ id, label, hintText, value, name, attributes = {}, items, size, }) {
    const { setField } = (0, react_1.useContext)(FormContext_1.default);
    const handleChange = (event) => {
        const { target: { value: fieldValue, }, } = event;
        setField(name, fieldValue);
        if (typeof attributes?.onChange === 'function') {
            attributes.onChange(event);
        }
    };
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_radio', size ? `ds_radio--${size}` : ''), id: `${id}-wrapper` },
        react_1.default.createElement("input", { ...attributes, className: "ds_radio__input", id: id, name: name, type: "radio", value: value, onChange: handleChange, "aria-describedby": (0, classNames_1.default)(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '') }),
        react_1.default.createElement("label", { className: "ds_radio__label", htmlFor: id }, label),
        hintText && react_1.default.createElement(HintText_1.default, { content: hintText, id: `${id}-hint-text` }),
        items && items.length > 0 && (react_1.default.createElement("div", { className: "ds_reveal-content" },
            react_1.default.createElement(ComponentHelper_1.default, { components: items })))));
};
exports.Radio = Radio;
/**
 * @param {RadioGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const RadioGroup = function RadioGroup({ id, name, items, className, attributes = {}, value, hintText, inline = false, error, size, }) {
    return (react_1.default.createElement(FieldGroup_1.default, { inline: inline, className: className }, items?.map((radio, index) => {
        const key = `${id}-${index}`;
        return (react_1.default.createElement(exports.Radio, { key: key, size: size, ...radio, name: name, attributes: {
                ...attributes,
                ...radio.attributes,
                selected: !!(value && radio.value === value),
                'aria-describedby': (0, classNames_1.default)(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : ''),
            } }));
    })));
};
exports.default = RadioGroup;
