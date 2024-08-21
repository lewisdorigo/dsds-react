'use client';
import React, { useRef, useContext, useState, useMemo, } from 'react';
import { HintText } from '../HintText';
import { FieldGroup } from '../FieldGroup'; // eslint-disable-line import/no-cycle
import classNames from '../../lib/classNames';
import { FormContext } from '../../context/FormContext/FormContext';
/**
 * @param {Types.CheckboxItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const CheckboxItem = function Checkbox({ id, label, hintText, value, name, attributes = {}, size, exclusive = false, }) {
    return (React.createElement(React.Fragment, null,
        exclusive && (React.createElement("p", { className: "ds_checkbox-separator" }, typeof exclusive === 'string' ? exclusive : 'or')),
        React.createElement("div", { className: classNames('ds_checkbox', size ? `ds_checkbox--${size}` : ''), id: `${id}-wrapper` },
            React.createElement("input", { ...attributes, className: "ds_checkbox__input", id: id, name: name, type: "checkbox", value: value, "aria-describedby": hintText ? `${id}-hint-text` : undefined, "data-behaviour": exclusive ? 'exclusive' : undefined }),
            React.createElement("label", { className: "ds_checkbox__label", htmlFor: id }, label),
            hintText && React.createElement(HintText, { content: hintText, id: `${id}-hint-text` }))));
};
/**
 * @param {Types.CheckboxGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const CheckboxGroup = function CheckboxGroup({ id, name, items: rawItems, className, attributes = {}, hintText, error, size, value: rawValue = [], }) {
    const ref = useRef(null);
    const [value, setValue] = useState(rawValue);
    const { setField } = useContext(FormContext);
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
    const items = useMemo(() => (rawItems?.map((item) => ({
        ...item,
        attributes: {
            ...item.attributes,
            checked: item.value ? value.includes(item.value) : false,
        },
    }))), [value, rawItems]);
    return (React.createElement(FieldGroup, { id: id, className: className, ref: ref }, items?.map((checkbox, index) => {
        const key = `${id}-${index}`;
        return (React.createElement(CheckboxItem, { key: key, size: size, ...checkbox, name: name, attributes: {
                ...attributes,
                ...checkbox.attributes,
                onChange: (event) => {
                    handleChange(event);
                    if (checkbox.attributes?.onChange) {
                        checkbox.attributes.onChange(event);
                    }
                },
                'aria-describedby': classNames(attributes['aria-describedby'], hintText ? `${id}-hint-text` : '', error ? `${id}-errors` : ''),
            } }));
    })));
};
export { CheckboxGroup as Checkbox };
