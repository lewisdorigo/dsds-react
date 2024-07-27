import React from 'react';

import TextInput from './TextInput';

import { InputWidth, InputTypes } from '../lib/enums';

/**
 * @param {DSDS.Form.Currency} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Currency:React.FC<DSDS.Form.Currency> = function Currency({
    id,
    type = InputTypes.Number,
    symbol = '£',
    width = InputWidth.Fixed4,
    ...props
}) {
    return (
        <div
            className="ds_currency-wrapper"
            data-symbol={symbol}
            id={`${id}-wrapper`}
        >
            <TextInput
                {...props}
                id={id}
                type={type}
                width={width}
            />
        </div>
    );
};

export default Currency;
