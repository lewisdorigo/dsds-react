'use client';
import React, { useContext } from 'react';
import classNames from '../../lib/classNames';
import { FormContext } from '../../context/FormContext';
import * as Types from './TextArea.type';
/**
 * @param {Types.TextArea} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const TextArea = function TextArea({ id, name, className, value, hintText, error, size = Types.Size.Normal, attributes = {}, }) {
    const { setField } = useContext(FormContext);
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
        case Types.Size.Small:
            rows = 2;
            break;
        case Types.Size.Large:
            rows = 5;
            break;
        default:
            rows = attributes.rows || 3;
            break;
    }
    return (React.createElement("textarea", { ...attributes, className: classNames('ds_input', error ? 'ds_input--error' : '', className), rows: rows, id: id, name: name, defaultValue: value, onBlur: handleBlur, onChange: handleChange, "aria-describedby": classNames(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : '') }));
};
