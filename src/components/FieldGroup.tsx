import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';

/**
 * @param {DSDS.Component.FieldGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FieldGroup:React.FC<DSDS.Component.FieldGroup> = function FieldGroup({
    tag = 'div',
    className,
    children,
    inline = false,
    ...props
}) {
    return (
        <WrapperTag
            {...props}
            tag={tag}
            className={classNames(
                'ds_field-group',
                inline ? 'ds_field-group--inline' : '',
                className,
            )}
        >
            { children }
        </WrapperTag>
    );
};

export default FieldGroup;
