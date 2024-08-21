'use client';

import React from 'react';
import classNames from '../../lib/classNames';
import { WrapperTag } from '../WrapperTag';

import type * as Types from './Tag.type';

/**
 * @param {Types.Tag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Tag:React.FC<Types.Tag> = function Tag({
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
