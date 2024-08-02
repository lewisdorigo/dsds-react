declare namespace DSDS.Component {
    interface Breadcrumbs extends Omit<
        Component<
            'breadcrumb',
            HTMLDivElement,
            DSDS.Component.Link
        >,
        'label' | 'content'
    > {
        hideCurrent?: boolean,
    }
}
