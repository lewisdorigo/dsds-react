declare namespace DSDS.Component {
    interface ButtonGroup extends React.PropsWithChildren, WrapperTag.Tag, Omit<
        Component<
            'button-group',
            HTMLDivElement,
            DSDS.Component.Button,
        >,
        'content'
    > { }
}
