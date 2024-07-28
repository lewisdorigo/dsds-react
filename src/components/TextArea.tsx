'use client';

import React, { useContext } from 'react';

import classNames from '../lib/classNames';
import FormContext from '../context/FormContext';

/**
 * @param {DSDS.Component.TextArea} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TextArea:React.FC<DSDS.Component.TextArea> = function TextArea({
    id,
    name,
    className,
    value,
    error,
    attributes: {
        rows = 3,
        ...attributes
    } = {},
}) {
    const { setField } = useContext(FormContext);

    const handleBlur = (event:React.FocusEvent<HTMLTextAreaElement>) => {
        const { target } = event;
        target.value = target.value.trim();

        if (typeof attributes?.onBlur === 'function') {
            attributes.onBlur(event);
        }
    };

    const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            target: {
                value: fieldValue,
            },
        } = event;

        setField(name, fieldValue);

        if (typeof attributes?.onChange === 'function') {
            attributes.onChange(event);
        }
    };

    return (
        <textarea
            {...attributes}
            className={classNames(
                'ds_input',
                error ? 'ds_input--error' : '',
                className,
            )}
            rows={rows}
            id={id}
            name={name}
            defaultValue={value}
            onBlur={handleBlur}
            onChange={handleChange}
        />
    );
};

export default TextArea;
