declare namespace DSDS.Component {
    namespace Link {
        interface Base {
            content?: React.ReactNode,
            baseClass?: string,
            tabText?: boolean | string,
            className?: string,
        }

        interface Anchor extends Base, React.HTMLProps<HTMLAnchorElement> {
            href: string,
            target?: undefined | '_blank' | '_new' | '_self',
            type?: never,
        }

        interface Button extends Base, React.HTMLProps<HTMLButtonElement> {
            type?: DSDS.Component.Button.Type,
        }
    }

    type Link = Link.Anchor | Link.Button;
}
