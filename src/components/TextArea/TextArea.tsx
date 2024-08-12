'use client';

import React, { useContext } from 'react';

import classNames from '../../lib/classNames';
import FormContext from '../../context/FormContext';

import type { TextArea } from './TextArea.type';
import { TextAreaSize } from './TextArea.type';

/**
 * @param {TextArea} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TextArea:React.FC<Omit<TextArea, 'type'>> = function TextArea({
    id,
    name,
    className,
    value,
    hintText,
    error,
    size = TextAreaSize.Normal,
    attributes = {},
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

    let rows:number|TextAreaSize;

    switch (size) {
        case TextAreaSize.Small:
            rows = 2;
            break;

        case TextAreaSize.Large:
            rows = 5;
            break;

        default:
            rows = attributes.rows || 3;
            break;
    }

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
            aria-describedby={classNames(
                attributes['aria-describedby'],
                hintText ? `${id}-hint-text` : '',
                error ? `${id}-errors` : '',
            )}
        />
    );
};

export default TextArea;
