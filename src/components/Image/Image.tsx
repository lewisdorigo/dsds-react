import React from 'react';

import { AspectBox } from '../AspectBox';

import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './Image.type';

/**
 * @param {Types.ImageProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Image:React.FC<Omit<Types.Image, 'type'>> = function Image({
    id = 'image',
    caption,
    ratio,
    src,
    srcSet,
    alt = '',
    sources = [],
    attributes = {},
}) {
    let image = (
        <img
            src={src}
            alt={alt}
            srcSet={srcSet}
            loading="lazy"
            {...attributes}
        />
    );

    if (sources.length > 0) {
        image = (
            <picture>
                { sources.map((source, index) => {
                    const key = `${id}-source-${index}`;
                    return <source key={key} {...source} />;
                })}

                { image }
            </picture>
        );
    }

    if (ratio) {
        image = (
            <AspectBox
                ratio={typeof ratio !== 'boolean' ? ratio : undefined}
            >
                { image }
            </AspectBox>
        );
    }

    if (!caption) {
        return image;
    }

    return (
        <figure>
            { image }
            <figcaption>
                { htmlToReact(caption) }
            </figcaption>
        </figure>
    );
};
