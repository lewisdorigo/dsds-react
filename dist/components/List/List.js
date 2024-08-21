import React from 'react';
import { WrapperTag } from '../WrapperTag';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.List} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const List = function List({ ordered = false, id, className, items = [], attributes, }) {
    if (items.length < 1) {
        return null;
    }
    return (React.createElement(WrapperTag, { tag: ordered ? 'ol' : 'ul', className: className, id: id, ...attributes }, items.map((item, index) => {
        const key = `${id || 'list'}-${index}`;
        return (React.createElement("li", { key: key }, htmlToReact(item)));
    })));
};
