import React from 'react';

import WrapperTag from '../WrapperTag';
import Heading from '../Heading';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type { ArticleAside } from './ArticleAside.type';

/**
 * @param {ArticleAside} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ArticleAside:React.FC<Omit<ArticleAside, 'type'>> = function ArticleAside({
    tag = 'aside',
    label,
    content,
    children,
    className,
    headingLevel = 2,
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
                <Heading level={headingLevel}>{ htmlToReact(label, false) }</Heading>
            )}
            { content && htmlToReact(content) }
            { children }
        </WrapperTag>
    );
};

export default ArticleAside;
