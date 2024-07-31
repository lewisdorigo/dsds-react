declare namespace DSDS.Component {
    interface FieldGroup<
        Type = 'group' | 'fieldset',
        Tag = HTMLDivElement | HTMLFieldSetElement,
    > extends React.PropsWithChildren, WrapperTag.Tag, Component<
        Type,
        Tag,
        ComponentType
    > {
        type?: Type,
        hintText?: React.ReactNode,
        inline?: boolean,
    }
}
