import type { Component, ComponentItem } from '../../utils/types';
import type { HeadingLevel } from '../../utils/types/meta';
export declare enum TaskListStatus {
    NotStarted = "not-started",
    InProgress = "in-progress",
    Complete = "complete",
    CannotStart = "cannot-start"
}
export interface TaskListItem extends Omit<ComponentItem<HTMLLIElement>, 'value'> {
    status: TaskListStatus;
    link?: string;
    headingLevel?: HeadingLevel;
}
export interface TaskList extends Component<'task-list', HTMLOListElement | HTMLUListElement, TaskListItem> {
    ordered?: boolean;
}
//# sourceMappingURL=TaskList.type.d.ts.map