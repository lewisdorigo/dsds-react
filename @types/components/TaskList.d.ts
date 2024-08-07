declare namespace DSDS.Component {
    namespace TaskList {
        type Status = import('../../src/lib/enums').TaskListStatus;

        interface Item extends Omit<
            DSDS.Meta.Item<HTMLLIElement>,
            'value'
        > {
            status: Status,
            link?: string,
            headingLevel?: DSDS.Meta.HeadingLevel,
        }
    }

    interface TaskList extends DSDS.Component<
        'task-list',
        HTMLOListElement | HTMLUListElement,
        TaskList.Item,
    > {
        ordered?: boolean,
    }

    interface TaskListGroup extends DSDS.Component<
        'task-list-group',
        HTMLOListElement | HTMLUListElement,
        Omit<TaskList, 'id'>,
    > {
        ordered?: boolean,
    }
}
