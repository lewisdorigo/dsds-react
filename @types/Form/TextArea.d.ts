declare namespace DSDS.Form {
    interface TextArea extends FormComponent<
        'textarea',
        React.HTMLProps<HTMLTextAreaElement>,
        never
    > {
        value?: Component.Value,
    }
}
