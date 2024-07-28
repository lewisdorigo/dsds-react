declare namespace DSDS {
    namespace Meta {
        type InputWidth = import('../src/lib/enums').InputWidth;
        type InputTypes = import('../src/lib/enums').InputTypes;
        type InputModes = import('../src/lib/enums').InputModes;
        type InputSize = import('../src/lib/enums').InputSize;

        interface Error {
            fieldId: string,
            href?: string,
            message: React.ReactNode,
            fieldMessage?: React.ReactNode,
        }

        type FieldErrors = string | Error;
        type Errors = FieldErrors | FieldErrors[];

        type Validation = (value:unknown, formData?: FormData) => boolean | string;

        namespace Conditional {
            interface Condition {
                fieldId: string,
                value: unknown,
                operator?: (
                    '==' | '===' | 'equals'
                    | '>' | 'gt'
                    | '<' | 'lt'
                    | '>=' | 'gte'
                    | '<=' | 'lte'
                    | 'contains' | 'includes'
                ),
            }

            type Items = (DSDS.Meta.Conditional.Items | Condition)[];
        }

        interface Condition {
            type?: 'and' | 'or',
            conditions: Conditional.Items,
        }

        type Label = {
            label: React.ReactNode,
            hidden?: boolean,
            review?: React.ReactNode,
        }

        type Value = string;

        interface Item<
            Tag extends HTMLElement = HTMLElement
        > {
            id: string,
            label?: React.ReactNode,
            content?: React.ReactNode,
            value?: Value,
            attributes?: Partial<React.HTMLProps<Tag>>,
        }
    }

    interface Component<
        Type = unknown,
        Tag extends HTMLElement = HTMLElement,
        Items = unknown,
    > {
        id?: string,
        name?: string,
        type: Type,

        label?: React.ReactNode | Meta.Label,
        content?: React.ReactNode,

        className?: string,

        attributes?: Partial<React.HTMLProps<Tag>>,
        items?: Items[],
        conditions?: Meta.Condition | Meta.Conditional.Items,
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

    type ComponentType = React.ReactNode | Component | FormComponent;
    type Components = ComponentType[];
}
