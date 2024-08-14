import type { Component } from '../../utils/types';
import type { TaskList } from '../TaskList/TaskList.type';

export interface TaskListGroup extends Component<
    'task-list-group',
    HTMLOListElement | HTMLUListElement,
    Omit<TaskList, 'id' | 'type'>
> {
    status?: React.ReactNode,
    ordered?: boolean,
}
