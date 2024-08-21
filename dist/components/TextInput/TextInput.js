'use client';
import React, { useContext } from 'react';
import classNames from '../../lib/classNames';
import { FormContext } from '../../context/FormContext';
import * as Types from './TextInput.type';
/**
 * @param {Types.TextInput} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const TextInput = function TextInput({ type: rawType = Types.Type.Text, id, name, className, hintText, value, error, inputMode: rawInputMode, width = Types.Width.Fixed20, attributes = {}, }) {
    const { setField } = useContext(FormContext);
    let inputMode = rawInputMode || attributes.inputMode;
    let type = rawType;
    if (!Object.values(Types.Type).includes(type)) {
        type = Types.Type.Text;
    }
    if (type === Types.Type.Number && !attributes?.inputMode) {
        type = Types.Type.Text;
        inputMode = Types.Mode.Numeric; // eslint-disable-line no-param-reassign
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
    return (React.createElement("input", { ...attributes, type: type, id: id, name: name, defaultValue: value, "data-1p-ignore": true, inputMode: inputMode, className: classNames('ds_input', width ? `ds_input--${width}` : '', error ? 'ds_input--error' : '', className), onBlur: handleBlur, onChange: handleChange, "aria-describedby": classNames(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : '') }));
};
