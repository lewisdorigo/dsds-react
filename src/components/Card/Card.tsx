import React from 'react';

import WrapperTag from '../WrapperTag';
import CategoryItem from '../CategoryItem';
import Image from '../Image';

import classNames from '../../lib/classNames';

import type { Card } from './Card.type';
import { AspectRatio } from '../AspectBox/AspectBox.type';

/**
 * @param {Card} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Card:React.FC<Omit<Card, 'type'>> = function Card({
    tag = 'div',
    id,
    label,
    content,
    children,
    className,
    headingLevel = 2,
    link,
    image,
    attributes = {},
}) {
    return (
        <WrapperTag
            tag={tag}
            id={id}
            className={classNames(
                'ds_card',
                link ? 'ds_card--has-hover' : '',
                className,
            )}
            {...attributes}
        >
            { image && (
                <div className="ds_card__media">
                    <Image ratio={AspectRatio.TwentyOneByNine} alt="" {...image} />
                </div>
            )}
            <CategoryItem
                tag="article"
                headingLevel={headingLevel}
                label={label}
                link={link}
                content={content}
            >
                { children }
            </CategoryItem>
        </WrapperTag>
    );
};

export default Card;
