import React from 'react';
import { WrapperTag } from '../WrapperTag';
import { HintText } from '../HintText';
import { Link } from '../Link';
import { Heading } from '../Heading';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
import * as Types from './TaskList.type';
/**
 * @param {Types.TaskListItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const TaskListItem = function TaskListItem({ id, label, content, status, link, headingLevel = 3, attributes = {}, }) {
    let statusLabel;
    switch (status) {
        case Types.Status.Complete:
            statusLabel = 'Complete';
            break;
        case Types.Status.InProgress:
            statusLabel = 'In Progress';
            break;
        case Types.Status.CannotStart:
            statusLabel = 'Cannot start yet';
            break;
        default:
            statusLabel = 'Not started';
            break;
    }
    const heading = (React.createElement(React.Fragment, null,
        label && htmlToReact(label, false),
        React.createElement("span", { className: "visually-hidden" }, `(${statusLabel})`)));
    return (React.createElement("li", { ...attributes, className: "ds_task-list__task", id: `task-item-${id}` },
        React.createElement("div", { className: "ds_task-list__task-details" },
            React.createElement(Heading, { level: headingLevel, className: "ds_task-list__task-heading" }, (link && status !== 'cannot-start'
                ? (React.createElement(Link, { baseClass: "ds_task-list__task-link", href: link, tabText: false }, heading))
                : heading)),
            content && (React.createElement(HintText, { className: "ds-task-list__task-summary ds_no-margin--bottom", content: content }))),
        React.createElement("div", { className: classNames('ds_task-list__task-status', `ds_task-list__task-status--${status}`), "aria-hidden": "true" }, statusLabel)));
};
/**
 * @param {Types.TaskList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const TaskList = function TaskList({ id, label, content, items = [], ordered = false, headingLevel = 2, }) {
    if (items.length < 0) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        label && (React.createElement(Heading, { className: "ds_task-list-heading", level: headingLevel }, htmlToReact(label, false))),
        content && htmlToReact(content),
        React.createElement(WrapperTag, { tag: ordered ? 'ol' : 'ul', className: classNames('ds_task-list', ordered ? 'ds_task-list--ordered' : ''), id: id }, items.map((item, index) => {
            const key = `${id}-${index}`;
            return (React.createElement(TaskListItem, { key: key, ...item, headingLevel: Math.min(headingLevel + 1, 6) }));
        }))));
};
