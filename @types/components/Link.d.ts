declare namespace DSDS.Component {
    interface Link extends Partial<React.HTMLProps<HTMLAnchorElement>> {
        content?: React.ReactNode,
        href: string,
        ref?: React.Ref<HTMLAnchorElement>,
        target?: undefined | '_blank' | '_new' | '_self',
        baseClass?: string,
        tabText?: boolean | string,
    }
}
