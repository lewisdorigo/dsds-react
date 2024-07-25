'use client';

import React from 'react';
import classNames from '../lib/classNames';

import { InputWidth } from '../lib/enums';

/**
 * @param {DSDS.Form.Select} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Select:React.FC<DSDS.Form.Select> = function Select({
    id,
    name,
    className,
    value,
    error,
    attributes = {},
    width = InputWidth.Fixed20,
    allowNull = false,
    items = [],
}) {
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
            >
                {allowNull && (
                    <option
                        value=""
                        aria-label="Please select an option"
                    />
                )}
                {items.map((item) => (
                    <option
                        {...item.attributes}
                        key={item.id}
                        id={item.id}
                        value={item.value}
                    >
                        { item.label }
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
