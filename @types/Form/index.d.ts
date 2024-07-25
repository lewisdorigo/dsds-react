declare namespace DSDS.Form {
    namespace Meta {
        type Width = import('@/lib/enums').Width;
        type InputTypes = import('@/lib/enums').InputTypes;
        type InputTypes = import('@/lib/enums').InputTypes;

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
        Tag = HTMLInputElement,
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
