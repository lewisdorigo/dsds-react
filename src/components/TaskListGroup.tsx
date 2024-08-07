import React from 'react';

import WrapperTag from './WrapperTag';
import Link from './Link';
import Heading from './Heading';
import TaskList from './TaskList';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';
import { TaskListStatus } from '../lib/enums';

/**
 * @param {DSDS.Component.TaskList.Group} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TaskListGroup:React.FC<DSDS.Component.TaskListGroup> = function TaskListGroup({
    id,
    label,
    content,
    items = [],
    ordered = false,
    attributes = {},
    headingLevel = 2,
}) {
    let allSections:DSDS.Component.TaskList.Item[] = [];
    items.forEach(({ items: groupItems = [] }) => {
        allSections = [
            ...allSections,
            ...groupItems,
        ];
    });

    const numSections = allSections.length;
    const numComplete = (
        allSections.filter(({ status }) => status === TaskListStatus.Complete).length
    );
    const firstIncomplete = allSections.find(({ status }) => status !== TaskListStatus.Complete);

    return (
        <>
            { label && (
                <Heading
                    className="ds_task-list-status-heading"
                    level={headingLevel}
                >
                    { htmlToReact(label, false) }
                </Heading>
            )}
            { content && htmlToReact(content) }
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
                                    Math.min(headingLevel + 1, 6) as DSDS.Meta.HeadingLevel
                                }
                            />
                        </li>
                    );
                })}
            </WrapperTag>
        </>
    );
};

export default TaskListGroup;
