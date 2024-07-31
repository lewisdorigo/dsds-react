import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

const classes = [
    null,
    'alpha',
    'beta',
    'gamma',
    'delta',
    'epsilon',
    'zeta',
];

/**
 * @param {DSDS.Component.Heading} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Heading:React.FC<DSDS.Component.Heading> = function Heading({
    level = 2,
    isLegend = false,
    className,
    children,
    ...props
}) {
    let tag = `h${level}`;
    let levelClass:string|null = '';

    if (isLegend) {
        tag = 'legend';
        levelClass = classes[level];
    }

    return (
        <WrapperTag
            tag={tag as keyof JSX.IntrinsicElements}
            className={classNames(
                className,
                levelClass,
            )}
            {...props}
        >
            { children }
        </WrapperTag>
    );
};

export default Heading;
