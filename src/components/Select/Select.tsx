'use client';

import React, { useContext } from 'react';

import classNames from '../../lib/classNames';
import FormContext from '../../context/FormContext';

import type { Select } from './Select.type';

import { InputWidth } from '../TextInput/TextInput.type';

/**
 * @param {Select} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Select:React.FC<Omit<Select, 'type'>> = function Select({
    id,
    name,
    className,
    value,
    error,
    attributes = {},
    width = InputWidth.Fixed20,
    allowNull = true,
    hintText,
    items = [],
}) {
    const { setField } = useContext(FormContext);

    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
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
        <div
            className={classNames(
                'ds_select-wrapper',
                width ? `ds_input--${width}` : '',
                error ? 'ds_input--error' : '',
            )}
            id={`${id}-wrapper`}
        >
            <select
                {...attributes}
                className={classNames(
                    'ds_select',
                    className,
                )}
                id={id}
                name={name}
                defaultValue={value}
                onChange={handleChange}
                aria-describedby={classNames(
                    attributes['aria-describedby'],
                    hintText ? `${id}-hint-text` : '',
                    error ? `${id}-errors` : '',
                )}
            >
                {allowNull && (
                    <option
                        key={`${id}-null`}
                        value=""
                        aria-label="Please select an option"
                    />
                )}
                {items.map((item, index) => {
                    const key = item.id || `${id}-${index}`;
                    return (
                        <option
                            {...item.attributes}
                            key={key}
                            id={item.id}
                            value={item.value}
                        >
                            { item.label }
                        </option>
                    );
                })}
            </select>
            <span className="ds_select-arrow" aria-hidden="true" />
        </div>
    );
};

export default Select;
