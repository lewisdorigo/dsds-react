import React, { forwardRef } from 'react';

import type * as Types from './WrapperTag.type';

/**
 * Wraps any given children in a given `tag`.
 *
 * @param {Types.WrapperTag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const WrapperTag = forwardRef<
    HTMLOrSVGElement,
    Types.WrapperTag
>(function WrapperTag({ // eslint-disable-line prefer-arrow-callback
    tag = 'div',
    children,
    ...props
}, ref) {
    return React.createElement(
        tag as string,
        {
            ...props,
            ref,
        },
        children,
    );
});
