import React from 'react';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.Metadata.Item} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const MetadataItem:React.FC<DSDS.Component.Metadata.Item> = function MetadataItem({
    label,
    value: rawValue,
    hideLabel,
    isLabel,
}) {
    let value;
    if (rawValue instanceof Date) {
        value = (
            <time dateTime={rawValue.toISOString()}>
                { rawValue.toLocaleDateString('en-GB', {
                    dateStyle: 'long',
                })}
            </time>
        );
    } else {
        value = htmlToReact(rawValue, false);
    }

    return (
        <div className="ds_metadata__item">
            <dt className={classNames('ds_metadata__key', hideLabel ? 'visually-hidden' : '')}>
                { label }
            </dt>
            {' '}
            <dd className={classNames('ds_metadata__value', isLabel ? 'ds_content-label' : '')}>
                { value }
                {' '}
            </dd>
        </div>
    );
};

/**
 * @param {DSDS.Component.Metadata} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Metadata:React.FC<Omit<DSDS.Component.Metadata, 'type'>> = function Metadata({
    items,
    className,
    inline = false,
    attributes = {},
}) {
    return (
        <dl
            className={classNames(
                'ds_metadata',
                inline ? 'ds_metadata--inline' : '',
                className,
            )}
            {...attributes}
        >
            { items && items.map((item, index) => {
                const itemKey = `meta-data-${index}`;
                return <MetadataItem key={itemKey} {...item} />;
            })}
        </dl>
    );
};

export default Metadata;
