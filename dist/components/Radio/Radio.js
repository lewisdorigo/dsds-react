'use client';
import React, { useContext } from 'react';
import { HintText } from '../HintText';
import { FieldGroup } from '../FieldGroup'; // eslint-disable-line import/no-cycle
import { ComponentsHelper } from '../ComponentHelper'; // eslint-disable-line import/no-cycle
import classNames from '../../lib/classNames';
import { FormContext } from '../../context/FormContext';
/**
 * @param {Types.RadioItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const RadioItem = function Radio({ id, label, hintText, value, name, attributes = {}, items, size, }) {
    const { setField } = useContext(FormContext);
    const handleChange = (event) => {
        const { target: { value: fieldValue, }, } = event;
        setField(name, fieldValue);
        if (typeof attributes?.onChange === 'function') {
            attributes.onChange(event);
        }
    };
    return (React.createElement("div", { className: classNames('ds_radio', size ? `ds_radio--${size}` : ''), id: `${id}-wrapper` },
        React.createElement("input", { ...attributes, className: "ds_radio__input", id: id, name: name, type: "radio", value: value, onChange: handleChange, "aria-describedby": classNames(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '') }),
        React.createElement("label", { className: "ds_radio__label", htmlFor: id }, label),
        hintText && React.createElement(HintText, { content: hintText, id: `${id}-hint-text` }),
        items && items.length > 0 && (React.createElement("div", { className: "ds_reveal-content" },
            React.createElement(ComponentsHelper, { components: items })))));
};
/**
 * @param {Types.RadioGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const RadioGroup = function RadioGroup({ id, name, items, className, attributes = {}, value, hintText, inline = false, error, size, }) {
    return (React.createElement(FieldGroup, { inline: inline, className: className }, items?.map((radio, index) => {
        const key = `${id}-${index}`;
        return (React.createElement(RadioItem, { key: key, size: size, ...radio, name: name, attributes: {
                ...attributes,
                ...radio.attributes,
                selected: !!(value && radio.value === value),
                'aria-describedby': classNames(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : ''),
            } }));
    })));
};
export { RadioGroup as Radio };
