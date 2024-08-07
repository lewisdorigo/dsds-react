import React from 'react';

import WrapperTag from './WrapperTag';

import htmlToReact from '../lib/htmlToReact';
import classNames from '../lib/classNames';
import Link from './Link';

/**
 * @param {DSDS.Component.CategoryItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const CategoryItem:React.FC<Omit<DSDS.Component.CategoryItem, 'type'>> = function CategoryItem({
    tag = 'div',
    id,
    label,
    content,
    children,
    className,
    headingLevel = 2,
    link,
    attributes = {},
}) {
    return (
        <WrapperTag
            tag={tag}
            id={id}
            className={classNames(
                'ds_category-item',
                className,
            )}
            {...attributes}
        >
            <WrapperTag
                tag={`h${headingLevel}` as keyof JSX.IntrinsicElements}
                className="ds_category-item__title"
            >
                {(
                    link
                        ? (
                            <Link
                                {...link as DSDS.Component.Link}
                                baseClass="ds_category-item__link"
                                tabText={false}
                            >
                                { htmlToReact(label, false) }
                            </Link>
                        )
                        : htmlToReact(label, false)
                )}
            </WrapperTag>
            <div className="ds_category-item__summary">
                { content && htmlToReact(content) }
                { children }
            </div>
        </WrapperTag>
    );
};

export default CategoryItem;
