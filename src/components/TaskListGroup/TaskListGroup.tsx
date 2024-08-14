import React from 'react';

import WrapperTag from '../WrapperTag';
import Link from '../Link';
import Heading from '../Heading';
import TaskList from '../TaskList';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import { TaskListStatus } from '../TaskList/TaskList.type';
import type { TaskListGroup } from './TaskListGroup.type';
import type { TaskListItem } from '../TaskList/TaskList.type';
import type { HeadingLevel } from '../../utils/types/meta';

/**
 * @param {TaskListGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TaskListGroup:React.FC<Omit<
    TaskListGroup,
    'type'
>> = function TaskListGroup({
    id,
    label,
    status,
    content,
    items = [],
    ordered = false,
    attributes = {},
    headingLevel = 2,
}) {
    let allSections:TaskListItem[] = [];
    items.forEach(({ items: groupItems = [] }) => {
        allSections = [
            ...allSections,
            ...groupItems,
        ];
    });

    const numSections = allSections.length;
    const numComplete = (
        allSections
            .filter(({ status: itemStatus }) => itemStatus === TaskListStatus.Complete)
            .length
    );
    const firstIncomplete = (
        allSections
            .find(({ status: itemStatus }) => itemStatus !== TaskListStatus.Complete)
    );

    return (
        <>
            { label && (
                <Heading level={headingLevel}>
                    { htmlToReact(label, false) }
                </Heading>
            )}
            { status && (
                <Heading
                    level={Math.min(headingLevel + 1, 6) as HeadingLevel}
                    className="ds_task-list-status-heading"
                >
                    { htmlToReact(status, false) }
                </Heading>
            )}
            { content && htmlToReact(content) }

            { numSections > 0 && (
                <nav>
                    <p>
                        You have completed
                        {` ${numComplete} of ${numSections} `}
                        sections.
                    </p>
                    { firstIncomplete && (
                        <p>
                            <Link href={`#task-item-${firstIncomplete.id}`}>
                                Skip to first incomplete section
                            </Link>
                        </p>
                    )}
                </nav>
            )}

            { items.length > 0 && (
                <WrapperTag
                    tag={ordered ? 'ol' : 'ul'}
                    className={classNames(
                        'ds_task-list-group',
                        ordered ? 'ds_task-list-group--ordered' : '',
                    )}
                    id={id}
                    {...attributes}
                >
                    { items.map((item, index) => {
                        const key = `${id}-${index}`;

                        return (
                            <li key={key} className="ds_task-list-group__section">
                                <TaskList
                                    id={id}
                                    {...item}
                                    headingLevel={
                                        Math.min(headingLevel + 1, 6) as HeadingLevel
                                    }
                                />
                            </li>
                        );
                    })}
                </WrapperTag>
            )}
        </>
    );
};

export default TaskListGroup;
