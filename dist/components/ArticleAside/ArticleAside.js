import React from 'react';
import { WrapperTag } from '../WrapperTag';
import { Heading } from '../Heading';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.ArticleAside} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ArticleAside = function ArticleAside({ tag = 'aside', label, content, children, className, headingLevel = 2, attributes = {}, }) {
    return (React.createElement(WrapperTag, { tag: tag, className: classNames('ds_article-aside', 'ds_!_margin-top--8', className), ...attributes },
        label && (React.createElement(Heading, { level: headingLevel }, htmlToReact(label, false))),
        content && htmlToReact(content),
        children));
};
