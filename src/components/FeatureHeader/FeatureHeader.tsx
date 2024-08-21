import React from 'react';

import { Image } from '../Image';
import { Heading } from '../Heading';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './FeatureHeader.type';
/**
 * @param {Types.FeatureHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const FeatureHeader:React.FC<Types.FeatureHeader> = function FeatureHeader({
    title,
    className,
    content,
    hasBackground = false,
    style,
    children,
    image,
    headingLevel = 1,
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
                <Heading
                    level={headingLevel}
                    className="ds_feature-header__title"
                >
                    { htmlToReact(title, false) }
                </Heading>
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
