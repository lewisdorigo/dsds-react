declare namespace DSDS.Component {
    interface ConfirmationMessage extends Component<
        'confirmation',
        HTMLDivElement,
    > {
        label: React.ReactNode,
    }
}
