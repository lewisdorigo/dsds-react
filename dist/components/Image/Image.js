import React from 'react';
import { AspectBox } from '../AspectBox';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.ImageProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Image = function Image({ id = 'image', caption, ratio, src, srcSet, alt = '', sources = [], attributes = {}, }) {
    let image = (React.createElement("img", { src: src, alt: alt, srcSet: srcSet, loading: "lazy", ...attributes }));
    if (sources.length > 0) {
        image = (React.createElement("picture", null,
            sources.map((source, index) => {
                const key = `${id}-source-${index}`;
                return React.createElement("source", { key: key, ...source });
            }),
            image));
    }
    if (ratio) {
        image = (React.createElement(AspectBox, { ratio: typeof ratio !== 'boolean' ? ratio : undefined }, image));
    }
    if (!caption) {
        return image;
    }
    return (React.createElement("figure", null,
        image,
        React.createElement("figcaption", null, htmlToReact(caption))));
};
