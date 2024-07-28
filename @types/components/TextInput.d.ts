declare namespace DSDS.Component {
    interface TextInput extends FormComponent<
        string | DSDS.Meta.InputTypes,
        HTMLInputElement,
        never,
        Component.Value,
    > {
        width?: DSDS.Meta.InputWidth,
    }
}
