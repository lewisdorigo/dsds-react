import React from 'react';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.WarningText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const WarningText:React.FC<Omit<DSDS.Component.WarningText, 'type'>> = function WarningText({
    id,
    label,
    symbol = '!',
    content,
    children,
    className,
    attributes,
}) {
    return (
        <div
            className={classNames(
                'ds_warning-text',
                className,
            )}
            id={id}
            {...attributes}
        >
            <strong
                className="ds_warning-text__icon"
                aria-hidden="true"
                data-symbol={symbol}
            />
            <strong className="visually-hidden">
                { htmlToReact(label, false) }
            </strong>

            <div className="ds_warning-text__text">
                { content ? htmlToReact(content) : null }
                { children }
            </div>
        </div>
    );
};

export default WarningText;
