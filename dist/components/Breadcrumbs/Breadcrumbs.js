import React from 'react';
import { Link } from '../Link';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.Breadcrumbs} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Breadcrumbs = function Breadcrumbs({ items = [], id = 'breadcrumbs', hideCurrent = false, className, attributes: { 'aria-label': ariaLabel = 'Breadcrumbs', ...attributes } = {}, }) {
    return (React.createElement("nav", { className: className, id: id, ...attributes, "aria-label": ariaLabel },
        React.createElement("ol", { className: "ds_breadcrumbs" }, items.map((item, index) => {
            const key = `${id}-${index}`;
            const current = index === items.length - 1;
            return (React.createElement("li", { key: key, className: classNames('ds_breadcrumbs__item', current && hideCurrent ? 'visually-hidden' : undefined) }, (current
                ? (React.createElement(React.Fragment, null,
                    item.content && htmlToReact(item.content, false),
                    item.children))
                : (React.createElement(Link, { ...item, baseClass: "ds_breadcrumbs__link", tabText: false, "aria-current": current ? 'page' : undefined })))));
        }))));
};
