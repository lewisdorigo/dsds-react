declare namespace DSDS.Component {
    namespace Metadata {
        interface Item {
            label: string,
            value: Date | React.ReactNode,
            hideLabel?: boolean,
            isLabel?: boolean,
        }
    }

    interface Metadata extends Component<
        'metadata',
        HTMLDListElement,
        Metadata.Item
    > {
        inline?: boolean,
    }
}
