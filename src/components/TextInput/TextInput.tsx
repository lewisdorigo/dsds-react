'use client';

import React, { useContext } from 'react';

import classNames from '../../lib/classNames';
import FormContext from '../../context/FormContext';

import type { TextInput } from './TextInput.type';
import { InputTypes, InputModes, InputWidth } from './TextInput.type';

/**
 * @param {TextInput} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TextInput:React.FC<TextInput> = function TextInput({
    type: rawType = InputTypes.Text,
    id,
    name,
    className,
    hintText,
    value,
    error,
    width = InputWidth.Fixed20,
    attributes = {},
}) {
    const { setField } = useContext(FormContext);

    let type:React.HTMLInputTypeAttribute = rawType;

    if (!Object.values(InputTypes).includes(type as InputTypes)) {
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

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
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
            onChange={handleChange}
            aria-describedby={classNames(
                attributes['aria-describedby'],
                hintText ? `${id}-hint-text` : '',
                error ? `${id}-errors` : '',
            )}
        />
    );
};

export default TextInput;
