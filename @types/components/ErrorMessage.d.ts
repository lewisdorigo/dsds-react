declare namespace DSDS.Component {
    interface ErrorMessage extends DSDS.Component.WrapperTag {

    }

    interface ErrorMessages {
        fieldId?: string,
        errors: DSDS.Meta.Errors,
    }
}
