import React from 'react';
import { WrapperTag } from '../WrapperTag';
import classNames from '../../lib/classNames';
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
export const Heading = function Heading({ level = 2, isLegend = false, className, children, ...props }) {
    let tag = `h${level}`;
    // let levelClass:string|null = '';
    if (isLegend) {
        tag = 'legend';
        // levelClass = classes[level];
    }
    return (React.createElement(WrapperTag, { tag: tag, className: classNames(className), ...props }, children));
};
