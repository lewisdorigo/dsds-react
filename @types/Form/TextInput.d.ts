declare namespace DSDS.Form {
    namespace TextInput {
        type Types = import('@/lib/enums').InputTypes;
    }

    interface TextInput extends FormComponent<
        string | TextInput.Types,
        React.HTMLProps<HTMLInputElement>,
        never,
    > {
        type?: Type,
        width?: DSDS.Width,
        value?: Component.Value,
    }
}
