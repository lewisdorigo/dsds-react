import React from 'react';
import { WrapperTag } from '../WrapperTag';
import { CategoryItem } from '../CategoryItem';
import { Image } from '../Image';
import classNames from '../../lib/classNames';
import { AspectRatio } from '../AspectBox/AspectBox.type';
/**
 * @param {Types.Card} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Card = function Card({ tag = 'div', id, label, content, children, className, headingLevel = 2, link, image, attributes = {}, }) {
    return (React.createElement(WrapperTag, { tag: tag, id: id, className: classNames('ds_card', link ? 'ds_card--has-hover' : '', className), ...attributes },
        image && (React.createElement("div", { className: "ds_card__media" },
            React.createElement(Image, { ratio: AspectRatio.TwentyOneByNine, alt: "", ...image }))),
        React.createElement(CategoryItem, { tag: "article", headingLevel: headingLevel, label: label, link: link, content: content }, children)));
};
