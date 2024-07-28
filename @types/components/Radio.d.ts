declare namespace DSDS.Component {
    namespace Radio {
        interface Item extends DSDS.Meta.Item<HTMLInputElement> {
            content: never,
            name: string,
            hintText?: React.ReactNode,
            size?: DSDS.Meta.InputSize,
            items?: Components,
        }
    }

    interface Radio extends FormComponent<
        'radio',
        HTMLInputElement,
        Radio.Item,
        DSDS.Meta.Value,
    > {
        size?: DSDS.Meta.InputSize,
        inline?: boolean,
    }
}
