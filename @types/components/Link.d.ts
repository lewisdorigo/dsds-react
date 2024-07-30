declare namespace DSDS.Component {
    interface Link extends React.PropsWithChildren, React.HTMLProps<HTMLAnchorElement> {
        text?: React.ReactNode,
        href: string,
        ref?: Ref<HTMLAnchorElement> | undefined,
        target?: undefined | '_blank' | '_new' | '_self',
        className?: string,
        baseClass?: string,
        tabText?: boolean | string,
    }
}
