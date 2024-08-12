import React, { forwardRef } from 'react';

import type { WrapperTag } from './WrapperTag.type';

/**
 * Wraps any given children in a given `tag`.
 *
 * @param {WrapperTag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const WrapperTag = forwardRef<
    HTMLOrSVGElement,
    WrapperTag
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

export default WrapperTag;
