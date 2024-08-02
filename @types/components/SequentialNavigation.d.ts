declare namespace DSDS.Component {
    namespace SequentialNavigation {
        interface Item extends DSDS.Meta.Item<HTMLDivElement> {
            type?: 'next' | 'previous',
            link: Omit<DSDS.Component.Link, 'content'>,
            label: React.ReactNode,
        }
    }

    interface SequentialNavigation extends Omit<
        Component<
            'sequential-navigation',
            HTMLDivElement,
            DSDS.Component.SequentialNavigation.Item,
        >,
        'label' | 'content'
    > {
    }
}
