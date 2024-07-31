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

            type Items = (DSDS.Meta.Condition | Condition)[];
        }

        interface Condition {
            type?: 'and' | 'or',
            conditions: Conditional.Items,
        }

        interface Label {
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

        type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
    }

    interface Component<
        Type = unknown,
        Tag extends HTMLElement = HTMLElement,
        Items = never,
    > {
        id?: string,
        type: Type,

        label?: React.ReactNode,
        content?: React.ReactNode,

        className?: string,
        headingLevel?: Meta.HeadingLevel,

        attributes?: Partial<React.HTMLProps<Tag>>,
        items?: (Items extends never ? never : Items[]),
        conditions?: Meta.Condition | Meta.Conditional.Items,

        ref?: React.Ref<Tag>,
    }

    interface FormComponent<
        Type = unknown,
        Tag extends HTMLElement = HTMLElement,
        Items = never,
        Value = Component.Value | Component.Value[],
    > extends Component<Type, Tag, Items> {
        id: string,
        name: string,

        label?: React.ReactNode | Meta.Label,
        hintText?: React.ReactNode,

        required?: boolean,
        validation?: Meta.Validation[],
        value?: Value,
        error?: Meta.Errors,
    }

    interface Title {
        title: React.ReactNode,
        label?: React.ReactNode,
        metadata?: Component.Metadata.Item[],
    }

    type ComponentType = React.ReactNode | Component | FormComponent;
    type Components = ComponentType[];
}
