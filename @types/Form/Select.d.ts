declare namespace DSDS.Form {
    namespace Select {
        interface Item extends DSDS.Component.Item<HTMLOptionElement> {
        }
    }

    interface Select extends FormComponent<
        'select',
        React.HTMLProps<HTMLSelectElement>,
        Select.Item
    > {
        width?: DSDS.Width,
        value?: Component.Value,
        allowNull?: boolean,
    }
}
