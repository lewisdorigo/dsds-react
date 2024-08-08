declare namespace DSDS.Component {
    interface List extends Omit<
        Component<
            'list',
            HTMLOListElement | HTMLUListElement,
            React.ReactNode
        >,
        'label' | 'content' | 'headingLevel'
    > {
        ordered?: boolean,
        id?: string,
    }
}
