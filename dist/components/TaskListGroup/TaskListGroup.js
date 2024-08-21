import React from 'react';
import { WrapperTag } from '../WrapperTag';
import { Link } from '../Link';
import { Heading } from '../Heading';
import { TaskList } from '../TaskList';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
import * as TaskListTypes from '../TaskList/TaskList.type';
/**
 * @param {Types.TaskListGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const TaskListGroup = function TaskListGroup({ id, label, status, content, items = [], ordered = false, attributes = {}, headingLevel = 2, }) {
    let allSections = [];
    items.forEach(({ items: groupItems = [] }) => {
        allSections = [
            ...allSections,
            ...groupItems,
        ];
    });
    const numSections = allSections.length;
    const numComplete = (allSections
        .filter(({ status: itemStatus }) => itemStatus === TaskListTypes.Status.Complete)
        .length);
    const firstIncomplete = (allSections
        .find(({ status: itemStatus }) => itemStatus !== TaskListTypes.Status.Complete));
    return (React.createElement(React.Fragment, null,
        label && (React.createElement(Heading, { level: headingLevel }, htmlToReact(label, false))),
        status && (React.createElement(Heading, { level: Math.min(headingLevel + 1, 6), className: "ds_task-list-status-heading" }, htmlToReact(status, false))),
        content && htmlToReact(content),
        numSections > 0 && (React.createElement("nav", null,
            React.createElement("p", null,
                "You have completed",
                ` ${numComplete} of ${numSections} `,
                "sections."),
            firstIncomplete && (React.createElement("p", null,
                React.createElement(Link, { href: `#task-item-${firstIncomplete.id}` }, "Skip to first incomplete section"))))),
        items.length > 0 && (React.createElement(WrapperTag, { tag: ordered ? 'ol' : 'ul', className: classNames('ds_task-list-group', ordered ? 'ds_task-list-group--ordered' : ''), id: id, ...attributes }, items.map((item, index) => {
            const key = `${id}-${index}`;
            return (React.createElement("li", { key: key, className: "ds_task-list-group__section" },
                React.createElement(TaskList, { id: id, ...item, headingLevel: Math.min(headingLevel + 1, 6) })));
        })))));
};
