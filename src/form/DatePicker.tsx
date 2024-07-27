'use client';

import React, {
    useRef,
    useEffect,
    useMemo,
    useContext,
} from 'react';

import DSDSDatePicker from '@scottish-government/design-system/src/components/date-picker/date-picker';
import TextInput from './TextInput';
import FormContext from '../lib/formContext';

import {
    InputWidth,
    InputModes,
    DatePickerFormat,
} from '../lib/enums';
import classNames from '../lib/classNames';
import Label from './Label';

/**
 * @param {DSDS.Form.Currency} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const DatePicker:React.FC<DSDS.Form.DatePicker> = function DatePicker({
    id,
    name,
    className,
    minDate: rawMinDate,
    maxDate: rawMaxDate,
    disabledDates: rawDisabledDates = [],
    dateSelectCallback,
    dateFormat = DatePickerFormat.DayMonthYear,
    multiple = false,
    attributes = {},
    value = '',
    ...props
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { fields, setFields } = useContext(FormContext);

    let dayValue:string = '';
    let monthValue:string = '';
    let yearValue:string = '';

    if (value) {
        switch (dateFormat) {
            case DatePickerFormat.DayMonthYear:
                [, dayValue, monthValue, yearValue] = value.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                break;

            case DatePickerFormat.MonthDayYear:
                [, monthValue, dayValue, yearValue] = value.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                break;

            case DatePickerFormat.YearMonthDay:
                [, yearValue, monthValue, dayValue] = value.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
                break;

            default:
        }
    }

    const minDate = useMemo(() => (
        typeof rawMinDate === 'string'
            ? new Date(rawMinDate)
            : rawMinDate
    ), [rawMinDate]);

    const maxDate = useMemo(() => (
        typeof rawMaxDate === 'string'
            ? new Date(rawMaxDate)
            : rawMaxDate
    ), [rawMaxDate]);

    const disabledDates = rawDisabledDates.map((date) => (
        typeof date === 'string'
            ? new Date(date)
            : date
    ));

    const handleSelect = (date:Date) => {
        let dateValue = '';

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        switch (dateFormat) {
            case DatePickerFormat.YearMonthDay:
                dateValue = `${year}/${month}/${day}`;
                break;

            case DatePickerFormat.MonthDayYear:
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
    };

    useEffect(() => {
        if (!ref.current || !window) {
            return;
        }

        new DSDSDatePicker(ref, { // eslint-disable-line no-new
            minDate,
            maxDate,
            disabledDates,
            dateSelectCallback: handleSelect,
        });
    }, [ref, minDate, maxDate, disabledDates]);

    let inputs;

    if (multiple) {
        inputs = (
            <>
                <div>
                    <Label htmlFor={`${id}-day`}>Day</Label>
                    <TextInput
                        {...props}
                        id={`${id}-day`}
                        name={`${name}-day`}
                        width={InputWidth.Fixed2}
                        className="js-datepicker-date"
                        value={dayValue}
                        attributes={{
                            ...attributes,
                            inputMode: InputModes.Numeric,
                        }}
                    />
                </div>
                <div>
                    <Label htmlFor={`${id}-month`}>Month</Label>
                    <TextInput
                        {...props}
                        id={`${id}-month`}
                        name={`${name}-month`}
                        width={InputWidth.Fixed2}
                        className="js-datepicker-month"
                        value={monthValue}
                        attributes={{
                            ...attributes,
                            inputMode: InputModes.Numeric,
                        }}
                    />
                </div>
                <div>
                    <Label htmlFor={`${id}-year`}>Year</Label>
                    <TextInput
                        {...props}
                        id={`${id}-year`}
                        name={`${name}-month`}
                        width={InputWidth.Fixed4}
                        className="js-datepicker-month"
                        value={yearValue}
                        attributes={{
                            ...attributes,
                            inputMode: InputModes.Numeric,
                        }}
                    />
                </div>
            </>
        );
    } else {
        inputs = (
            <TextInput
                {...props}
                id={id}
                name={name}
                width={InputWidth.Fixed10}
                attributes={attributes}
                value={value}
            />
        );
    }

    return (
        <div
            className={classNames(
                'ds_date-picker',
                multiple ? 'ds_date-picker--multiple' : '',
                className,
            )}
            data-dateformat={dateFormat}
            id={`${id}-wrapper`}
        >
            {inputs}
        </div>
    );
};

export default DatePicker;
