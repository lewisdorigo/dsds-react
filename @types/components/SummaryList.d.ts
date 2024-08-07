declare namespace DSDS.Component {
    namespace SummaryList {
        interface Action {
            label: string,
            action: string,
        }

        interface Actions {
            itemId: React.ReactNode,
            actions?: Action[],
        }

        interface Item extends Omit<Actions, 'itemId'>, Omit<
            DSDS.Meta.Item<HTMLLIElement>,
            'content'
        > {
            id: string,
        }
    }

    interface SummaryList<Tag extends HTMLElement = HTMLOListElement> extends Omit<
        DSDS.Component<
            'summary-list',
            Tag,
            Omit<SummaryList.Item, 'id'> & { id?: string },
        >,
        'label' | 'content'
    > {
        borders?: boolean,
    }
}
