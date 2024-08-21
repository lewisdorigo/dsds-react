import React from 'react';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.WarningText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const WarningText = function WarningText({ id, label, symbol = '!', content, children, className, attributes, }) {
    return (React.createElement("div", { className: classNames('ds_warning-text', className), id: id, ...attributes },
        React.createElement("strong", { className: "ds_warning-text__icon", "aria-hidden": "true", "data-symbol": symbol }),
        React.createElement("strong", { className: "visually-hidden" }, htmlToReact(label, false)),
        React.createElement("div", { className: "ds_warning-text__text" },
            content ? htmlToReact(content) : null,
            children)));
};
