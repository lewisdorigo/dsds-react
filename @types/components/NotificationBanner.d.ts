declare namespace DSDS.Component {
    interface NotificationBanner extends DSDS.Component<
        'notification-banner',
        HTMLDivElement,
    >, React.PropsWithChildren {
        label?: React.ReactNode,
        icon?: boolean | string,
        hasClose?: boolean,
    }
}
