declare namespace DSDS.Component {
    interface ErrorSummary extends WrapperTag.Tag, Omit<
        Component<
            'error-summary',
            HTMLDivElement,
            DSDS.Meta.FieldErrors
        >,
        'content'
    > {
        // attributes?: Partial<React.HTMLProps<HTMLElement>> & { autoFocus: boolean },
    }
}
