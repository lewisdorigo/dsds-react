'use client';

import React, { useContext } from 'react';

import HintText from './HintText';
import FieldGroup from './FieldGroup'; // eslint-disable-line import/no-cycle
import { ComponentsHelper } from './ComponentHelper'; // eslint-disable-line import/no-cycle

import classNames from '../lib/classNames';
import FormContext from '../context/FormContext';

/**
 * @param {DSDS.Component.Radio.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Radio:React.FC<DSDS.Component.Radio.Item> = function Radio({
    id,
    label,
    hintText,
    value,
    name,
    attributes = {},
    items,
    size,
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
        <div
            className={classNames(
                'ds_radio',
                size ? `ds_radio--${size}` : '',
            )}
            id={`${id}-wrapper`}
        >
            <input
                {...attributes}
                className="ds_radio__input"
                id={id}
                name={name}
                type="radio"
                value={value}
                onChange={handleChange}
                aria-describedby={classNames(
                    attributes['aria-describedby'],
                    hintText ? `${id}-hint-text` : '',
                )}
            />
            <label
                className="ds_radio__label"
                htmlFor={id}
            >
                { label }
            </label>
            { hintText && <HintText content={hintText} id={`${id}-hint-text`} />}
            { items && items.length > 0 && (
                <div className="ds_reveal-content">
                    <ComponentsHelper components={items} />
                </div>
            )}
        </div>
    );
};

/**
 * @param {DSDS.Component.Radio} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const RadioGroup:React.FC<Omit<DSDS.Component.Radio, 'type'>> = function RadioGroup({
    id,
    name,
    items,
    className,
    attributes = {},
    value,
    hintText,
    inline = false,
    error,
    size,
}) {
    return (
        <FieldGroup
            inline={inline}
            className={className}
        >
            {items?.map((radio, index) => {
                const key = `${id}-${index}`;
                return (
                    <Radio
                        key={key}
                        size={size}
                        {...radio}
                        name={name}
                        attributes={{
                            ...attributes,
                            ...radio.attributes,
                            selected: !!(value && radio.value === value),
                            'aria-describedby': classNames(
                                attributes['aria-describedby'],
                                hintText ? `${id}-hint-text` : '',
                                error ? `${id}-errors` : '',
                            ),
                        }}
                    />
                );
            })}
        </FieldGroup>
    );
};

export default RadioGroup;
