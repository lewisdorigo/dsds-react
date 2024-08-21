import React from 'react';
import { WrapperTag } from '../WrapperTag';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.ErrorMessage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ErrorMessage = function ErrorMessage({ tag = 'div', children, className, ...props }) {
    return (React.createElement(WrapperTag, { tag: tag, className: classNames('ds_question__error-message', className), ...props }, children));
};
/**
 * @param {Types.ErrorMessages} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ErrorMessages = function ErrorMessages({ items: rawErrors = [], id = '', }) {
    const errors = Array.isArray(rawErrors) ? rawErrors : [rawErrors];
    if (errors.length < 1) {
        return null;
    }
    return (React.createElement("ul", { className: "ds_no-bullets", id: id }, errors.map((error, index) => {
        const key = `${id}-${index}`;
        return (React.createElement(ErrorMessage, { tag: "li", key: key }, htmlToReact(typeof error === 'string'
            ? error
            : error.fieldMessage || error.message, false)));
    })));
};
