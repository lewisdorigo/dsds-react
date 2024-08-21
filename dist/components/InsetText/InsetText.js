import React from 'react';
import { WrapperTag } from '../WrapperTag';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.InsetText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const InsetText = function InsetText({ id, tag = 'div', content, children, className, attributes, }) {
    return (React.createElement(WrapperTag, { tag: tag, className: classNames('ds_inset-text', className), id: id, ...attributes },
        React.createElement("div", { className: "ds_inset-text__text" },
            content ? htmlToReact(content) : null,
            children)));
};
