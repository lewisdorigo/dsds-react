declare namespace DSDS.Component {
    namespace SideNavigation {
        type Item = DSDS.Component.Link & {
            items?: Item[],
            current?: boolean,
        }

        interface List {
            id: string,
            level?: number,
            items: Item[],
        }
    }

    interface SideNavigation extends Omit<
        Component<
            'side-navigation',
            HTMLDivElement,
            DSDS.Component.SideNavigation.Item,
        >,
        'content',
    > {
    }
}
