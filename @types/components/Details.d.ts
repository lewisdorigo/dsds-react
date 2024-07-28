declare namespace DSDS.Component {
    interface Details extends Component<
        'details',
        HTMLDetailsElement,
    >, React.PropsWithChildren {
        label: React.ReactNode,
    }
}
