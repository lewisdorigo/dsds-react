import React from 'react';

import htmlToReact from '../../lib/htmlToReact';
import classNames from '../../lib/classNames';

import type * as Types from './Label.type';

/**
 * @param {Types.Label} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Label:React.FC<Types.Label> = function Label({
    className,
    content,
    children,
    htmlFor,
    ...props
}) {
    return (
        <label
            className={classNames(
                'ds_label',
                className,
            )}
            htmlFor={htmlFor}
            {...props}
        >
            { content && htmlToReact(content, false) }
            { children }
        </label>
    );
};
