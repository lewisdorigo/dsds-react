declare namespace DSDS.Component {
    namespace TextArea {
        type Size = import('../../src/lib/enums').TextAreaSize;
    }
    interface TextArea extends FormComponent<
        'textarea',
        HTMLTextAreaElement,
        never,
        Component.Value,
    > {
        size?: TextArea.Size,
    }
}
