import React, { forwardRef } from 'react';
import classNames from '../../lib/classNames';
/**
 * Wraps any given children in a given `tag`.
 *
 * @param {Types.Wrapper} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
// eslint-disable-next-line prefer-arrow-callback
export const Wrapper = forwardRef(function Wrapper({ tag = 'div', children, className, ...props }, ref) {
    return React.createElement(tag, {
        ...props,
        className: classNames('ds_wrapper', className),
        ref,
    }, children);
});
