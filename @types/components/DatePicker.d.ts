declare namespace DSDS.Component {
    namespace DatePicker {
        type Format = import('../../src/lib/enums').DatePickerFormat;
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
        dateFormat?: DatePicker.Format,
        multiple?: boolean,
    }
}
