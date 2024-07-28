declare namespace DSDS.Component {
    namespace Checkbox {
        interface Item extends DSDS.Meta.Item<HTMLInputElement> {
            content: never,
            name: string,
            hintText?: React.ReactNode,
            size?: DSDS.Meta.InputSize,
            exclusive?: boolean | string,
        }
    }

    interface Checkbox extends FormComponent<
        'checkbox',
        HTMLInputElement,
        Checkbox.Item,
        DSDS.Meta.Value[],
    > {
        size?: DSDS.Meta.InputSize,
    }
}
