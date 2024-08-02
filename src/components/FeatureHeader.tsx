import React from 'react';

import Image from './Image';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.FeatureHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FeatureHeader:React.FC<DSDS.Component.FeatureHeader> = function FeatureHeader({
    title,
    className,
    content,
    hasBackground = false,
    style,
    children,
    image,
    attributes: {
        'aria-label': ariaLabel = 'Page Header',
        ...attributes
    } = {},
}) {
    return (
        <header
            className={classNames(
                'ds_feature-header',
                hasBackground ? 'ds_feature-header--background' : '',
                style ? `ds_feature-header--${style}` : '',
                className,
            )}
            aria-label={ariaLabel}
            {...attributes}
        >
            <div className="ds_feature-header__primary">
                <h1 className="ds_feature-header__title">
                    { htmlToReact(title, false) }
                </h1>
                { content && htmlToReact(content) }
                { children }
            </div>
            <div className="ds_feature-header__secondary">
                { image && (
                    <Image
                        alt=""
                        {...image}
                        className="ds_feature-header__image"
                    />
                )}
            </div>
        </header>
    );
};

export default FeatureHeader;
