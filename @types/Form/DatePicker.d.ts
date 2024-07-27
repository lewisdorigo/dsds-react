declare namespace DSDS.Form {
    namespace DatePicker {
        type SelectCallback = (date:Date) => void;
    }

    interface DatePicker extends FormComponent<
        'date',
        HTMLInputElement,
        never,
        Component.Value,
    > {
        minDate?: string | Date,
        maxDate?: string | Date,
        disabledDates?: (Date | string)[],
        dateSelectCallback?: DatePicker.SelectCallback,
        dateFormat?: DSDS.Form.Meta.DatePickerFormat,
        multiple?: boolean,
    }
}
