'use client';
import React from 'react';
import classNames from '../../lib/classNames';
import { WrapperTag } from '../WrapperTag';
/**
 * @param {Types.Tag} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Tag = function Tag({ className, children, ...props }) {
    return (React.createElement(WrapperTag, { className: classNames('ds_tag', className), ...props }, children));
};
