declare namespace DSDS {
    namespace Meta {
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

    type Components = (React.ReactNode | Component | Form.FormComponent)[];

    namespace Context {
        namespace Form {
            interface Provider extends React.PropsWithChildren {
                initial?: Record<string, unknown>,
            }
        }

        interface Form {
            setFields: React.SetStateAction,
            setField: <Type = unknown>(name:string, value:Type) => void,
            getField: <Type = unknown>(name:string) => Type,
            fields: Record<string, unknown>,
        }
    }
}
