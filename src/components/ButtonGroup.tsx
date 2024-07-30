import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {DSDS.Component.WrapperTag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ButtonGroup:React.FC<DSDS.Component.WrapperTag> = function ButtonGroup({
    tag = 'nav',
    className,
    children,
    ...props
}) {
    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'ds_button-group',
                className,
            )}
            {...props}
        >
            { React.Children.map(children, (child) => (
                <>
                    { child }
                    {' '}
                </>
            )) }
        </WrapperTag>
    );
};

export default ButtonGroup;
