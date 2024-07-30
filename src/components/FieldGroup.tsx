import React, { forwardRef } from 'react';

import classNames from '../lib/classNames';

/**
 * Wraps any given children in a given `tag`.
 *
 * @param {DSDS.Component.FieldGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
// eslint-disable-next-line prefer-arrow-callback
const FieldGroup = forwardRef<HTMLDivElement, DSDS.Component.FieldGroup>(function FieldGroup({
    tag = 'div',
    className,
    children,
    inline = false,
    ...props
}, ref) {
    return React.createElement(
        tag as string,
        {
            ...props,
            className: classNames(
                'ds_field-group',
                inline ? 'ds_field-group--inline' : '',
                className,
            ),
            ref,
        },
        children,
    );
});

export default FieldGroup;
