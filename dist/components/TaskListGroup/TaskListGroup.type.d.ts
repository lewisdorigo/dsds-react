import type { Component } from '../../utils/types';
import type { TaskList } from '../TaskList/TaskList.type';
export interface TaskListGroup extends Component<'task-list-group', HTMLOListElement | HTMLUListElement, Omit<TaskList, 'id' | 'type'>> {
    ordered?: boolean;
}
//# sourceMappingURL=TaskListGroup.type.d.ts.map