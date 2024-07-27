'use client';

import React, { useRef, useContext, useState } from 'react';

import HintText from './HintText';
import FieldGroup from './FieldGroup';

import classNames from '../lib/classNames';
import FormContext from '../lib/formContext';

/**
 * @param {DSDS.Form.Checkbox.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Checkbox:React.FC<DSDS.Form.Checkbox.Item> = function Checkbox({
    id,
    label,
    hintText,
    value,
    name,
    attributes = {},
    size,
    exclusive = false,
}) {
    return (
        <>
            {exclusive && (
                <p className="ds_checkbox-separator">
                    { typeof exclusive === 'string' ? exclusive : 'or'}
                </p>
            )}
            <div
                className={classNames(
                    'ds_checkbox',
                    size ? `ds_checkbox--${size}` : '',
                )}
                id={`${id}-wrapper`}
            >
                <input
                    {...attributes}
                    className="ds_checkbox__input"
                    id={id}
                    name={name}
                    type="checkbox"
                    value={value}
                    aria-describedby={hintText ? `${id}-hintText` : undefined}
                    data-behaviour={exclusive ? 'exclusive' : undefined}
                />
                <label
                    className="ds_checkbox__label"
                    htmlFor={id}
                >
                    { label }
                </label>
                { hintText && <HintText text={hintText} id={`${id}-hintText`} />}
            </div>
        </>
    );
};

/**
 * @param {DSDS.Form.Checkbox} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const CheckboxGroup:React.FC<DSDS.Form.Checkbox> = function CheckboxGroup({
    id,
    name,
    items,
    className,
    attributes = {},
    value: rawValue = [],
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<string[]>(rawValue);

    const { setField } = useContext(FormContext);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        /* If the `ref` isn't currently set, we should exist out early…  */
        if (!ref.current) { return; }

        const { target } = event;
        const {
            value: fieldValue,
        } = target;

        let fieldValues:string[] = value;

        /**
         * Handle exclusive checkboxes first.
         *
         * If the change as a checking a checkbox that has the `exclusive` property set, we should
         * set the values to *only* include this checkbox, then exit out early.
         */
        if (
            target.checked
            && target.getAttribute('data-behaviour') === 'exclusive'
        ) {
            fieldValues = [fieldValue];

            setValue(fieldValues);
            setField<string[]>(name, fieldValues);

            return;
        }

        /**
         * Otherwise, loop thorugh all of the checkboxes selected checkboxes.
         *
         * If it's not an exclusive checkbox, add it's value to the array.
         */
        ref.current
            .querySelectorAll<HTMLInputElement>('.ds_checkbox__input:selected')
            .forEach((input) => {
                if (input.getAttribute('data-behaviour') === 'exclusive') {
                    return;
                }

                fieldValues.push(input.value);
            });

        setValue(fieldValues);
        setField<string[]>(name, fieldValues);
    };

    return (
        <FieldGroup
            className={className}
            ref={ref}
        >
            {items?.map((checkbox, index) => {
                const key = `${id}-${index}`;
                return (
                    <Checkbox
                        key={key}
                        {...checkbox}
                        name={name}
                        attributes={{
                            ...attributes,
                            ...checkbox.attributes,
                            onChange: (event:React.ChangeEvent<HTMLInputElement>) => {
                                handleChange(event);

                                if (checkbox.attributes?.onChange) {
                                    checkbox.attributes.onChange(event);
                                }
                            },
                            checked: (
                                checkbox.value
                                    ? value?.includes(checkbox.value)
                                    : false
                            ),
                        }}
                    />
                );
            })}
        </FieldGroup>
    );
};

export default CheckboxGroup;
