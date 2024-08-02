declare namespace DSDS.Component {
    interface NotificationPanel extends DSDS.Component<
        'notification-panel',
        HTMLDivElement,
    >, React.PropsWithChildren {
        label?: React.ReactNode,
        success?: boolean,
    }
}
