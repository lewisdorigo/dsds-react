import React from 'react';

import htmlToReact from '../lib/htmlToReact';
import classNames from '../lib/classNames';

/**
 * @param {Object} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Label:React.FC<DSDS.Form.Label> = function Label({
    className,
    text,
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
            { text && htmlToReact(text) }
            { children }
        </label>
    );
};

export default Label;
