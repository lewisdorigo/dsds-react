'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const date_picker_1 = __importDefault(require("@scottish-government/design-system/src/components/date-picker/date-picker"));
const TextInput_1 = __importDefault(require("../TextInput"));
const TextInput_type_1 = require("../TextInput/TextInput.type");
const FormContext_1 = __importDefault(require("../../context/FormContext"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const Label_1 = __importDefault(require("../Label"));
const DatePicker_type_1 = require("./DatePicker.type");
/**
 * @param {DatePickerProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const DatePicker = function DatePicker({ id, name, className, minDate: rawMinDate, maxDate: rawMaxDate, disabledDates: rawDisabledDates = [], dateSelectCallback, dateFormat = DatePicker_type_1.DatePickerFormat.DayMonthYear, multiple = false, attributes = {}, value = '', ...props }) {
    const ref = (0, react_1.useRef)(null);
    const { fields, setFields } = (0, react_1.useContext)(FormContext_1.default);
    const parseDateString = (date) => {
        let d = new Date(date);
        if (d instanceof Date && !Number.isNaN(d.getTime())) {
            return d;
        }
        d = new Date();
        d.setHours(0, 0, 0);
        if (date === 'now' || date === 'today') {
            return d;
        }
        const match = date.match(/^(\+|-)\s*(\d+) (day|month|year)s?$/);
        if (!match) {
            return d;
        }
        const [, operator, variable, period,] = match;
        const modifier = parseInt(variable, 10) * (operator === '+' ? 1 : -1);
        switch (period) {
            case 'year':
                d.setFullYear(d.getFullYear() + modifier);
                break;
            case 'month':
                d.setMonth(d.getMonth() + modifier);
                break;
            case 'day':
                d.setDate(d.getDate() + modifier);
                break;
            default:
        }
        return d;
    };
    let regexMatch;
    let dayValue = '';
    let monthValue = '';
    let yearValue = '';
    if (value) {
        switch (dateFormat) {
            case DatePicker_type_1.DatePickerFormat.DayMonthYear:
                regexMatch = value.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                [, dayValue, monthValue, yearValue] = regexMatch || ['', '', '', ''];
                break;
            case DatePicker_type_1.DatePickerFormat.MonthDayYear:
                regexMatch = value.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                [, monthValue, dayValue, yearValue] = regexMatch || ['', '', '', ''];
                break;
            case DatePicker_type_1.DatePickerFormat.YearMonthDay:
                regexMatch = value.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
                [, yearValue, monthValue, dayValue] = regexMatch || ['', '', '', ''];
                break;
            default:
        }
    }
    const minDate = (0, react_1.useMemo)(() => (typeof rawMinDate === 'string'
        ? parseDateString(rawMinDate)
        : rawMinDate), [rawMinDate]);
    const maxDate = (0, react_1.useMemo)(() => (typeof rawMaxDate === 'string'
        ? parseDateString(rawMaxDate)
        : rawMaxDate), [rawMaxDate]);
    const disabledDates = rawDisabledDates.map((date) => (typeof date === 'string'
        ? new Date(date)
        : date));
    /**
     * Handle changes to the date value.
     *
     * @param {Date} date - The selected date value.
     */
    const handleSelect = (0, react_1.useCallback)((date) => {
        let dateValue = '';
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        switch (dateFormat) {
            case DatePicker_type_1.DatePickerFormat.YearMonthDay:
                dateValue = `${year}/${month}/${day}`;
                break;
            case DatePicker_type_1.DatePickerFormat.MonthDayYear:
                dateValue = `${month}/${day}/${year}`;
                break;
            default:
                dateValue = `${day}/${month}/${year}`;
        }
        setFields({
            ...fields,
            [name]: dateValue,
            [`${name}-day`]: day,
            [`${name}-month`]: month,
            [`${name}-year`]: year,
        });
        if (dateSelectCallback) {
            dateSelectCallback(date);
        }
    }, [dateFormat, fields, name, dateSelectCallback, setFields]);
    (0, react_1.useEffect)(() => {
        if (!ref.current || !window) {
            return;
        }
        new date_picker_1.default(ref.current, {
            minDate,
            maxDate,
            disabledDates,
            dateSelectCallback: handleSelect,
            imagePath: '/design-system/images/icons/',
        }).init();
    }, [ref, minDate, maxDate, disabledDates, handleSelect]);
    let inputs;
    if (multiple) {
        inputs = (react_1.default.createElement("div", { className: "ds_datepicker__input-wrapper" },
            react_1.default.createElement("div", null,
                react_1.default.createElement(Label_1.default, { htmlFor: `${id}-day` }, "Day"),
                react_1.default.createElement(TextInput_1.default, { ...props, type: "text", id: `${id}-day`, name: `${name}-day`, width: TextInput_type_1.InputWidth.Fixed2, className: "js-datepicker-date", value: dayValue, hintText: undefined, attributes: {
                        ...attributes,
                        inputMode: TextInput_type_1.InputModes.Numeric,
                        'aria-describedby': (0, classNames_1.default)(attributes['aria-describedby'], props.hintText ? `${id}-hint-text` : '', props.error ? `${id}-errors` : ''),
                    } })),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Label_1.default, { htmlFor: `${id}-month` }, "Month"),
                react_1.default.createElement(TextInput_1.default, { ...props, type: "text", id: `${id}-month`, name: `${name}-month`, width: TextInput_type_1.InputWidth.Fixed2, className: "js-datepicker-month", value: monthValue, hintText: undefined, attributes: {
                        ...attributes,
                        inputMode: TextInput_type_1.InputModes.Numeric,
                        'aria-describedby': (0, classNames_1.default)(attributes['aria-describedby'], props.hintText ? `${id}-hint-text` : '', props.error ? `${id}-errors` : ''),
                    } })),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Label_1.default, { htmlFor: `${id}-year` }, "Year"),
                react_1.default.createElement(TextInput_1.default, { ...props, type: "text", id: `${id}-year`, name: `${name}-year`, width: TextInput_type_1.InputWidth.Fixed4, className: "js-datepicker-year", value: yearValue, hintText: undefined, attributes: {
                        ...attributes,
                        inputMode: TextInput_type_1.InputModes.Numeric,
                        'aria-describedby': (0, classNames_1.default)(attributes['aria-describedby'], props.hintText ? `${id}-hint-text` : '', props.error ? `${id}-errors` : ''),
                    } }))));
    }
    else {
        inputs = (react_1.default.createElement("div", { className: "ds_input__wrapper" },
            react_1.default.createElement(TextInput_1.default, { ...props, type: "text", id: id, name: name, width: TextInput_type_1.InputWidth.Fixed10, attributes: attributes, value: value })));
    }
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_datepicker', multiple ? 'ds_datepicker--multiple' : '', className), "data-dateformat": dateFormat, id: `${id}-wrapper`, ref: ref }, inputs));
};
exports.default = DatePicker;
