declare namespace DSDS.Component {
    interface WarningText extends Component<
        'warning',
        HTMLDivElement,
    >, React.PropsWithChildren {
        label?: React.ReactNode,
        symbol?: string,
    }
}
