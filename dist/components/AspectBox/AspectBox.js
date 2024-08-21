import React, { isValidElement } from 'react';
import { WrapperTag } from '../WrapperTag';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.AspectBox} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const AspectBox = function AspectBox({ tag = 'div', ratio, children, content, attributes = {}, }) {
    const addClass = (item) => (item && typeof item === 'object' && isValidElement(item)
        ? React.cloneElement(item, {
            className: classNames('ds_aspect-box__inner', item.props.className ? item.props.className : null),
        })
        : item);
    return (React.createElement(WrapperTag, { tag: tag, className: classNames('ds_aspect-box', ratio ? `ds_aspect-box--${ratio}` : ''), ...attributes },
        content && React.Children.map(htmlToReact(content), addClass),
        React.Children.map(children, addClass)));
};
