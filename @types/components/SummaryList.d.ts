declare namespace DSDS.Component {
    namespace SummaryList {
        interface Action {
            label: string,
            action: string,
        }

        interface Actions {
            itemId: string,
            actions?: Action[],
        }

        type AnswerItem = { label: React.ReactNode, value: Answer }
        type Answer = (
            React.ReactNode
            | React.ReactNode[]
            | AnswerItem[]
        );

        interface AnswerHelper {
            itemId: string,
            answer: Answer,
        }

        interface Item extends Omit<Actions, 'itemId'>, Omit<
            DSDS.Meta.Item<HTMLLIElement>,
            'content' | 'value'
        > {
            id: string,
            value?: Answer,
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
        id: string,
        borders?: boolean,
    }
}
