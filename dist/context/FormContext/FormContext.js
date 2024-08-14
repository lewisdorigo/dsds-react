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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const react_1 = __importStar(require("react"));
const FormContext = (0, react_1.createContext)({
    setFields: () => ({}),
    setField: () => ({}),
    getField: () => ({}),
    fields: {},
});
/**
 * React context provider. Should be wrapped around your form so that form fields can be updated.
 *
 * @param {FormProvider} params - The form props.
 * @returns {JSX.Element} - The context provider.
 */
const Provider = function Provider({ initial = {}, children, }) {
    const [fields, setFields] = (0, react_1.useState)(initial);
    /**
     * Sets the value of a field within the form context.
     *
     * @param {string} name - The name of the field to set.
     * @param {unknown} value - The value of the field to set.
     */
    const setField = (0, react_1.useCallback)((name, value) => (setFields({
        ...fields,
        [name]: value,
    })), [fields]);
    /**
     * Gets a value of a field within the context.
     *
     * @param {string} name - The name of the field to get.
     * @returns {unknown} - The value of the field.
     */
    const getField = (0, react_1.useCallback)((name) => fields[name], [fields]);
    const context = (0, react_1.useMemo)(() => ({
        setFields,
        setField,
        getField,
        fields,
    }), [fields, setFields, setField, getField]);
    return (react_1.default.createElement(FormContext.Provider, { value: context }, children));
};
exports.Provider = Provider;
exports.default = FormContext;
