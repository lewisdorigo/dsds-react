import React from 'react';

import WrapperTag from './WrapperTag';
import HintText from './HintText';
import Link from './Link';
import Heading from './Heading';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';
import { TaskListStatus } from '../lib/enums';

/**
 * @param {DSDS.Component.TaskList.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TaskListItem:React.FC<DSDS.Component.TaskList.Item> = function TaskListItem({
    id,
    label,
    content,
    status,
    link,
    headingLevel = 3,
    attributes = {},
}) {
    let statusLabel;

    switch (status) {
        case TaskListStatus.Complete:
            statusLabel = 'Complete';
            break;

        case TaskListStatus.InProgress:
            statusLabel = 'In Progress';
            break;

        case TaskListStatus.CannotStart:
            statusLabel = 'Cannot start yet';
            break;

        default:
            statusLabel = 'Not started';
            break;
    }

    const heading = (
        <>
            { label && htmlToReact(label, false) }
            <span className="visually-hidden">
                {`(${statusLabel})`}
            </span>
        </>
    );

    return (
        <li
            {...attributes}
            className="ds_task-list__task"
            id={`task-item-${id}`}
        >
            <div className="ds_task-list__task-details">
                <Heading
                    level={headingLevel}
                    className="ds_task-list__task-heading"
                >
                    {(
                        link && status !== 'cannot-start'
                            ? (
                                <Link
                                    baseClass="ds_task-list__task-link"
                                    href={link}
                                    tabText={false}
                                >
                                    { heading }
                                </Link>
                            )
                            : heading
                    )}
                </Heading>
                { content && (
                    <HintText
                        className="ds-task-list__task-summary ds_no-margin--bottom"
                        content={content}
                    />
                )}
            </div>
            <div
                className={classNames(
                    'ds_task-list__task-status',
                    `ds_task-list__task-status--${status}`,
                )}
                aria-hidden="true"
            >
                { statusLabel }
            </div>
        </li>
    );
};

/**
 * @param {DSDS.Component.TaskList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const TaskList:React.FC<DSDS.Component.TaskList> = function TaskList({
    id,
    label,
    content,
    items = [],
    ordered = false,
    headingLevel = 2,
}) {
    return (
        <>
            { label && (
                <Heading
                    className="ds_task-list-heading"
                    level={headingLevel}
                >
                    { htmlToReact(label, false) }
                </Heading>
            )}
            { content && htmlToReact(content) }
            <WrapperTag
                tag={ordered ? 'ol' : 'ul'}
                className={classNames(
                    'ds_task-list',
                    ordered ? 'ds_task-list--ordered' : '',
                )}
                id={id}
            >
                { items.map((item, index) => {
                    const key = `${id}-${index}`;

                    return (
                        <TaskListItem
                            key={key}
                            {...item}
                            headingLevel={
                                Math.min(headingLevel + 1, 6) as DSDS.Meta.HeadingLevel
                            }
                        />
                    );
                })}
            </WrapperTag>
        </>
    );
};

export default TaskList;
