declare namespace DSDS.Component {
    namespace Tabs {
        interface Item extends DSDS.Meta.Item<
            HTMLDivElement
        > {
            label: React.ReactNode,
            content: React.ReactNode,
        }
    }

    interface Tabs extends Component<
        'tabs',
        HTMLDivElement,
        Tabs.Item
    > {
        bordered?: boolean,
    }
}
