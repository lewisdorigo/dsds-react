'use client';

import React, { useContext } from 'react';

import classNames from '../../lib/classNames';
import { FormContext } from '../../context/FormContext';

import * as Types from './FileUpload.type';
import { Label } from '../Label';

/**
 * @param {Types.FileUpload} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const FileUpload:React.FC<Omit<Types.FileUpload, 'type'>> = function FileUpload({
    id,
    name,
    className,
    hintText,
    value,
    error,
    attributes = {},
}) {
    const { setField } = useContext(FormContext);

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
        <div className="ds_file-upload" id={`${id}-container`}>
            <Label
                htmlFor={id}
                tabIndex={-1}
                className="visually-hidden"
                aria-hidden
            >
                Upload a file
            </Label>

            <input
                {...attributes}
                type="file"
                id={id}
                name={name}
                defaultValue={value}
                className={classNames(
                    'ds_file-upload__input',
                    className,
                )}
                onChange={handleChange}
                aria-describedby={classNames(
                    attributes['aria-describedby'],
                    hintText ? `${id}-hint-text` : '',
                    error ? `${id}-errors` : '',
                )}
            />
        </div>
    );
};
