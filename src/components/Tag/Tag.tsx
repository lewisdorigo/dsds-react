'use client';

import React from 'react';
import classNames from '../../lib/classNames';
import WrapperTag from '../WrapperTag';

import type { Tag } from './Tag.type';

/**
 * @param {Tag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Tag:React.FC<Tag> = function Tag({
    className,
    children,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_tag',
                className,
            )}
            {...props}
        >
            { children }
        </WrapperTag>
    );
};

export default Tag;
