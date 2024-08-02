declare namespace DSDS.Component {
    interface ErrorMessage extends DSDS.Component.WrapperTag {

    }

    interface ErrorMessages extends Omit<
        Component<
            'error-message',
            HTMLElement,
        >,
        'label' | 'content'
    > {
        items?: DSDS.Meta.Errors,
    }
}
