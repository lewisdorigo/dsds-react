'use client';

import React, {
    useRef,
    useEffect,
    useMemo,
    useContext,
    useCallback,
} from 'react';

import DSDSDatePicker from '@scottish-government/design-system/src/components/date-picker/date-picker';
import { TextInput, Types as InputTypes } from '../TextInput';
import { FormContext } from '../../context/FormContext';

import classNames from '../../lib/classNames';
import { Label } from '../Label';

import * as Types from './DatePicker.type';

/**
 * @param {Types.DatePickerProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const DatePicker:React.FC<Omit<Types.DatePicker, 'type'>> = function DatePicker({
    id,
    name,
    className,
    minDate: rawMinDate,
    maxDate: rawMaxDate,
    disabledDates: rawDisabledDates = [],
    dateSelectCallback,
    dateFormat = Types.DateFormat.DayMonthYear,
    multiple = false,
    attributes = {},
    value = '',
    ...props
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { fields, setFields } = useContext(FormContext);

    const parseDateString = (date:string):Date => {
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

        const [
            ,
            operator,
            variable,
            period,
        ] = match;

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
    let dayValue:string = '';
    let monthValue:string = '';
    let yearValue:string = '';

    if (value) {
        switch (dateFormat) {
            case Types.DateFormat.DayMonthYear:
                regexMatch = value.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                [, dayValue, monthValue, yearValue] = regexMatch || ['', '', '', ''];
                break;

            case Types.DateFormat.MonthDayYear:
                regexMatch = value.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                [, monthValue, dayValue, yearValue] = regexMatch || ['', '', '', ''];
                break;

            case Types.DateFormat.YearMonthDay:
                regexMatch = value.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
                [, yearValue, monthValue, dayValue] = regexMatch || ['', '', '', ''];
                break;

            default:
        }
    }

    const minDate = useMemo(() => (
        typeof rawMinDate === 'string'
            ? parseDateString(rawMinDate)
            : rawMinDate
    ), [rawMinDate]);

    const maxDate = useMemo(() => (
        typeof rawMaxDate === 'string'
            ? parseDateString(rawMaxDate)
            : rawMaxDate
    ), [rawMaxDate]);

    const disabledDates = rawDisabledDates.map((date) => (
        typeof date === 'string'
            ? new Date(date)
            : date
    ));

    /**
     * Handle changes to the date value.
     *
     * @param {Date} date - The selected date value.
     */
    const handleSelect = useCallback((date:Date) => {
        let dateValue = '';

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        switch (dateFormat) {
            case Types.DateFormat.YearMonthDay:
                dateValue = `${year}/${month}/${day}`;
                break;

            case Types.DateFormat.MonthDayYear:
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

    useEffect(() => {
        if (!ref.current || !window) {
            return;
        }

        new DSDSDatePicker(ref.current, {
            minDate,
            maxDate,
            disabledDates,
            dateSelectCallback: handleSelect,
            imagePath: '/design-system/images/icons/',
        }).init();
    }, [ref, minDate, maxDate, disabledDates, handleSelect]);

    let inputs;

    if (multiple) {
        inputs = (
            <div className="ds_datepicker__input-wrapper">
                <div>
                    <Label htmlFor={`${id}-day`}>Day</Label>
                    <TextInput
                        {...props}
                        type="text"
                        id={`${id}-day`}
                        name={`${name}-day`}
                        width={InputTypes.Width.Fixed2}
                        className="js-datepicker-date"
                        value={dayValue}
                        inputMode={InputTypes.Mode.Numeric}
                        hintText={undefined}
                        attributes={{
                            ...attributes,
                            'aria-describedby': classNames(
                                attributes['aria-describedby'],
                                props.hintText ? `${id}-hint-text` : '',
                                props.error ? `${id}-errors` : '',
                            ),
                        }}
                    />
                </div>
                <div>
                    <Label htmlFor={`${id}-month`}>Month</Label>
                    <TextInput
                        {...props}
                        type="text"
                        id={`${id}-month`}
                        name={`${name}-month`}
                        width={InputTypes.Width.Fixed2}
                        inputMode={InputTypes.Mode.Numeric}
                        className="js-datepicker-month"
                        value={monthValue}
                        hintText={undefined}
                        attributes={{
                            ...attributes,
                            'aria-describedby': classNames(
                                attributes['aria-describedby'],
                                props.hintText ? `${id}-hint-text` : '',
                                props.error ? `${id}-errors` : '',
                            ),
                        }}
                    />
                </div>
                <div>
                    <Label htmlFor={`${id}-year`}>Year</Label>
                    <TextInput
                        {...props}
                        type="text"
                        id={`${id}-year`}
                        name={`${name}-year`}
                        width={InputTypes.Width.Fixed4}
                        inputMode={InputTypes.Mode.Numeric}
                        className="js-datepicker-year"
                        value={yearValue}
                        hintText={undefined}
                        attributes={{
                            ...attributes,
                            'aria-describedby': classNames(
                                attributes['aria-describedby'],
                                props.hintText ? `${id}-hint-text` : '',
                                props.error ? `${id}-errors` : '',
                            ),
                        }}
                    />
                </div>
            </div>
        );
    } else {
        inputs = (
            <div className="ds_input__wrapper">
                <TextInput
                    {...props}
                    type="text"
                    id={id}
                    name={name}
                    width={InputTypes.Width.Fixed10}
                    attributes={attributes}
                    value={value}
                />
            </div>
        );
    }

    return (
        <div
            className={classNames(
                'ds_datepicker',
                multiple ? 'ds_datepicker--multiple' : '',
                className,
            )}
            data-dateformat={dateFormat}
            id={`${id}-wrapper`}
            ref={ref}
        >
            {inputs}
        </div>
    );
};
