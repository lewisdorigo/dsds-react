declare namespace DSDS.Form {
    namespace Radio {
        interface Item extends DSDS.Meta.Item<HTMLInputElement> {
            content: never,
            name: string,
            hintText?: React.ReactNode,
            size?: DSDS.Form.Meta.InputSize,
            items?: Components,
        }
    }

    interface Radio extends FormComponent<
        'radio',
        HTMLInputElement,
        Radio.Item,
        DSDS.Meta.Value,
    > {
        size?: DSDS.Form.Meta.InputSize,
        inline?: boolean,
    }
}
