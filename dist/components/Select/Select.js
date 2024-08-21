'use client';
import React, { useContext } from 'react';
import classNames from '../../lib/classNames';
import { FormContext } from '../../context/FormContext';
import * as Types from './Select.type';
/**
 * @param {Types.Select} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Select = function Select({ id, name, className, value, error, attributes = {}, width = Types.Width.Fixed20, allowNull = true, hintText, items = [], }) {
    const { setField } = useContext(FormContext);
    const handleChange = (event) => {
        const { target: { value: fieldValue, }, } = event;
        setField(name, fieldValue);
        if (typeof attributes?.onChange === 'function') {
            attributes.onChange(event);
        }
    };
    return (React.createElement("div", { className: classNames('ds_select-wrapper', width ? `ds_input--${width}` : '', error ? 'ds_input--error' : ''), id: `${id}-wrapper` },
        React.createElement("select", { ...attributes, className: classNames('ds_select', className), id: id, name: name, defaultValue: value, onChange: handleChange, "aria-describedby": classNames(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : '') },
            allowNull && (React.createElement("option", { key: `${id}-null`, value: "", "aria-label": "Please select an option" })),
            items.map((item, index) => {
                const key = item.id || `${id}-${index}`;
                return (React.createElement("option", { ...item.attributes, key: key, id: item.id, value: item.value }, item.label));
            })),
        React.createElement("span", { className: "ds_select-arrow", "aria-hidden": "true" })));
};
