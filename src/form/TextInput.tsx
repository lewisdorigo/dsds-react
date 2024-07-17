'use client';

import React from 'react';
import classNames from '../lib/classNames';

import { InputWidth, InputTypes, InputModes } from '../lib/enums';

/**
 * @param {DSDS.Form.TextInput} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TextInput:React.FC<DSDS.Form.TextInput> = function TextInput({
    type: rawType = InputTypes.Text,
    id,
    name,
    className,
    value,
    error,
    width = InputWidth.Fixed20,
    attributes = {},
}) {
    let type:React.HTMLInputTypeAttribute = rawType;

    if (!(type in InputTypes)) {
        type = InputTypes.Text;
    }

    if (type === InputTypes.Number && !attributes?.inputMode) {
        type = InputTypes.Text;
        attributes.inputMode = InputModes.Numeric; // eslint-disable-line no-param-reassign
    }

    const handleBlur = (event:React.FocusEvent<HTMLInputElement>) => {
        const { target } = event;
        target.value = target.value.trim();

        if (typeof attributes?.onBlur === 'function') {
            attributes.onBlur(event);
        }
    };

    return (
        <input
            {...attributes}
            type={type}
            id={id}
            name={name}
            defaultValue={value}
            data-1p-ignore
            className={classNames(
                'ds_input',
                width ? `ds_input--${width}` : '',
                error ? 'ds_input--error' : '',
                className,
            )}
            onBlur={handleBlur}
        />
    );
};

export default TextInput;
