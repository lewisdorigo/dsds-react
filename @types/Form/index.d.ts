declare namespace DSDS.Form {
    namespace Meta {
        type Width = import('../lib/enums').Width;
        type InputTypes = import('../lib/enums').InputTypes;
        type InputModes = import('../lib/enums').InputModes;
        type InputSize = import('../lib/enums').InputSize;
        type DatePickerFormat = import('../lib/enums').DatePickerFormat;

        interface Error {
            fieldId: string,
            href?: string,
            message: React.ReactNode,
            fieldMessage?: React.ReactNode,
        }

        type FieldErrors = string | Error;
        type Errors = FieldErrors | FieldErrors[];

        type Validation = (value:unknown, formData?: FormData) => boolean | string;
    }

    interface FormComponent<
        Type = unknown,
        Tag extends HTMLElement = HTMLElement,
        Items = unknown,
        Value = Component.Value | Component.Value[],
    > extends Component<Type, Tag, Items> {
        id: string,
        name: string,

        hintText?: React.ReactNode,

        required?: boolean,
        validation?: Meta.Validation[],
        value?: Value,
        error?: Meta.Errors,
    }
}
