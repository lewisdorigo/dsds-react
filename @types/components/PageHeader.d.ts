declare namespace DSDS.Component {
    interface PageHeader extends DSDS.Title, Omit<
        Component<
            'page-header',
            HTMLDivElement,
        >,
        'content'
    > {
    }
}
