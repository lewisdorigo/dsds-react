import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.ArticleAside} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ArticleAside:React.FC<Omit<DSDS.Component.ArticleAside, 'type'>> = function ArticleAside({
    tag = 'aside',
    label,
    content,
    children,
    className,
    attributes = {},
}) {
    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'ds_article-aside',
                'ds_!_margin-top--8',
                className,
            )}
            {...attributes}
        >
            { label && (
                <h2>{ htmlToReact(label, false) }</h2>
            )}
            { content && htmlToReact(content) }
            { children }
        </WrapperTag>
    );
};

export default ArticleAside;
