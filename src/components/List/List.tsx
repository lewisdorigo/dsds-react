import React from 'react';

import { WrapperTag } from '../WrapperTag';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './List.type';

/**
 * @param {Types.List} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const List:React.FC<Omit<Types.List, 'type'>> = function List({
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
