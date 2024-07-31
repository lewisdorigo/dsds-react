declare namespace DSDS.Component {
    interface Link extends React.HTMLProps<HTMLAnchorElement> {
        text?: React.ReactNode,
        href: string,
        ref?: React.Ref<HTMLAnchorElement>,
        target?: undefined | '_blank' | '_new' | '_self',
        baseClass?: string,
        tabText?: boolean | string,
    }
}
