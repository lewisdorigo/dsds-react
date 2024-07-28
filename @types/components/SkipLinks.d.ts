declare namespace DSDS.Component {
    namespace SkipLinks {
        interface Item {
            href: string,
            label: string,
        }
    }

    interface SkipLinks extends React.HTMLProps<HTMLDivElement> {
        mainContent?: string,
        items?: SkipLinks.Item[],
    }
}
