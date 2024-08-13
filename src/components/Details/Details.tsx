import React from 'react';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type { Details } from './Details.type';

/**
 * @param {Details} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Details:React.FC<Omit<Details, 'type'>> = function Details({
    id,
    label,
    content,
    children,
    className,
    attributes,
}) {
    return (
        <details
            className={classNames(
                'ds_details',
                className,
            )}
            id={id}
            {...attributes}
        >
            <summary className="ds_details__summary">
                { htmlToReact(label, false) }
            </summary>

            <div className="ds_details__text">
                { content ? htmlToReact(content) : null }
                { children }
            </div>
        </details>
    );
};

export default Details;
