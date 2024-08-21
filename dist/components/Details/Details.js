import React from 'react';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.Details} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Details = function Details({ id, label, content, children, className, attributes, }) {
    return (React.createElement("details", { className: classNames('ds_details', className), id: id, ...attributes },
        React.createElement("summary", { className: "ds_details__summary" }, htmlToReact(label, false)),
        React.createElement("div", { className: "ds_details__text" },
            content ? htmlToReact(content) : null,
            children)));
};
