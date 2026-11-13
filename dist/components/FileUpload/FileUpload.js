'use client';
import React, { useContext } from 'react';
import classNames from '../../lib/classNames';
import { FormContext } from '../../context/FormContext';
import { Label } from '../Label';
/**
 * @param {Types.FileUpload} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const FileUpload = function FileUpload({ id, name, className, hintText, value, error, attributes = {}, }) {
    const { setField } = useContext(FormContext);
    const handleChange = (event) => {
        const { target: { value: fieldValue, }, } = event;
        setField(name, fieldValue);
        if (typeof attributes?.onChange === 'function') {
            attributes.onChange(event);
        }
    };
    return (React.createElement("div", { className: "ds_file-upload", id: `${id}-container` },
        React.createElement(Label, { htmlFor: id, tabIndex: -1, className: "visually-hidden", "aria-hidden": true }, "Upload a file"),
        React.createElement("input", { ...attributes, type: "file", id: id, name: name, defaultValue: value, className: classNames('ds_file-upload__input', className), onChange: handleChange, "aria-describedby": classNames(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : '') })));
};
