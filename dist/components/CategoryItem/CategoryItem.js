import React from 'react';
import { WrapperTag } from '../WrapperTag';
import htmlToReact from '../../lib/htmlToReact';
import classNames from '../../lib/classNames';
import { Link } from '../Link';
/**
 * @param {Types.CategoryItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const CategoryItem = function CategoryItem({ tag = 'div', id, label, content, children, className, headingLevel = 2, link, attributes = {}, }) {
    return (React.createElement(WrapperTag, { tag: tag, id: id, className: classNames('ds_category-item', className), ...attributes },
        React.createElement(WrapperTag, { tag: `h${headingLevel}`, className: "ds_category-item__title" }, (link
            ? (React.createElement(Link, { ...link, baseClass: "ds_category-item__link", tabText: false }, htmlToReact(label, false)))
            : htmlToReact(label, false))),
        React.createElement("div", { className: "ds_category-item__summary" },
            content && htmlToReact(content),
            children)));
};
