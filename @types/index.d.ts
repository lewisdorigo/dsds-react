declare namespace DSDS {
    interface Error {
        fieldId: string,
        href?: string,
        message: React.ReactNode,
        fieldMessage?: React.ReactNode,
    }

    type Errors = string | string[] | Error | Error[] | boolean;

    namespace Component {
        type Validation = (value:unknown, formData?: FormData) => boolean | string;

        namespace Condition {
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

            type Items = (Items | Condition)[];
        }

        interface Condition {
            type?: 'and' | 'or',
            conditions: Condition.Items,
        }

        type Label = React.ReactNode | {
            label: React.ReactNode,
            hidden?: boolean,
            review?: React.ReactNode,
        }

        type Value = string;

        interface Item<
            Tag extends HTMLElement = HTMLElement
        > extends Partial<React.HTMLProps<Tag>> {
            id: string,
            label?: React.ReactNode,
            value?: Value,
        }
    }

    type Width = import('@/lib/enums').Width;

    interface Component<
        Type = unknown,
        Tag = Record<string, unknown>,
        Items = unknown,
    > {
        id: string,
        name: string,
        type: Type,

        label?: Component.Label,
        content?: React.ReactNode,
        hintText?: React.ReactNode,

        className?: string,

        attributes?: (
            Tag extends HTMLElement
                ? Partial<React.HTMLProps<Tag>>
                : Tag
        ),
        items?: Items[],
        conditions?: Component.Condition | Component.Condition.Items,
    }

    interface FormComponent<
        Type = unknown,
        Tag = unknown,
        Items = unknown,
    > extends Component<Type, Tag, Items> {
        required?: boolean,
        validation?: Component.Validation,
        value?: Component.Value | Component.Value[],
        error?: Errors,
    }
}
