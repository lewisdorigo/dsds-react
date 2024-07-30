import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.ArticleAside} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ArticleAside:React.FC<DSDS.Component.ArticleAside> = function ArticleAside({
    content,
    children,
    className,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_article-aside',
                'ds_!_margin-top--8',
                className,
            )}
            {...props}
        >
            { content && htmlToReact(content) }
            { children }
        </WrapperTag>
    );
};

export default ArticleAside;
