'use client';

import React from 'react';
import classNames from '../lib/classNames';

/**
 * @param {DSDS.Form.TextArea} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TextArea:React.FC<DSDS.Form.TextArea> = function TextArea({
    id,
    name,
    className,
    value,
    error,
    attributes: {
        rows = 3,
        ...attributes
    } = {},
}) {
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
        />
    );
};

export default TextArea;
