'use client';

import React, { useContext } from 'react';

import classNames from '../lib/classNames';
import { InputWidth } from '../lib/enums';
import FormContext from '../context/FormContext';

/**
 * @param {DSDS.Component.Select} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Select:React.FC<DSDS.Component.Select> = function Select({
    id,
    name,
    className,
    value,
    error,
    attributes = {},
    width = InputWidth.Fixed20,
    allowNull = true,
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
