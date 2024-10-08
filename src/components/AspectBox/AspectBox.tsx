import React, { isValidElement } from 'react';

import { WrapperTag } from '../WrapperTag';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './AspectBox.type';

/**
 * @param {Types.AspectBox} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const AspectBox:React.FC<Omit<Types.AspectBox, 'type'>> = function AspectBox({
    tag = 'div',
    ratio,
    children,
    content,
    attributes = {},
}) {
    const addClass = (item:React.ReactNode) => (
        item && typeof item === 'object' && isValidElement(item)
            ? React.cloneElement(item as React.ReactElement, {
                className: classNames(
                    'ds_aspect-box__inner',
                    item.props.className ? item.props.className : null,
                ),
            })
            : item
    );

    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'ds_aspect-box',
                ratio ? `ds_aspect-box--${ratio}` : '',
            )}
            {...attributes}
        >
            { content && React.Children.map<React.ReactNode, React.ReactNode>(
                htmlToReact(content),
                addClass,
            )}

            { React.Children.map<React.ReactNode, React.ReactNode>(
                children,
                addClass,
            )}
        </WrapperTag>
    );
};
