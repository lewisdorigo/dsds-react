"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TextInput_1 = __importDefault(require("../TextInput"));
const TextInput_type_1 = require("../TextInput/TextInput.type");
/**
 * @param {Currency} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Currency = function Currency({ id, symbol = '£', width = TextInput_type_1.InputWidth.Fixed4, ...props }) {
    return (react_1.default.createElement("div", { className: "ds_currency-wrapper", "data-symbol": symbol, id: `${id}-wrapper` },
        react_1.default.createElement(TextInput_1.default, { ...props, id: id, type: TextInput_type_1.InputTypes.Number, width: width })));
};
exports.default = Currency;
