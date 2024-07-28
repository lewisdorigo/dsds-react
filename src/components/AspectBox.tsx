import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {DSDS.Component.AspectBox} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const AspectBox:React.FC<DSDS.Component.AspectBox> = function AspectBox({
    ratio,
    children,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_aspect-box',
                ratio ? `ds_aspect-box--${ratio}` : '',
            )}
            {...props}
        >
            { children }
        </WrapperTag>
    );
};

export default AspectBox;
