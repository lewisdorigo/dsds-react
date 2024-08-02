import React from 'react';

import Metadata from './Metadata';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.PageHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const PageHeader:React.FC<Omit<DSDS.Component.PageHeader, 'type'>> = function PageHeader({
    label,
    title,
    metadata,
    className,
    attributes: {
        'aria-label': ariaLabel = 'Page Header',
        ...attributes
    } = {},
}) {
    return (
        <header
            className={classNames(
                'ds_page-header',
                className,
            )}
            aria-label={ariaLabel}
            {...attributes}
        >
            { label && (
                <span className="ds_page-header__label ds_content-label">
                    { htmlToReact(label, false) }
                </span>
            )}
            <h1 className="ds_page-header__title">
                { htmlToReact(title, false) }
            </h1>
            { metadata && <Metadata items={metadata} /> }
        </header>
    );
};

export default PageHeader;
