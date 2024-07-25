declare namespace DSDS.Form {
    interface ErrorMessage extends DSDS.Component.WrapperTag {

    }

    interface ErrorMessages {
        fieldId?: string,
        errors: DSDS.Form.Meta.Errors,
    }
}
