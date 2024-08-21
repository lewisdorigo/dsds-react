import { FormComponent } from '../../utils/types';
import { Value } from '../../utils/types/meta';

export enum DateFormat {
    DayMonthYear = 'DMY',
    MonthDayYear = 'MDY',
    YearMonthDay = 'YMD',
}

type SelectCallback = (date:Date) => void;

export interface DatePicker extends FormComponent<
    'date' | 'date-picker',
    HTMLInputElement,
    never,
    Value
> {
    minDate?: string | Date,
    maxDate?: string | Date,
    disabledDates?: (Date | string)[],
    dateSelectCallback?: SelectCallback,
    dateFormat?: DateFormat,
    multiple?: boolean,
}
