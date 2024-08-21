import React from 'react';
import { TextInput } from '../TextInput';
// import { InputTypes, InputWidth } from '../TextInput/TextInput.type';
import * as Types from './Currency.type';
/**
 * @param {Types.Currency} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Currency = function Currency({ id, symbol = '£', width = Types.Width.Fixed4, ...props }) {
    return (React.createElement("div", { className: "ds_currency-wrapper", "data-symbol": symbol, id: `${id}-wrapper` },
        React.createElement(TextInput, { ...props, id: id, type: Types.Type.Number, width: width })));
};
