declare namespace DSDS.Component {
    interface SiteNavigation extends React.HTMLProps<HTMLDivElement> {
        id?: string,
        className?: string,
        'aria-label'?: string,
        mobile?: boolean,
        menuItems: DSDS.Component.Link[],
    }
}
