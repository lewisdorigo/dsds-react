declare namespace ScotGov.Component {
    interface SiteHeader extends React.HTMLProps<HTMLDivElement> {
        className?: string,
        'aria-label'?: string,
        branding: DSDS.Component.SiteBranding,
    }
}
