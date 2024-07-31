import React from 'react';

import TextInput from './TextInput';

import { InputWidth, InputTypes } from '../lib/enums';

/**
 * @param {DSDS.Component.Currency} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Currency:React.FC<Omit<DSDS.Component.Currency, 'type'>> = function Currency({
    id,
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
                type={InputTypes.Number}
                width={width}
            />
        </div>
    );
};

export default Currency;
