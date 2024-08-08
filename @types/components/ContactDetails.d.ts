declare namespace DSDS.Component {
    namespace ContactDetails {
        interface Item extends Omit<
            DSDS.Meta.Item,
            'id' | 'value',
        > {
            label: React.ReactNode,
            items?: React.ReactNode[],
        }
    }

    interface ContactDetails extends Component<
        'contact-details',
        HTMLDivElement,
        ContactDetails.Item
    > {
    }
}
