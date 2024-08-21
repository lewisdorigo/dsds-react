import React from 'react';
import { WrapperTag } from '../WrapperTag';
import htmlToReact from '../../lib/htmlToReact';
import classNames from '../../lib/classNames';
/**
 * @param {Types.HintText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const HintText = function HintText({ className, content, children, ...props }) {
    return (React.createElement(WrapperTag, { className: classNames('ds_hint-text', className), ...props },
        content && htmlToReact(content),
        children));
};
