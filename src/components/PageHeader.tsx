import React from 'react';

import Metadata from './Metadata';
import Heading from './Heading';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.PageHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const PageHeader:React.FC<Omit<DSDS.Component.PageHeader, 'type'>> = function PageHeader({
    id = 'page-header',
    label,
    title,
    metadata,
    className,
    headingLevel = 1,
    attributes: {
        'aria-label': ariaLabel = 'Page Header',
        ...attributes
    } = {},
}) {
    return (
        <header
            id={id}
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
            <Heading
                level={headingLevel}
                id={`${id}-title`}
                className={classNames(
                    'ds_page-header__title',
                    headingLevel > 1 ? 'alpha' : '',
                )}
            >
                { htmlToReact(title, false) }
            </Heading>
            { metadata && (
                <Metadata id={`${id}-metadata`} items={metadata} />
            )}
        </header>
    );
};

export default PageHeader;
