declare namespace DSDS.Component {
    namespace Accordion {
        interface Item extends DSDS.Meta.Item<
            HTMLDivElement
        > {
            label: React.ReactNode,
            content: React.ReactNode,
        }
    }

    interface Accordion extends Component<
        'accordion',
        HTMLDivElement,
        Accordion.Item
    > {
        allowOpenAll?: boolean,
    }
}
