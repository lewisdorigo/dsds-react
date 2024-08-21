import React from 'react';
import { SummaryList } from '../SummaryList';
import { Link } from '../Link';
import { Heading } from '../Heading';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.SummaryListActions} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SummaryCardActions = function SummaryListActions({ itemId, actions = [], }) {
    if (actions.length < 1) {
        return null;
    }
    return (React.createElement("ul", { className: "ds_summary-card__actions-list", id: `${itemId}-actions` }, actions.map(({ label, action }, index) => {
        const key = `summary-card-action-${index}`;
        return (React.createElement("li", { key: key, className: "ds_summary-card__actions-list-item" },
            React.createElement(Link, { href: action, "aria-describedby": `${itemId}-label` }, label)));
    })));
};
/**
 * @param {Types.SummaryCard} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SummaryCard = function SummaryCard({ className, label, headingLevel = 3, actions, borders, id, items = [], attributes = {}, }) {
    return (React.createElement("div", { id: id, className: classNames('ds_summary-card', className), ...attributes },
        React.createElement("div", { className: "ds_summary-card__header" },
            React.createElement(Heading, { level: headingLevel, className: "ds_summary-card-title", id: `${id}-label` }, htmlToReact(label, false)),
            React.createElement(SummaryCardActions, { itemId: id, actions: actions })),
        React.createElement("div", { className: "ds_summary-card__content" },
            React.createElement(SummaryList, { id: `${id}-list`, borders: borders, items: items }))));
};
