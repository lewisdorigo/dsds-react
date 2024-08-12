import React from 'react';

import htmlToReact from '../../lib/htmlToReact';
import classNames from '../../lib/classNames';

import type { Label } from './Label.type';

/**
 * @param {Label} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Label:React.FC<Label> = function Label({
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

export default Label;
