import React from 'react';

import AspectBox from './AspectBox';

import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.Image} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Image:React.FC<Omit<DSDS.Component.Image, 'type'>> = function Image({
    caption,
    ratio,
    ...props
}) {
    let image = (
        <img {...props} />
    );

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

export default Image;
