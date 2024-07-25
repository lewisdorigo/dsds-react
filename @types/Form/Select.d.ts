declare namespace DSDS.Form {
    namespace Select {
        interface Item extends DSDS.Meta.Item<HTMLOptionElement> {
            content: never,
        }
    }

    interface Select extends FormComponent<
        'select',
        HTMLSelectElement,
        Select.Item,
        DSDS.Meta.Value,
    > {
        width?: DSDS.Form.Meta.Width,
        allowNull?: boolean,
    }
}
