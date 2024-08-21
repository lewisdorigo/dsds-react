import React, { isValidElement } from 'react';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.PrefilledValues} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const PrefilledValues = function PrefilledValues({ items = [], id, label = 'Your current answers', className, attributes = {}, }) {
    return (React.createElement("dl", { "aria-label": label, ...attributes, className: classNames('ds_prefilled-value-list', className), id: id }, items.map((item, index) => {
        const key = `${id}-${index}`;
        return (React.createElement(React.Fragment, { key: key },
            React.createElement("dt", { className: "ds_prefilled-value-list__key" }, htmlToReact(item.label, false)),
            React.createElement("dd", { className: "ds_prefilled-value-list__value" },
                React.createElement("div", null, htmlToReact(item.value, false)),
                ' ',
                item.actions.map((action) => (action && typeof action === 'object' && isValidElement(action)
                    ? React.cloneElement(action, {
                        className: classNames('ds_prefilled-value-list__value-actions', action.props.className ? action.props.className : null),
                    })
                    : action)))));
    })));
};
