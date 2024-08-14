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
exports.Checkbox = void 0;
const react_1 = __importStar(require("react"));
const HintText_1 = __importDefault(require("../HintText"));
const FieldGroup_1 = __importDefault(require("../FieldGroup")); // eslint-disable-line import/no-cycle
const classNames_1 = __importDefault(require("../../lib/classNames"));
const FormContext_1 = __importDefault(require("../../context/FormContext/FormContext"));
/**
 * @param {CheckboxItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Checkbox = function Checkbox({ id, label, hintText, value, name, attributes = {}, size, exclusive = false, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        exclusive && (react_1.default.createElement("p", { className: "ds_checkbox-separator" }, typeof exclusive === 'string' ? exclusive : 'or')),
        react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_checkbox', size ? `ds_checkbox--${size}` : ''), id: `${id}-wrapper` },
            react_1.default.createElement("input", { ...attributes, className: "ds_checkbox__input", id: id, name: name, type: "checkbox", value: value, "aria-describedby": hintText ? `${id}-hint-text` : undefined, "data-behaviour": exclusive ? 'exclusive' : undefined }),
            react_1.default.createElement("label", { className: "ds_checkbox__label", htmlFor: id }, label),
            hintText && react_1.default.createElement(HintText_1.default, { content: hintText, id: `${id}-hint-text` }))));
};
exports.Checkbox = Checkbox;
/**
 * @param {CheckboxGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const CheckboxGroup = function CheckboxGroup({ id, name, items: rawItems, className, attributes = {}, hintText, error, size, value: rawValue = [], }) {
    const ref = (0, react_1.useRef)(null);
    const [value, setValue] = (0, react_1.useState)(rawValue);
    const { setField } = (0, react_1.useContext)(FormContext_1.default);
    const handleChange = (event) => {
        /* If the `ref` isn't currently set, we should exist out early…  */
        if (!ref.current) {
            return;
        }
        const { target } = event;
        const { value: fieldValue, checked, } = target;
        let fieldValues = [];
        /**
         * Handle exclusive checkboxes first.
         *
         * If the change as a checking a checkbox that has the `exclusive` property set, we should
         * set the values to *only* include this checkbox, then exit out early.
         */
        if (checked
            && target.getAttribute('data-behaviour') === 'exclusive') {
            fieldValues = [fieldValue];
            setValue(fieldValues);
            setField(name, fieldValues);
            return;
        }
        /**
         * Otherwise, loop thorugh all of the checkboxes selected checkboxes.
         *
         * If it's not an exclusive checkbox, add it's value to the array.
         */
        ref.current
            .querySelectorAll('.ds_checkbox__input:checked')
            .forEach((input) => {
            if (input.getAttribute('data-behaviour') === 'exclusive') {
                return;
            }
            fieldValues.push(input.value);
        });
        setValue(fieldValues);
        setField(name, fieldValues);
    };
    const items = (0, react_1.useMemo)(() => (rawItems?.map((item) => ({
        ...item,
        attributes: {
            ...item.attributes,
            checked: item.value ? value.includes(item.value) : false,
        },
    }))), [value, rawItems]);
    return (react_1.default.createElement(FieldGroup_1.default, { id: id, className: className, ref: ref }, items?.map((checkbox, index) => {
        const key = `${id}-${index}`;
        return (react_1.default.createElement(exports.Checkbox, { key: key, size: size, ...checkbox, name: name, attributes: {
                ...attributes,
                ...checkbox.attributes,
                onChange: (event) => {
                    handleChange(event);
                    if (checkbox.attributes?.onChange) {
                        checkbox.attributes.onChange(event);
                    }
                },
                'aria-describedby': (0, classNames_1.default)(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : ''),
            } }));
    })));
};
exports.default = CheckboxGroup;
