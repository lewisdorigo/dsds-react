import React from 'react';
import { Link } from '../Link';
import { Heading } from '../Heading';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.ErrorSummary} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ErrorSummary = function ErrorSummary({ items = [], id = 'error-summary', label = 'There is a problem', className, headingLevel = 2, attributes: { autoFocus = true, ...attributes } = {}, }) {
    return (React.createElement("div", { className: classNames('ds_error-summary', className), ...attributes, role: "alert", "aria-labelledby": `${id}-title`, id: id, tabIndex: -1, autoFocus: autoFocus },
        React.createElement(Heading, { level: headingLevel, className: classNames('ds_error-summary__title', headingLevel !== 2 ? 'beta' : '') }, htmlToReact(label, false)),
        React.createElement("ul", { className: "ds_error-summary__list" }, items.map((error, index) => {
            const key = `${id}-${index}`;
            let message;
            if (typeof error === 'string') {
                message = htmlToReact(error, false);
            }
            else if ((error.fieldId || error.href) && error.message) {
                message = (React.createElement(Link, { baseClass: "", href: error.href || `#${error.fieldId}` }, htmlToReact(error.message, false)));
            }
            else if (error.message) {
                message = htmlToReact(error.message, false);
            }
            else {
                return null;
            }
            return (React.createElement("li", { key: key }, message));
        }))));
};
