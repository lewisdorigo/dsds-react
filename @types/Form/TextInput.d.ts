declare namespace DSDS.Form {
    interface TextInput extends FormComponent<
        string | DSDS.Form.Meta.Types,
        HTMLInputElement,
        never,
        Component.Value,
    > {
        width?: DSDS.Form.Meta.Width,
    }
}
