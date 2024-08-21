import React from 'react';

import { WrapperTag } from '../WrapperTag';
import classNames from '../../lib/classNames';

import type * as Types from './Heading.type';

// const classes = [
//     null,
//     'alpha',
//     'beta',
//     'gamma',
//     'delta',
//     'epsilon',
//     'zeta',
// ];

/**
 * @param {Types.Heading} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Heading:React.FC<Types.Heading> = function Heading({
    level = 2,
    isLegend = false,
    className,
    children,
    ...props
}) {
    let tag = `h${level}`;
    // let levelClass:string|null = '';

    if (isLegend) {
        tag = 'legend';
        // levelClass = classes[level];
    }

    return (
        <WrapperTag
            tag={tag as keyof JSX.IntrinsicElements}
            className={classNames(
                className,
                // levelClass,
            )}
            {...props}
        >
            { children }
        </WrapperTag>
    );
};
