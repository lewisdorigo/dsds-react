import React from 'react';
import { WrapperTag } from '../WrapperTag';
import addClassToElement from '../../lib/addClass';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.AspectBox} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const AspectBox = function AspectBox({ tag = 'div', ratio, children, content, attributes = {}, }) {
    return (React.createElement(WrapperTag, { tag: tag, className: classNames('ds_aspect-box', ratio ? `ds_aspect-box--${ratio}` : ''), ...attributes },
        content && React.Children.map(htmlToReact(content), (item) => addClassToElement(item, 'ds_aspect-box__inner')),
        React.Children.map(children, (item) => addClassToElement(item, 'ds_aspect-box__inner'))));
};
