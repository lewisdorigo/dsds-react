declare namespace DSDS.Component {
    interface ErrorMessage extends DSDS.Component.WrapperTag {

    }

    interface ErrorMessages {
        id?: string,
        errors: DSDS.Meta.Errors,
    }
}
