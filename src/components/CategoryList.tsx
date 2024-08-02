import React from 'react';

import WrapperTag from './WrapperTag';
import CategoryItem from './CategoryItem';
import Card from './Card';

import classNames from '../lib/classNames';

/**
 * @param {DSDS.Component.CategoryList} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const CategoryList:React.FC<Omit<DSDS.Component.CategoryList, 'type'>> = function CategoryList({
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

export default CategoryList;
