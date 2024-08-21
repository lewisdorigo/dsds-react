import React from 'react';
import { Link } from '../Link';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {DSDS.Component.SummaryList.Actions} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SummaryListActions = function SummaryListActions({ itemId, actions = [], }) {
    if (actions.length < 1) {
        return null;
    }
    return (React.createElement("div", { className: "ds_summary-list__actions", id: `${itemId}-actions` },
        React.createElement("ul", { className: "ds_summary-list__actions-list" }, actions.map(({ label, action }, index) => {
            const key = `${itemId}-action-${index}`;
            return (React.createElement("li", { key: key, className: "ds_summary-list__actions-list-item" },
                React.createElement(Link, { href: action, "aria-describedby": `${itemId}-label ${itemId}-answer` }, label)));
        }))));
};
/**
 * @param {Types.SummaryListAnswer} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SummaryListAnswer = function SummaryListAnswer({ answer, itemId, }) {
    if (Array.isArray(answer)
        && (typeof answer[0]
            && (typeof answer[0] !== 'object'
                || !Object.prototype.hasOwnProperty.call(answer[0], 'label')))) {
        const ans = answer;
        return (React.createElement("ul", { className: "ds_no-margin--vertical" }, ans.map((item, index) => {
            const key = `${itemId}-answer-${index}`;
            return (React.createElement("li", { key: key, className: "ds_no-margin--bottom" },
                React.createElement(SummaryListAnswer, { itemId: key, answer: item })));
        })));
    }
    if (Array.isArray(answer)
        && (typeof answer[0]
            && typeof answer[0] === 'object'
            && Object.prototype.hasOwnProperty.call(answer[0], 'label')
            && Object.prototype.hasOwnProperty.call(answer[0], 'value'))) {
        const ans = answer;
        return (React.createElement("dl", { className: "ds_no-margin--bottom" }, ans.map(({ label, value }, index) => {
            const key = `${itemId}-answer-${index}`;
            return (React.createElement(React.Fragment, { key: key },
                React.createElement("dt", null, htmlToReact(label, false)),
                React.createElement("dd", null,
                    React.createElement(SummaryListAnswer, { itemId: key, answer: value }))));
        })));
    }
    return htmlToReact(answer, false);
};
/**
 * @param {Types.SummaryListItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SummaryListItem = function SummaryListItem({ id, label, value, actions, }) {
    return (React.createElement("li", { className: "ds_summary-list__item", id: id },
        React.createElement("div", { className: "ds_summary-list__key", id: `${id}-label` }, htmlToReact(label, false)),
        React.createElement("div", { className: "ds_summary-list__value" },
            React.createElement("span", { className: "visually-hidden" }, "Your answer is:"),
            React.createElement("q", { className: "ds_summary-list__answer", id: `${id}-answer` },
                React.createElement(SummaryListAnswer, { itemId: id, answer: value }))),
        actions && actions.length > 0 && (React.createElement(SummaryListActions, { itemId: id, actions: actions }))));
};
/**
 * @param {Types.SummaryList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SummaryList = function SummaryList({ className, borders = true, items = [], id, attributes = {}, }) {
    return (React.createElement("ol", { id: id, className: classNames('ds_summary-list', !borders ? 'ds_summary-list--no-border' : '', className), ...attributes }, items.map((item, index) => {
        const key = `${id}-${index}`;
        return (React.createElement(SummaryListItem, { key: key, id: key, ...item }));
    })));
};
