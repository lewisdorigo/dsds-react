'use client';

import React, { useContext } from 'react';

import classNames from '../../lib/classNames';
import { FormContext } from '../../context/FormContext';

import * as Types from './Select.type';
/**
 * @param {Types.Select} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Select:React.FC<Omit<Types.Select, 'type'>> = function Select({
    id,
    name,
    className,
    value,
    error,
    attributes = {},
    width = Types.Width.Fixed20,
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
