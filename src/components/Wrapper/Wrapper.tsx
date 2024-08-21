import React, { forwardRef } from 'react';

import classNames from '../../lib/classNames';
import type * as Types from './Wrapper.type';

/**
 * Wraps any given children in a given `tag`.
 *
 * @param {Types.Wrapper} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
// eslint-disable-next-line prefer-arrow-callback
export const Wrapper = forwardRef<HTMLDivElement, Types.Wrapper>(function Wrapper({
    tag = 'div',
    children,
    className,
    ...props
}, ref) {
    return React.createElement(
        tag as string,
        {
            ...props,
            className: classNames(
                'ds_wrapper',
                className,
            ),
            ref,
        },
        children,
    );
});
