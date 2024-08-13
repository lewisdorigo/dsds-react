import React from 'react';

import WrapperTag from '../WrapperTag';
import htmlToReact from '../../lib/htmlToReact';

import type { List } from './List.type';

/**
 * @param {List} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const List:React.FC<Omit<List, 'type'>> = function List({
    ordered = false,
    id,
    className,
    items = [],
    attributes,
}) {
    if (items.length < 1) { return null; }

    return (
        <WrapperTag
            tag={ordered ? 'ol' : 'ul'}
            className={className}
            id={id}
            {...attributes}
        >
            {items.map((item, index) => {
                const key = `${id || 'list'}-${index}`;
                return (
                    <li key={key}>{ htmlToReact(item) }</li>
                );
            })}
        </WrapperTag>
    );
};

export default List;
