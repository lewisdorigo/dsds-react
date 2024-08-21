import React from 'react';

import { WrapperTag } from '../WrapperTag';
import { CategoryItem } from '../CategoryItem';
import { Card } from '../Card';

import classNames from '../../lib/classNames';

import type * as Types from './CategoryList.type';

/**
 * @param {Types.CategoryList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const CategoryList:React.FC<Omit<Types.CategoryList, 'type'>> = function CategoryList({
    tag = 'ul',
    id,
    layout,
    spacing,
    items = [],
    className,
    attributes = {},
}) {
    return (
        <WrapperTag
            tag={tag}
            id={id}
            className={classNames(
                'ds_category-list',
                layout ? `ds_category-list--${layout}` : '',
                spacing ? `ds_category-list--${spacing}` : '',
                className,
            )}
            {...attributes}
        >
            {items.map((item, index) => {
                const key = `${id}-${index}`;

                switch (item.type) {
                    case 'card':
                        return (
                            <Card
                                key={key}
                                {...item}
                                tag="li"
                            />
                        );

                    default:
                        return (
                            <CategoryItem
                                key={key}
                                {...item}
                                tag="li"
                            />
                        );
                }
            })}
        </WrapperTag>
    );
};
